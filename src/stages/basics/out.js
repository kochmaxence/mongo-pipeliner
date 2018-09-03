const { makeStage } = require('../../helpers');

const out = makeStage(collection => ({ $out: collection }));

module.exports = {
	out
};
