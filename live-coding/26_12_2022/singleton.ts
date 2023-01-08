
class Counter {
    private count: number = 0
    static instance?: any
    #hello = 'world';

    constructor() {
        if (typeof Counter.instance === 'object') {
            return Counter.instance
        }

        Counter.instance = this

        return this
    }

    inc() {
        this.count++
    }

    dec() {
        this.count--
    }

    getCount() {
        return this.count
    }

    getHello() {
        return this.#hello
    }
}

const c1 = new Counter()
c1.inc()
c1.inc()

const c2 = new Counter()
c2.inc()
c2.inc()


// console.log(c1.getCount() === 4)
// console.log(c1.getCount() === c2.getCount())

console.log(c2.getHello())

c2.#hello = '333'

const calculatorMixin = (Base) => class extends Base {
    calc() { }
};
  
const randomizerMixin = (Base) => class extends Base {
    randomize() { }
};
