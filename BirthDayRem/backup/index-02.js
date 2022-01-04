const addBtn = document.querySelector('#add_btn');
var inputText = document.querySelector('input_one');
let inputDate = document.querySelector('input_second');
const container = document.querySelector('.left')

//class and constructor
class item{

  constructor(itemName,dateNew){
    this.createDiv(itemName,dateNew);
  }

  //create rem 
  createDiv(itemName,dateNew){
    let itemBox = document.createElement("div")
    itemBox.classList.add("second_section");
    
    container.appendChild(itemBox)

    //create input 
    let input = document.createElement("input");
    input.value=itemName;
    input.disabled= true;
    input.classList.add("input_text");
    input.setAttribute("type","text");
    
    itemBox.appendChild(input);

    //create date 
    let date = document.createElement("input");
    input.value=dateNew;
    input.disabled=true;
    input.classList.add("input_date");
    input.setAttribute("","")


    
  }

}

const check = () => {
  if(input.value !=' '){
    new item(input.value);
    input.value=" ";
  }
}

addBtn.addEventListener('click',check);