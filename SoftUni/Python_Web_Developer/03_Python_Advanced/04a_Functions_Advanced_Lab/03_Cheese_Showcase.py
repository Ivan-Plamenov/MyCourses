def sorting_cheeses(**kwargs):
    result = ""
    sorted_cheeses = sorted(kwargs.items(), key=lambda x: (-len(x[1]), x[0]))
    for cheese, pieces in sorted_cheeses:
        sorted_pieces = [str(x) for x in sorted(pieces, reverse=True)]
        result += cheese + "\n"
        result += "\n".join(sorted_pieces) + "\n"
    return result