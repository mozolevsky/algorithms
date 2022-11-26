class EventEmitter {
    constructor() {
        this.events = {} // [{cb: fn, once: boolean, isEmitted: boolean}]
    }

    register(name, callback, config = {isOnce: false, dropAfterExec: false, isEmitted: false}) {
        const eventObj = this.events[name];

        if (!eventObj) {
            this.events[name] = [{cb: callback, ...config}]
        } else {
            this.events[name].push({cb: callback, ...config})
        }


    }

    once(name, callback) {
        this.register(name, callback, {isOnce: true, dropAfterExec: false, isEmitted: false})
    }

    onceAndDrop(name, callback) {
        this.register(name, callback, {isOnce: true, dropAfterExec: true, isEmitted: false})
    }

    broadcast(name, ...args) {

        // this.events[name] === [{cb: fn, once: boolean, isEmitted: boolean}]
        this.events[name].forEach(({cb, once, isEmitted}, idx) => {
            
            if (!once) {
                cb(...args);
            }

            if (once && !isEmitted) {
                cb(...args);
                this.events[name][idx].isEmitted = true
            }
        });

        this.events[name] = this.events[name].filter(({dropAfterExec}) => !dropAfterExec)
    }

    showCallbacksOfEvent(eventName) {
        const event = this.events[eventName];

        if (event) {
            console.log(event)
        }
    }

}


const emitter = new EventEmitter();


emitter.register('click', function(arg1, arg2) {
    console.log('button clicked')
})

emitter.once('click', function(arg1, arg2) {
    console.log('click once')
})

emitter.onceAndDrop('click', function(arg1, arg2) {
    console.log('sent request')
})

emitter.broadcast('click');
emitter.broadcast('click');

// emitter.showCallbacksOfEvent('click')
