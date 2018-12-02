const { pipe } = require('../helpers');

/**
 * Generate a pipeline, without executing it
 *
 * `(...stagesFn)`
 *
 * @since 0.0.0
 *
 * @param {...function} stagesFn Stages function
 * @returns {object} pipeline
 */
const pipeline = (...stagesFn) => {
  const _pipeline = pipe(...stagesFn.filter(Boolean))([]);

  return _pipeline;
};

/**
 * Generate a pipeline, without executing it
 *
 * `(stagesFn)`
 *
 * @since 0.0.0
 *
 * @param {array} stagesFn Stages function
 * @returns {object} pipeline
 */
const pipelineA = (stagesFn) => pipeline(...stagesFn);

module.exports = { pipeline, pipelineA };
