const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
    { orderId: '573', customerId: '436', deliveryDate: '12-01-2020', delivered: true, items: [
     
    ]},
];

// 1) Teslim edilmeyen 234 ID'li müşteri için siparişlerin bir listesini alın.
console.log("1- Teslim edilmeyen 234 ID'li müşteri için siparişlerin bir listesini alındı");
const siparisListesi = orders.filter(item => (item.orderId == 234 && item.delivered  == false)).map(item => {
    return {
        Siparis_Listesi:item.items
    }
});
console.log(siparisListesi);

// 2) Sipariş edilen ürünlerin toplam fiyatı ile her siparişte yeni bir özellik oluşturun.
console.log("2- Sipariş edilen ürünlerin toplam fiyatı ile her siparişte yeni bir özellik olusturuldu");
const siparisToplam = orders.map(item => {
    return {
        ...item,
        Siparis_Toplami: item.items.reduce((accumulator, item) => {
            accumulator += item.price;
            return accumulator;
        }, 0)
    }
});
console.log(siparisToplam);



// 3) Tüm siparişler teslim edildi mi?
console.log(" 3- Tüm siparişler teslim edildi mi");
(orders.every(item => item.delivered ==  'true')) ? console.log("Tüm siparişler teslim edildi"):console.log("Teslim edilmeyen sipariş var");



// 4) '123' kimlikli müşteri sipariş verdi mi?
console.log(" 4- '123' kimlikli müşteri sipariş verdi mi");
(orders.filter(item => (item.orderId =="573"))) ? console.log("'123' kimlikli müşteri sipariş verdi"):console.log("'123' kimlikli müşteri sipariş vermedi");





// 5) 123 kimlikli ürün satıldı mı?
console.log("5- 123 kimlikli ürün satıldı mı");
(orders.some(item => (item.orderId == "123")) ? console.log("'123' kimlikli müşteri sipariş verdi"):console.log("'123' kimlikli müşteri sipariş vermedi"));
