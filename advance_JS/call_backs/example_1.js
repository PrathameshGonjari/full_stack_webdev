function add(a,b,callback){
  console.log(a+b);
  callback();
}
function display(){
  console.log("This is an Call back function");
}
add(5,10,display);