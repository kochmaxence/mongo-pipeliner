const { makeStage } = require('../../helpers');

const project = makeStage(query => ({ $project: query }));

module.exports = {
	project
};
