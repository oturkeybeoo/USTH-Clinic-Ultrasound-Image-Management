from django.db import models

# Create your models here.
class Patience(models.Model):
    id = models.AutoField(primary_key=True)
    patience_name = models.CharField(max_length=60)
    patience_gender = models.CharField(max_length=60)
    patience_age = models.IntegerField()
    patience_address = models.CharField(max_length=60)
    patience_phone = models.CharField(max_length=60)
    patience_email = models.EmailField()
    opt = models.CharField(max_length=120)

    def __str__(self):
        return self.patience_name
    