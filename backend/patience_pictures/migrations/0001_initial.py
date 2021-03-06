# Generated by Django 3.2.2 on 2021-10-29 16:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('doctors', '0001_initial'),
        ('patiences', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='PatiencePicture',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('picture_link', models.CharField(default='', max_length=120)),
                ('picture_title', models.CharField(max_length=60)),
                ('picture_description', models.CharField(max_length=120)),
                ('taken_date', models.DateTimeField(auto_now_add=True)),
                ('doctor_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='doctors.doctor')),
                ('patience_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='patiences.patience')),
            ],
        ),
    ]
