from project.cheetah import Cheetah
from project.lion import Lion
from project.tiger import Tiger
from project.caretaker import Caretaker
from project.vet import Vet
from project.keeper import Keeper


class Zoo:
    def __init__(
        self,
        _name: str,
        _budget: int,
        _animal_capacity: int,
        _worker_capacity: int,
    ) -> None:
        self.name = _name
        self.__budget = _budget
        self.__animal_capacity = _animal_capacity
        self.__workers_capacity = _worker_capacity
        self.animals = []
        self.workers = []

    def add_animal(self, _animal: object, _price: int):
        if _price <= self.__budget and self.__animal_capacity > 0:
            self.animals.append(_animal)
            self.__budget -= _price
            self.__animal_capacity -= 1
            return (
                f"{_animal.name} the {_animal.__class__.__name__} " f"added to the zoo"
            )
        elif _price >= self.__budget and self.__animal_capacity > 0:
            return "Not enough budget"
        else:
            return "Not enough space for animal"

    def hire_worker(self, _worker: object):
        if self.__workers_capacity > 0:
            # self.__workers_capacity -= 1
            self.workers.append(_worker)
            return (
                f"{_worker.name} the {_worker.__class__.__name__} hired "
                f"successfully"
            )
        else:
            return "Not enough space for worker"

    def fire_worker(self, _worker_name: str):
        for index, worker in enumerate(self.workers):
            if worker.name == _worker_name:
                del self.workers[index]
                # self.__workers_capacity += 1
                return f"{_worker_name} fired successfully"
        return f"There is no {_worker_name} in the zoo"

    def pay_workers(self):
        total_salary = 0
        for worker in self.workers:
            total_salary += worker.salary
        if total_salary <= self.__budget:
            self.__budget -= total_salary
            return (
                f"You payed your workers. They are happy. "
                f"Budget left: {self.__budget}"
            )
        else:
            return "You have no budget to pay your workers. They are unhappy"

    def tend_animals(self):
        total_care = 0
        for animal in self.animals:
            total_care += animal.money_for_care
        if total_care <= self.__budget:
            self.__budget -= total_care
            return (
                f"You tended all the animals. They are happy. "
                f"Budget left: {self.__budget}"
            )
        else:
            return "You have no budget to tend the animals. They are unhappy."

    def profit(self, _amount: int):
        self.__budget += _amount

    def animals_status(self):
        new_line = "\n"
        result = ""
        tigers = []
        lions = []
        cheetahs = []
        for i in self.animals:
            if i.__class__.__name__ == "Tiger":
                tigers.append(str(i))
            elif i.__class__.__name__ == "Lion":
                lions.append(str(i))
            elif i.__class__.__name__ == "Cheetah":
                cheetahs.append(str(i))
        if len(self.animals) > 0:
            result += f"You have {len(self.animals)} animals\n"
            if tigers:
                result += f"----- {len(lions)} Lions:\n"
                result += f"{new_line.join(lions)}\n"
            if lions:
                result += f"----- {len(tigers)} Tigers:\n"
                result += f"{new_line.join(tigers)}\n"
            if cheetahs:
                result += f"----- {len(cheetahs)} Cheetahs:\n"
                result += f"{new_line.join(cheetahs)}"
        return result

    def workers_status(self):
        new_line = "\n"
        result = ""
        caretakers = []
        keepers = []
        vets = []
        for i in self.workers:
            if i.__class__.__name__ == "Vet":
                vets.append(str(i))
            elif i.__class__.__name__ == "Caretaker":
                caretakers.append(str(i))
            elif i.__class__.__name__ == "Keeper":
                keepers.append(str(i))
        if len(self.workers) > 0:
            result += f"You have {len(self.workers)} workers\n"
            if keepers:
                result += f"----- {len(keepers)} Keepers:\n"
                result += f"{new_line.join(keepers)}\n"
            if caretakers:
                result += f"----- {len(caretakers)} Caretakers:\n"
                result += f"{new_line.join(caretakers)}\n"
            if vets:
                result += f"----- {len(vets)} Vets:\n"
                result += f"{new_line.join(vets)}"
        return result
