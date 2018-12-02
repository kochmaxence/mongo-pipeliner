const { makeStage } = require('../../helpers');

const bucket = makeStage(spec => ({ $bucket: spec }));

module.exports = { bucket };
