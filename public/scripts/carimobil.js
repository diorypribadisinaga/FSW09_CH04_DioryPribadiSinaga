class CariMobil {
    constructor() {
        this.cari = document.getElementById("carimobil");
        this.driver = document.getElementById("inputGroupSelect01");
        this.jumlah = document.getElementById("jumlah");
        this.tanggal = document.getElementById("tanggal");
        this.waktu = document.getElementById("waktu");
        this.carContainerElement = document.getElementById('cars-container')
        this.clearButton = document.getElementById("clear-btn");
        this.banyak = document.getElementById('Banyak')
        this.Mahal = document.getElementById('Mahal')
        this.Murah = document.getElementById('Murah')
    }

    async init() {
        await this.load();
        // Register click listener
        this.cari.onclick = this.run;
        this.clearButton.onclick = this.clear;
    }

    run = () => {
        console.log(this.jumlah.value);
        console.log(this.tanggal.value);
        console.log(this.driver.value);
        console.log(this.waktu.value);
        let d = (this.tanggal.value + "T" + this.waktu.value);
        let formdate = Date.parse(d);
        let banyak = 0;
        let Mahal = 0;
        let ada = 0;
        let Murah = 100000000;
        Car.list.forEach((car) => {
            let waktumobil = Date.parse(car.availableAt)
            const node = document.createElement("div")
            if ((car.capacity >= this.jumlah.value) && (waktumobil >= formdate)) {
                banyak += 1;
                node.className = "card m-3 p-4"
                node.innerHTML = car.render();
                this.carContainerElement.appendChild(node);
                if (Mahal <= car.rentPerDay) {
                    Mahal = car.rentPerDay;
                }
                if (Murah >= car.rentPerDay) {
                    Murah = car.rentPerDay
                }
                ada += 1;
            }
            // const node = document.createElement("div");
            // node.innerHTML = car.render();
            // // node.innerHTML += car.this.capacity;
            // // console.log(car.this.capacity);
            // this.carContainerElement.appendChild(node);
        });
        if (banyak > 0) {
            this.banyak.innerHTML = `Banyak Mobil Tersedia ${banyak}`;
        }
        if (Mahal > 0) {
            this.Mahal.innerHTML = `Harga Termahal Rp ${Mahal}/hari`
        }
        if (Murah < 100000000) {
            this.Murah.innerHTML = `Harga Termurah Rp ${Murah}/hari`
        }
        if (ada == 0 && this.jumlah.value > 6) {
            this.carContainerElement.innerHTML = ""
            this.banyak.innerHTML = "Anda Mau Nyewa Mobil Apa Bus?"
        } else if (ada == 0 && this.jumlah.value != 0) {
            this.banyak.innerHTML = "Mohon Maaf Mobil Tidak Tersedia"
        }
    };

    async load() {
        const cars = await Binar.listCars();
        Car.init(cars);
    }

    clear = () => {
        let child = this.carContainerElement.firstElementChild;

        while (child) {
            this.banyak.innerHTML = "";
            this.Mahal.innerHTML = "";
            this.Murah.innerHTML = "";
            this.jumlah.value = "";
            this.waktu.value = ""
            this.tanggal.value = ""
            child.remove();
            child = this.carContainerElement.firstElementChild;
        }
    };
}
const app1 = new CariMobil();

app1.init().then(app1.run);