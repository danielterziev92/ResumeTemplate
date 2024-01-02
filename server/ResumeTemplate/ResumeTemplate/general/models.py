from django.db import models


class BannerText(models.Model):
    text = models.TextField(
        null=False,
        blank=False
    )


class Skill(models.Model):
    NAME_MAX_LENGTH = 50

    name = models.CharField(
        max_length=NAME_MAX_LENGTH,
        null=False,
        blank=False,
    )
