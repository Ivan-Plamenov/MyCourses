class Smartphone:
    def __init__(self, memory):
        self.memory = memory
        self.apps = []
        self.is_on = False

    def power(self):
        self.is_on = not self.is_on

    def install(self, app, app_memory):
        if self.is_on:
            if self.memory >= app_memory:
                self.apps.append(app)
                self.memory -= app_memory
                return f"Installing {app}"
            else:
                return f"Not enough memory to install {app}"
        else:
            return f"Turn on your phone to install {app}"

    def status(self):
        total_apps_count = len(self.apps)
        return f"Total apps: {total_apps_count}. Memory left: {self.memory}"


# Test the class
smartphone = Smartphone(100)
print(
    smartphone.install("Facebook", 60)
)  # Output: Turn on your phone to install Facebook
smartphone.power()
print(smartphone.install("Facebook", 60))  # Output: Installing Facebook
print(smartphone.install("Messenger", 20))  # Output: Installing Messenger
print(
    smartphone.install("Instagram", 40)
)  # Output: Not enough memory to install Instagram
print(smartphone.status())  # Output: Total apps: 2. Memory left: 20
