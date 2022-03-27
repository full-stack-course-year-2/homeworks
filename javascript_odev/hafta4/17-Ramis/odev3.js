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

// 1) Teslim edilmeyen 234 ID'li müşteri için siparişlerin bir listesini alın.

siparis = orders.filter(item => item.customerId == '234' && !item.delivered);
console.log(siparis);

// 2) Sipariş edilen ürünlerin toplam fiyatı ile her siparişte yeni bir özellik oluşturun.

deger = orders.map(personOrder => {
    return {
        ...personOrder,
        totalPrice: personOrder.items.reduce((acc,value) => acc + value.price, 0)
    }
})
console.log(deger);

// 3) Tüm siparişler teslim edildi mi?

result = orders.every(item => item.delivered);
console.log(result);


// 4) '123' kimlikli müşteri sipariş verdi mi?

result = orders.some(item => item.customerId == '123' && item.delivered);
console.log(result);


// 5) 123 kimlikli ürün satıldı mı?

result = orders.some(orderNumber => orderNumber.items.some(item => item.productId == '123') && orderNumber.delivered);
console.log(result);