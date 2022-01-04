// var inputText = document.querySelector('#input_one');
// const inputDate = document.querySelector('#input_second');
// const addBtn = document.querySelector('#add_btn');
const container_1 = document.querySelector('.left');
const addReminder = document.querySelector('#add_btn');
const addRem = (text='',date='') => {
  const rem = document.createElement('div');
  rem.classList.add('second_section');
  const htmlData = `
  <input class="input_text input_1" type="text" />
  <input class="input_date input_2" type="date" />
  <div class="main"></div>
  <button class="btn_edit">Edit</button>
  <button class="btn_delete">Delete</button>
  `
  rem.insertAdjacentHTML('beforeend',htmlData);
  // console.log(rem);
  container_1.appendChild(rem);
  // document.body.appendChild(rem);

  const editButton = rem.querySelector('.btn_edit');
  const delButton = rem.querySelector('.btn_delete');
  const inputData = rem.querySelector('.input_text');
  const inputNum = rem.querySelector('.input_date');
  const divMain = rem.querySelector('.main');
  // const input_text = rem.querySelector('.input_3');
  // const input_date = rem.querySelector('.input_4');
  // const inputDis = rem.querySelector('#input_one_dis');
  // const dateDis = res.querySelector('#input_second_dis');
  // const main = res.querySelector('.first_section');
  // const sub = res.querySelector('.second_section');
  
  inputData.value = text;
  // inputNum.value = date;
  // divMain.input_3.innerHTML = text;
  // divMain.innerHTML = date;
  divMain.innerHTML = text;
  console.log(divMain);

  // input_text.innerHTML = text;
  // input_date.innerHTML = date;

  
  // console.log(input_text.innerHTML);
  // console.log(input_date.innerHTML);
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