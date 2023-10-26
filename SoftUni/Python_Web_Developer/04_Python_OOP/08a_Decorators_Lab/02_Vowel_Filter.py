def number_increment(numbers):
    def increase():
        return [num + 1 for num in numbers]

    return increase()


def vowel_filter(function):
    def wrapper():
        vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
        result = function()
        filtered_result = [char for char in result if char in vowels]
        return filtered_result

    return wrapper


@vowel_filter
def get_letters():
    return ["a", "b", "c", "d", "e"]


print(get_letters())
