class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <img src="${this.image}" alt="${this.manufacture}" >
      <h5 class="my-3">Harga  Rp ${this.rentPerDay} /hari</h5>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus dolore doloribus quaerat sequi expedita iste vel, odit quasi harum voluptates, saepe praesentium consectetur soluta similique excepturi. Saepe rem odit veritatis!</p>

      <h6>Kapasitas Penumpang <b>${this.capacity} orang</b></h6>
      <p>plate: <b>${this.plate}</b></p>
      <p>manufacture: <b>${this.manufacture}</b></p>
      <p>model: <b>${this.model}</b></p>
      <p>available at: <b>${this.availableAt}</b></p>
      <button class="btn btn-c text-white p-2 " data-bs-target=#${this.plate}
      data-bs-toggle="modal">Pilih Mobil</button>

      <div
      class="modal fade"
      id=${this.plate}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content bg-light">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Konfirmasi</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form action="#">
              <img src="${this.image}" alt="${this.manufacture}" >
              <h5 class="my-3">Harga  Rp ${this.rentPerDay} /hari</h5>
              <div class="form-group">
                <label for="">Nama Anda</label><br />
                <input placeholder="Nama Sesuai KTP" type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label for="">Email Anda</label><br />
                <input placeholder="Email Aktif Anda" type="email" class="form-control" />
              </div>
              <br />
              <div class="form-group">
                <button type="button" class="btn btn-success form-control">
                  Sewa Sekarang
                </button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}
