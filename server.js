require('express-async-errors');
const AppError = require('./src/utils/AppError');
const express = require('express');
const routes = require('./src/routes');

const app = express();
const PORT = 3333;

app.use(express.json());

app.use(routes);

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    if (error instanceof AppError) {
        console.error(error);
        return res
            .status(error.statusCode)
            .json({ status: error.statusCode, error: error.message });
    }
    console.error(error);

    return res
        .status(500)
        .json({ status: '500', error: 'Internal server error' });
});

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});
