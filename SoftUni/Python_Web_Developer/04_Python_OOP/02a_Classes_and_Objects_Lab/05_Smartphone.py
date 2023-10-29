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
