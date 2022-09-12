const products = [
    { name: 'laptop', brand: 'lenovo', price: 40000, color: 'sliver' },
    { name: 'iPhone', brand: 'iPhone', price: 5000, color: 'White' },
    { name: 'Watch', brand: 'casio', price: 3000, color: 'black' },
    { name: 'sunglass', brand: 'tututu', price: 900, color: 'gray' },
]

// Map
const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);

// forEach 
products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))
products.forEach(product => {
    // console.log(product.name)
})

// filter holo sorto diye sorter sathe jeta jeta khabe seta dekhabe
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap)

const sepicifeName = products.filter(product => product.name.includes('n'));
console.log(sepicifeName);

// find  find kore just 1st te k dekhabe
const special = products.find(product => product.name.includes('n'));
console.log(special);