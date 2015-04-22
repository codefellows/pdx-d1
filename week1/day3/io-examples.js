var buffer = new Buffer(8);
buffer.write("Hello");
buffer.write("World");
console.log(buffer.toString());

// We will need node.js OOP functionality to create a custom event.
var inherits = require('util').inherits;

// As well, the event emitter.
var EventEmitter = require('events').EventEmitter;
var MyCustomEventEmitter = function() {};

// Subclass 
inherits(MyCustomEventEmitter, EventEmitter);

var emitter = new MyCustomEventEmitter();
emitter.on('myCustomEvent', function(data) {
  console.log(data);
});

emitter.emit('myCustomEvent', 'here is some data');
