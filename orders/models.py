from django.db import models
from orders.utils import generate_id


# Create your models here.
class Order(models.Model):

    ORDER_CHOICES =(
        ('web design','web design'),
        ('database administrator','database administrator'),
        ('web research','web researcher'),
        ('web maintenance','web maintenance'),
        ('social media graphics','social media graphics'),
        ('logos and branding','logos and branding'),
        ('content expert','content expert'),
        ('web hosting','web hosting'),
        ('web development','web development'),
    )

    STATUS_CHOICES = (('S',"successful"),
                       ('A','awaiting'),
                       ('P','progress'),
                       ('F','failed'), 
                    )
    

    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    order_reference = models.CharField(max_length=50,blank=True)
    order_title = models.CharField(max_length = 30,choices=ORDER_CHOICES)
    phone_no = models.CharField(max_length=11)
    email = models.EmailField()
    status = models.CharField(max_length=1,choices=STATUS_CHOICES, default='A')
    order_date = models.DateField(auto_now_add=True)
    order_description = models.TextField()
    location = models.CharField(max_length=50,default="Nigeria")
    
    def __str__(self):
        return self.firstname
    
    def save(self,*args,**kwargs):
        if not self.order_reference:
            self.order_reference = generate_id()
        super(Order,self).save(*args,**kwargs)
    class Meta:
        ordering = ["order_date"]