# Generated by Django 3.2.2 on 2021-10-29 18:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patiences', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patience',
            name='opt',
            field=models.CharField(default='5GbGjYPrf1Ox5nElQ9yMcOfeSuSzMaRCWZpwcBhjw8GLJvoyCquoxkfRYhhO', max_length=60),
        ),
    ]