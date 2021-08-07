const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const path = require('path');

const express = require('express');
const expsess = require('express-session')
const exphbs = require('express-handlebars');

const SqlizeStor = require('connect-session-sequelize')(expsess.Store);

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', exphbs({helpers, extname: '.hbs'}));
app.set('view engine', '.hbs');

const PORT = process.env.PORT || 3001;

const sess = {
	secret: process.env.sessPw,
	cookie: {maxAge: (30 * 60 * 1000)}, //30 minutes = 1800000 ms
	resave: false,
	saveUnitialized: true,
	store: new SqlizeStor({
		db: sequelize
	})
};

app.use(expsess(sess));
app.use(routes);

sequelize.sync({force: false}).then(() => {
	app.listen(PORT, () => {
		console.log(`Now listening at http://localhost:${PORT} 🚀`);
	})
});


