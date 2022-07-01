
module.exports = class App {
    constuctor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    run() {
        console.log('The application is now running.');
    }
};

const app = new App();
app.run();
