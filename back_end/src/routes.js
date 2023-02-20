import {Router} from 'express';
const routes = new Router;

import customers  from './app/controllers/CustomersControllers.js'

routes.get('/customers',customers.index)
routes.get('/customers/:id',customers.show)
routes.post('/customers',customers.create)
routes.put('/customers/:id',customers.update)
routes.delete('/customers/:id',customers.destroy)

export default  routes;