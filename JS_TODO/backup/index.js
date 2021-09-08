const addButton = document.querySelector(".addButton");
var input = document.querySelector(".input");
const container = document.querySelector(".data_container");

class item {

constructor(itenName){
  this.createDiv(itemName);
}
  //create to do
createDiv(itemName){
  //created the input dynamically   
  let input = document.createElement("input");
  input.value = itemName;
  input.disabled = true;
  input.classList.add("item_input");
  input.type = "text";
  input.style.fontSize = '25px';
  input.style.color = 'red';

  //create item div
  let itemBox = document.createElement("div");
  itemBox.classlist.add("item");
  //create edit button
  let editButton = document.createElement("button");
  editButton.innerHTML = "EDIT";
  editButton.classList.add("editButton");
  //create remove button
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "REMOVE";
  removeButton.classList.add("removeButton");

  //append
  container.appendChild(itemBox);
  itemBox.appendChild(input);
  itemBox.appendChild(editButton);
  itemBox.appendChild(removeButton);

  editButton.addEventListener("click",()=>{
    this.edit(input);
  });
  removeButton.addEventListener("click",()=>{
    this.remove(item);
  })

} 
//edit to do
edit(item){
item.disabled = !item.disabled;
}
//remove to do
remove(item){
  container.removeChild(item);
}
}

function check(){
  if(input.value != ' '){
    new item(input.value);
    item.value = ' ';
  }
}
addButton.addEventListener('click',check);  
