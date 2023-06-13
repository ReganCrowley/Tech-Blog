const { engine } = require('express-handlebars');
const { join } = require('path');
const express = require('express');
const session = require('express-session');

const routes = require('./routes');

const app = express();
const port = 3000;

// Set template engine
app.engine('hbs', engine({ defaultLayout: 'main.hbs' }));
app.set('view engine', 'hbs');
app.set('views', join(__dirname, 'views'));

// Set middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set public dir
app.use(express.static(join(__dirname, 'public')));

// Set routes
app.use('/', routes);

app.listen(port, () => {
  console.log(`[SERVER]: http://localhost:${port}/`);
});
