class worker{
  constructor(){
    this.salary = 50000;
    this.paidleaves = 21;
    this.sickleaves = 5;

  }

  getsalary(){
    console.log(this.salary); 
  }
  
  getpaidleaves(){
    console.log(this.paidleaves);
  }

  getsickleaves(){
    console.log(this.sickleaves);
  }
  
  getAnnualsalary(){
    console.log(this.salary *12);
  }
}
e1 = new worker;
e1.getsalary();
e1.getpaidleaves();
e1.getsickleaves();
e1.getAnnualsalary();