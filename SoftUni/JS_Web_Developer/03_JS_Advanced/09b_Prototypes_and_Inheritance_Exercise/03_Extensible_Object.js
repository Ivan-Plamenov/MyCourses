function extensibleObject() {
  const obj = {
    extend: function (template) {
      for (const prop in template) {
        if (typeof template[prop] === "function") {
          // Add functions to the prototype
          Object.getPrototypeOf(this)[prop] = template[prop];
        } else {
          // Copy properties to the object
          this[prop] = template[prop];
        }
      }
    },
  };

  return obj;
}
