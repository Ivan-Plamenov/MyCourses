from functools import wraps
import unittest


def make_bold(function):
    @wraps(function)
    def inner(*args):
        return "<b>" + function(*args) + "</b>"

    return inner


def make_italic(function):
    @wraps(function)
    def inner(*args):
        return "<i>" + function(*args) + "</i>"

    return inner


def make_underline(function):
    @wraps(function)
    def inner(*args):
        return "<u>" + function(*args) + "</u>"

    return inner


class BoldItalicUnderlineTests(unittest.TestCase):
    def test_make_bold(self):
        @make_bold
        def func():
            return "pesho"

        res = func()
        self.assertEqual(res, "<b>pesho</b>")

    def test_make_italic(self):
        @make_italic
        def func(name):
            return f"Hey, {name}"

        res = func("pesho")
        self.assertEqual(res, "<i>Hey, pesho</i>")

    def test_make_underline(self):
        @make_underline
        def func(first_name, last_name):
            return f"{first_name} {last_name}"

        res = func("pesho", "peshov")
        self.assertEqual(res, "<u>pesho peshov</u>")

    def test(self):
        @make_bold
        @make_underline
        @make_italic
        def func():
            return "pesho"

        res = func()
        self.assertEqual(res, "<b><u><i>pesho</i></u></b>")


if __name__ == "__main__":
    unittest.main()
