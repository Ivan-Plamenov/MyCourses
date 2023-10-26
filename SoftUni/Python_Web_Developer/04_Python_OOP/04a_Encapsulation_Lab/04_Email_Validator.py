# 40 / 100
class EmailValidator:
    def __init__(self, min_length, mails, domains):
        self.min_length = min_length
        self.mails = mails
        self.domains = domains

    def is_name_valid(self, name):
        return len(name) >= self.min_length

    def is_mail_valid(self, mail):
        return mail in self.mails

    def is_domain_valid(self, domain):
        return domain in self.domains

    def validate(self, email):
        parts = email.split("@")

        if len(parts) != 2:
            return False

        name, rest = parts
        mail_parts = rest.split(".")

        if len(mail_parts) != 2:
            return False

        mail, domain = mail_parts

        return (
            self.is_name_valid(name)
            and self.is_mail_valid(mail)
            and self.is_domain_valid(domain)
        )


# Test cases
mails = ["gmail", "softuni"]
domains = ["com", "bg"]
email_validator = EmailValidator(6, mails, domains)

print(email_validator.validate("pe77er@gmail.com"))  # True
print(email_validator.validate("georgios@gmail.net"))  # False
print(email_validator.validate("stamatito@abv.net"))  # False
print(email_validator.validate("abv@softuni.bg"))  # False
