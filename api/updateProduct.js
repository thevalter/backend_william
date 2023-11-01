const pool = require('./config');

const updateProduct = (request, response) => {
    const id = parseInt(request.params.id);
    const { film, brand, price, amount } = request.body;

    pool.query(
        'UPDATE products SET film = $1, brand = $2, price = $3, amount = $4 WHERE id = $5',
        [film, brand, price, amount, id],
        (error, results) => {
            if (error) {
                throw error;
            };
            response.status(200).send(`Product modified with ID: ${id}`);
        }
    );
};

module.exports = updateProduct;