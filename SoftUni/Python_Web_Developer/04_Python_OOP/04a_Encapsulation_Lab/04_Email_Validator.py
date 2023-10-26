import re


class EmailValidator:
    def __init__(self, _min_length: int, _mails: list, _domains: list) -> None:
        self.min_length = _min_length
        self.mails = _mails
        self.domains = _domains

    def __is_name_valid(self, _name: str):
        if len(_name) >= self.min_length:
            return True
        else:
            return False

    def __is_mail_valid(self, _mail: str):
        if _mail in self.mails:
            return True
        else:
            return False

    def __is_domain_valid(self, _domain: str):
        if _domain in self.domains:
            return True
        else:
            return False

    def validate(self, _email: str):
        regex = r"(\w+)@(\w+)\.(\w+)"
        matches = re.findall(regex, _email)
        if self.__is_name_valid(matches[0][0]):
            if self.__is_mail_valid(matches[0][1]):
                if self.__is_domain_valid(matches[0][2]):
                    return True
        return False


# Test cases
mails = ["gmail", "softuni"]
domains = ["com", "bg"]
email_validator = EmailValidator(6, mails, domains)

print(email_validator.validate("pe77er@gmail.com"))  # True
print(email_validator.validate("georgios@gmail.net"))  # False
print(email_validator.validate("stamatito@abv.net"))  # False
print(email_validator.validate("abv@softuni.bg"))  # False
