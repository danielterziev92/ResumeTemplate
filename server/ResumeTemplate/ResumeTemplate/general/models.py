from django.db import models


class BannerText(models.Model):
    text = models.TextField(
        null=False,
        blank=False
    )

    def __str__(self):
        return self.text


class Skill(models.Model):
    NAME_MAX_LENGTH = 50

    name = models.CharField(
        max_length=NAME_MAX_LENGTH,
        null=False,
        blank=False,
    )

    def __str__(self):
        return self.name


class Ability(models.Model):
    NAME_MAX_LENGTH = 50

    name = models.CharField(
        max_length=NAME_MAX_LENGTH,
        null=True,
        blank=True,
    )

    skills = models.ManyToManyField(
        Skill,
        related_name='ability_skills',
        null=False,
        blank=False,
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Abilities'


class SkillSection(models.Model):
    SECTION_TITLE_MAX_LENGTH = 50

    section_name = models.CharField(
        max_length=SECTION_TITLE_MAX_LENGTH,
        null=False,
        blank=False,
    )

    abilities = models.ManyToManyField(
        Ability,
        related_name='skill_section_abilities',
    )

    def __str__(self):
        return self.section_name
