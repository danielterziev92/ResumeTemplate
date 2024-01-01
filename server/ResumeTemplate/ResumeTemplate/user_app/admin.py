from django.contrib import admin
from django.contrib.auth import admin as auth_admin, get_user_model
from django.forms import inlineformset_factory
from django.utils.translation import gettext_lazy as _

from ResumeTemplate.user_app.models import UserProfile

UserModel = get_user_model()

UserProfileFormSet = inlineformset_factory(
    UserModel, UserProfile,
    fields=('first_name', 'last_name', 'phone_number')
)


class UserProfileInline(admin.StackedInline):
    model = UserProfile
    formset = UserProfileFormSet
    extra = 1

    fieldsets = (
        (
            _('Personal info'),
            {
                'fields': ('first_name', 'last_name', 'phone_number')
            }
        ),
    )


@admin.register(UserModel)
class UserAppAdmin(auth_admin.UserAdmin):
    inlines = (UserProfileInline,)
    change_user_password_template = None
    fieldsets = (
        (None, {'fields': ('email',)}),
        (
            _('Permissions'),
            {
                'fields': (
                    'is_active',
                    'is_staff',
                    'is_superuser',
                    'groups',
                    'user_permissions',
                ),
            },
        ),
        (_('Important dates'), {'fields': ('last_login',)}),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ('wide',),
                "fields": ('email', 'password1', 'password2'),
            },
        ),
    )
    list_display = ('email', 'get_full_name', 'get_phone_number', 'is_staff', 'last_login')
    list_filter = ('is_staff', 'is_superuser',)
    search_fields = ('email',)
    ordering = ('email',)

    def get_full_name(self, obj):
        user = obj.userprofile
        return user.get_full_name if user else None

    def get_phone_number(self, obj):
        user = obj.userprofile
        return user.get_phone_number if user else None

    get_full_name.short_description = 'Full name'
    get_phone_number.short_description = 'Phone number'


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    pass
