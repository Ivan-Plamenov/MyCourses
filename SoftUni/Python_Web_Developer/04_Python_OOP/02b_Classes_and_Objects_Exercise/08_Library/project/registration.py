from project.user import User
from project.library import Library


class Registration:
    def __init__(self) -> None:
        pass

    def add_user(self, _user: User, _library: Library):
        for user in _library.user_records:
            if _user.username == user.username:
                return (
                    f"User with id = {user.id} already " f"registered in the library!"
                )
        _library.user_records.append(_user)

    def remove_user(self, _user: User, _library: Library):
        deleted = 0
        for index, user in enumerate(_library.user_records):
            if _user.username == user.username:
                del _library.user_records[index]
                deleted = 1
        if deleted == 0:
            return "We could not find such user to remove!"
        else:
            deleted = 0

    def change_username(self, _user_id: int, _new_user: str, _library: Library):
        for index, user in enumerate(_library.user_records):
            if _user_id == user.id and _new_user == user.username:
                return (
                    "Please check again the provided username - "
                    "it should be different than the username used so far!"
                )
            elif _user_id == user.id and _new_user != user.username:
                if user.username in _library.rented_books:
                    value = _library.rented_books[user.username]
                    del _library.rented_books[user.username]
                    _library.rented_books[_new_user] = value
                user.username = _new_user
                return (
                    f"Username successfully changed to: {_new_user} "
                    f"for user id: {_user_id}"
                )
        return f"There is no user with id = {_user_id}!"
