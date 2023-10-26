def type_check(_param):
    def wrap_function(function):
        def wrap_args(_arg):
            if isinstance(_arg, _param):
                return function(_arg)
            else:
                return "Bad Type"

        return wrap_args

    return wrap_function


@type_check(int)
def times2(num):
    return num * 2


print(times2(2))
print(times2("Not A Number"))


@type_check(str)
def first_letter(word):
    return word[0]


print(first_letter("Hello World"))
print(first_letter(["Not", "A", "String"]))
