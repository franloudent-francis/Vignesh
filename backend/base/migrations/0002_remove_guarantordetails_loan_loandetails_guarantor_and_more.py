# Generated by Django 5.1.7 on 2025-03-27 08:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='guarantordetails',
            name='loan',
        ),
        migrations.AddField(
            model_name='loandetails',
            name='guarantor',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='loan', to='base.guarantordetails'),
        ),
        migrations.AlterField(
            model_name='vehicledetails',
            name='RC_Book',
            field=models.BooleanField(default=False),
        ),
    ]
