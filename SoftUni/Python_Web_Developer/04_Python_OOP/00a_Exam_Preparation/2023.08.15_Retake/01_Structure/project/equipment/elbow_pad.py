from base_equipment import BaseEquipment


class ElbowPad(BaseEquipment):
    def __init__(self):
        # Set the protection to 90 and the price to 25.0 as per the requirements.
        super().__init__(protection=90, price=25.0)

    def increase_price(self):
        # Increase the price by 10%
        self.price *= 1.10
