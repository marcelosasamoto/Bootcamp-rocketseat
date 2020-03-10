import { Router } from 'express';

const routes = new Router();
routes.get('/', (req, res) => {
    return res.json('1233w34');
});



export default routes;