

function counterElement(isIncrease,input){
    const inputNumber=document.getElementById(input+"-count");
    const inputCount=parseInt(inputNumber.value);

    let inputNewCount=inputCount;
    totalCharge();
    if(isIncrease==true){
        inputNewCount=inputNewCount+1;
    }

    if(inputCount>0 && isIncrease==false){
        inputNewCount=inputNewCount-1;
    }
    inputNumber.value=inputNewCount;
}

function totalCharge(){

    const inputCount1=getCountNumber('input1');
    const inputCount2=getCountNumber('input2');

    const Subtotal=inputCount1*150 +  inputCount2*100;
    const tax=Subtotal*0.10;
    const total=Subtotal+tax;

    document.getElementById('subtotal-count').innerText='$'+Subtotal ;
    document.getElementById('tax-count').innerText='$'+tax;
    document.getElementById('total-count').innerText='$'+total;

}

function getCountNumber(id){
    const inputNumber=document.getElementById(id+'-count');
    const inputCount=parseInt(inputNumber.value);
    return inputCount;
}

document.getElementById('nextPage').addEventListener('click',function(){
    const bookPage=document.getElementById('booking-page');
    bookPage.style.display="none";
    const confarmPage=document.getElementById('confarm-page');
    confarmPage.style.display="block";
    grandTotal();

})

function grandTotal(){
    const inputCount1=getCountNumber('input1');
    const inputCount2=getCountNumber('input2');

    document.getElementById('input1-number').innerText=inputCount1;
    document.getElementById('input2-number').innerText=inputCount2;
    document.getElementById('input1-cost').innerText='$'+inputCount1*150;
    document.getElementById('input2-cost').innerText='$'+inputCount2*100;
    const totalCount=inputCount1*150 + inputCount2*100;
    const tax =totalCount*0.10;
    const totalNumber=totalCount+tax;
    document.getElementById('tax-cost').innerText='$'+tax;
    document.getElementById('total-cost').innerText='$'+totalNumber;
}
