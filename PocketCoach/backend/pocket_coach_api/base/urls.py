from django.urls import path

from . import views
from .views import NotifyView

urlpatterns = [
    path('notify/', NotifyView.as_view(), name="notify"),
]