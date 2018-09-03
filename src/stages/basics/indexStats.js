const { makeStage } = require('../../helpers');

const indexStats = makeStage(() => ({ $indexStats: { } }));

module.exports = {
	indexStats
};
