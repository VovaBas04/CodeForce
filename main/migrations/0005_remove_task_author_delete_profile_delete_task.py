# Generated by Django 4.2.2 on 2023-07-04 11:53

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("main", "0004_alter_task_test_input_alter_task_test_output"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="task",
            name="author",
        ),
        migrations.DeleteModel(
            name="Profile",
        ),
        migrations.DeleteModel(
            name="Task",
        ),
    ]