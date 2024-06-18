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
console.log(td_array);
console.log(tr_char);
console.log(td_number);
console.log(td_number_array);

//CEの処理
//Cの処理

