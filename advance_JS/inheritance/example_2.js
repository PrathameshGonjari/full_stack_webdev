class worker{
  constructor(){
    this.salary = 50000;
  }
  getSalary(){
    console.log(this.salary);
  }
}
class contractworker extends worker{
  constructor(){
    super();
    this.contractperiod = '3 Years';
  }
  getcontractworkersalary(){
    console.log(this.salary);
  }
  getcontractperiod(){
    console.log(this.contractperiod);
  }
}

n1 = new contractworker();
n1.getcontractworkersalary();
n1.getcontractperiod();