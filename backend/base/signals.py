from django.db.models.signals import post_save
from django.dispatch import receiver
from datetime import timedelta
from .models import LoanDetails, Repayments


def round_by_10(value):
    return round(value / 10) * 10

@receiver(post_save, sender=LoanDetails)
def generate_repayment_schedule(sender, instance, created, **kwargs):
    if created :  # Only run when a new loan is created
        months = instance.duration
        principle_per_month = round_by_10(instance.loan_principle / months)
        interest_per_month = round_by_10(instance.interest_amount / months)
        emi = instance.emi

        for month in range(1, months + 1):
            due_date = instance.loan_date + timedelta(days=30 * month) 
            installment_months = month 
            principle = principle_per_month
            interest = interest_per_month
            emi = emi
            installment_date = due_date

            Repayments.objects.create(
                loan=instance,
                installment_months=installment_months,
                principle=principle,
                interest=interest,
                emi=emi,
                installment_date=installment_date
            )
            
            
