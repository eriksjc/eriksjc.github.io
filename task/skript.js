
function getNumber(){
    let number = document.getElementById("number");
    let table = document.getElementsByTagName("td");
    table[0].innerText = number.value;
}
function getBgColor(){
    let color = document.getElementById("bg");
    let table = document.getElementsByTagName("td");
    console.log(table)
    table[1].innerText = color.value;
}
function getTcColor(){
    let color = document.getElementById("tc")
    let table = document.getElementsByTagName("td");
    console.log(table);
    table[2].innerText = color.value;
}
function getTextColor(){
    let text = document.getElementById("text")
    let table = document.getElementsByTagName("td");
    console.log(table);
    table[3].innerText = text.value;
}
function Change(){
    let table = document.getElementsByTagName("td");
    let number = table[0].innerText;
    let bgColor = table[1].innerText;
    let textColor = table[2].innerText;
    let text = table[3].innerText;
    let div = document.getElementById("div" + number );
    console.log(div);
    div.innerText = text;
    div.style.color = textColor
    div.style.backgroundColor = bgColor 
}