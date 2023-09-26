def rectangle(length, width):
    def perimeter():
        return (length + width) * 2

    def area():
        return length * width

    if not isinstance(length, int) or not isinstance(width, int):
        return "Enter valid values!"

    return f"Rectangle area: {area()}\nRectangle perimeter: {perimeter()}"
