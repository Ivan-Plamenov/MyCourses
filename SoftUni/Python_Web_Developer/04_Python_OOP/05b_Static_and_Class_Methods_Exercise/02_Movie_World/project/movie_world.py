from project.customer import Customer
from project.dvd import DVD


class MovieWorld:
    def __init__(self, _name: str) -> None:
        self.name = _name
        self.customers = []
        self.dvds = []

    @staticmethod
    def dvd_capacity():
        return 15

    @staticmethod
    def customer_capacity():
        return 10

    def add_customer(self, _customer: Customer):
        if len(self.customers) < MovieWorld.customer_capacity():
            self.customers.append(_customer)

    def add_dvd(self, _dvd: DVD):
        if len(self.dvds) < MovieWorld.dvd_capacity():
            self.dvds.append(_dvd)

    def rent_dvd(self, _customer_id: int, _dvd_id: int):
        for customer in self.customers:
            if customer.id == _customer_id:
                match = [i.id for i in customer.rented_dvds if i.id == _dvd_id]
                for dvd in self.dvds:
                    if dvd.id == _dvd_id:
                        if match:
                            return f"{customer.name} has already rented " f"{dvd.name}"
                        elif dvd.is_rented:
                            return "DVD is already rented"
                        elif customer.age < dvd.age_restriction:
                            return (
                                f"{customer.name} should be at least "
                                f"{dvd.age_restriction} to rent this movie"
                            )
                        else:
                            dvd.is_rented = True
                            customer.rented_dvds.append(dvd)
                            return (
                                f"{customer.name} has successfully rented "
                                f"{dvd.name}"
                            )

    def return_dvd(self, _customer_id: int, _dvd_id: int):
        for customer in self.customers:
            if customer.id == _customer_id:
                for dvd in self.dvds:
                    if dvd.id == _dvd_id:
                        for index, c_dvd in enumerate(customer.rented_dvds):
                            if dvd.name == c_dvd.name:
                                dvd.is_rented = False
                                del customer.rented_dvds[index]
                                return (
                                    f"{customer.name} has successfully "
                                    f"returned {dvd.name}"
                                )
                        return f"{customer.name} does not have that DVD"

    def __repr__(self) -> str:
        result = ""
        for customer in self.customers:
            result += f"{str(customer)}\n"
        for dvd in self.dvds:
            if self.dvds.index(dvd) == len(self.dvds) - 1:
                result += f"{str(dvd)}"
            else:
                result += f"{str(dvd)}\n"
        return result
