module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.value = [];
};


// Методы коллекции
Collection.prototype.values = function () {
    return this.value;
};
// другие методы
Collection.prototype.at = function () {
    if (arguments[0] <= 0 || typeof arguments[0] !== "number" || arguments[0] > this.value.length) {
        return null;
    } else {
        return this.value[arguments[0] - 1]
    }
};
Collection.prototype.append = function () {
    if (arguments.length !== 0) {
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] instanceof Collection) {
                this.value = this.value.concat(Collection.prototype.values.call(arguments[i]));
            } else if (Object.getPrototypeOf(arguments[i]) === Array.prototype) {
                this.value = this.value.concat(arguments[i])
            } else {
                this.value.push(arguments[i]);
            }
        }
    }
};

Collection.prototype.count = function () {
    return this.value.length;
};
Collection.prototype.removeAt = function () {
    if (typeof arguments[0] !== "number" || arguments[0] <= 0 || arguments[0] > this.value.length) {
        return false;
    } else {
        this.value.splice(arguments[0] - 1, 1);
        return true;
    }
};

/**
 * Создание коллекции из массива значений
 */
Collection.from = function () {
    var colection = new Collection();
    if (arguments[0] instanceof Collection) {
        colection.value = colection.append(arguments[0]);
    }
    if (Object.getPrototypeOf(arguments[0]) === Array.prototype) {
        colection.value=colection.value.concat(arguments[0])
    }
    return colection;
};
