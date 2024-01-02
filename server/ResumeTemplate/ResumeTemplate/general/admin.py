from django.contrib import admin

from ResumeTemplate.general.models import BannerText, Skill, Ability, SkillSection


@admin.register(BannerText)
class BannerTextAdmin(admin.ModelAdmin):
    pass


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    pass


@admin.register(Ability)
class AbilitiesAdmin(admin.ModelAdmin):
    pass


@admin.register(SkillSection)
class SkillSectionAdmin(admin.ModelAdmin):
    list_display = ('section_name', 'get_abilities')

    def get_abilities(self, obj):
        return ', '.join([f'{ability.name} ({", ".join([skill.name for skill in ability.skills.all()])})' for ability in
                          obj.abilities.all()])
