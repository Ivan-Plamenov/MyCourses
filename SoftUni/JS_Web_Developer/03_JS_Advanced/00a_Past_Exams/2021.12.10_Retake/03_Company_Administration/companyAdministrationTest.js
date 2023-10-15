// 93/100
describe("companyAdministration", function () {
  describe("hiringEmployee()", function () {
    it("should hire an employee if the position is 'Programmer' and yearsExperience is >= 3", function () {
      expect(
        companyAdministration.hiringEmployee("John", "Programmer", 3)
      ).to.equal("John was successfully hired for the position Programmer.");
    });

    it("should not hire an employee if the yearsExperience is < 3", function () {
      expect(
        companyAdministration.hiringEmployee("John", "Programmer", 2)
      ).to.equal("John is not approved for this position.");
    });

    it("should throw error if the position is different from 'Programmer'", function () {
      expect(() =>
        companyAdministration.hiringEmployee("John", "Manager", 5)
      ).to.throw("We are not looking for workers for this position.");
    });
  });

  describe("calculateSalary()", function () {
    it("should correctly calculate the salary without the bonus", function () {
      expect(companyAdministration.calculateSalary(150)).to.equal(2250);
    });

    it("should correctly calculate the salary with the bonus", function () {
      expect(companyAdministration.calculateSalary(170)).to.equal(3550);
    });

    it("should throw error for invalid hours input (negative)", function () {
      expect(() => companyAdministration.calculateSalary(-5)).to.throw(
        "Invalid hours"
      );
    });

    it("should throw error for invalid hours input (not a number)", function () {
      expect(() => companyAdministration.calculateSalary("150")).to.throw(
        "Invalid hours"
      );
    });
  });

  describe("firedEmployee()", function () {
    const employeesArr = ["Petar", "Ivan", "George", "Anna"];

    it("should correctly fire an employee at the specified index", function () {
      expect(companyAdministration.firedEmployee(employeesArr, 1)).to.equal(
        "Petar, George, Anna"
      );
    });

    it("should throw error for invalid employees input", function () {
      expect(() => companyAdministration.firedEmployee("invalid", 1)).to.throw(
        "Invalid input"
      );
    });

    it("should throw error for negative index input", function () {
      expect(() =>
        companyAdministration.firedEmployee(employeesArr, -1)
      ).to.throw("Invalid input");
    });

    it("should throw error for index larger than employees array length", function () {
      expect(() =>
        companyAdministration.firedEmployee(employeesArr, 10)
      ).to.throw("Invalid input");
    });
  });
});
