from django.db import models
from doctors.models import Doctor
from patiences.models import Patience
from cloudinary.models import CloudinaryField


# Create your models here.
class PatiencePicture(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    picture_link = CloudinaryField('image')
    picture_title = models.CharField(max_length=60)
    picture_description = models.CharField(max_length=120)
    doctor_id = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    patience_id = models.ForeignKey(Patience, on_delete=models.CASCADE)
    taken_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.picture_title)  

    @classmethod
    def create(cls, request):
        image = cls(
            picture_title = request["picture_title"],
            picture_description = request["picture_description"],
            patience_id = request["patience_id"],
            doctor_id = request["doctor_id"]
        )
        image.save()
        return image