from project.computer_store_app import ComputerStoreApp
from project.computer_types.desktop_computer import DesktopComputer
from project.computer_types.laptop import Laptop

computer_store = ComputerStoreApp()
print(computer_store.build_computer("Laptop", "Apple", "Macbook", "Apple M1 Pro", 2))
# print(computer_store.sell_computer(10000, "Apple M1 Pro", 32))
# print(computer_store.profits)

# computer = DesktopComputer("ASUS", "FP300")
# laptop = Laptop("DELL", "Inspiron")
#
# print(laptop)