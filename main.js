let chooseObj = [
  {
    id: 1,
    question: 'which one is the programming language',
    
      a: 'github',
      b: 'javascript',
      c: 'html',
      d: 'css',
    
    correct: 'b'
    
  },
  {
    id: 2,
    question: 'which language is most used for machine learning',
    
      a: 'c#',
      b: 'nodejs',
      c: 'ruby',
      d: 'python',
    
    correct: 'd'
  },
  {
    id: 3,
    question: 'In javascript programming, let and var the same?',
    
      a: 'yes',
      b: 'no',
      c: 'nonsense',
      d: 'none of the above',
    
    correct: 'b'
  },
  {
    id: 4,
    question: 'Most used programming language in 2021',
    
      a: 'javascript',
      b: 'python',
      c: 'php',
      d: 'c++',

    correct: 'b'
  }
];

let e = document.getElementById('butt');
let f = document.getElementById('question');
let a = document.getElementById('a_text');
let b = document.getElementById('b_text');
let c = document.getElementById('c_text');
let d = document.getElementById('d_text');
let page = document.getElementById('page');
let selectEls = document.querySelectorAll('.selectEl');

let initial = 1;
let i = 1;
let score = 0;
let z = 0;

function checked(){
  deselect();
  let something = initial++;
  
  
    f.innerText = chooseObj[something].question;
    a.innerText = chooseObj[something].a;
    b.innerText = chooseObj[something].b;
    c.innerText = chooseObj[something].c;
    d.innerText = chooseObj[something].d;
  
}

function getSelected(){
  selectEls.forEach(function(selectEl){
    if(selectEl.checked){
      // console.log(selectEl.id);
      if(selectEl.id == chooseObj[z++].correct){
        alert('true');
      } else {
        alert('false')
      }
      checked();
      

      if(i == chooseObj.length){
        return;
      } else {
        page.innerText = (i++)+1;
      }
    } else{
      return;
    }
  })
}

function deselect(){
  selectEls.forEach(g => {
    g.checked = false;
  });
}

e.addEventListener('click', function(){

  getSelected();
});


document.addEventListener('DOMContentLoaded', function(){
    page.innerText = 1;
    f.innerText = chooseObj[0].question;
    a.innerText = chooseObj[0].a;
    b.innerText = chooseObj[0].b;
    c.innerText = chooseObj[0].c;
    d.innerText = chooseObj[0].d;
});