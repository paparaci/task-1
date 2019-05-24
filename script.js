document.getElementById('sum').onclick=f1;    //выполняем функцию по клику
function f1(){
    var firstNum=document.getElementById('first').value;  // получаем первое значение
    var secondNum=document.getElementById('second').value;  // получаем второе значение
    var result = (firstNum*10+secondNum*10)/10;  //делаем точное значение
    var out = document.getElementById('out'); //получаем параграф
    out.innerHTML=result; //выводим результат в параграф
}
