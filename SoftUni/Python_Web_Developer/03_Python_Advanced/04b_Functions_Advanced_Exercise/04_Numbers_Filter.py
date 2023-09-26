def even_odd_filter(**kwargs):
    result = {}

    for key in kwargs:
        if key == "odd":
            result[key] = [x for x in kwargs[key] if x % 2 != 0]
        else:
            result[key] = [x for x in kwargs[key] if x % 2 == 0]

    return dict(sorted(result.items(), key = lambda x: -len(x[1])))
