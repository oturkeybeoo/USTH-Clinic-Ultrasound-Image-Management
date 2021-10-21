from django.db import models

# Create your models here.
class Doctor(models.Model):
    id = models.AutoField(primary_field=True)
    doctor_name = models.CharField()
    doctor_phone = models.CharField()
    doctor_email = models.EmailField()
    doctor_description = models.CharField()

    def __str__(self):
        return str("Doctor " + self.doctor_name)