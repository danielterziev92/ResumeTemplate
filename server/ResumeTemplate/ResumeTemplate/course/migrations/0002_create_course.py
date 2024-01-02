# Generated by Django 5.0 on 2024-01-02 13:33

import cloudinary.models
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('course', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('short_description', models.TextField()),
                ('certificate_url', cloudinary.models.CloudinaryField(max_length=255)),
            ],
        ),
    ]