class Account:
    def __init__(self, id, name, balance=0):
        self.id = id
        self.name = name
        self.balance = balance

    def credit(self, amount):
        self.balance += amount
        return self.balance

    def debit(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            return self.balance
        else:
            return "Amount exceeded balance"

    def info(self):
        return f"User {self.name} with account {self.id} has {self.balance} balance"


# Test the class
account = Account(1234, "George", 1000)
print(account.credit(500))  # Output: 1500
print(account.debit(1500))  # Output: 0
print(account.info())  # Output: User George with account 1234 has 0 balance

account = Account(5411256, "Peter")
print(account.debit(500))  # Output: Amount exceeded balance
print(account.credit(1000))  # Output: 1000
print(account.debit(500))  # Output: 500
print(account.info())  # Output: User Peter with account 5411256 has 500 balance
