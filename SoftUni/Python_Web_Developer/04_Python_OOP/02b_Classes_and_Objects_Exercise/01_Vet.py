class Vet:
    animals = []
    space = 5

    def __init__(self, name):
        self.name = name
        self.animals = []

    def register_animal(self, animal_name):
        if len(Vet.animals) < Vet.space:
            Vet.animals.append(animal_name)
            self.animals.append(animal_name)
            return f"{animal_name} registered in the clinic"
        else:
            return "Not enough space"

    def unregister_animal(self, animal_name):
        if animal_name in self.animals:
            self.animals.remove(animal_name)
            Vet.animals.remove(animal_name)
            return f"{animal_name} unregistered successfully"
        else:
            return f"{animal_name} not in the clinic"

    def info(self):
        number_animals = len(self.animals)
        space_left_in_clinic = Vet.space - len(Vet.animals)
        return f"{self.name} has {number_animals} animals. {space_left_in_clinic} space left in clinic"


# Test the class
peter = Vet("Peter")
george = Vet("George")
print(peter.register_animal("Tom"))  # Output: Tom registered in the clinic
print(george.register_animal("Cory"))  # Output: Cory registered in the clinic
print(peter.register_animal("Fishy"))  # Output: Fishy registered in the clinic
print(peter.register_animal("Bobby"))  # Output: Bobby registered in the clinic
print(george.register_animal("Kay"))  # Output: Kay registered in the clinic
print(george.unregister_animal("Cory"))  # Output: Cory unregistered successfully
print(peter.register_animal("Silky"))  # Output: Silky registered in the clinic
print(peter.unregister_animal("Molly"))  # Output: Molly not in the clinic
print(peter.unregister_animal("Tom"))  # Output: Tom unregistered successfully
print(peter.info())  # Output: Peter has 3 animals. 1 space left in clinic
print(george.info())  # Output: George has 1 animals. 1 space left in clinic
