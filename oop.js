/*class Product{
    constructor(id, name, price){
        this.id=id;
    this.name= name;
    this.price= price
}
}
class ShoppingCartItem extends Product{
    constructor(id,name,price,quantity){
        super(id, name, price);
        this.quantity=quantity;
    }
    TotalPrice(){
        return this.quantity * this.price;
    }
}
 class CartItem {
    constructor(){
        this.Items= [];
    }
    TotalItems(){
        return this.Items.length ; 
    }
    AddItem(Item){
        return this.Items.push(Item)
        
    }
    deleteItem(Item) {
        const index = this.Items.findIndex(CartItem => CartItem.id === Item.id);
        if (index !== -1) {
            this.Items.splice(index, 1);
        }
    }
    displayItem(){
        this.Items.forEach(Item => {
            console.log(`${Item.name}: ${Item.quantity} x $${Item.price} = $${Item.TotalPrice()}`)
        });
    
}
}

var product1= new Product ('123', 'chips', 2);
var product2= new Product ('456', "chocolat", 3);
var product3= new Product ('789', 'ice-cream', 6)



var cart1= new ShoppingCartItem (product1, 3);
var cart2= new ShoppingCartItem (product2, 1);
var cart3= new ShoppingCartItem (product3, 5);



var cart= new CartItem()

cart.AddItem(cart1);
cart.AddItem(cart2);
cart.AddItem(cart3);

var Item= [cart1, cart2, cart3];
  cart.deleteItem(cart2);
  console.log('after deleting cart');

cart.displayItem();*/

/*
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product=product;
        this.quantity = quantity;
    }

    totalPrice() {
        return this.quantity * this.price;
    }
}

class Cart {
    constructor( ) {
     this.items = [];
    }

    totalItems() {
        return this.items.length;
    }

    addItem(product, quantity) {
        const existingItemIndex = this.items.findIndex(item => item.product.id === product.id);
        if (existingItemIndex > -1) {
            // If the item already exists in the cart, update the quantity
            this.items[existingItemIndex].quantity += quantity;
        } else {
            // Otherwise, add a new item to the cart
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem);
        }
    }




    deleteItem(product) {
        const index = this.items.findIndex(item => item.product.id === product.id);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    displayItems() {
        this.items.forEach(item => {
            console.log(`${item.name}: ${item.quantity} x ${item.price} = ${item.totalPrice()}`);
        });
    }
}

var product1 = new Product('123', 'chips', 2);
var product2 = new Product('456', 'chocolate', 3);
var product3 = new Product('789', 'ice-cream', 6);

var cartItem1 = new ShoppingCartItem('123', 'chips', 2, 3);
var cartItem2 = new ShoppingCartItem('456', 'chocolate', 3, 1);
var cartItem3 = new ShoppingCartItem('789', 'ice-cream', 6, 5);

var cart = new Cart();
cart.addItem(cartItem1);
cart.addItem(cartItem2);
cart.addItem(cartItem3);
console.log('cartItem:');
cart.displayItems();
cart.deleteItem(cartItem2);
console.log("After deleting an item:");
cart.displayItems();
*/

class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        if (!(product instanceof Product)) {
            throw new Error('Invalid product');
        }
        this.product = product;
        this.quantity = quantity;
    }

    totalPrice() {
        return this.quantity * this.product.price;
    }
}

class Cart {
    constructor() {
        this.items = [];
    }

    totalItems() {
        return this.items.length;
    }

    addItem(product, quantity) {
        if (!(product instanceof Product)) {
            throw new Error('Invalid product');
        }

        const existingItemIndex = this.items.findIndex(item => item.product.id === product.id);
        if (existingItemIndex > -1) {
            // If the item already exists in the cart, update the quantity
            this.items[existingItemIndex].quantity += quantity;
        } else {
            // Otherwise, add a new item to the cart
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem);
        }
    }

    deleteItem(product) {
        const index = this.items.findIndex(item => item.product.id === product.id);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    displayItems() {
        this.items.forEach(item => {
            console.log(`${item.product.name}: ${item.quantity} x $${item.product.price} = $${item.totalPrice()}`);
        });
    }
}
var product1 = new Product('123', 'chips', 2);
var product2 = new Product('456', 'chocolate', 3);
var product3 = new Product('789', 'ice-cream', 6);

// Create a shopping cart
var cart = new Cart();

// Add items to the cart
cart.addItem(product1, 3);
cart.addItem(product2, 1);
cart.addItem(product3, 5);

// Display the cart items
console.log("Cart items:");
cart.displayItems();

// Remove an item from the cart
cart.deleteItem(product2);

// Display the cart items after removing an item
console.log("Cart items after removing an item:");
cart.displayItems();