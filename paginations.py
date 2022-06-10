from rest_framework import pagination, response


class LargeResultsSetPagination(pagination.PageNumberPagination):
    page_size = 1000
    page_size_query_param = 'page_size'
    max_page_size = 10000


class StandardResultsSetPagination(pagination.PageNumberPagination):
    page_size = 20

    def get_paginated_response(self, data):
        return response.Response({
            'start_index': self.page.start_index(),
            'end_index': self.page.end_index(),
            'page_size': self.page_size,
            'total_objects': self.page.paginator.count,
            'total_pages': self.page.paginator.num_pages,
            'current_page_number': self.page.number,
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'results': data,
        })
