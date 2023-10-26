# 81 / 100
class Account:
    def __init__(self, owner, starting_amount=0):
        self.owner = owner
        self.starting_amount = starting_amount
        self._transactions = []

    def handle_transaction(self, transaction_amount):
        new_balance = self.balance + transaction_amount
        if new_balance < 0:
            raise ValueError("Sorry cannot go in debt!")
        self._transactions.append(transaction_amount)
        return f"New balance: {new_balance}"

    def add_transaction(self, amount):
        if not isinstance(amount, int):
            raise ValueError("Please use int for amount")
        return self.handle_transaction(amount)

    @property
    def balance(self):
        return self.starting_amount + sum(self._transactions)

    def __str__(self):
        return f"Account of {self.owner} with starting amount: {self.starting_amount}"

    def __repr__(self):
        return f"Account({self.owner}, {self.starting_amount})"

    def __len__(self):
        return len(self._transactions)

    def __getitem__(self, index):
        return self._transactions[index]

    def __iter__(self):
        return iter(self._transactions)

    def __reversed__(self):
        return reversed(self._transactions)

    def __gt__(self, other):
        return self.balance > other.balance

    def __ge__(self, other):
        return self.balance >= other.balance

    def __lt__(self, other):
        return self.balance < other.balance

    def __le__(self, other):
        return self.balance <= other.balance

    def __eq__(self, other):
        return self.balance == other.balance

    def __ne__(self, other):
        return self.balance != other.balance

    def __add__(self, other):
        new_owner = f"{self.owner}&{other.owner}"
        new_starting_amount = self.starting_amount + other.starting_amount
        new_transactions = self._transactions + other._transactions
        return Account(new_owner, new_starting_amount)


# Example usage:
acc = Account("bob", 10)
acc2 = Account("john")
print(acc)
print(repr(acc))
acc.add_transaction(20)
acc.add_transaction(-20)
acc.add_transaction(30)
print(acc.balance)
print(len(acc))
for transaction in acc:
    print(transaction)
print(acc[1])
print(list(reversed(acc)))
acc2.add_transaction(10)
acc2.add_transaction(60)
print(acc > acc2)
print(acc >= acc2)
print(acc < acc2)
print(acc <= acc2)
print(acc == acc2)
print(acc != acc2)
acc3 = acc + acc2
print(acc3)
print(acc3._transactions)
