require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const { PORT = 3000 } = process.env;

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res)=>{
    return res.json({
        status: true,
        message: 'Welcome Railway',
        error: null,
        data: null
    });
});

const authRouter = require ('./routes/authRoutes');
app.use('/api/v1/auth', authRouter);

const imageRouter = require ('./routes/imageRoutes');
app.use('/api/v1/image', imageRouter);

app.get('*', (req, res) => {
    return res.status(404).json({
        error: 'End point is not registered'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
})

