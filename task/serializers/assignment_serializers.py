from rest_framework import serializers
from task.mixins import TaskFileUploadMixin
from task.models import *
from users.serializers import UserSerializer


class AssignmentCommentSerializer(serializers.ModelSerializer):
    user_name = serializers.ReadOnlyField(source='user.name')

    class Meta:
        model = AssignmentComment
        fields = '__all__'


class AssignmentSubmissionFileSerializer(serializers.ModelSerializer):

    class Meta:
        model = AssignmentSubmissionFile
        fields = ['file']


class AssignmentSubmissionSerializer(serializers.ModelSerializer):
    assignment_submission_files = AssignmentSubmissionFileSerializer(
        many=True)
    mark = serializers.DecimalField(
        max_digits=5, decimal_places=2, required=False, source='submission.mark')

    class Meta:
        model = AssignmentSubmission
        fields = '__all__'

    def create(self, validated_data):
        assignment_submission_files = validated_data.pop(
            'assignment_submission_files')
        assignment_submission = AssignmentSubmission.objects.create(
            **validated_data)
        AssignmentSubmissionFile.objects.bulk_create([AssignmentSubmissionFile(
            file=assignment_submission_file['file'], assignment_submission=assignment_submission) for assignment_submission_file in assignment_submission_files])
        return assignment_submission

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['room_user'] = UserSerializer(instance.room_user.user).data
        return data


class AssignmentSubmissionMarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = AssignmentSubmissionMark
        fields = ['mark']


class AssignmentFilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = AssignmentFile
        fields = ['file']


class AssignmentSerializer(TaskFileUploadMixin):
    files = AssignmentFilesSerializer(many=True, required=False)
    comments = AssignmentCommentSerializer(many=True, required=False)
    # assignment_submissions = AssignmentSubmissionSerializer(
    #     many=True, required=False)

    class Meta:
        model = Assignment
        fields = '__all__'

    # def create(self, validated_data):
    #     return super().create(validated_data)
        # print(self)
        # assignment_files = validated_data.pop('assignment_files')
        # assignment = Assignment.objects.create(**validated_data)
        # for assignment_file in assignment_files:
        #     AssignmentFile.objects.create(
        #         assignment=assignment, **assignment_file)
        # return assignment
