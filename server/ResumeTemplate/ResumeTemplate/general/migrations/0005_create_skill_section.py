# Generated by Django 5.0 on 2024-01-02 19:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('general', '0004_create_ability'),
    ]

    operations = [
        migrations.CreateModel(
            name='SkillSection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('section_name', models.CharField(max_length=50)),
                ('ability', models.ManyToManyField(related_name='skill_section_abilities', to='general.ability')),
            ],
        ),
    ]