const express = require('express');
const mongoose = require('mongoose');
const categoryRouter = require('./routes/category');
const productRouter = require('./routes/product')
const cors = require('cors');
const bodyParser = require('body-parser');



const PORT = 8080;
const app = express();
const mongo = mongoose.connect('mongodb://localhost:27017/tmdt').then(() => {
    console.log("Connect db thành công");
    }).catch((error)=> {
        console.error(error);
        
    })
;

app.use(bodyParser.json({ limit: '10mb' })); // Tăng giới hạn cho JSON
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json());
app.use(cors());
app.use(categoryRouter);
app.use(productRouter);


app.listen(PORT, () => {
    console.log(`Server đang chạy ở: ${PORT}`);
});