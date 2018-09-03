const { makeStage } = require('../../helpers');

const redact = makeStage(expr => ({ $redact: expr }));

module.exports = {
	redact
};
