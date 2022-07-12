from urllib import request

from django.db.models import Q
from django.shortcuts import render
from rest_framework import decorators, response, status, viewsets
from rest_framework_extensions.mixins import NestedViewSetMixin

from .serializers import MeetingSerializer

from.models import Meeting


class MeetingViewset(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer

    def get_queryset(self):
        return Meeting.objects.filter(
            (Q(room__author=self.request.user)) |
            # user is not trial in room
            (~Q(room__roomuser__role='trial') & Q(
                room__roomuser__user=self.request.user))
            # user is trial and has access to only selected meetings
            | (Q(room__roomuser__role='trial') & Q(
                trialmeeting__roomuser__user=self.request.user))

        )

    def create(self, request, *args, **kwargs):
        """_summary_

        Args:
            request ({room,start_date_time, end_date_time, description}[]): dictionary of arguments, room is room_id

        Returns:
            serializer : list of newly created meetings
        """
        serializer = self.get_serializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @decorators.action(detail=False, methods=['get'], url_path='get-meeting-list')
    def get_listed_teacher_meetings(self, request):
        """_summary_

        Args:
            request ():

        Returns:
            serializer : list of meetings
        """
        listed_teacher = request.GET.get('teacher')
        if listed_teacher:
            meetings = Meeting.objects.filter(
                room__author__id=listed_teacher
            )
            serializer = self.get_serializer(meetings, many=True)
            return response.Response(serializer.data)
