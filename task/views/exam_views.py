from django.shortcuts import render
from livetutor.permissions import RoomAdminPermission
from rest_framework import decorators, parsers, response, status
from rest_framework.viewsets import ModelViewSet
from rest_framework_extensions.mixins import NestedViewSetMixin
from task.models import *
from task.serializers.exam_serializers import *

# class AssignmentSubmissionViewset(NestedViewSetMixin, ModelViewSet):
#     queryset =
#     serializer_class =


class ExamViewset(NestedViewSetMixin, ModelViewSet):
    parser_classes = (parsers.MultiPartParser,
                      parsers.FormParser, parsers.JSONParser)
    # permission_classes = [RoomAdminPermission]
    queryset = Exam.objects.all()
    serializer_class = ExamSerializer

    def create(self, request, *args, **kwargs):
        exam_files = [{'file': file}
                      for file in request.data.getlist('attachments[]')]
        data = {
            'name': request.data.get('name'),
            'description': request.data.get('description'),
            'room': request.data.get('room'),
            'files': exam_files,
            'start_date_time': request.data.get('start_date_time'),
            'end_date_time': request.data.get('end_date_time'),
            'mark': request.data.get('mark'),
        }
        serializer = self.get_serializer(
            data=data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ExamCommentViewset(NestedViewSetMixin, ModelViewSet):
    serializer_class = ExamCommentSerializer
    queryset = ExamComment.objects.all()

    def create(self, request, *args, **kwargs):
        data = {
            'exam': request.data.get('exam'),
            'text': request.data.get('text'),
            'user': request.user.id
        }
        serializer = self.get_serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ExamSubmissionViewset(NestedViewSetMixin, ModelViewSet):
    parser_classes = (parsers.MultiPartParser,
                      parsers.FormParser, parsers.JSONParser)
    queryset = ExamSubmission.objects.all()
    serializer_class = ExamSubmissionSerializer

    def create(self, request, *args, **kwargs):
        files = [{'file': file}
                 for file in request.data.pop('exam_submission_files[]')]
        data = {
            'exam': request.data.get('exam_id'),
            'exam_submission_files': files,
            'room_user': RoomUser.objects.get(user=request.user, room__exam=request.data.get('exam_id')).id,
        }
        serializer = ExamSubmissionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @decorators.action(detail=False, methods=['put'], url_name='update_assignment_mark', url_path='update-mark', )
    def update_mark(self, request, **kwargs):
        exam_submission, created = ExamSubmissionMark.objects.get_or_create(
            exam_submission__id=request.data.get(
                'exam_submission_id'),
        )
        exam_submission.mark = request.data.get('mark')
        exam_submission.save()
        return response.Response(status=status.HTTP_200_OK)
