//値取得
let val_formula =document.getElementById("val_formula");
let val_input = document.getElementById("val_input");
let clearEnter = document.getElementById("clearEnter");
let tr_char = document.getElementsByClassName("tr_char");
let td_number = document.getElementsByClassName("td_number");
let td = document.querySelectorAll("td");
//値入力

td_number_array = Array.from(td_number);
td_number_array.forEach(function(e){
  e.addEventListener('click', function() {
    let nm_push =this.innerText;
    val_input.textContent += nm_push;
    console.log(nm_push);
  });
})
let td_array = Array.from(td);
td_array.forEach(function(e){
  e.addEventListener('cllik', function() {
    console.log("FRFF")
}
)
})
//tr_charクリック後の判定
function charCheck() {
  if (val_input.textContent != ''){
    val_formula.textContent += val_input.textContent;
    val_input.textContent = ''; 
  }else{
    console.log("GGG");
    return;
  }
}


let tr_char_array = Array.from(tr_char);
tr_char_array.forEach(function(e) {
  e.addEventListener('click', function() {
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
        console.log("C")
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
        console.log("+")
        break;
      case '+/-':
        console.log("+/-")
        break;
      case '=':
        console.log("=")
        break;
      default:
        console("!");
            }
  })
})

//CEの処理
//Cの処理

