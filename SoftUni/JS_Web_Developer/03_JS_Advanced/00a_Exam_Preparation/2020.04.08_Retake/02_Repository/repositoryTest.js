// 90 / 100
describe("Repository", function () {
  let properties = {
    name: "string",
    age: "number",
    birthday: "object",
  };
  let repo;

  beforeEach(function () {
    repo = new Repository(properties);
  });

  describe("Instantiation and structure", function () {
    it("should initialize properly", function () {
      expect(repo.props).to.deep.equal(properties);
      expect(repo.data instanceof Map).to.be.true;
      expect(repo.count).to.equal(0);
    });

    it("should not allow direct modification of internal map", function () {
      expect(() => repo.data.set(1, {})).to.throw;
    });
  });

  describe("add(entity)", function () {
    it("should return increasing ID on successive adds", function () {
      let entity = {
        name: "John",
        age: 25,
        birthday: new Date(1998, 0, 7),
      };
      expect(repo.add(entity)).to.equal(0);
      expect(repo.add(entity)).to.equal(1);
    });

    it("should throw error when property is missing", function () {
      let entity = {
        name: "John",
        age: 25,
      };
      expect(() => repo.add(entity)).to.throw(
        Error,
        "Property birthday is missing from the entity!"
      );
    });

    it("should throw error when property type is incorrect", function () {
      let entity = {
        name: 1234,
        age: 25,
        birthday: new Date(1998, 0, 7),
      };
      expect(() => repo.add(entity)).to.throw(
        TypeError,
        "Property name is not of correct type!"
      );
    });
  });

  describe("getId(id)", function () {
    it("should return the correct entity by ID", function () {
      let entity = {
        name: "John",
        age: 25,
        birthday: new Date(1998, 0, 7),
      };
      repo.add(entity);
      expect(repo.getId(0)).to.deep.equal(entity);
    });

    it("should throw error when ID does not exist", function () {
      expect(() => repo.getId(99)).to.throw(
        Error,
        "Entity with id: 99 does not exist!"
      );
    });
  });

  describe("update(id, newEntity)", function () {
    it("should update correctly", function () {
      let entity = {
        name: "John",
        age: 25,
        birthday: new Date(1998, 0, 7),
      };
      repo.add(entity);

      let updatedEntity = {
        name: "Jane",
        age: 30,
        birthday: new Date(1993, 0, 7),
      };
      repo.update(0, updatedEntity);
      expect(repo.getId(0)).to.deep.equal(updatedEntity);
    });

    it("should throw error when updating non-existent ID", function () {
      let entity = {
        name: "Jane",
        age: 30,
        birthday: new Date(1993, 0, 7),
      };
      expect(() => repo.update(99, entity)).to.throw(
        Error,
        "Entity with id: 99 does not exist!"
      );
    });

    it("should validate entity before updating", function () {
      let entity = {
        name: "John",
        age: 25,
        birthday: new Date(1998, 0, 7),
      };
      repo.add(entity);

      let invalidEntity = {
        name: "Jane",
        age: "30",
        birthday: new Date(1993, 0, 7),
      };

      expect(() => repo.update(0, invalidEntity)).to.throw(
        TypeError,
        "Property age is not of correct type!"
      );
    });
  });

  describe("del(id)", function () {
    it("should delete correctly", function () {
      let entity = {
        name: "John",
        age: 25,
        birthday: new Date(1998, 0, 7),
      };
      repo.add(entity);
      repo.del(0);
      expect(repo.count).to.equal(0);
    });

    it("should throw error when deleting non-existent ID", function () {
      expect(() => repo.del(99)).to.throw(
        Error,
        "Entity with id: 99 does not exist!"
      );
    });

    it("should not decrease count on invalid delete", function () {
      let entity = {
        name: "John",
        age: 25,
        birthday: new Date(1998, 0, 7),
      };
      repo.add(entity);
      try {
        repo.del(1);
      } catch (e) {}
      expect(repo.count).to.equal(1);
    });
  });

  describe("boundary tests", function () {
    it("should handle adding multiple entities", function () {
      let entity = {
        name: "John",
        age: 25,
        birthday: new Date(1998, 0, 7),
      };
      for (let i = 0; i < 100; i++) {
        repo.add(entity);
      }
      expect(repo.count).to.equal(100);
    });
  });
});
