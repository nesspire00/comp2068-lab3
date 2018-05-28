const connect = require('connect');
const url = require('url');

const app = connect();

const add = (req, res, next) => {
  const queryString = url.parse(req.url, true).query;
  const { x } = queryString;
  const { y } = queryString;

  res.end(`
  <h1> ${x} + ${y} = ${parseFloat(x) + parseFloat(y)}</h1>
  `);
};

const subtract = (req, res, next) => {
  const queryString = url.parse(req.url, true).query;
  const { x } = queryString;
  const { y } = queryString;

  res.end(`
    <h1> ${x} - ${y} = ${parseFloat(x) - parseFloat(y)}</h1>
    `);
};

const multiply = (req, res, next) => {
  const queryString = url.parse(req.url, true).query;
  const { x } = queryString;
  const { y } = queryString;

  res.end(`
    <h1> ${x} * ${y} = ${parseFloat(x) * parseFloat(y)}</h1>
    `);
};

const divide = (req, res, next) => {
  const queryString = url.parse(req.url, true).query;
  const { x } = queryString;
  const { y } = queryString;

  res.end(`
    <h1> ${x} / ${y} = ${parseFloat(x) / parseFloat(y)}</h1>
    `);
};

const fallback = (req, res, next) => {
  const queryString = url.parse(req.url, true);
  res.end(`<h1>The following is not a correct function: ${queryString.pathname}</h1>`,);
};

// Routing
app.use('/add', add);
app.use('/multiply', multiply);
app.use('/subtract', subtract);
app.use('/divide', divide);
app.use(fallback);

// Start the app on port 3000
app.listen(3000);
