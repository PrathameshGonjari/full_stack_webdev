class person{
  constructor(){
    this.name = 'Prathamesh';
    this.lastname = 'G';
  }
  getFullName(){
    console.log("My name is " +this.name+ " " +this.lastname);
  }
}

p1 = new person();
p1.getFullName();