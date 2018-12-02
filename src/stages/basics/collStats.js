const { makeStage } = require('../../helpers');

const collStats = makeStage(spec => ({ $collStats: spec }));

module.exports = { collStats };
