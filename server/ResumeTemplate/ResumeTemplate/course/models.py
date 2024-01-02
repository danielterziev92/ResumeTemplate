from django.db import models

from cloudinary import models as cloudinary_models


class Course(models.Model):
    TITLE_MAX_LENGTH = 30

    title = models.CharField(
        max_length=TITLE_MAX_LENGTH,
        null=False,
        blank=False,
    )

    start_date = models.DateField(
        null=False,
        blank=False,
    )

    end_date = models.DateField(
        null=False,
        blank=False,
    )

    short_description = models.TextField(
        null=False,
        blank=False,
    )

    certificate_url = cloudinary_models.CloudinaryField(
        null=False,
        blank=False,
    )

    def __str__(self):
        return self.title
