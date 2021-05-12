from rest_framework import serializers
from .models import *

class ProductSerializer(serializers.ModelSerializer) :
	class Meta:
		model = Products
		fields = {
			'id',
			'name',
			'description',
			'photo'
    }