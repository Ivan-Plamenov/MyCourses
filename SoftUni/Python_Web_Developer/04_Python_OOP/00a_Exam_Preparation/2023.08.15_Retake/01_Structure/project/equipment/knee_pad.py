from base_equipment import BaseEquipment


class KneePad(BaseEquipment):
    def __init__(self):
        # Set the protection to 120 and the price to 15.0 as per the requirements.
        super().__init__(protection=120, price=15.0)

    def increase_price(self):
        # Increase the price by 20%
        self.price *= 1.20
