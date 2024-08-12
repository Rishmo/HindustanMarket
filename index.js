const express  = require(  'express')
const colors = require( 'colors')
const dotenv = require( 'dotenv')
const morgan  = require( 'morgan')
const connectDB   = require( './config/db.js')
const app =express()
const authRoute  = require( './routes/authRoute.js')
const categoryRoute  = require( './routes/categoryRoute.js')
const productRoutes  = require( './routes/productRoutes.js')
const path = require('path')
const cors  = require( 'cors')


dotenv.config();
connectDB();


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.use("/api/v1/auth",authRoute);
app.use("/api/v1/category", categoryRoute)
app.use("/api/v1/product",productRoutes)



app.use(express.static('../build'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/frontend','build','index.html'));
});


app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running on ${process.env.PORT}`.bgBlack.cyan);
})