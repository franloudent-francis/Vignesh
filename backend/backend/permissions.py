
from rest_framework import permissions

class IsAuthenticated(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated

class IsStaffAccess(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_staff

class IsSaleAcess(permissions.BasePermission):
    def has_permission(self, request, view):
        
        return request.user.groups.filter(name='Sales').exists()