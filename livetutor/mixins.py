import io

import pandas as pd
from django.http import HttpResponse
from rest_framework import decorators


class ExportMixin:
    def __init__(self, url_path='export', queryset=None) -> None:
        self.url_path = url_path
        self.custom_queryset = queryset
        print(self.custom_queryset)

    @decorators.action(detail=False, methods=['get'], url_path='export')
    def export_excel(self, request, *args, **kwargs):
        bytes_io = io.BytesIO()
        queryset = kwargs['queryset'] if 'queryset' in kwargs else self.get_queryset(
        )
        df = pd.DataFrame(data=queryset)
        df.index = df.index + 1
        writer = pd.ExcelWriter(bytes_io, engine='xlsxwriter')
        df.to_excel(writer, sheet_name='Sheet1')
        writer.save()
        filename = 'file.xlsx'
        response = HttpResponse(
            bytes_io.getvalue(),
            content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        )
        response['Content-Disposition'] = 'attachment; filename=%s' % filename
        return response
