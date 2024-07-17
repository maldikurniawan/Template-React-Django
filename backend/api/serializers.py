from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import *

User = get_user_model()
class NameUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name']