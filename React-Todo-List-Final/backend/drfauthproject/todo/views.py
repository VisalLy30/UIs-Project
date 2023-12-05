from .models import Todolist
from todo.serializers import TodoListSerializer
from rest_framework import generics


class TodoList(generics.ListCreateAPIView):
    queryset = Todolist.objects.all()
    serializer_class = TodoListSerializer


class TodoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todolist.objects.all()
    serializer_class = TodoListSerializer