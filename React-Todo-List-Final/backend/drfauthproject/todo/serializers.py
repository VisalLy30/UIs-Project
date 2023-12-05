from rest_framework import serializers
from todo.models import Todolist

class TodoListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todolist
        fields = ['id', 'title', 'completed']