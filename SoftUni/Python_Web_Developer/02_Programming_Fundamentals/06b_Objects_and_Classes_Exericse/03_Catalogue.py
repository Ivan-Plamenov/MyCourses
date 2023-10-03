class Catalogue:
    def __init__(self, name):
        self.name = name
        self.products = []

    def add_product(self, product_name):
        self.products.append(product_name)

    def get_by_letter(self, first_letter):
        return [
            product
            for product in self.products
            if product[0].lower() == first_letter.lower()
        ]

    def __repr__(self):
        string = f"Items in the {self.name} catalogue:\n"
        return string + "\n".join(sorted(self.products))
