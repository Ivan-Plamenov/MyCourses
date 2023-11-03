// 81 / 100
class Bank {
  #bankName; // Using private fields for the bank name

  constructor(bankName) {
    this.#bankName = bankName;
    this.allCustomers = [];
  }

  newCustomer(customer) {
    if (this.allCustomers.some((c) => c.personalId === customer.personalId)) {
      throw new Error(
        `${customer.firstName} ${customer.lastName} is already our customer!`
      );
    }
    customer.totalMoney = 0;
    customer.transactions = [];
    this.allCustomers.push(customer);
    return customer;
  }

  depositMoney(personalId, amount) {
    const customer = this.allCustomers.find((c) => c.personalId === personalId);
    if (!customer) {
      throw new Error("We have no customer with this ID!");
    }
    customer.totalMoney += amount;
    customer.transactions.unshift(
      `${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`
    ); // Changed push to unshift
    return `${customer.totalMoney}$`;
  }

  withdrawMoney(personalId, amount) {
    const customer = this.allCustomers.find((c) => c.personalId === personalId);
    if (!customer) {
      throw new Error("We have no customer with this ID!");
    }
    if (customer.totalMoney < amount) {
      throw new Error(
        `${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`
      );
    }
    customer.totalMoney -= amount;
    customer.transactions.unshift(
      `${customer.firstName} ${customer.lastName} withdrew ${amount}$!`
    ); // Changed push to unshift
    return `${customer.totalMoney}$`;
  }

  customerInfo(personalId) {
    const customer = this.allCustomers.find((c) => c.personalId === personalId);
    if (!customer) {
      throw new Error("We have no customer with this ID!");
    }
    const result = [
      `Bank name: ${this.#bankName}`,
      `Customer name: ${customer.firstName} ${customer.lastName}`,
      `Customer ID: ${customer.personalId}`,
      `Total Money: ${customer.totalMoney}$`,
      `Transactions:`,
    ];
    for (let i = 0; i < customer.transactions.length; i++) {
      result.push(`${i + 1}. ${customer.transactions[i]}`);
    }
    return result.join("\n");
  }
}
