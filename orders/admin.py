from django.contrib import admin
from django.contrib import messages
from orders.models import Order
from django.utils.translation import ngettext




# Register your models here.
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    fields = ['firstname','lastname','order_title','phone_no','email','status','order_description','location']
    ordering = ['order_date']
    list_display = ('firstname','lastname','order_title','phone_no','email','status','order_date','order_reference','location')
    exclude = ['order_date']
    actions = ['make_successful','make_awaiting','make_progress','make_failed']

    # registering actions for the orders model    
    @admin.action(description='mark selected items as successful')
    def make_successful(self,request,queryset):
        updated = queryset.update(status = 'S')
        self.message_user(request, ngettext(
            '%d order was successfully marked as successful.',
            '%d orders were successfully marked as successful.',
            updated,
        ) % updated, messages.SUCCESS)
    
    # registering and awiting action for the model
    @admin.action(description='mark selected items as awaiting')
    def make_awaiting(self,request,queryset):
        updated = queryset.update(status = 'A')
        self.message_user(request, ngettext(
            '%d order was successfully marked as awaiting.',
            '%d orders were successfully marked as awaiting.',
            updated,
        ) % updated, messages.SUCCESS)
    
    # registering a progress action for the model
    @admin.action(description='mark selected items as progress')
    def make_progress(self,request,queryset):
        updated = queryset.update(status = 'P')
        self.message_user(request, ngettext(
            '%d order was successfully marked as progress.',
            '%d orders were successfully marked as progress.',
            updated,
        ) % updated, messages.SUCCESS)
    
    # registering a failed action for the model
    @admin.action(description='mark selected items as failed')
    def make_failed(self,request,queryset):
        updated = queryset.update(status = 'F')
        self.message_user(request, ngettext(
            '%d order was successfully marked as falied.',
            '%d orders were successfully marked as failed.',
            updated,
        ) % updated, messages.SUCCESS)
