var promise = new Promise(function(resolve,reject){
  const x = 'India';
  const y = 'India';

  if (x==y){
    resolve();
  }
  else{
    reject();
  }
})
promise.then(function(){
  console.log("Country name is India");
}).catch(function(){
  console.log("Error is Terminal");
})