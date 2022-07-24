from rest_framework import serializers
from task.mixins import TaskFileUploadMixin
from task.models import (Exam, ExamComment, ExamFile, ExamSubmission,
                         ExamSubmissionFile, ExamSubmissionMark)
from users.serializers import UserSerializer


class ExamCommentSerializer(serializers.ModelSerializer):
    user_name = serializers.ReadOnlyField(source='user.name')

    class Meta:
        model = ExamComment
        fields = '__all__'


class ExamSubmissionFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamSubmissionFile
        fields = ['file']


class ExamSubmissionSerializer(serializers.ModelSerializer):
    exam_submission_files = ExamSubmissionFileSerializer(
        many=True)
    mark = serializers.DecimalField(
        max_digits=5, decimal_places=2, required=False, source='submission.mark')

    class Meta:
        model = ExamSubmission
        fields = '__all__'

    def create(self, validated_data):
        exam_submission_files = validated_data.pop('exam_submission_files')

        exam_submission = ExamSubmission.objects.create(**validated_data)
        ExamSubmissionFile.objects.bulk_create([ExamSubmissionFile(
            file=assignment_submission_file['file'], exam_submission=exam_submission) for assignment_submission_file in exam_submission_files])
        return exam_submission

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['exam'] = ExamSerializer(instance.exam).data
        data['room_user'] = UserSerializer(instance.room_user.user).data
        return data


class ExamSubmissionMarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamSubmissionMark
        fields = ['mark']


class ExamFileSerializer(TaskFileUploadMixin):
    class Meta:
        model = ExamFile
        fields = ['file']


class ExamSerializer(TaskFileUploadMixin):
    files = ExamFileSerializer(many=True, required=False)
    comments = ExamCommentSerializer(many=True, required=False)

    class Meta:
        model = Exam
        fields = '__all__'
