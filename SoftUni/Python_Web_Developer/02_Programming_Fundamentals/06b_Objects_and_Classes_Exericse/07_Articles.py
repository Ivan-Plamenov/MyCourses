class Article:
    def __init__(self, title, content, author):
        self.title = title
        self.content = content
        self.author = author

    def edit(self, content):
        self.content = content

    def change_author(self, author):
        self.author = author

    def rename(self, title):
        self.title = title

    def __repr__(self):
        return f"{self.title} - {self.content}: {self.author}"
