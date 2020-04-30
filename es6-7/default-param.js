// connectDb('localhost', 3306);

//old
//Параметры по умолчанию
//default parameters

function fetchOrders(count, start){
    if(count === undefined){
        count = 10;
    }
    if(start === undefined){
        start = 0;
    }
    console.log('Getting', count, 'orders starting from', start )
}

function fetchOrders2(count = 5, start = 0){
    console.log('Getting', count, 'orders starting from', start )
}

fetchOrders2(undefined, null);

function findProducts(opts = {minPrice: 10, maxPrice: 20}){
    console.log(opts);
}

findProducts(); //{ minPrice: 10, maxPrice: 20 }
//findProducts({}); // {}