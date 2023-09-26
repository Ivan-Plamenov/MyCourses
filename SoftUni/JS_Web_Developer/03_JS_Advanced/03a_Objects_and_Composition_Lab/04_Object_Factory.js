function obnjectFactory(library = {}, orders = []) {
    var factory = [];
    for (let { template, parts } of orders) {
        let construct = {};
        construct.name = Object.values(template)[0];
        for (let func of parts) {
            if (func in library) {
                construct[func] = library[func];
            }
        }
        factory.push(construct);
    }
    return factory;
}
