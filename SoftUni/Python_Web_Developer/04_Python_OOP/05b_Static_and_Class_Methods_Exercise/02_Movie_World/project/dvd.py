import re
import datetime


class DVD:
    def __init__(
        self,
        _name: str,
        _id: int,
        _year: int,
        _month: int,
        _age_r: int,
    ) -> None:
        self.name = _name
        self.id = _id
        self.creation_year = _year
        self.creation_month = _month
        self.age_restriction = _age_r
        self.is_rented = False

    @classmethod
    def from_date(cls, _id: int, _name: str, _date: str, _age_r: int):
        re_date = r"(\d+)\.(\d+)\.(\d{4})"
        dates = re.findall(re_date, _date)
        datetime_object = datetime.datetime.strptime(dates[0][1], "%m")
        month = datetime_object.strftime("%B")
        return DVD(_name, _id, int(dates[0][2]), month, _age_r)

    def __repr__(self) -> str:
        rented = ""
        if self.is_rented:
            rented = "rented"
        else:
            rented = "not rented"
        return (
            f"{self.id}: {self.name} ({self.creation_month} "
            f"{self.creation_year}) has age restriction "
            f"{self.age_restriction}. Status: {rented}"
        )
