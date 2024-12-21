views.py
from django.shortcuts import render
from .models import Book, Order
from django.http import JsonResponse

# View to display all books
from django.shortcuts import redirect, render
from django.contrib.messages.views import SuccessMessageMixin
from django.urls import reverse_lazy
from django.views import generic
from bootstrap_modal_forms.mixins import PassRequestMixin
from .models import User, Book, Chat, DeleteRequest, Feedback
from django.contrib import messages
from django.db.models import Sum
from django.views.generic import CreateView, DetailView, DeleteView, UpdateView, ListView
from .forms import ChatForm, BookForm, UserForm
from . import models
import operator
import itertools
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.contrib.auth import authenticate, logout
from django.contrib import auth, messages
from django.contrib.auth.hashers import make_password
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.utils import timezone




# Shared Views
def login_form(request):
	return render(request, 'bookstore/login.html')


def logoutView(request):
	logout(request)
	return redirect('home')


def loginView(request):
	if request.method == 'POST':
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate(request, username=username, password=password)
		if user is not None and user.is_active:
			auth.login(request, user)
			if user.is_admin or user.is_superuser:
				return redirect('dashboard')
			elif user.is_librarian:
				return redirect('librarian')
			else:
			    return redirect('publisher')
		else:
		    messages.info(request, "Invalid username or password")
		    return redirect('home')


def register_form(request):
	return render(request, 'bookstore/register.html')


def registerView(request):
	if request.method == 'POST':
		username = request.POST['username']
		email = request.POST['email']
		password = request.POST['password']
		password = make_password(password)

		a = User(username=username, email=email, password=password)
		a.save()
		messages.success(request, 'Account was created successfully')
		return redirect('home')
	else:
	    messages.error(request, 'Registration fail, try again later')
	    return redirect('regform')

