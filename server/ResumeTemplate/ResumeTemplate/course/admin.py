from django.contrib import admin

from ResumeTemplate.course.models import Course


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    pass
