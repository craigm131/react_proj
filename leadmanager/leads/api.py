from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer


# Lead Viewset
class LeadViewSet(viewsets.ModelViewSet):
    #overwrite the getQuery method so that only the user's leads are returned
    permission_classes = [
        #permissions.AllowAny
        permissions.IsAuthenticated
    ]
    serializer_class = LeadSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    #save the lead owner when creating the lead
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
