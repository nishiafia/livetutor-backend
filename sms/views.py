from inspect import getmembers
import requests
import json
from django.shortcuts import render
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

SMS_SERVER_URL = "https://sms.novocom-bd.com/api/v2/"
API_KEY = "F+sz1LXLaB7LyOdiS4DoiCoSfkC+OrSdnPCgc3a5Odk="
CLIENT_ID = "ef0bdce1-4599-4607-be95-f67c7ce04b88"

class SmsViewSet(viewsets.ModelViewSet):
    @action(detail=False, methods=['post'])
    def send(self, request, pk=None):
        print(request.data.get('Message'));
        print(request.data.get('Room'));
        # url = SMS_SERVER_URL + "SendSMS"
        # payload = {
        #     "SenderId": "8809638011099",
        #     "Message": "Hello, final testing today! Thanks",
        #     "MobileNumbers": "8801894617885",
        #     "ApiKey": API_KEY,
        #     "ClientId": CLIENT_ID
        # }
        # headers = {
        #     'Content-Type': 'application/json'
        # }
        # resp = requests.post(url,data=json.dumps(payload), headers = headers)
        #return Response(resp.text, status=status.HTTP_200_OK)
