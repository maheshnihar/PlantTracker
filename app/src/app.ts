import express from 'express';
import apiRouter from './routes';

const app = express();
const port = process.env.PORT || '8080';

app.use('/planttracker/app', apiRouter);


app.listen(port, err => {
    if (err) return console.error(err);
    return console.log(`Server is listening on ${port}`);
});
