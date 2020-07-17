// function fun1(){
//     document.getElementById("show").innerHTML="yes";
// }

// var fun2 = function() {
//     var str = document.getElementById('show').value;
//     document.getElementById("screen").innerHTML=str;
// }

function outerFunc(func){
    var str1 = document.getElementById('1').value;
    var str2 = document.getElementById('2').value;
    func(parseInt(str1),parseInt(str2));
}

function argsFunc(){
    var sum = 0;
    for(var i=0;i <arguments.length;i++){
      sum  += arguments[i];
    }
    document.getElementById("show").innerHTML = sum;
}

