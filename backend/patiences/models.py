from django.db import models
from django.utils.crypto import get_random_string

def generate_opt():
    opt = get_random_string(length=60)

    return opt

# Create your models here.
class Patience(models.Model):
    id = models.AutoField(primary_key=True)
    patience_name = models.CharField(max_length=60)
    patience_gender = models.CharField(max_length=60, default="")
    patience_weight = models.CharField(max_length=60, default="")
    patience_height = models.CharField(max_length=60, default="")
    patience_age = models.IntegerField()
    patience_address = models.CharField(max_length=60)
    patience_phone = models.CharField(max_length=60)
    patience_email = models.EmailField()
    patience_insurance = models.CharField(max_length=60, default="")
    opt = models.CharField(max_length=60, default=generate_opt())


    def __str__(self):
        return self.patience_name
    