var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.demarrer = function () {
        console.log("Le moteur de la voiture a démarré.");
    };
    return Car;
}());
var maVoiture = new Car("Toyota", "Corolla", 2020);
maVoiture.demarrer(); // Cela affichera "Le moteur de la voiture a démarré." dans la console.
