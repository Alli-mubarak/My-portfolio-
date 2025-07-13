let menu = document.getElementById('navigations');
function openUp(me){
    for(let i=1; i<=3; i++){
       me.parentElement.children[i].style.color ="#000";
    }
    
    setTimeout(()=>{
        me.style.color = "hsla(240,50%,40%,1)";
        },100);
}
function openMenu(){
    menu.style.left ='50%';
}
function closer(me){
    menu.style.left = '100%';
    openUp(me);
}
// for textplay
let ft = document.getElementById('ft');
let st = document.getElementById('st');
let fb = document.getElementById('fb');
let sb = document.getElementById('sb');
let fn= 0,sn=0;
let fText = 'I build websites';
let sText = 'I teach coding'
function textPlay(){
let blinkID = setInterval(()=>{
    fb.style.opacity="1";
    setTimeout(()=>{
        fb.style.opacity="0";
    },150)
},300);
let ftID = setInterval(()=>{
if(fn < (fText.length)){
    ft.innerHTML += fText.charAt(fn);
    fn++;
    }else{
        clearInterval(blinkID);
        clearInterval(ftID);
        let blink2ID = setInterval(()=>{
    sb.style.opacity="1";
    setTimeout(()=>{
        sb.style.opacity="0";
    },150)
},300);
let stID = setInterval(()=>{
    if(sn < (sText.length)){
    st.innerHTML += sText.charAt(sn);
    sn++;
    }else{
        clearInterval(blink2ID);
        clearInterval(stID);
        }
     
},300)
    }
    
},300)
}
textPlay();
// for toggling projects
function toggle(me){
me.isOpen ;
   if(!me.isOpen){
    me.style.transform = 'rotate(-180deg)';
    me.parentElement.parentElement.style.height = 'auto';
    me.isOpen =true;
   }else{
    me.style.transform = 'rotate(0)';
    me.parentElement.parentElement.style.height = '50px';
    me.isOpen =false;
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
function openAdder(me){
    if(!isAdderOpen){
        addBox.style.height = '80px';
        addBox.style.padding = '5px 0';
        isAdderOpen = true;
    }else{
        addBox.style.height = '0';
        isAdderOpen = false;
        addBox.style.padding = '0';
    }
    me.classList.toggle('open');
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
// quiz app 

let choice = '';
let bColor = ' hsla(240,50%,40%,0.9)';
let score = 0;
let n = 0;
function choose(me){
    let options = me.parentElement;
    const correctAnswer = options.children[4].innerHTML;
    for(let i = 0;i<options.children.length;i++){
        options.children[i].style.borderColor = 'transparent';
    }
    setTimeout(() => {
        me.style.borderColor = bColor;    
        choice = me.title;
        questionSet[n].choice = me.innerHTML;
    }, 100);
}
let question = document.getElementById("question");
let optionBox = document.querySelector('.answersBox');
const q1 ={
    question:'What is the full meaning of WHO?',
    A :"World Hygeine Operation",
    B : "West Holdings Objection",
    C : "World Health Organisation",
    D : "Williams Hughes Organisation",
    answer : "World Health Organisation",
    choice: '?'
}
const q2 ={
    question:'How many years are there in a decade?',
    A :"10 years",
    B : "22 years",
    C : "6 years",
    D : "12 years",
    answer : "10 years",
    choice: '?'
}
const q3 ={
    question:'Which of the following is a noun?',
    A :"Court",
    B : "Eats",
    C : "About",
    D : "They",
    answer : "Court",
    choice: '?'
}
const q4 ={
    question:'Which of the following is an adjective?',
    A :"Shola",
    B : "Girl",
    C : "Him",
    D : "Great",
    answer : "Great",
    choice: '?'
}
const q5 ={
    question:'Which of the following is not a pronoun?',
    A :"His",
    B : "They",
    C : "Bike",
    D : "Them",
    answer : "Bike",
    choice: '?'
}
const q6 ={
    question:'How many plots are there in an hectare?',
    A :"10 plots",
    B : "22 plots",
    C : "6 plots",
    D : "12 plots",
    answer : "6 plots",
    choice: '?'
}
const questionSet = [q1,q2,q3,q4,q5,q6];
let qNo = document.getElementById('qNo');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next')
let submitBtn = document.getElementById('submit');
prevBtn.setAttribute('disabled','true');
prevBtn.style.opacity = '0.5';
question.innerHTML = questionSet[n].question;
        optionBox.children[0].innerHTML = questionSet[n].A;
        optionBox.children[1].innerHTML = questionSet[n].B;
        optionBox.children[2].innerHTML = questionSet[n].C;
        optionBox.children[3].innerHTML = questionSet[n].D;
function prev(me){
    submitBtn.style.display = 'none';
    if(n >= 1){
        n--;
        question.innerHTML = questionSet[n].question;
        optionBox.children[0].innerHTML = questionSet[n].A;
        optionBox.children[1].innerHTML = questionSet[n].B;
        optionBox.children[2].innerHTML = questionSet[n].C;
        optionBox.children[3].innerHTML = questionSet[n].D;
        qNo.innerHTML--;
        let options = optionBox;
        for(let i = 0;i<options.children.length;i++){
            options.children[i].style.borderColor = 'transparent';
        }
        nextBtn.removeAttribute('disabled','true');
        nextBtn.style.opacity = '1';
        setTimeout(() => {
            for(let i = 0;i<options.children.length;i++){
                if(questionSet[n].choice === options.children[i].innerHTML){
                    options.children[i].style.borderColor = bColor;
                }
            }
        }, 100);
    }
    if(n < 1){
        prevBtn.setAttribute('disabled','true');
        prevBtn.style.opacity="0.5";
    }
}
function next(nextBtn){
    prevBtn.removeAttribute('disabled','true');
    prevBtn.style.opacity = '1';
    if(n < (questionSet.length - 1)){
        n++;
        question.innerHTML = questionSet[n].question;
        optionBox.children[0].innerHTML = questionSet[n].A;
        optionBox.children[1].innerHTML = questionSet[n].B;
        optionBox.children[2].innerHTML = questionSet[n].C;
        optionBox.children[3].innerHTML = questionSet[n].D;
        qNo.innerHTML++;
        let options = optionBox
        for(let i = 0;i<options.children.length;i++){
            options.children[i].style.borderColor = 'transparent';
        }
        setTimeout(() => {
            for(let i = 0;i<options.children.length;i++){
                if(questionSet[n].choice === options.children[i].innerHTML){
                    options.children[i].style.borderColor = bColor;
                }
            }
        }, 100);
    }
    if((n+1) === questionSet.length){
        submitBtn.style.display = 'inline';
        nextBtn.setAttribute('disabled','true');
        nextBtn.style.opacity = '0.5';
    }else{
        submitBtn.style.display = 'none';
    }
}
let totalScore = 0;
function submit(){
    for(let i = 0;i<questionSet.length;i++){
        if(questionSet[i].answer === questionSet[i].choice){
            totalScore++;
            
        }
    }
    let quiz = document.getElementById("quiz");
    quiz.innerHTML =`<p>You scored ${totalScore} out of ${questionSet.length}</p>`;
    setTimeout(() => {
        totalScore = 0;
    }, 100);
}
// stopwatch 
let sMin = document.getElementById('sMin');
let sSec = document.getElementById('sSec');
let sMis = document.getElementById('sMis');
let strBtn = document.getElementById('strBtn');
let resetBtn = document.getElementById('resetBtn');
let autoBtn = document.getElementById('autoBtn');
let working = false;
let ms = 0;
let ss = 0;
let mm = 0;
function startSw(){
    
    if(!working && strBtn.innerHTML === 'Start' ){
        strBtn.innerHTML = 'Stop';
        working = true;
   let stopwatchID = setInterval(() => {
    ms++;
    
    if(ms<10){
        sMis.innerHTML = `0${ms}`
    }else if(ms>= 10 && ms<=100){
        sMis.innerHTML = ms;
        if(ms >= 99){
            ms = 0;
            ss++;
             if(ss<10){
               sSec.innerHTML = `0${ss}`
             }else if(ss>= 10 && ss<61){
                sSec.innerHTML = ss;
                if(ss === 60){
                  ss = 0;
                mm++;
                if(mm<10){
                    sMin.innerHTML = `0${mm}`;
                }else if(mm>=10){
                    sMin.innerHTML = mm;
                }
                }
        }
        }
    }
    }, 10);

    autoBtn.onclick =()=>{
    clearInterval(stopwatchID);
    }

resetBtn.onclick=()=>{
    autoBtn.click();
    sMin.innerHTML ='00';
    sSec.innerHTML = '00';
    sMis.innerHTML = '00';
    ms = 0;
    mm = 0;
    ss = 0;
    strBtn.innerHTML = 'Start';
    working = false;
}
}else{
    working = false;
    strBtn.innerHTML = 'Start';
    autoBtn.click();
}
}
// Text-to-speech
function speakText(){
    let textBox = document.getElementById("ttsInput");
    // put= inp.value;
  if ('speechSynthesis' in window){
    let utterancespeech = new SpeechSynthesisUtterance(textBox.value);
    speechSynthesis.speak(utterancespeech);
  }
  else{
      alert('Text-to-speech is not supported on this browser!');
  }
}

// password generator
let pLength = document.getElementById('pLength');
let outPut = document.getElementById('gp');
let keyWords = `qwertyuiopasdfghjklzxcvbnmASDFGHJKLQWERTYUIOPZXCVBNM1234567890`;
let specs = `"?@!#$%^&*():{}[]|`;
let outP = '';
let alertBox = document.querySelector('.alert');
function genP(){
outP = '';
if(pLength.value%2 === 0){
for(let i=1;i<= (pLength.value/2);i++){
    let randK = Math.floor(Math.random()* keyWords.length);
    let randS = Math.floor(Math.random()* specs.length);
    outP+=keyWords.charAt(randK).concat(specs.charAt(randS));
}
}else{
for(let i=1;i<= (pLength.value/2);i++){
    let randK = Math.floor(Math.random()* keyWords.length);
    let randS = Math.floor(Math.random()* specs.length);
    outP+=keyWords.charAt(randK).concat(specs.charAt(randS));
}
let randK = Math.floor(Math.random()* keyWords.length);
outP+=keyWords.charAt(randK);
}
outPut.value = outP;
}
function copyPw(){
    if(outPut.value.length > 1){
        navigator.clipboard.writeText(outPut.value);
        alertBox.innerHTML = 'Password Copied!';
        setTimeout(() => {
            alertBox.innerHTML = '';
        }, 1000);
    }
}

let date = new Date();
let yearStatus = document.getElementById('year');
yearStatus.innerHTML = date.getFullYear();
