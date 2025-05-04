let menu = document.getElementById('navigations');
function openUp(me){
    for(let i=0; i<=3; i++){
        me.parentElement.children[i].style.color ="#000";
    }
    
    setTimeout(()=>{
        me.style.color = "blueviolet";
        },100)
    // me.style.color = "blueviolet";
    
}
function openMenu(){
    menu.style.left ='50%';
}
function closer(){
    menu.style.left = '100%';
}
let isOpen = false;
function toggle(me){
   if(!isOpen){
    me.style.transform = 'rotate(-180deg)';
    me.parentElement.parentElement.style.height = 'auto';
    isOpen =true;
   }else{
    me.style.transform = 'rotate(0)';
    me.parentElement.parentElement.style.height = '50px';
    isOpen =false;
   }
}
// for calculator
let display = document.getElementById('display');
function clearAll(){
display.value = '';
}
function clearOne(){
    display.value = display.value.substring(0,display.value.length-1)
}
function enterValue(me){
    if(display.value.length<14){
    let val = me.value;
    display.value+=val;
    }
}
let solver = document.getElementById('solve');
solver.onclick = ()=>{
    try{
        display.value = eval(display.value);
        // if(display.value.length >15){
        //     display.value = "TOO LONG"
        //     setTimeout(() => {
        //         display.value = ''
        //     }, 500);
        // }
        // function roundUpToDigits(number,totalDigits){
        //     const factor = 10 ** (totalDigits -1);
        //     return Math.ceil(number * factor)/ factor;
        // }
        // setTimeout(()=>{
        // display.value = roundUpToDigits(5,display.value);
        //  },1000)
    }
    catch (error){
        display.value = "ERROR";
        setTimeout(() => {
            display.value = ''
        }, 500);
    }
}
function add(val){
    display.value+=val;
}
//To-do list
let addBox = document.querySelector(".addBox");
let isAdderOpen = false
function openAdder(){
    if(!isAdderOpen){
        addBox.style.height = '80px';
        addBox.style.padding = '5px 0';
        isAdderOpen = true;
    }else{
        addBox.style.height = '0';
        isAdderOpen = false;
        addBox.style.padding = '0';
    }
}
function addToList(){
    let listBox = document.querySelector('.lists')
    let listName = document.getElementById('listName');
    let listTime = document.getElementById('listTime');
    // Adding format for a new list
    let specials = '<>^%$@/acn';
    let random = Math.floor(Math.random()* specials.length);
    let listn = listName.value.slice(0,2);
    let listID = listn.concat(specials.charAt(random));
    let div = document.createElement('div');
    let inp = document.createElement('input')
    let label = document.createElement('label');
    let span = document.createElement('span');
    let spanTwo = document.createElement('span');
    let spanThree = document.createElement('span');
    let spanFour = document.createElement('span');
    let labelTwo = document.createElement('label');
    let lName = document.createElement('p');
    let dustBin = document.createElement('div');
    if(listName.value.length > 2 && listTime.value.length >= 7){
    window.alert(`${listName.value} is added to To-do list, time : ${listTime.value}`);
    listBox.appendChild(div);
    div.appendChild(inp);
    inp.setAttribute('type','checkbox');
    inp.setAttribute('class','checker');
    inp.setAttribute('id',listID);
    div.appendChild(label);
    label.setAttribute('for',listID);
    label.setAttribute('class','marker');
    label.setAttribute('title','click to mark as done');
    label.appendChild(span);
    label.appendChild(spanTwo);
    div.appendChild(labelTwo);
    labelTwo.setAttribute('for',listID);
    labelTwo.setAttribute('class','list-name');
    labelTwo.innerHTML = listName.value;
    div.appendChild(lName);
    lName.setAttribute('class','list-time');
    lName.innerHTML = listTime.value;
    div.appendChild(dustBin);
    dustBin.setAttribute('class','delete-list');
    dustBin.setAttribute('title','delete');
    dustBin.setAttribute('onclick','deleteList(this)');
    dustBin.appendChild(spanThree);
    dustBin.appendChild(spanFour);
    }else{
        window.alert('Wrong input');
    }
    listName.value =''; listTime.value = ''
}
function deleteList(me){
    let box = me.parentElement.parentElement;
    if(box.children.length>1){
    me.parentElement.style.opacity = '0.1';
    setTimeout(() => {
        box.removeChild(me.parentElement);
    }, 800);
    }
}

let date = new Date();
let yearStatus = document.getElementById('year');
yearStatus.innerHTML = date.getFullYear();