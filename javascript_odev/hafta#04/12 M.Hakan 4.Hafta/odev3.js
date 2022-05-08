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

const list = orders.filter(order => !order.delivered );
//console.log(list)

// 2) Sipariş edilen ürünlerin toplam fiyatı ile her siparişte yeni bir özellik oluşturun.

let toplamFiyat = orders.map(order => {
    return{
        ...order,
        totalPrice: order.items.reduce((total, product)=>{
             total=total+product.price
            return total
        },0)
        
    }
})

//console.log(toplamFiyat)

// 3) Tüm siparişler teslim edildi mi?

let teslim = orders.every(order=>order.delivered==true)

//console.log(teslim)


// 4) '123' kimlikli müşteri sipariş verdi mi?

let sipariş = orders.some(order=> order.orderId==123)
//console.log(sipariş)

// 5) 123 kimlikli ürün satıldı mı?

let satildiMi =[];

orders.map(order=> {return (
order.items.map(it=> {return (
satildiMi.push(it.productId))}))});

 //console.log( satildiMi.some(urun=> urun==123))
 