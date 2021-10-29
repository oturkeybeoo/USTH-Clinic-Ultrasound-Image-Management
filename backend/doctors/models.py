from django.db import models

# Create your models here.
class Doctor(models.Model):
    id = models.AutoField(primary_key=True)
    doctor_name = models.CharField(max_length=60)
    doctor_phone = models.CharField(max_length=12)
    doctor_email = models.EmailField()
    password = models.CharField(max_length=60, default="1")
    doctor_description = models.CharField(max_length=120)

    def __str__(self):
        return str("Doctor " + self.doctor_name)