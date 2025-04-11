from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer
from rest_framework.views import APIView
from rest_framework.permissions import  AllowAny,IsAdminUser,IsAuthenticated,IsAuthenticatedOrReadOnly
from rest_framework import viewsets,status,mixins,filters
from .models import LoanDetails,Repayments,Profile
from .serializers import LoanDetailsSerilizer,RepaymentsSerilizer,ProfileSerilizer
from django.shortcuts import get_object_or_404
from backend.permissions import IsStaffAccess,IsSaleAcess
from rest_framework.decorators import api_view,permission_classes
# Create your views here.


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class TestView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        return Response({"message": "Hello, World!"})
    

class LoanViewSet(viewsets.ModelViewSet):
    serializer_class = LoanDetailsSerilizer
    pagination_class = None
    permission_classes = [AllowAny]
    

    def get_queryset(self):
        profile_id = self.kwargs.get('profile_id')  # Get profile_id from URL
        if profile_id:
            return LoanDetails.objects.filter(profile=profile_id)  # Filter by profile_id
        return LoanDetails.objects.all()
    
    def create(self, request, profile_id=None):  # Custom create method to use profile_id
        request.data['profile'] = profile_id  # Set profile_id from URL
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class RepaymentViewSet(mixins.ListModelMixin,mixins.RetrieveModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):  
    serializer_class = RepaymentsSerilizer

    def get_queryset(self):
        loan_id = self.kwargs.get("loan_id")
        loan = get_object_or_404(LoanDetails, id=loan_id)
        return loan.repayments.all()
    
    def get_object(self):
        """Retrieve a specific repayment record based on loan_id & repayment_id"""
        
        loan_id = self.kwargs.get("loan_id")
        repayment_id = self.kwargs.get("pk")
        loan = get_object_or_404(LoanDetails, id=loan_id)
        print(get_object_or_404(Repayments, loan=loan, id=repayment_id))
        return get_object_or_404(Repayments, loan=loan, id=repayment_id)


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerilizer
    permission_classes = [IsAuthenticated]
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'phone_number']


    
