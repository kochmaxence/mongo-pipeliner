const { makeStage } = require('../../helpers');

const listSessions = makeStage(doc => ({ $listSessions: doc }));

module.exports = { listSessions };
