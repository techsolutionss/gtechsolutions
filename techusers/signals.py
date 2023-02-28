from django.conf import settings
from django.contrib.auth.models import User
from django.db.models.signals import post_delete
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

@receiver(post_delete, sender=User)
def delete_auth_token(sender, instance, *args, **kwargs):
    try:
        token = Token.objects.get(user=instance).delete()
    except Token.DoesNotExist:
        pass
    except:
        pass

    