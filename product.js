class GongChaProduct {
    name;
    des;
    price;
    quantity;
    img;

    constructor(name, des, quantity, price, img) {
        this.name = name;
        this.des = des;
        this.price = price;
        this.quantity = quantity;
        this.img = img;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    get des() {
        return this.des;
    }

    set des(value) {
        this.des = value;
    }

    get price() {
        return this.price;
    }

    set price(value) {
        this.price = value;
    }

    get quantity() {
        return this.quantity;
    }

    set quantity(value) {
        this.quantity = value;
    }
}