function createComputerHierarchy() {
  class Keyboard {
    constructor(manufacturer, responseTime) {
      this.manufacturer = manufacturer;
      this.responseTime = responseTime;
    }
  }

  class Monitor {
    constructor(manufacturer, width, height) {
      this.manufacturer = manufacturer;
      this.width = width;
      this.height = height;
    }
  }

  class Battery {
    constructor(manufacturer, expectedLife) {
      this.manufacturer = manufacturer;
      this.expectedLife = expectedLife;
    }
  }

  class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      if (new.target === Computer) {
        throw new Error("Cannot instantiate an abstract class.");
      }
      this.manufacturer = manufacturer;
      this.processorSpeed = processorSpeed;
      this.ram = ram;
      this.hardDiskSpace = hardDiskSpace;
    }
  }

  class Laptop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      weight,
      color,
      battery
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.weight = weight;
      this.color = color;
      this._battery = null;

      this.battery = battery; // Using the setter for validation
    }

    get battery() {
      return this._battery;
    }

    set battery(newBattery) {
      if (!(newBattery instanceof Battery)) {
        throw new TypeError("Invalid battery type");
      }
      this._battery = newBattery;
    }
  }

  class Desktop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      keyboard,
      monitor
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.keyboard = null;
      this.monitor = null;

      this.keyboard = keyboard; // Using the setter for validation
      this.monitor = monitor; // Using the setter for validation
    }

    get keyboard() {
      return this._keyboard;
    }

    set keyboard(newKeyboard) {
      if (!(newKeyboard instanceof Keyboard)) {
        throw new TypeError("Invalid keyboard type");
      }
      this._keyboard = newKeyboard;
    }

    get monitor() {
      return this._monitor;
    }

    set monitor(newMonitor) {
      if (!(newMonitor instanceof Monitor)) {
        throw new TypeError("Invalid monitor type");
      }
      this._monitor = newMonitor;
    }
  }

  return {
    Battery,
    Keyboard,
    Monitor,
    Computer,
    Laptop,
    Desktop,
  };
}
