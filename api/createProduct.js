const pool = require('./config');

const createProduct = (request, response) => {
    const { film, brand, price, amount} = request.body;

    pool.query('INSERT INTO products (film, brand, price, amount) VALUES ($1, $2, $3, $4) RETURNING *', [film, brand, price, amount], (error, results) => {
        if (error) {
            throw error;
        };
        response.status(201).send(`Product added with ID: ${results.rows[0].id}`);
    });


    return response.status(401);
};

module.exports = createProduct;