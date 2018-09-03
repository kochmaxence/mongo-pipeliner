const { makeStage } = require('../../helpers');

const group = makeStage(fields => ({ $group: fields }));

module.exports = {
	group
};
