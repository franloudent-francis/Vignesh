from rest_framework_simplejwt.serializers import TokenObtainPairSerializer,serializers
from .models import *
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom fields to the token payload
        token['username'] = user.username
        return token
    

class VehicleDetailsSerilizer(serializers.ModelSerializer):
    class Meta:
        model = VehicleDetails
        fields = '__all__'

class gunantorDetailsSerilizer(serializers.ModelSerializer):
    class Meta: 
        model = GuarantorDetails
        fields = '__all__'

class LoanDetailsSerilizer(serializers.ModelSerializer):
    vehicle = VehicleDetailsSerilizer()  
    guarantor = gunantorDetailsSerilizer()
    class Meta:
        model = LoanDetails
        fields = '__all__'

    def create(self, validated_data):
        vehicle_data = validated_data.pop('vehicle')
        guarantor_data = validated_data.pop('guarantor')
        vehicle, created = VehicleDetails.objects.get_or_create(**vehicle_data)
        guarantor,created = GuarantorDetails.objects.get_or_create(**guarantor_data)
        loan = LoanDetails.objects.create(vehicle=vehicle,guarantor=guarantor, **validated_data)
        return loan
    
    def update(self, instance, validated_data):
        vehicle_data = validated_data.pop('vehicle', None)
        guarantor_data = validated_data.pop('guarantor',None)

        # Update Vehicle
        if vehicle_data:
            for attr, value in vehicle_data.items():
                setattr(instance.vehicle, attr, value)
            instance.vehicle.save()
        
        # Update Guarantor
        if guarantor_data:
            for attr,value in guarantor_data.items():
                setattr(instance.guarantor,attr,value)
            instance.guarantor.save()
            

        # Update Loan
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        return instance
    

class RepaymentsSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Repayments
        fields = '__all__'

class ProfileSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'