
const orders = [
    {id: "order1", productNumber: 001, date: "01-03-2022"},
    {id: "order2", productNumber: 002, date: "09-03-2022"},
    {id: "order3", productNumber: 003, date: "05-04-2022"},
]

module.exports = orders;

function saleList() {
    setTimeout(() => {
    orders.forEach((item) => {
      console.log(item)
    });
  }, 2000);
}

function salesTransaction(sale) {
   return new Promise ((resolve, reject) => {
     setTimeout(() => {
      orders.push(sale);
      const sales = false
      if (!sales) {
        saleList();
        resolve ()
        
      } else {
        reject ("Hata Var")
      }
    }, 3000);
      
   });
    
}


salesTransaction ({
  id: "newOrder",
  productNumber: 004,
  date: "20-03-2022"
}).then((response) => {
  //saleList();
}).catch((e) => {
  console.log(e)
}).finally(() => {
  console.log("Sonunda yapabildim.")
});

