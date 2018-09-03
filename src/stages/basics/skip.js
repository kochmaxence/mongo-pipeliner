const { makeStage } = require('../../helpers');

const skip = makeStage(n => ({ $skip: n }));

module.exports = { skip };
