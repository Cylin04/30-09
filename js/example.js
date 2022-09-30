(function (){
    var hotel ={
        name :'Park',
        roomRate :240,
        discount :15,
        offerPrice :function (){
            var offerRate =this.return((100-this.discount)/100);
            return offerRate;
        }
    };
    var hotelName,roomRate ,specialRate ;;
    hotelName=document.getElementById('hotelName');
    roomRate=document.getElementById('roomRate');
    specialRate=document.getElementById('specialRate');
    hotelName.textContent=hotel.name;
    roomRate.textContent='$'+ hotel.roomRate.toFixed(2);
    specialRate.textContent='$'+hotel.offerPrice();
    var expriryMsg;
    var today;
    var elEnds;
    function offerExprires (today){
        var weekFromToday ,day,date,month,year,dayNames,monthNames;
        weekFromToday=new Date(today.getTime()+7*24*60*60*1000);
        dayNames=[ 'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        monthNames=['January','February','March','April','May','June','July','August','September','October','November','Decemeber'];
        day =dayNames[weekFromToday.getDay()];
        date=weekFromToday.getDate();
        month=monthNames[weekFromToday.getMonth()];
        year=weekFromToday.getFullYear();
        expriryMsg='Offer exprires next';
        expriryMsg+= '<br />('+date +''+month+''+year+')';
        return expriryMsg;
    }
today =new Date();
    elEnds =document.getElementById('offerEnds');
    elEnds.innerHTML=offerExprires(today);
}());