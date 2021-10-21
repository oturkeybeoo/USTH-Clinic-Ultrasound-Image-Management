from django.db import models

# Create your models here.
class PatienceDisease(models.Model):
    id = models.AutoField(primary_key=True)
    disease_name = models.CharField()

    def __str__(self):
        return self.disease_name