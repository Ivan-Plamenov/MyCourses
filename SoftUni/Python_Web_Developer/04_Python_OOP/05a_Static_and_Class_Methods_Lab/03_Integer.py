class Integer:
    def __init__(self, value):
        self.value = value

    @classmethod
    def from_float(cls, float_value):
        if isinstance(float_value, float):
            return cls(int(float_value))
        else:
            return "value is not a float"

    @classmethod
    def from_roman(cls, roman_value):
        roman_numerals = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }

        result = 0
        prev_value = 0

        for numeral in reversed(roman_value):
            if numeral not in roman_numerals:
                return "Invalid Roman numeral"

            current_value = roman_numerals[numeral]

            if current_value >= prev_value:
                result += current_value
            else:
                result -= current_value

            prev_value = current_value

        return cls(result)

    @classmethod
    def from_string(cls, str_value):
        if isinstance(str_value, str) and str_value.isdigit():
            return cls(int(str_value))
        else:
            return "wrong type"
