from django.db import models

class Profile(models.Model):
    name  = models.CharField(max_length=255, null=True)
    address = models.TextField(null=True)
    phone_number = models.IntegerField(default=0)
    occupation = models.CharField(max_length=255, null=True)
    aadhaar_number = models.IntegerField(default=0)
    aadhaar_file = models.FileField(upload_to='profile/documents/', null=True)
    pan_number = models.CharField(max_length=255, null=True)
    pan_card_file = models.FileField(upload_to='profile/documents/', null=True)
    photo = models.ImageField(upload_to='profile/documents/profile/', null=True)

    def __str__(self):
        return self.name
    
class VehicleDetails(models.Model):
    vehicle_number = models.CharField(max_length=255, null=True)
    vehicle_model = models.CharField(max_length=255, null=True)
    vehicle_name = models.CharField(max_length=255, null=True)
    vehicle_color = models.CharField(max_length=255, null=True)
    chassis_number = models.CharField(max_length=255, null=True)
    engine_number = models.CharField(max_length=255, null=True)
    insurance_end_date = models.DateField()
    insurance_policy_company = models.CharField(max_length=255, null=True)
    TO_set = models.BooleanField(default=False)
    RC_Book = models.BooleanField(default=False)
    Hp_letter = models.BooleanField(default=False)

    def __str__(self):
        return str(self.vehicle_number)
    

class GuarantorDetails(models.Model):
    name = models.CharField(max_length=255, null=True)
    address = models.CharField(max_length=255, null=True)
    occupation = models.CharField(max_length=255, null=True)
    phone = models.IntegerField(default=0)
    aadhaar_number = models.IntegerField(default=0)
    photo = models.ImageField(upload_to='profile/documents/guarantor/', null=True)

    def __str__(self):
        return self.name
    
class LoanDetails(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE,related_name='loan')
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    loan_date = models.DateField()
    loan_principle = models.PositiveBigIntegerField(default=0)
    interest_percentage = models.FloatField(default=0)
    interest_amount = models.PositiveBigIntegerField(default=0)
    emi = models.PositiveBigIntegerField(default=0)
    duration = models.IntegerField(default=0)
    active= models.BooleanField(default=True)

    bank_name = models.CharField(max_length=255, null=True)
    cheque_number = models.CharField(max_length=25)
    cheque_count = models.IntegerField(default=0)

    vehicle = models.OneToOneField(VehicleDetails, on_delete=models.CASCADE, related_name="loan")
    guarantor = models.OneToOneField(GuarantorDetails, on_delete=models.CASCADE, related_name="loan",null=True,blank=True)


    def __str__(self):
        return str(self.id)

class Repayments(models.Model):
    loan= models.ForeignKey(LoanDetails, on_delete=models.CASCADE,related_name='repayments')
    installment_months = models.IntegerField(default=0)
    principle = models.PositiveBigIntegerField(default=0)
    interest = models.PositiveBigIntegerField(default=0)
    emi = models.PositiveBigIntegerField(default=0)
    installment_date = models.DateField()
    repayment_date = models.DateField(null=True,blank=True)
    late_fee = models.PositiveBigIntegerField(default=0)
    days_late = models.IntegerField(default=0)
    total_late_fee = models.PositiveBigIntegerField(default=0)
    ispaid = models.BooleanField(default=False)

    def __str__(self):
        return str(self.id)




class Documents(models.Model):
    loan = models.ForeignKey(LoanDetails, on_delete=models.CASCADE)
    file_name = models.CharField(max_length=255, null=True)
    file = models.FileField(upload_to='loan/documents/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.id)