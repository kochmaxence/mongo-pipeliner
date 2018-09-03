const { makeStage } = require('../../helpers');

const facet = makeStage(query => ({ $facet: query }));

module.exports = { facet };
