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
];
// sonuc = students.filter(item => (item.yasi > 18 && item.cinsiyeti == 'k') );
// console.log(sonuc);


// 1) Teslim edilmeyen 234 ID'li müşteri için siparişlerin bir listesini alın.
sonuc = orders.filter(item => (item.customerId == '234' && item.delivered == false ));
console.log(sonuc[0].items);

// 2) Sipariş edilen ürünlerin toplam fiyatı ile her siparişte yeni bir özellik oluşturun.
result = orders.map(order => {
    return {
        ...order,
        totalPrice : order.items.reduce((itemTotalPrice, item) => {
            return itemTotalPrice = itemTotalPrice + item.price
        },0)
    }
});
console.log(result);


// 3) Tüm siparişler teslim edildi mi?
sonuc = orders.every(item => item.delivered == 'true');
console.log(sonuc);

// 4) '123' kimlikli müşteri sipariş verdi mi?
sonuc = orders.some(item => (item.customerId == '123'));
console.log(sonuc);

// 5) 123 kimlikli ürün satıldı mı?
sonucX = orders.filter(item => (item.delivered == true ));
console.log(sonucX);




sonuc5 = sonucX.some(item => (item.items[0].productId == '123'));
console.log(sonuc5);
