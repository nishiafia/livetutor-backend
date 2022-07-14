from django.db import models
from room.models import RoomUser
from users.models import MetaFields, User

# Create your models here.


class Task(MetaFields):

    room = models.ForeignKey('room.Room', on_delete=models.PROTECT)
    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)

    class Meta:
        abstract = True


class Assignment(Task):
    mark = models.DecimalField(default=0, max_digits=5, decimal_places=2)
    submission_date_time = models.DateTimeField(null=True, blank=True)


class Exam(Task):
    mark = models.DecimalField(default=0, max_digits=5, decimal_places=2)
    start_date_time = models.DateTimeField()
    end_date_time = models.DateTimeField()


class Note(Task):
    pass

# TODO: directory save for user


class Link(Task):
    url = models.URLField()


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'user_{0}/{1}'.format('usr', filename)


# def TaskFiles(Task):
class TaskFile(MetaFields):
    # task = models.ForeignKey(
    #     Task, on_delete=models.CASCADE, verbose_name=Task._meta.model_name)
    file = models.FileField(upload_to=user_directory_path)

    class Meta:
        abstract = True
 #   return AbstractTaskFiles


class AssignmentFile(TaskFile):
    assignment = models.ForeignKey(
        Assignment, on_delete=models.CASCADE, related_name='files')


class ExamFile(TaskFile):
    exam = models.ForeignKey(
        Exam, on_delete=models.CASCADE, related_name='files')


class NoteFile(TaskFile):

    note = models.ForeignKey(
        Note, on_delete=models.CASCADE, related_name='files')

# TODO: REMOVE NONE AS DEFAULT


class TaskSubmission(MetaFields):
    room_user = models.ForeignKey(
        RoomUser, on_delete=models.CASCADE)

    class Meta:
        abstract = True


class AssignmentSubmission(TaskSubmission):
    assignment = models.ForeignKey(
        Assignment, on_delete=models.CASCADE, related_name='assignment_submissions')

    class Meta:
        unique_together = ('room_user', 'assignment')


class ExamSubmission(TaskSubmission):
    exam = models.ForeignKey(
        Exam, on_delete=models.CASCADE, related_name='exam_submissions')

    class Meta:
        unique_together = ('room_user', 'exam')


class TaskSubmissionFile(MetaFields):
    file = models.FileField(upload_to='task_submission_files')

    class Meta:
        abstract = True


class AssignmentSubmissionFile(TaskSubmissionFile):
    assignment_submission = models.ForeignKey(
        AssignmentSubmission, on_delete=models.CASCADE, related_name='assignment_submission_files')


class ExamSubmissionFile(TaskSubmissionFile):
    exam_submission = models.ForeignKey(
        ExamSubmission, on_delete=models.CASCADE, related_name='exam_submission_files')

# TODO: REMOVE NONE AS DEFAULT


class TaskComment(MetaFields):
    '''
        comment made by user on tasks
        this is abstract 
    '''
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, default=None)
    text = models.TextField()

    class Meta:
        abstract = True


class AssignmentComment(TaskComment):
    assignment = models.ForeignKey(
        Assignment, on_delete=models.CASCADE, related_name='comments')


class ExamComment(TaskComment):
    exam = models.ForeignKey(
        Exam, on_delete=models.CASCADE, related_name='comments')


class NoteComment(TaskComment):
    note = models.ForeignKey(
        Note, on_delete=models.CASCADE, related_name='comments')


class AssignmentSubmissionMark(MetaFields):
    assignment_submission = models.OneToOneField(
        AssignmentSubmission, on_delete=models.CASCADE)
    mark = models.DecimalField(max_digits=5, decimal_places=2)


class ExamSubmissionMark(MetaFields):
    exam_submission = models.OneToOneField(
        ExamSubmission, on_delete=models.CASCADE)
    mark = models.DecimalField(max_digits=5, decimal_places=2)
