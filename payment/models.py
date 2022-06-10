from django.db import models
from room.models import RoomUser
from users.models import MetaFields

MONTHS = [('1', 'January'), ('2', 'February'), ('3', 'March'), ('4', 'April'), ('5', 'May'), ('6', 'June'),
          ('7', 'July'), ('8', 'August'), ('9', 'September'), ('10', 'October'), ('11', 'November'), ('12', 'December')]


class Fee(MetaFields):

    name = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.name}-{self.amount}'

# class AbstractObjectFee(MetaFields):
    # fee = models.ForeignKey(
    #     Fee, on_delete=models.CASCADE)
    # month = models.CharField(choices=MONTHS, max_length=2)
    # year = models.IntegerField()
    # room_user = models.ManyToManyField(
    #     'room.RoomUser', through='payment.RoomUserFee', blank=True, verbose_name='Applies To')

    # class Meta:
    #     abstract = True


class RoomFee(MetaFields):
    """
        Fee associated with room
    """
    fee = models.ForeignKey(
        Fee, on_delete=models.CASCADE)
    room = models.ForeignKey('room.Room', on_delete=models.CASCADE)
    month = models.CharField(choices=MONTHS, max_length=2)
    year = models.IntegerField()
    room_user = models.ManyToManyField(
        'room.RoomUser', through='payment.RoomUserFee', blank=True, verbose_name='Applies To')


class RoomUserFee(MetaFields):
    """Fees Applied to a room user
    """
    room_user = models.ForeignKey(RoomUser, on_delete=models.CASCADE)
    room_fee = models.ForeignKey(RoomFee, on_delete=models.CASCADE)

    class Meta:
        unique_together = ['room_user', 'room_fee']

    def __str__(self):
        return f'{self.room_user}-{self.room_fee}'


class Payment(MetaFields):
    """Payment made to a room fee
    """

    amount = models.DecimalField(
        max_digits=10, decimal_places=2, blank=True, null=True)
    room_user_fee = models.ManyToManyField(
        RoomUserFee, blank=False, related_name='payment', through='payment.RoomFeePayment')


class RoomFeePayment(MetaFields):
    payment = models.ForeignKey(Payment, on_delete=models.CASCADE)
    room_user_fee = models.OneToOneField(
        RoomUserFee, on_delete=models.CASCADE, related_name='room_fee_payment')
