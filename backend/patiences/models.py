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
    patience_disease = models.CharField(max_length=60, default="")
    patience_address = models.CharField(max_length=60)
    patience_phone = models.CharField(max_length=60)
    patience_email = models.EmailField()
    patience_insurance = models.CharField(max_length=60, default="")
    opt = models.CharField(max_length=60, default=generate_opt())


    def __str__(self):
        return self.patience_name

    @classmethod
    def create(cls, request):
        patience = cls(
            patience_name = request["patience_name"],
            patience_gender = request["patience_gender"],
            patience_weight = request["patience_weight"],
            patience_height = request["patience_height"],
            patience_age = request["patience_age"],
            patience_disease = request["patience_disease"],
            patience_address = request["patience_address"],
            patience_phone = request["patience_phone"],
            patience_email = request["patience_email"],
            patience_insurance = request["patience_insurance"]
        )
        patience.save()
        return patience
    