# Generated by Django 4.0 on 2023-02-19 16:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('weight', models.CharField(blank=True, max_length=50, null=True)),
                ('heigth', models.CharField(blank=True, max_length=50, null=True)),
                ('radius', models.CharField(blank=True, max_length=50, null=True)),
                ('brand', models.CharField(blank=True, max_length=255, null=True)),
                ('model', models.CharField(blank=True, max_length=255, null=True)),
                ('season', models.CharField(blank=True, max_length=255, null=True)),
                ('spikes', models.CharField(blank=True, max_length=255, null=True)),
                ('article', models.CharField(max_length=255)),
                ('count', models.IntegerField()),
                ('price', models.IntegerField()),
                ('title', models.CharField(blank=True, max_length=255, null=True)),
                ('address', models.CharField(blank=True, max_length=255, null=True)),
                ('runflat', models.CharField(blank=True, max_length=20, null=True)),
            ],
            options={
                'ordering': ['pk'],
            },
        ),
    ]
