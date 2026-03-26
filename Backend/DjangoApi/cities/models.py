from django.db import models

# Create your models here.


class City(models.Model):
    name = models.CharField(max_length=250, blank=False)
    description = models.TextField(max_length=4000, null=True, blank=True)
    image = models.ImageField(upload_to="images/", blank=True, null=True)
    class Meta:
        pass

    def __str__(self):
        return self.name
