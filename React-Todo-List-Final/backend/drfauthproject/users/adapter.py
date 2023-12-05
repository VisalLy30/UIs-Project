from allauth.account.adapter import DefaultAccountAdapter
from django.conf import settings
import re

class Adapter(DefaultAccountAdapter):
    
    def send_mail(self,template_prefix, email, context):
        if context.get('password_reset_url') is None:
            context['activate_url'] = settings.URL_FRONT + \
                'verify-email/' + context['key']
        if context.get('password_reset_url') is not None:
            reset_url = context['password_reset_url']
            key=reset_url.split("password-reset-confirm",1)[1]
            context['password_reset_url']=settings.URL_FRONT+\
                'Setpassword'+key
            
        msg = self.render_mail(template_prefix, email, context)
        msg.send()