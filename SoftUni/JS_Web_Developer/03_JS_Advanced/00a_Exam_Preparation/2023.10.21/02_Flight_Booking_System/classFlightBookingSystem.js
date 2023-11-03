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
