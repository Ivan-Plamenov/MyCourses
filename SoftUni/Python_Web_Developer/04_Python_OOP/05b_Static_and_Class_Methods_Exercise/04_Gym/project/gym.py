from project.customer import Customer
from project.equipment import Equipment
from project.exercise_plan import ExercisePlan
from project.subscription import Subscription
from project.trainer import Trainer


class Gym:
    def __init__(self) -> None:
        self.customers = []
        self.trainers = []
        self.equipment = []
        self.plans = []
        self.subscriptions = []

    def add_customer(self, _customer: Customer):
        if _customer not in self.customers:
            self.customers.append(_customer)

    def add_trainer(self, _trainer: Trainer):
        if _trainer not in self.trainers:
            self.trainers.append(_trainer)

    def add_equipment(self, _equipment: Equipment):
        if _equipment not in self.equipment:
            self.equipment.append(_equipment)

    def add_plan(self, _plan: ExercisePlan):
        if _plan not in self.plans:
            self.plans.append(_plan)

    def add_subscription(self, _sub: Subscription):
        if _sub not in self.subscriptions:
            self.subscriptions.append(_sub)

    def subscription_info(self, _sub_id: int):
        new_line = "\n"
        combined = [
            list(x)
            for x in zip(
                self.subscriptions,
                self.customers,
                self.trainers,
                self.equipment,
                self.plans,
            )
        ]
        combined = [sub for elem in combined for sub in elem]
        return f"{new_line.join(str(i) for i in combined)}"
