import express from 'express';
import middlewares from './middlewares';
import routesgraph from './routesgraph';

const app = express();
middlewares(app);
routesgraph(app);

export default app;
