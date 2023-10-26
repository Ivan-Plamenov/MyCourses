class Stack:
    def __init__(self):
        self.data = []

    def push(self, element):
        if not isinstance(element, str):
            raise ValueError("Element must be a string.")
        self.data.append(element)

    def pop(self):
        if self.is_empty():
            raise IndexError("Stack is empty.")
        return self.data.pop()

    def top(self):
        if self.is_empty():
            raise IndexError("Stack is empty.")
        return self.data[-1]

    def is_empty(self):
        return len(self.data) == 0

    def __str__(self):
        elements = [f"{self.data[i]}" for i in range(len(self.data) - 1, -1, -1)]
        return "[" + ", ".join(elements) + "]"


# Test Cases
stack = Stack()
stack.push("apple")
stack.push("banana")
stack.push("cherry")

print(stack)  # Output: [cherry, banana, apple]
print(stack.pop())  # Output: cherry
print(stack.top())  # Output: banana
print(stack.is_empty())  # Output: False
