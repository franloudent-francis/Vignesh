from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Profile)
admin.site.register(LoanDetails)
admin.site.register(GuarantorDetails)
admin.site.register(VehicleDetails)
admin.site.register(Repayments)