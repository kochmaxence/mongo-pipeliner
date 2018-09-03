const { makeStage } = require('../../helpers');

const match = makeStage(query => ({ $match: query }));

module.exports = {
	match
};
