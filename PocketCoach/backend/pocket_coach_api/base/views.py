from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.mail import send_mail, BadHeaderError
from django.contrib import messages
from django.conf import settings
from django.template import loader

class NotifyView(APIView):
    def get(self, request, format=None):
        subject = "PocketCoach: Gabi requests feedback"
        coach_email = "yilingtung93@gmail.com"

        try:
            student_name = "Gabi"

            html_message = loader.render_to_string(
                "base/emailNotification.html",
                {
                    'student_name': student_name,
                    'link': "http://pocketcoach.live/coach/1/sessions/3",
                }
            )


            send_mail(subject, "", settings.EMAIL_HOST_USER, [coach_email], html_message = html_message)
            messages.success(request, 'Thank you for your message. We will get back to you shortly.')
            return Response("cool")
        except BadHeaderError:
            messages.warning(request, 'Invalid header.')
        except:
            messages.warning(request, 'Error sending mail.')
        return Response("bad")