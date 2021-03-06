import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';


const app = express();
mongoose.createConnection('mongodb://localhost/3000', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
});


app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x.id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product not Found' });
    }
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});
// static data
app.use('/api/users', userRouter);
app.get('/api/products', productRouter);
app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
})
//error catcher from asyc handler in userrouter

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});