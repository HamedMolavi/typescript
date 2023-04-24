import express, { Application } from 'express'
let port: number = 3000
let app: Application = express();

import { router as apiRouter } from './routes/api'

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', apiRouter);


app.listen(port, () => {
    console.log(`\n\nServer is running on port = ${port}\n\n`);

})