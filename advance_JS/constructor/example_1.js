class car{
  constructor(){
    this.carname = 'BMW';

  }
  carName(){
    this.carname = 'Ford';
    console.log(this.carname);
  }
  caraudi(){
    this.carname = 'Audi';
    console.log(this.carname);
  }
}
c1 = new car();
console.log(c1.carname);
c1.carName();
c1.caraudi();
