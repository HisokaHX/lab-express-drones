// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');


const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";


const drones = [
    {
        name: "Creeper XL 500",
        propellers: 4,
        maxSpeed: 12,
    },
    {
        name: "Racer 57",
        propellers: 4,
        maxSpeed: 20,
    },
    {
        name: "Courier 3000i",
        propellers: 6,
        maxSpeed: 18,
    },
]




mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

        return Drone.create(drones);
    })
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} books`);

        return mongoose.connection.close();
    })
    .then(() => {
        console.log('DB connection closed!');
    })
    .catch(err => {
        console.error(`Error connecting to mongo: ${err}`);
    });