//値取得
let val_formula =document.getElementById("val_formula");
let val_input = document.getElementById("val_input");
let clearEnter = document.getElementById("clearEnter");
let tr_char = document.getElementsByClassName("tr_char");
let td_number = document.getElementsByClassName("td_number");
let td = document.querySelectorAll("td");
//計算のための変数
let nm_eval = '';

td_number_array = Array.from(td_number);
td_number_array.forEach(function(e){
  e.addEventListener('click', function() {
    let nm_push =this.innerText;
    let zero = val_input.textContent.substring(0);    
    if(zero != 0){
      val_input.textContent += nm_push;
    }else{
      val_input.textContent = nm_push
    }
  });
})
//tr_charクリック後の判定
function charCheck() {
  if (val_input.textContent != ''){
    nm_eval = val_formula.textContent + val_input.textContent ;
    val_input.textContent = ''; 
  }else{
    console.log("GGG");
    return;
  }
}
//+
function equal() {
  let nm_equal = val_formula.textContent + val_input.textContent;
  console.log(nm_equal);
  nm_eval  = eval(nm_equal);
  console.log(nm_eval)
  val_input.textContent = nm_eval;
}
//C
function clear() {
  const clearChar = '';
  val_formula.textContent ='';
  val_input.textContent ='';
}
//式に追加と識別
let tr_char_array = Array.from(tr_char);
tr_char_array.forEach(function(e) {
  e.addEventListener('click', function() {
    val_formula.textContent =val_input.textContent;
    val_formula.textContent += this.textContent;
    let cl_char = this.textContent;
    switch(cl_char) {
      case '%':
        charCheck();
        console.log("ddd");
        break;
      case '✓':
        console.log("✓");
        break;
      case 'x2':
        console.log("x2");
        break;
      case '1/x':
        console.log("1/x")
        break;
       case 'CE':
        console.log("CE")
        break;
      case 'C':
        clear();
        break;
      case '⇚':
        console.log("⇚")
        break;
      case '/':
        console.log("/")
        break;
       case '*':
        console.log("*")
        break;
      case '-':
        console.log("-")
        break;
      case '+':
        charCheck();
        break;
      case '+/-':
        console.log("+/-")
        break;
      case '=':
        console.log("=")
        equal();
        break;
      default:
        console("!");
            }
  })
})

//CEの処理
//Cの処理

