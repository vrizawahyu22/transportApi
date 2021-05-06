const pool = require('./pool');

/**
 * DB Query
 * @param {object} req
 * @param {object} res
 * @returns {object} object
 */

const query = (queryText, params) => {
  return new Promise((resolve, reject) => {
    pool.query(queryText, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
  })
};

module.exports = {query};