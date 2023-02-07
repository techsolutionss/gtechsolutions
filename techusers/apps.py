from django.apps import AppConfig


class TechusersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'techusers'

    def ready(self):
        import techusers.signals
