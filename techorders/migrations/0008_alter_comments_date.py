# Generated by Django 4.1.7 on 2023-03-18 10:07

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("techorders", "0007_alter_comments_date"),
    ]

    operations = [
        migrations.AlterField(
            model_name="comments",
            name="date",
            field=models.DateTimeField(
                default=datetime.datetime(2023, 3, 18, 10, 7, 58, 220518)
            ),
        ),
    ]
