const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: [true, 'Please add an airline'],
  },
  flightNo: {
    type: String,
    required: [true, 'Please add a flight number'],
  },
  departure: {
    type: String,
    required: [true, 'Please add a departure city'],
  },
  arrival: {
    type: String,
    required: [true, 'Please add an arrival city'],
  },
  departureTime: {
    type: Date,
    required: [true, 'Please add a departure time'],
  },
  arrivalTime: {
    type: Date,
    required: [true, 'Please add an arrival time'],
  },
  seats: {
    type: Number,
    required: [true, 'Please add the number of seats'],
  },
  price: {
    type: Number,
    required: [true, 'Please add the price'],
  },
});

module.exports = mongoose.model('Flight', flightSchema);