document.getElementById('sum').onclick=function(){    //вызываем функцию по клику кнопки
    var firstNum=document.getElementById('first').value; //получаем 1е значение
    firstNum=parseFloat(firstNum);             //преобразуем 1е число с точкой 
    var secondNum=document.getElementById('second').value; //получаем 2е значение
    secondNum=parseFloat(secondNum);    //преобразуем 2е число с точкой
    var out=document.getElementById('out');  //получаем параграф куда вбивается значение
    out.innerHTML=firstNum + secondNum;   //функция суммы
}