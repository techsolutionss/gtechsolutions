# Generated by Django 4.1.7 on 2023-03-02 22:16

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('techorders', '0002_comments_rename_oders_orders'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comments',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 2, 23, 16, 40, 198597)),
        ),
    ]
