from project.product import Product


class ProductRepository:
    def __init__(self) -> None:
        self.products = []

    def add(self, _product: Product):
        self.products.append(_product)

    def find(self, _product_name: str):
        for obj in self.products:
            if _product_name == obj.name:
                return obj

    def remove(self, _product_name: str):
        for index, obj in enumerate(self.products):
            if _product_name == obj.name:
                del self.products[index]

    def __repr__(self) -> str:
        all_values = []
        new_line = "\n"
        for product in self.products:
            all_values.append(f"{product.name}: {product.quantity}")
        return f"{new_line.join(all_values)}"
