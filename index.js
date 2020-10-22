const express = require('express');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: `${__dirname}/views/partials`
}));


app.use(express.static('public'));

const fakeApi = () => 'XXX';

app.get('/', (req, res) => {
    res.render('main', {proPlayer: fakeApi()});
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});