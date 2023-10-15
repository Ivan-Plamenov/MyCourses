function createSortedList() {
  let collection = [];

  return {
    add: function (element) {
      collection.push(element);
      collection.sort((a, b) => a - b);
    },
    remove: function (index) {
      if (index >= 0 && index < collection.length) {
        collection.splice(index, 1);
      }
    },
    get: function (index) {
      if (index >= 0 && index < collection.length) {
        return collection[index];
      }
    },
    get size() {
      return collection.length;
    },
  };
}
