class Subscription:
    id = 1

    def __init__(
        self,
        _date: str,
        _customer_id: int,
        _trainer_id: int,
        _exercise_id: int,
    ) -> None:
        self.date = _date
        self.customer_id = _customer_id
        self.trainer_id = _trainer_id
        self.exercise_id = _exercise_id
        self.id = Subscription.get_next_id()
        Subscription.id += 1

    @staticmethod
    def get_next_id():
        return Subscription.id

    def __repr__(self) -> str:
        return f"Subscription <{self.id}> on {self.date}"
