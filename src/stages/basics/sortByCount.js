const { makeStage } = require('../../helpers');

const sortByCount = makeStage(field => ({ $sortByCount: field }));

module.exports = {
	sortByCount
};
