import express from 'express';
import router from './routes/index.routes';

const app = express();
app.set('port', process.env.PORT || 8081);
app.use(router);

export default app;