from django.db import models
from patience_diseases.models import PatienceDisease
from doctors.models import Doctor
from patiences.models import Patience


# Create your models here.
class PatiencePicture(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    picture_link = models.CharField(max_length=120, default="")
    picture_title = models.CharField(max_length=60)
    picture_description = models.CharField(max_length=120)
    disease_id = models.ForeignKey(PatienceDisease, on_delete=models.CASCADE)
    doctor_id = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    patience_id = models.ForeignKey(Patience, on_delete=models.CASCADE)
    taken_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.picture_title)  