const { pipe } = require('../helpers');

const pipeline = (...stagesFn) => {
	const _pipeline = pipe(...stagesFn.filter(Boolean))([]);

	return _pipeline;
};

const pipelineA = (stagesFn) => pipeline(...stagesFn);

module.exports = { pipeline, pipelineA };
