class ExercisePlan:
    id = 1

    def __init__(self, _trainer_id: int, _eq_id: int, _duration: int) -> None:
        self.trainer_id = _trainer_id
        self.equipment_id = _eq_id
        self.duration = _duration
        self.id = ExercisePlan.id
        ExercisePlan.id += 1

    @staticmethod
    def get_next_id():
        return ExercisePlan.id

    @classmethod
    def from_hours(cls, _trainer_id: int, _eq_id: int, _hours: int):
        duration = _hours * 60
        return ExercisePlan(_trainer_id, _eq_id, duration)

    def __repr__(self) -> str:
        return f"Plan <{self.id}> with duration {self.duration} minutes"
