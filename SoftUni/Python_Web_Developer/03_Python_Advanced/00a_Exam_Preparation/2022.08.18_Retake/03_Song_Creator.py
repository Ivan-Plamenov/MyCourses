def add_songs(*songs):
    # Dictionary to store song and its lyrics
    song_dict = {}

    for song_title, lyrics in songs:
        # If the song is already in the dictionary, append the new lyrics
        if song_title in song_dict:
            song_dict[song_title].extend(lyrics)
        else:
            song_dict[song_title] = lyrics

    # Constructing the output
    output = []
    for song_title, lyrics in song_dict.items():
        output.append(f"- {song_title}")
        output.extend(lyrics)

    return "\n".join(output)
