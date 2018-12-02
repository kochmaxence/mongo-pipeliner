const { makeStage } = require('../../helpers');

const addFields = makeStage(query => ({ $addFields: query }));

module.exports = { addFields };
