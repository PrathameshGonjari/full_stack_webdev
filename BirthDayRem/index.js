// var inputText = document.querySelector('#input_one');
// const inputDate = document.querySelector('#input_second');
// const addBtn = document.querySelector('#add_btn');
const addReminder = document.querySelector('#add_rem');
const container_1 = document.querySelector('.left');
const container_2 = document.querySelector('.right');

const updateLSData = () => {
  const textData = document.querySelectorAll('.inp');
  // const textDate = document.querySelectorAll('#input_second');
  const notes = [];
  // const date = [];
  textData.forEach((note)=>{
    return notes.push(note.value);
  })

  localStorage.setItem('notes',JSON.stringify(notes));
  // localStorage.setItem('date',JSON.stringify(date));
}


const addRem = (text='',date='') => {
  const rem = document.createElement('div');
  rem.classList.add('second_section');
  const htmlData = `
        <input id="input_one" class="input_text inp" ${text ? "disabled=true" : ""} placeholder="Enter Text Here" type="text"/>
        <input id="input_second" class="input_date inp" ${text ? "disabled=true" : ""} type="date"/>
        <button class="btn_save">Save</button>
        <button class="btn_edit">Edit</button>
        <button class="btn_delete">Delete</button>
  `


  const dat = document.createElement('div');
  dat.classList.add('third_section');
  const dispData = `
    <h3>Reminder of ${date}</h3>
    <input class="input_text" id="text_data" type="text" disabled />
    <input class="input_date" id="date_num" type="text" disabled />
  `
  dat.insertAdjacentHTML('afterbegin',dispData);

  rem.insertAdjacentHTML('afterbegin',htmlData);
  // console.log(rem);
  container_1.appendChild(rem);
  container_2.appendChild(dat);

  const editButton = rem.querySelector('.btn_edit');
  const delButton = rem.querySelector('.btn_delete');
  const saveButton = rem.querySelector('.btn_save');
  let inputData = rem.querySelector('#input_one');
  let inputNum = rem.querySelector('#input_second');
  let input_rem = dat.querySelector('#text_data');
  let input_dat = dat.querySelector('#date_num');
  // let inputA = rem.querySelector('input');
  // const inputDis = rem.querySelector('#input_one_dis');
  // const dateDis = res.querySelector('#input_second_dis');
  // const main = res.querySelector('.first_section');
  // const sub = rem.querySelector('.second_section');
  
  inputData.value = text;
  inputNum.value = date;
  input_rem.value = text;
  input_dat.value = date;
  
  delButton.addEventListener('click',()=> {
    rem.remove();
    updateLSData();
    window.location.reload();
  })
  
  editButton.addEventListener('click',() => {
    inputData.disabled=false;
    inputNum.disabled=false;
  })

  saveButton.addEventListener('click',()=>{
    inputData.disabled=true;
    inputNum.disabled=true;
    updateLSData();
    window.location.reload();
  })

  input_rem.addEventListener('change',(event)=>{
    const value = event.target.value;
    input_rem.innerHTML= value;
  })

  input_dat.addEventListener('change',(event)=>{
    const value = event.target.value;
    input_dat.innerHTML=value;
  } )

  // inputA.addEventListener('change',(event)=>{
  //   const value = event.target.value;
  //   console.log(event);
  // })

  inputData.addEventListener('change',(event)=>{
    const value = event.target.value;
    inputData.innerHTML= value;
  })

  inputNum.addEventListener('change',(event)=>{
    const value = event.target.value;
    inputNum.innerHTML=value;
  } )
  
}


// const addShow = (text='',date='') => {
//   const show = document.createElement('div');
//   show.classList.add('third_section');
//   const htmlData = `
  
//   `

//   show.insertAdjacentHTML('beforeend',htmlData);

//   container_2.appendChild(show);

//   let input_rem = show.querySelector('#text_data');
//   let input_dat = show.querySelector('#date_num');

//   input_rem.value = text;
//   input_dat.value = date;

//   input_rem.addEventListener('change',(event)=>{
//     const value = event.target.value;
//     input_rem.innerHTML= value;
//   })

//   input_dat.addEventListener('change',(event)=>{
//     const value = event.target.value;
//     input_dat.innerHTML=value;
//   } )
  

// }
// console.log(notes.length);


const notes = JSON.parse(localStorage.getItem('notes'));

if(notes.length!=null){
  for(var i=0 ;i<notes.length;i++){
    if(i%2==0){
      const note=notes[i];
      const note2=notes[i+1];
      addRem(note,note2);
      // addShow(note,note2);
    }
  }
}

// const data = JSON.parse(localStorage.getItem('notes'));
// // console.log(data);

// if(data.length!=null){
//   for(var i=0 ;i<data.length;i++){
//     if(i%2==0){
//       const note=data[i];
//       const note2=data[i+1];
//       addShow(note,note2);
//     }
//   }
// }

// for(i=0;i<1;i++){if(notes){notes.forEach((note)=> addRem(note))}};
// if(notes){ notes.forEach((note) => addRem(note)) };
// if(notes){ notes.forEach((note) => addRem(note)) };
addReminder.addEventListener('click', () => addRem() );
// container_1.addEventListener('change', () => addShow())