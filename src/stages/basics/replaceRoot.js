const { makeStage } = require('../../helpers');

const replaceRoot = makeStage(newRoot => ({ $replaceRoot: { newRoot }}));

module.exports = {
	replaceRoot
};
