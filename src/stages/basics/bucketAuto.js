const { makeStage } = require('../../helpers');

const bucketAuto = makeStage(spec => ({ $bucketAuto: spec }));

module.exports = { bucketAuto };
