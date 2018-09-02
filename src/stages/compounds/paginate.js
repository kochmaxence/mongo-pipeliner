const { facet } = require('../basics/facet');
const { skip } = require('../basics/skip');
const { limit } = require('../basics/limit');
const { count } = require('../basics/count');

const { pipeline } = require('../../runners/pipeline');

const paginate = (resultField, countField, _skip, _limit) => (_pipeline = []) => (
	facet({
		[resultField]: pipeline(
			skip(_skip),
			limit(_limit)
		),
		[countField]: pipeline(
			count(countField)
		)
	})(_pipeline)
);

module.exports = { paginate };
