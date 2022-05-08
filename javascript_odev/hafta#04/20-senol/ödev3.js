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

let siparis = null
// 1) Teslim edilmeyen 234 ID'li müşteri için siparişlerin bir listesini alın.
siparis = orders.filter(item =>{
     return item.customerId == '234' && !item.delivered
    }
)
console.log("Teslim edilmeyen 234 ID'li müşteri için siparişlerin bir listesi:", siparis);



// 2) Sipariş edilen ürünlerin toplam fiyatı ile her siparişte yeni bir özellik oluşturun.
siparis = orders.map(order => {
    return{
        ...orders,
        totalPrice : order.items.reduce((acc, item) => {
            return acc + item.price
        }, 0)
    };
});
console.log("Sipariş edilen ürünlerin toplam fiyatı:", siparis)





// 3) Tüm siparişler teslim edildi mi?
siparis = orders.every(item => item.delivered == true);

console.log("Tüm siparişler teslim edildi mi:", siparis);




// 4) '123' kimlikli müşteri sipariş verdi mi?
siparis = orders.some(item => {
    return item.orderId == '123' && item.delivered == true ;
});
console.log("'123' kimlikli müşteri sipariş verdi mi:", siparis);


// 5) 123 kimlikli ürün satıldı mı?

siparis = orders.some(order => {
    return  order.items.some(item => {
        return item.productId == '123'; 
        });
    
});
   
console.log("123 kimlikli ürün satıldı mı:", siparis);