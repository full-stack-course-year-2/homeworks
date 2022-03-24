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
getOrderListOfCustomer234notDelivered = orders.filter(order => {
    return order.customerId == '234' && !order.delivered
})
console.log('Get Order List Of Customer 234 not Delivered')
console.log(getOrderListOfCustomer234notDelivered)


// 2) Sipariş edilen ürünlerin toplam fiyatı ile her siparişte yeni bir özellik oluşturun.
sumOrderPrice = orders.map(order => {
    return {
        ...order,
        totalPrice: order.items.reduce((acc, item) => {
            return acc + item.price
        }, 0)
    }
}
)
console.log('Sum Order Price')
console.log(sumOrderPrice)


// 3) Tüm siparişler teslim edildi mi?
isAllDelivered = orders.every(order => {
    return order.delivered
})
console.log('Is All Delivered')
console.log(isAllDelivered)


// 4) '123' kimlikli müşteri sipariş verdi mi?
hasCustomer123Ordered = orders.some(order => {
    return order.customerId == '123'
})
console.log('Has Customer 123 Ordered')
console.log(hasCustomer123Ordered)



// 5) 123 kimlikli ürün satıldı mı?
hasProduct123Sold = orders.some(order => {
    return order.items.some(item => {
        return item.productId == '123'
    })
})
console.log('Has Product 123 Sold')
console.log(hasProduct123Sold)
