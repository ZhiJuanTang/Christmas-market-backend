import express from 'express';
import marketsRouter from "./routes/markets.js"

const app = express();
const port = process.env.PORT || 5000;
app.use( '/markets', marketsRouter )




app.listen(port, () => {
    console.log(`server ${port} is up and running`);
} )




//npm NODE start walk through:
//https://docs.google.com/document/d/1a_VgkGf55BWOlN0GLYpI_d4APs4jsC_2Afxv6Hr8IC8/edit