function Hotel (name,rooms,booked){
    this.name =name;
    this.rooms =rooms;
    this.booked=booked;
    this.checkAvailability =function (){
        return this.name-this.booked;
    };
}
var quayHotel =new Hotel('Quay',40,25);
var parkHotel =new Hotel('Park',120,77);
var detais1 =quayHotel.name+'rooms';
    detais1+= quayHotel.checkAvailability();
var elHotel1 =document.getElementById('hotel1');
elHotel1.textContent=detais1;
var detais2 =parkHotel.name+'rooms';
    detais2+= parkHotel.checkAvailability();
var elHotel2 =document.getElementById('hotel2');
elHotel1.textContent=detais2;
