const { makeStage } = require('../../helpers');

const sample = makeStage(size => ({ $sample: { size }}));

module.exports = {
	sample
};
