let count = 0;
let count2 = 0;
let count3 = 0;
document.getElementById("button1").onclick = function(){
    count+=1;
    document.getElementById("countable").innerHTML = count;
}
document.getElementById("button2").onclick = function(){
    count=0;
    document.getElementById("countable").innerHTML = count;
}
document.getElementById("button3").onclick = function(){
    count-=1;
    document.getElementById("countable").innerHTML = count;
}
//
document.getElementById("button4").onclick = function(){
    count2+=1;
    document.getElementById("countable2").innerHTML = count2;
}
document.getElementById("button5").onclick = function(){
    count2=0;
    document.getElementById("countable2").innerHTML = count2;
}
document.getElementById("button6").onclick = function(){
    count2-=1;
    document.getElementById("countable2").innerHTML = count2;
}
//
document.getElementById("button7").onclick = function(){
    count3+=1;
    document.getElementById("countable3").innerHTML = count3;
}
document.getElementById("button8").onclick = function(){
    count3=0;
    document.getElementById("countable3").innerHTML = count3;
}
document.getElementById("button9").onclick = function(){
    count3-=1;
    document.getElementById("countable3").innerHTML = count3;
}
document.getElementById("button10").onclick = function(){
    final_result = count * count2 * count3
    document.getElementById("result").innerHTML = final_result;
}