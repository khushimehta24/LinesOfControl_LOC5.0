# Generated by Django 4.1.7 on 2023-03-11 13:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('engagement', '0003_delete_notification'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='follow',
            name='accepted',
        ),
        migrations.RemoveField(
            model_name='follow',
            name='pending',
        ),
    ]
