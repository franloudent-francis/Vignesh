# Generated by Django 5.1.7 on 2025-03-27 08:11

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='LoanDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('loan_date', models.DateField()),
                ('loan_principle', models.PositiveBigIntegerField(default=0)),
                ('interest_percentage', models.FloatField(default=0)),
                ('interest_amount', models.PositiveBigIntegerField(default=0)),
                ('emi', models.PositiveBigIntegerField(default=0)),
                ('duration', models.IntegerField(default=0)),
                ('bank_name', models.CharField(max_length=255, null=True)),
                ('cheque_number', models.CharField(max_length=25)),
                ('cheque_count', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, null=True)),
                ('address', models.CharField(max_length=750, null=True)),
                ('phone_number', models.IntegerField(default=0)),
                ('occupation', models.CharField(max_length=255, null=True)),
                ('aadhaar_number', models.IntegerField(default=0)),
                ('aadhaar_file', models.FileField(null=True, upload_to='profile/documents/')),
                ('pan_number', models.CharField(max_length=255, null=True)),
                ('pan_card_file', models.FileField(null=True, upload_to='profile/documents/')),
                ('photo', models.ImageField(null=True, upload_to='profile/documents/profile/')),
            ],
        ),
        migrations.CreateModel(
            name='VehicleDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vehicle_number', models.CharField(max_length=255, null=True)),
                ('vehicle_model', models.CharField(max_length=255, null=True)),
                ('vehicle_name', models.CharField(max_length=255, null=True)),
                ('vehicle_color', models.CharField(max_length=255, null=True)),
                ('chassis_number', models.CharField(max_length=255, null=True)),
                ('engine_number', models.CharField(max_length=255, null=True)),
                ('insurance_end_date', models.DateField()),
                ('insurance_policy_company', models.CharField(max_length=255, null=True)),
                ('TO_set', models.BooleanField(default=False)),
                ('RC_Book', models.CharField(max_length=255, null=True)),
                ('Hp_letter', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='GuarantorDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, null=True)),
                ('address', models.CharField(max_length=255, null=True)),
                ('occupation', models.CharField(max_length=255, null=True)),
                ('phone', models.IntegerField(default=0)),
                ('aadhaar_number', models.IntegerField(default=0)),
                ('photo', models.ImageField(null=True, upload_to='profile/documents/guaranto/')),
                ('loan', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='gurantor_details', to='base.loandetails')),
            ],
        ),
        migrations.CreateModel(
            name='Documents',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file_name', models.CharField(max_length=255, null=True)),
                ('file', models.FileField(blank=True, null=True, upload_to='loan/documents/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('loan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.loandetails')),
            ],
        ),
        migrations.AddField(
            model_name='loandetails',
            name='profile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='loan', to='base.profile'),
        ),
        migrations.CreateModel(
            name='Repayments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('installment_months', models.IntegerField(default=0)),
                ('principle', models.PositiveBigIntegerField(default=0)),
                ('interest', models.PositiveBigIntegerField(default=0)),
                ('emi', models.PositiveBigIntegerField(default=0)),
                ('installment_date', models.DateField()),
                ('repayment_date', models.DateField()),
                ('late_fee', models.PositiveBigIntegerField(default=0)),
                ('days_late', models.IntegerField(default=0)),
                ('total_late_fee', models.PositiveBigIntegerField(default=0)),
                ('ispaid', models.BooleanField(default=False)),
                ('loan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='repayments', to='base.loandetails')),
            ],
        ),
        migrations.AddField(
            model_name='loandetails',
            name='vehicle',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='loan', to='base.vehicledetails'),
        ),
    ]
