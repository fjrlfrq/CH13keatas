class Tyre {
    constructor(brand, size) {
        this.brand = brand;
        this.size = size;
    }
}

class Car {
    constructor(varian, tyre, door, seat, year, warranty) {
        this.varian = varian;
        this.tyre = tyre;
        this.door = door;
        this.seat = seat;
        this.year = year;
        this.warranty = warranty;
    }
}

class Agya extends Car {
    constructor(year) {
        super("Agya", new Tyre("dunlop", 15), 5, 5, year, 3);
    }
}

class Rush extends Car {
    constructor(year) {
        super("Rush", new Tyre("brigdestone", 17), 5, 7, year, 3);
    }
}


class CarFactory {
    constructor() {
        this.cars = [];
    }

    static serialNumber1() {
        let digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let serial1 = "";
        for (let i = 0; i < 9; i++) {
            let rand = Math.floor(Math.random() * digits.length)
            serial1 += digits[rand];
        }
        return serial1;
    }
    static serialNumber2() {
        let digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let serial2 = "";
        for (let i = 0; i < 5; i++) {
            let rand = Math.floor(Math.random() * digits.length)
            serial2 += digits[rand];
        }
        return serial2;
    }
    static serialNumber3() {
        let digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let serial3 = "";
        for (let i = 0; i < 5; i++) {
            let rand = Math.floor(Math.random() * digits.length)
            serial3 += digits[rand];
        }
        return serial3;
    }
    static serialNumber4() {
        let digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let serial4 = "";
        for (let i = 0; i < 5; i++) {
            let rand = Math.floor(Math.random() * digits.length)
            serial4 += digits[rand];
        }
        return serial4;
    }
    static serialNumber5() {
        let digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let serial5 = "";
        for (let i = 0; i < 13; i++) {
            let rand = Math.floor(Math.random() * digits.length)
            serial5 += digits[rand];
        }
        return serial5;
    }

    static random() {
        return Math.floor(Math.random() * 10) + 1;
    }

    produce(year) {
        //produksi agya
        for (let i = 0; i < CarFactory.random(); i++) {
            this.cars.push(new Agya(year))
        }
        //produksi Rush
        for (let i = 0; i < CarFactory.random(); i++) {
            this.cars.push(new Rush(year))
        }
    }

    guaranteeSimulation(simulationYear) {
        console.log(`Hasil simulasi garansi semua mobil pada tahun ${simulationYear}:\n`);
        this.cars.forEach((item, index) => {
            let garansi = item.year + item.warranty
            if (simulationYear > garansi) {
                console.log(`status on ${simulationYear} this guarantee status is expired`);
                console.log(`
                No. ${index + 1} 
                Varian  : ${item.varian}
                sn      : ${CarFactory.serialNumber1()}-${CarFactory.serialNumber2()}-${CarFactory.serialNumber3()}-${CarFactory.serialNumber4()}-${CarFactory.serialNumber5()}
                door    : ${item.door}
                seat    : ${item.seat}
                Tyre    : ${item.tyre.brand} ${item.tyre.size} inch
                Year    : ${item.year}
                Warranty: ${item.warranty} year
                `);
            } else {
                console.log(`status on ${simulationYear} this guarantee status is active`);
                console.log(`
                No. ${index + 1} 
                Varian  : ${item.varian}
                sn      : ${CarFactory.serialNumber1()}-${CarFactory.serialNumber2()}-${CarFactory.serialNumber3()}-${CarFactory.serialNumber4()}-${CarFactory.serialNumber5()}
                door    : ${item.door}
                seat    : ${item.seat}
                Tyre    : ${item.tyre.brand} ${item.tyre.size} inch
                Year    : ${item.year}
                Warranty: ${item.warranty} year
                `);
            }
        })
    }

    result() {
        console.log("hasil produksi: ");
        this.cars.forEach((car, index) => {
            console.log(`
                No. ${index + 1} 
                Varian  : ${car.varian}
                sn      : ${CarFactory.serialNumber1()}-${CarFactory.serialNumber2()}-${CarFactory.serialNumber3()}-${CarFactory.serialNumber4()}-${CarFactory.serialNumber5()}
                door    : ${car.door}
                seat    : ${car.seat}
                Tyre    : ${car.tyre.brand} ${car.tyre.size} inch
                Year    : ${car.year}
                Warranty: ${car.warranty} year
                `);
        })

    }
}

const toyota = new CarFactory()
toyota.produce(2020)
toyota.produce(2022)
toyota.result()
toyota.guaranteeSimulation(2025)