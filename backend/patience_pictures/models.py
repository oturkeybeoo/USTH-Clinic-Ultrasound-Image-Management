from django.db import models
from patience_diseases.models import PatienceDisease
from doctors.models import Doctor
from patiences.models import Patience


# Create your models here.
class PatiencePicture(models.Model):
    id = models.AutoField(primary_key=True)
    picture_title = models.CharField()
    picture_description = models.CharField()
    disease_id = models.ForeignKey(PatienceDisease, on_delete=models.CASCADE)
    doctor_id = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    patience_id = models.ForeignKey(Patience, on_delete=models.CASCADE)
    taken_date = models.DateTimeField()

    def __str__(self):
        return str(self.picture_title + self.taken_date)  