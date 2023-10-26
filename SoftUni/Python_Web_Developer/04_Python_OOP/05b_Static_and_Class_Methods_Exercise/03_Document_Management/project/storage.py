from project.topic import Topic
from project.category import Category
from project.document import Document


class Storage:
    def __init__(self) -> None:
        self.categories = []
        self.topics = []
        self.documents = []

    def add_category(self, _cat: Category):
        if _cat not in self.categories:
            self.categories.append(_cat)

    def add_topic(self, _topic: Topic):
        if _topic not in self.topics:
            self.topics.append(_topic)

    def add_document(self, _document: Document):
        if _document not in self.documents:
            self.documents.append(_document)

    def edit_category(self, _category_id: int, _new_name: str):
        for category in self.categories:
            if category.id == _category_id:
                category.name = _new_name

    def edit_topic(self, _topic_id: int, _new_topic: str, _new_folder: str):
        for topic in self.topics:
            if topic.id == _topic_id:
                topic.topic = _new_topic
                topic.storage_folder = _new_folder

    def edit_document(self, _doc_id: int, _new_name: str):
        for document in self.documents:
            if document.id == _doc_id:
                document.file_name = _new_name

    def delete_category(self, _cat_id: int):
        for index, category in enumerate(self.categories):
            if category.id == _cat_id:
                del self.categories[index]

    def delete_topic(self, _topic_id: int):
        for index, topic in enumerate(self.topics):
            if topic.id == _topic_id:
                del self.topics[index]

    def delete_document(self, _doc_id: int):
        for index, document in enumerate(self.documents):
            if document.id == _doc_id:
                del self.documents[index]

    def get_document(self, _doc_id: int):
        for document in self.documents:
            if document.id == _doc_id:
                return document

    def __repr__(self) -> str:
        new_line = "\n"
        return f"{new_line.join([str(i) for i in self.documents])}"
