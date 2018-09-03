const { makeStage } = require('../../helpers');

const limit = makeStage(n => ({ $limit: n }));

module.exports = { limit };
