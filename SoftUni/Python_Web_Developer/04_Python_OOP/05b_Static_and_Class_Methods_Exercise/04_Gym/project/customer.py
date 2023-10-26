class Customer:
    id = 1

    def __init__(self, _name: str, _address: str, _email: str) -> None:
        self.name = _name
        self.address = _address
        self.email = _email
        self.id = Customer.id
        Customer.id += 1

    @staticmethod
    def get_next_id():
        return Customer.id

    def __repr__(self) -> str:
        return (
            f"Customer <{self.id}> {self.name}; "
            f"Address: {self.address}; Email: {self.email}"
        )
