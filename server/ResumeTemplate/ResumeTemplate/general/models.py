from django.db import models


class BannerText(models.Model):
    text = models.TextField(
        null=False,
        blank=False
    )
