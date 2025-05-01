const response = require('../services/response.service')

module.exports = (err, req, res, next) => {
    console.error('🔥 Error Handler:', err);

    const statusCode = err.statusCode || 500;
    res.status(statusCode).json(response.getFailResult(err));
};
