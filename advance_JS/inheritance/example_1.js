class Parent{
    constructor(){
      this.age = 55;
    }
    displayName(){
      console.log('My Name is Prathamesh');
    }
}
class Child extends Parent {
  constructor(){
    super();
  }
  Age(){
    console.log('Father age is ' + this.age);
  }
}
c1 = new Child();
c1.displayName();
c1.Age();