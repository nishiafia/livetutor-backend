from rest_framework_extensions.routers import ExtendedSimpleRouter

from .views.assignment_views import (AssignmentCommentViewset,
                                     AssignmentFileViewSet,
                                     AssignmentSubmissionViewset,
                                     AssignmentViewset)
from .views.exam_views import (ExamCommentViewset, ExamSubmissionViewset,
                               ExamViewset)
from .views.link_views import LinkViewSet
from .views.note_views import NoteCommentViewset, NoteFileViewSet, NoteViewset

router = ExtendedSimpleRouter()
assignment_routes = router.register(
    'assignments', AssignmentViewset, basename='assignment')
assignment_routes.register('submissions', AssignmentSubmissionViewset,
                           basename='assignment-submission', parents_query_lookups=['assignment_id'])
assignment_routes.register('comments', AssignmentCommentViewset,
                           basename='assignment-comment', parents_query_lookups=['assignment_id'])
assignment_routes.register('files', AssignmentFileViewSet,
                           basename='assignment-files', parents_query_lookups=['assignment_id'])

exam_routes = router.register(
    'exams', ExamViewset, basename='exams')
exam_routes.register('submissions', ExamSubmissionViewset,
                     basename='exam-submission', parents_query_lookups=['exam_id'])
exam_routes.register('comments', ExamCommentViewset,
                     basename='assignment-comment', parents_query_lookups=['exam_id'])

note_routes = router.register('notes', NoteViewset, basename='notes')
note_routes.register('comments', NoteCommentViewset,
                     basename='note-comment', parents_query_lookups=['note_id'])
note_routes.register('files', NoteFileViewSet, basename='note_files',parents_query_lookups=['note_id'])

router.register('notes', NoteViewset, basename='notes')
router.register('links', LinkViewSet, basename='links')
urlpatterns = router.urls
