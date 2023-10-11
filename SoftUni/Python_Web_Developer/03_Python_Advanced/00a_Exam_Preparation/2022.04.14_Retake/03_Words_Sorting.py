def words_sorting(*words):
    word_dict = {}

    for word in words:
        word_sum = sum(ord(char) for char in word)
        word_dict[word] = word_sum

    total_sum = sum(word_dict.values())

    if total_sum % 2 == 0:
        sorted_dict = sorted(word_dict.items())
    else:
        sorted_dict = sorted(word_dict.items(), key=lambda x: x[1], reverse=True)

    result = []
    for key, value in sorted_dict:
        result.append(f"{key} - {value}")

    return "\n".join(result)
