from project.topic import Topic
from project.category import Category


class Document:
    def __init__(
        self, _id: int, _category_id: int, _topic_id: int, _file_name: str
    ) -> None:
        self.id = _id
        self.category_id = _category_id
        self.topic_id = _topic_id
        self.file_name = _file_name
        self.tags = []

    @classmethod
    def from_instances(
        cls, _id: int, _category: Category, _topic: Topic, _file_name: str
    ):
        cat_id = _category.id
        topic_id = _topic.id
        return Document(_id, cat_id, topic_id, _file_name)

    def add_tag(self, _tag_content: str):
        if _tag_content not in self.tags:
            self.tags.append(_tag_content)

    def remove_tag(self, _tag_content: str):
        if _tag_content in self.tags:
            self.tags.remove(_tag_content)

    def edit(self, _file_name: str):
        self.file_name = _file_name

    def __repr__(self) -> str:
        return (
            f"Document {self.id}: {self.file_name}; category "
            f"{self.category_id}, topic {self.topic_id}, "
            f"tags: {','.join(self.tags)}"
        )
