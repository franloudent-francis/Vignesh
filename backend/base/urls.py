from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LoanViewSet,RepaymentViewSet,ProfileViewSet

router = DefaultRouter()
router.register(r'loans', LoanViewSet,basename='loan')
router.register(r'profile', ProfileViewSet,basename='profile')

urlpatterns = [
    path('', include(router.urls)),
    path('loans/profile/<int:profile_id>/', LoanViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('loans/<int:loan_id>/repayments/', RepaymentViewSet.as_view({'get': 'list', 'patch': 'update'})),
    path('loans/<int:loan_id>/repayments/<int:pk>/', RepaymentViewSet.as_view({ 'get': 'retrieve','patch': 'update'})),
]
