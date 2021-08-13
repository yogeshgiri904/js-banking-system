var x = 1000;
function Withdraw(){
    var amount = parseFloat(document.getElementById("number").value);
    if(amount<=x){
        x -= amount;
        var am = (x > 500)? "" :"Current amount is less than 500.00";
        document.getElementById("amount").innerHTML = "Current Amount: Rs. "+x.toFixed(2);
        document.getElementById("note").innerHTML = am;
    }
    else{
        document.getElementById("note").innerHTML = "insufficient Balance !!";
    }
}
function Deposit(){
    var amount = parseFloat(document.getElementById("number").value);
    x += amount;
    document.getElementById("amount").innerHTML = "Current Amount: Rs. "+x.toFixed(2);
}

// function date(){
//     var today = new Date();
//     var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
//     var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     var dateTime = date+' '+time;
//     document.getElementById('timer').innerHTML=dateTime;
// }

// function date();

// function Timer(){
//     var today = new Timer();
//     var Timer = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getTimer();
//     var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     var dateTime = Timer+' '+time;
//     document.getElementById('timer').innerHTML=dateTime;
// }
