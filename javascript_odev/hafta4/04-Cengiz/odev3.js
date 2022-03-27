const orders = [
    {
        orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
            { productId: '123', price: 55 },
            { productId: '234', price: 30 },
        ]
    },
    {
        orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
            { productId: '234', price: 30 },
        ]
    },
    {
        orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
            { productId: '567', price: 30 },
            { productId: '678', price: 80 },
        ]
    },
    {
        orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
            { productId: '789', price: 12 },
            { productId: '890', price: 90 },
        ]
    },
    {
        orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
            { productId: '901', price: 43 },
            { productId: '123', price: 55 },
        ]
    },
];

// 1) Teslim edilmeyen 234 ID'li müşteri için siparişlerin bir listesini alın.
let nonDeliveredOrder = [];
orders.forEach(value => {
    if (value.customerId == 234 && value.delivered == false) {
        nonDeliveredOrder = value.items
    }
    return nonDeliveredOrder;
})
console.log(nonDeliveredOrder)

// 2) Sipariş edilen ürünlerin toplam fiyatı ile her siparişte yeni bir özellik oluşturun.
const totalPrice = orders.map(value => {
    let totalAmount = 0;

    value.items.forEach(item => {
        totalAmount = totalAmount + item.price
    })
    return {
        ...orders,
        totalPrice: totalAmount
    }
})
console.log(totalPrice);

// 3) Tüm siparişler teslim edildi mi?
const isOrderDelivered = orders.every(value => {
    return value.delivered == true
})
console.log(isOrderDelivered);

// 4) '123' kimlikli müşteri sipariş verdi mi?
let isOrderedList = [];

orders.forEach(element => {
    if (element.customerId == 123) {
        element.items.forEach(val => {
            isOrderedList.push(val.productId)
        })
    }
});
(isOrderedList.length > 0) ? console.log("Custumor 123 ordered something") : console.log("Custumor 123 was not ordered something");

// 5) 123 kimlikli ürün satıldı mı?
let isOrdered;
orders.forEach(element => {

    isOrdered = element.items.some(val => {
        return val.productId == 123 && element.delivered == true;
    })

});
console.log(isOrdered)