from django.contrib import admin
from django.utils.html import format_html

from ResumeTemplate.course.models import Course


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('get_picture', 'title', 'get_dates')
    list_display_links = ('get_picture', 'title',)

    def get_picture(self, obj):
        return format_html(f'<img src="{obj.certificate_url.url}" width="100px" />')

    def get_dates(self, obj):
        return format_html(f'<span>{obj.start_date.strftime("%m-%Y")} / {obj.end_date.strftime("%m-%Y")}</span>')

    get_picture.short_description = 'Picture'
    get_dates.short_description = 'Dates'
