/* eslint-disable max-len */
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const statusHelper = require('../helpers/status');
const env = require('../../env');

const {
  errorMessage, status,
} = statusHelper;

dotenv.config();

/**
 * Verify Token
 * @param {object} req 
 * @param {object} res 
 * @param {object} next
 * @returns {object|void} response object 
*/

const verifyToken = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    errorMessage.error = 'Token not provided';
    return res.status(status.bad).send(errorMessage);
  }
  try {
    const decoded =  jwt.verify(token, process.env.SECRET);
    req.user = {
      email: decoded.email,
      user_id: decoded.user_id,
      is_admin: decoded.is_admin,
      first_name: decoded.first_name,
      last_name: decoded.last_name,
    };
    next();
  } catch (error) {
    errorMessage.error = 'Authentication Failed';
    return res.status(status.unauthorized).send(errorMessage);
  }
};

module.exports = verifyToken;
