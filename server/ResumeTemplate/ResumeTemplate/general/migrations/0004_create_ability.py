# Generated by Django 5.0 on 2024-01-02 19:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('general', '0003_create_skill'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ability',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('skills', models.ManyToManyField(related_name='ability_skills', to='general.skill')),
            ],
        ),
    ]
