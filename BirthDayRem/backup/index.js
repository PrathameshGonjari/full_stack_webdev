// var inputText = document.querySelector('#input_one');
// const inputDate = document.querySelector('#input_second');
// const addBtn = document.querySelector('#add_btn');
const addReminder = document.querySelector('#add_rem');
const addRem = (text='') => {
  const rem = document.createElement('div');
  rem.classList.add('left');
  const htmlData = `
  <div class="first_section ${text ? "hidden" : ""}">
    <input id="input_one" class="input_text" type="text" placeholder="Enter Reminder"/>
    <input id="input_second" class="input_date" type="date" />
  </div>
  <div class="second_section ${text ? "" : "hidden"}">
  </div>
  <button id="edit_btn" class="btn_edit">Edit</button>
  <button id="delete_btn" class="btn_delete">Delete</button>
  `
  rem.insertAdjacentHTML('afterbegin',htmlData);
  // console.log(rem);
  document.body.appendChild(rem);

  const editButton = rem.querySelector('.btn_edit');
  const delButton = rem.querySelector('.btn_delete');
  const inputData = rem.querySelector('#input_one');
  const inputNum = rem.querySelector('#input_second');
  const inputDis = rem.querySelector('#input_one_dis');
  const dateDis = res.querySelector('#input_second_dis');
  const main = res.querySelector('.first_section');
  const sub = res.querySelector('.second_section');
  
  inputData.value = text;
  inputNum.value = date;
  // inputData.value =  text;
  // inputNum.value =  date;

  delButton.addEventListener('click',()=> {
    rem.remove();
  })
  
  // editButton.addEventListener('click',() => {
  //   main.classList.toggle('hidden');
  //   sub.classList.toggle('hidden');
  // })

  
}

addReminder.addEventListener('click', () => addRem() );