class PhotoAlbum:
    def __init__(self, _pages: int) -> None:
        self.pages = _pages
        self.photos = []
        for i in range(self.pages):
            self.photos.append([])

    @classmethod
    def from_photos_count(self, _photos_count: int):
        pages = 0
        if _photos_count % 4 == 0:
            pages = _photos_count // 4
        else:
            pages = _photos_count // 4 + 1
        return PhotoAlbum(pages)

    def add_photo(self, _label: str):
        for page in self.photos:
            if len(page) != 4:
                page.append(_label)
                return (
                    f"{_label} photo added successfully on page "
                    f"{self.photos.index(page) + 1} slot {len(page)}"
                )
        return "No more free slots"

    def display(self):
        count_photos = 0
        result = "-----------\n"
        for page in self.photos:
            if len(page) != 0:
                for photo in page:
                    if photo:
                        count_photos += 1
                result += "[] " * (count_photos - 1) + "[]"
                count_photos = 0
            if self.photos.index(page) == len(self.photos) - 1:
                result += "\n-----------"
            else:
                result += "\n-----------\n"
        return result
