from project.song import Song


class Album:
    def __init__(self, _name: str) -> None:
        self.name = _name
        self.published = False
        self.songs = []

    def add_song(self, _song: Song):
        if _song.single:
            return f"Cannot add {_song.name}. It's a single"
        elif self.published:
            return "Cannot add songs. Album is published."
        else:
            for existing_song in self.songs:
                if existing_song.name == _song.name:
                    return "Song is already in the album."
            self.songs.append(_song)
            return f"Song {_song.name} has been added to the album {self.name}."

    def remove_song(self, _song_name: str):
        if self.published:
            return "Cannot remove songs. Album is published."
        else:
            for index, value in enumerate(self.songs):
                if value.name == _song_name:
                    del self.songs[index]
                    return f"Removed song {value.name} from album {self.name}."
            return "Song is not in the album."

    def publish(self):
        if self.published:
            return f"Album {self.name} is already published."
        else:
            self.published = True
            return f"Album {self.name} has been published."

    def details(self):
        new_line = "\n"
        info = [("== " + i.get_info()) for i in self.songs]
        return f"Album {self.name}\n{new_line.join(info)}"
