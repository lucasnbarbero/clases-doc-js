class Person {
  _name = "Lucas";

  constructor(name) {
    this._name = name;
  }

  get() {
    return this._name;
  }

  set(nombre) {
    this._name = nombre;
  }
}

const persona = new Person("Lucas 2");
console.log(persona._name);
