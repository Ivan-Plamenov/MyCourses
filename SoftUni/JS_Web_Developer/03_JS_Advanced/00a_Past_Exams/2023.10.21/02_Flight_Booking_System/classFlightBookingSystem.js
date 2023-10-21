// 100 / 100

class FlightBookingSystem {
  constructor(agencyName) {
    this.agencyName = agencyName;
    this.flights = [];
    this.bookings = [];
    this.bookingsCount = 0;
  }

  addFlight(flightNumber, destination, departureTime, price) {
    if (this.flights.some((f) => f.flightNumber === flightNumber)) {
      return `Flight ${flightNumber} to ${destination} is already available.`;
    }
    this.flights.push({ flightNumber, destination, departureTime, price });
    return `Flight ${flightNumber} to ${destination} has been added to the system.`;
  }

  bookFlight(passengerName, flightNumber) {
    let flight = this.flights.find((f) => f.flightNumber === flightNumber);
    if (!flight) {
      return `Flight ${flightNumber} is not available for booking.`;
    }
    this.bookings.push({ passengerName, flightNumber });
    this.bookingsCount++;
    return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
  }

  cancelBooking(passengerName, flightNumber) {
    let index = this.bookings.findIndex(
      (b) =>
        b.passengerName === passengerName && b.flightNumber === flightNumber
    );
    if (index === -1) {
      throw new Error(
        `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`
      );
    }
    this.bookings.splice(index, 1);
    this.bookingsCount--;
    return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
  }

  showBookings(criteria) {
    if (this.bookingsCount === 0) {
      throw new Error(`No bookings have been made yet.`);
    }
    let result = [];
    if (criteria === "all") {
      result.push(`All bookings(${this.bookingsCount}):`);
      this.bookings.forEach((b) =>
        result.push(`${b.passengerName} booked for flight ${b.flightNumber}.`)
      );
    } else {
      let thresholdPrice = criteria === "cheap" ? 100 : 101;
      let relevantBookings = this.bookings.filter((b) => {
        let flight = this.flights.find(
          (f) => f.flightNumber === b.flightNumber
        );
        if (criteria === "cheap") {
          return flight.price <= thresholdPrice;
        } else {
          return flight.price > thresholdPrice;
        }
      });
      if (relevantBookings.length === 0) {
        return criteria === "cheap"
          ? "No cheap bookings found."
          : "No expensive bookings found.";
      }
      result.push(
        criteria.charAt(0).toUpperCase() + criteria.slice(1) + " bookings:"
      );
      relevantBookings.forEach((b) =>
        result.push(`${b.passengerName} booked for flight ${b.flightNumber}.`)
      );
    }
    return result.join("\n");
  }
}

// Test Cases
const system1 = new FlightBookingSystem("TravelWorld");
console.log(system1.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system1.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system1.addFlight("CC303", "Chicago", "11:45 AM", 120));
console.log(system1.addFlight("AA101", "Los Angeles", "09:00 AM", 250));

const system2 = new FlightBookingSystem("TravelWorld");
console.log(system2.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system2.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system2.bookFlight("Alice", "AA101"));
console.log(system2.bookFlight("Bob", "BB202"));
console.log(system2.bookFlight("Charlie", "CC303"));

const system3 = new FlightBookingSystem("TravelWorld");
console.log(system3.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system3.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system3.bookFlight("Alice", "AA101"));
console.log(system3.bookFlight("Bob", "BB202"));
console.log(system3.cancelBooking("Alice", "AA101"));

const system4 = new FlightBookingSystem("TravelWorld");
console.log(system4.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system4.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system4.bookFlight("Alice", "AA101"));
console.log(system4.bookFlight("Bob", "BB202"));
console.log(system4.showBookings("all"));

const system5 = new FlightBookingSystem("TravelWorld");
console.log(system5.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system5.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system5.bookFlight("Alice", "AA101"));
console.log(system5.bookFlight("Bob", "BB202"));
console.log(system5.showBookings("expensive"));
console.log(system5.showBookings("cheap"));
