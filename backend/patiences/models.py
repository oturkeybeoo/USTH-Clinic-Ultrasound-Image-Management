from django.db import models

# Create your models here.
class Patience(models.Model):
    id = models.AutoField(primary_key=True)
    patience_name = models.CharField()
    patience_gender = models.CharField()
    patience_age = models.CharField()
    patience_address = models.CharField()
    patience_phone = models.CharField()
    patience_email = models.EmailField()
    opt = models.CharField()

    def __str__(self):
        return self.patience_name
    