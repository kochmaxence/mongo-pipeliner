const { makeStage } = require('../../helpers');

const count = makeStage(field => ({ $count: field }));

module.exports = {
	count
};
