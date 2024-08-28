interface Véhicule {
    make: string;
    model: string;
    year: number;
    demarrer(): void;
}

class Car implements Véhicule {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    demarrer(): void {
        console.log("Le moteur de la voiture a démarré.");
    }
}
const maVoiture = new Car("Toyota", "Corolla", 2020);

maVoiture.demarrer(); // Cela affichera "Le moteur de la voiture a démarré." dans la console.
