# Generated by Django 5.1.1 on 2024-10-13 03:05
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddIndex(
            model_name='search',
            index=models.Index(fields=['preferred_humidity'], name='api_search_preferr_7f53d7_idx'),
        ),
    ]
