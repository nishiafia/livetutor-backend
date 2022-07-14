from django.contrib import admin

from task.models import *

admin.site.register(Assignment)
admin.site.register(AssignmentFile)
admin.site.register(AssignmentSubmission)
admin.site.register(AssignmentSubmissionFile)
admin.site.register(Exam)
admin.site.register(ExamFile)
admin.site.register(ExamSubmission)
admin.site.register(ExamSubmissionFile)
admin.site.register(Note)
admin.site.register(NoteFile)
admin.site.register(AssignmentComment)
admin.site.register(ExamSubmissionMark)
admin.site.register(AssignmentSubmissionMark)
