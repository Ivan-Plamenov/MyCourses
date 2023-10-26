from project.album import Album


class Band:
    def __init__(self, _name: str) -> None:
        self.name = _name
        self.albums = []

    def add_album(self, _album: Album):
        for album in self.albums:
            if _album.name == album.name:
                return (
                    f"Band {self.name} already has {album.name} " f"in their library."
                )
        self.albums.append(_album)
        return f"Band {self.name} has added their newest album {_album.name}."

    def remove_album(self, _album_name: str):
        for index, value in enumerate(self.albums):
            if value.name == _album_name and value.published is False:
                del self.albums[index]
                return f"Album {_album_name} has been removed."
            elif value.name == _album_name and value.published:
                return "Album has been published. It cannot be removed."
        return f"Album {_album_name} is not found."

    def details(self):
        new_line = "\n"
        info = [("== " + i.details()) for i in self.albums]
        if len(self.albums) > 0:
            return f"Band {self.name}\n{new_line.join(info)}."
        else:
            return f"Band {self.name}"
