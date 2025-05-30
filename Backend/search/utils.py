from rest_framework.views import exception_handler
from rest_framework.response import Response
from rest_framework import status

def custom_exception_handler(exc,context):
    response = exception_handler(exc,context) #    to get the default response from the DRF exception handler.

    #now add the http status code to the response
    if response is not None:
        response.data['status_code'] = response.status_code

    else:
        #if it's an unhandled exception,return a generic error message
        response = Response(
            {
                'status_code': status.HTTP_500_INTERNAL_SERVER_ERROR,
                'detail': 'An error occurred, please try again later.'
            },
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    return response