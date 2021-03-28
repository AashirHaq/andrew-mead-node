// Object property shorthand

const name = 'Aashir'
const userAge = 27

const user = {
    name, 
    age: userAge,
    Location: 'Karachi'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 222,
    salePrice: undefined,
    rating: 4.1
}

// const { label, price, stock, salePrice, rating = 5 } = product

// console.log(label, price, stock, salePrice, rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)
