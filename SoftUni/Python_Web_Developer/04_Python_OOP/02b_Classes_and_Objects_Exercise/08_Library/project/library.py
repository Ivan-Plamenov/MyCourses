from project.user import User


class Library:
    def __init__(self) -> None:
        self.user_records = []
        self.books_available = {}  # {author: [book, book]}
        self.rented_books = {}  # {user: {book: days to return}}

    def get_book(
        self, _author: str, _book_name: str, _days_to_return: int, _user: User
    ):
        for value in self.books_available.values():
            if _book_name in value:
                _user.books.append(_book_name)
                self.books_available[_author].remove(_book_name)
                if _user.username in self.rented_books:
                    self.rented_books[_user.username] += {_book_name: _days_to_return}
                else:
                    self.rented_books[_user.username] = {_book_name: _days_to_return}
                return (
                    f"{_book_name} successfully rented for the next "
                    f"{_days_to_return} days!"
                )
        for value in self.rented_books.values():
            if _book_name in value:
                return (
                    f'The book "{_book_name}" is already rented and '
                    f"will be available in "
                    f"{self.rented_books[_user.username][_book_name]} "
                    f"days!"
                )

    def return_book(self, _author: str, _book_name: str, _user: User):
        returned = 0
        for key, value in self.rented_books.items():
            if key == _user.username:
                for book in value.keys():
                    if _book_name in book:
                        del _user.books[_user.books.index(_book_name)]
                        if _author not in self.books_available:
                            self.books_available[_author] = _book_name
                        else:
                            self.books_available[_author].append(_book_name)
                        del value[book]
                        returned = 1
                        break
        if returned == 0:
            return f"{_user.username} doesn't have this book " f"in his/her records!"
        else:
            returned = 0
