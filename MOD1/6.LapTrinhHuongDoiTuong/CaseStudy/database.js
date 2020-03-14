class Database {
    constructor() {
        this.list = [];
        this.add = function (customer) {
            if (this.list.length === 0) {
                this.list.push(customer);
            } else {
                let check_add = this.list.any((customer_i) => customer.id === customer_i.id);
                if (!check_add) {
                    this.list.push(customer);
                }
            }
        }
        this.remove = function (customer) {
            this.list.removeIf( (customer_i) => customer.id === customer_i.id);
        }
        this.edit = function (customer) {
            }
          this.getList = function () {

          }

        }

    }


Array.prototype.any = function (callback) {
    let i = this.length;
    let exist = false;
    while (i-- > 0) {
        if (callback(this[i])) {
            return exist = true;
        }
    }
    return exist;
}
Array.prototype.removeIf = function (callback) {
    let i = this.length;
    while (i-- > 0) {
        if (callback(this[i])) {
            this.splice(i, 1);

        }
    }
}