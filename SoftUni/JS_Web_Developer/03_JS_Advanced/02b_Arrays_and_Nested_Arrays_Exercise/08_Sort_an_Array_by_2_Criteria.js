function arrayByTwoCriteria(arr = []) {
    arr = arr.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        }
    });
    console.log(arr.join("\n"));
}