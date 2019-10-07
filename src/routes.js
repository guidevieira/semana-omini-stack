const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashbordController = require('./controllers/DashbordController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/session', SessionController.store)

routes.post('/spots', upload.single('thumbnail'),SpotController.store)
routes.get('/spots',SpotController.index)

routes.get('/dashbord',DashbordController.show)

routes.post('/spots/:spot_id/bookings', BookingController.store)


module.exports = routes;