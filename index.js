class Event{

    constructor(){
        this.events = {};
    }

    subscribe(eventName, fn) {

        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    }

    unsubscribe(eventName, fn) {

        if (this.events[eventName]) {
            for (let i = 0; i < this.events[eventName].length; i++) {
                if (this.events[eventName][i] === fn) {
                    this.events[eventName].splice(i, 1);
                    break;
                }
            };
        }
    }

    publish(eventName, data) {

        if (this.events[eventName]) {
            this.events[eventName].forEach(function(fn) {
                fn(data);
            });
        }
    }

}

function test1(){
    const event = new Event();

    event.subscribe("event1", function(data){
        console.log("subscriber1 subscribe to event1 -> " + data);
    });

    event.subscribe("event1", function(data){
        console.log("subscriber2 subscribe to event1 -> " + data);
    });

    event.subscribe("event1", function(data){
        console.log("subscriber3 subscribe to event1 -> " + data);
    });

    event.subscribe("event1", function(data){
        console.log("subscriber4 subscribe to event1 -> " + data);
    });

    event.publish("event1", "some data");
}

test1();