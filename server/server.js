import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import ServicesRoutes from './services/services.routes';
import ViewRoutes from './view/view.routes';

const app = express();

app.use(favicon(path.join(__dirname, '../public/images/favicon.jpg')));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', ViewRoutes);
app.use('/services', ServicesRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('app listening on', port);
});
