import express from 'express';

const app = express();
app.set('port', process.env.PORT || 8081);

app.listen(app.get('port'));
console.log('server on port ', app.get('port'));

app.get('/', (req, res) => {
    res.json({message: 'Welcome to my application'})
})