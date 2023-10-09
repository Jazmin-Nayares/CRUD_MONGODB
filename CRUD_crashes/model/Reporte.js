const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReporteSchema = new Schema ({
    "CRASH DATE" : String, 
    "CRASH TIME" : String,
    "BOROUGH" : String, 
    "NUMBER OF PERSONS INJURED" : Number, 
    "NUMBER OF PERSONS KILLED" : Number, 
    "CONTRIBUTING FACTOR VEHICLE 1" : String, 
    "CONTRIBUTING FACTOR VEHICLE 2" : String, 
    "VEHICLE TYPE CODE 1" : String, 
    "VEHICLE TYPE CODE 2" : String
}, {versionKey:false}) 

module.exports = mongoose.model('car_crashes', ReporteSchema)


