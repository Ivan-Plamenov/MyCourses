class Topic:
    def __init__(self, _id: int, _topic: str, _storage_folder: str) -> None:
        self.id = _id
        self.topic = _topic
        self.storage_folder = _storage_folder

    def edit(self, _new_topic: str, _new_folder: str):
        self.topic = _new_topic
        self.storage_folder = _new_folder

    def __repr__(self) -> str:
        return f"Topic {self.id}: {self.topic} in {self.storage_folder}"
