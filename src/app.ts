import express, { Request, Response, NextFunction, Application, ErrorRequestHandler } from 'express';
import { connectNodeDatabase } from "../src/Database/connectDatabase"
import {  Server } from 'http';


const app: Application = express();

// const port: number = Number(process.env.PORT);
const port = 3000;
connectNodeDatabase().then((response) => {

    console.log(response)
    const server: Server = app.listen(port, () => console.log(`server is running at port http://127.0.0.1:${port}`))

}).catch((error) => {
    console.log("connectNodeDatabase error occur:", error)
})

// console.log(123)