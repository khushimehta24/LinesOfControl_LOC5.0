# Generated by Django 4.1.7 on 2023-03-11 20:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='groupevent',
            name='img',
            field=models.URLField(default='null'),
            preserve_default=False,
        ),
    ]
