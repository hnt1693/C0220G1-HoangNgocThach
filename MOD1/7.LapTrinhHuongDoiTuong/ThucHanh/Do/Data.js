class Data {

    constructor() {
        this.list = [];
        this.add = function (customer) {
            let check_add = this.list.any(function (index) {
                return index.id === customer.id;
            });
            if (!check_add) {
                this.list.push(customer);
            }
        }
        this.remove = function (customerID) {
            this.list.removeIf((item) => (item.id === customerID));
        }
    }
}

Array.prototype.removeIf = function (callback) {
    let i = this.length;
    while (i--) {
        if (callback(this[i])) {
            this.splice(i, 1);
        }
    }
}
Array.prototype.any = function (callback) {
    let i = this.length;
    let x = false;
    while (i--) {
        if (callback(this[i])) {
            x = true;
        }
    }
    return x;
}
