# Generated by Django 4.2.2 on 2023-07-07 19:22

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("user_profile", "0004_alter_tasks_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="tasks",
            name="image",
            field=models.ImageField(null=True, upload_to="images"),
        ),
    ]
