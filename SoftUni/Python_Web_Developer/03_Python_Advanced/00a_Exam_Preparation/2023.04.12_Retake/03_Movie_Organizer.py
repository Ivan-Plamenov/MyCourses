def movie_organizer(*movies_data):
    genre_dict = {}

    # Group movies by their genre
    for movie_name, genre in movies_data:
        if genre not in genre_dict:
            genre_dict[genre] = []
        genre_dict[genre].append(movie_name)

    # Sort genres by the number of movies and genre name
    sorted_genres = sorted(genre_dict.keys(), key=lambda g: (-len(genre_dict[g]), g))

    output = []

    for genre in sorted_genres:
        # Sort movies in each genre
        sorted_movies = sorted(genre_dict[genre])
        output.append(f"{genre} - {len(sorted_movies)}")
        for movie in sorted_movies:
            output.append(f"* {movie}")

    return "\n".join(output)
