# 85/100
class PhotoAlbum:
    def __init__(self, pages):
        self.pages = pages
        self.photos = [[] for _ in range(pages)]

    @classmethod
    def from_photos_count(cls, photos_count):
        pages = photos_count // 4
        return cls(pages)

    def add_photo(self, label):
        for page_num, page in enumerate(self.photos):
            if len(page) < 4:
                page.append(label)
                slot_num = len(page)
                return f"{label} photo added successfully on page {page_num + 1} slot {slot_num}"
        return "No more free slots"

    def display(self):
        result = ""
        for page in self.photos:
            result += "-----------\n"
            result += " ".join(["[]" for _ in page]) + "\n"
        result += "-----------"
        return result


# Test Cases
album = PhotoAlbum(2)

print(album.add_photo("baby"))
print(album.add_photo("first grade"))
print(album.add_photo("eight grade"))
print(album.add_photo("party with friends"))
print(album.photos)
print(album.add_photo("prom"))
print(album.add_photo("wedding"))

print(album.display())
