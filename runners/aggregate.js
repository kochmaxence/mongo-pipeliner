const { pipeline } = require('./pipeline');

const { paginate } = require('../stages/compounds/paginate');

const aggregate = (model, options) => (...stagesFn) => ( // eslint-disable-line no-unused-vars
	model
		.aggregate(pipeline(...stagesFn))
);

/* eslint-disable complexity, no-unused-vars */
const aggregatePaginate = (model, options) => (...stagesFn) => (page, limit) => {
	let {
		countField,
		resultField,

		hasNextField,
		hasPrevField,

		nextPageField,
		prevPageField,

		pagesField,
		limitField,

		pageField,

		..._options
	} = options;

	pageField = pageField || 'page';
	countField = countField || 'count';
	resultField = resultField || 'items';
	hasNextField = hasNextField || 'hasNextPage';
	hasPrevField = hasPrevField || 'hasPrevPage';
	pagesField = pagesField || 'pages';
	limitField = limitField || 'limit';

	nextPageField = nextPageField || 'nextPage';
	prevPageField = prevPageField || 'prevPage';

	const _page = parseInt(page);
	const _limit = parseInt(limit);

	const skip = (_page - 1) * _limit;

	const _pipeline = paginate(resultField, countField, skip, _limit)(pipeline(...stagesFn));

	return model
		.aggregate(_pipeline)
		.then(([ result ]) => {
			const count = result[countField].length
				? result[countField][0][countField]
				: 0;

			const items = result[resultField];

			const hasNext = (skip + _limit) < count;
			const hasPrev = skip > 0;

			const nextPage = hasNext ? _page + 1 : null;
			const prevPage = hasPrev ? _page - 1 : null;

			const pages = Math.ceil(count / _limit);

			return {
				[countField]: count,
				[limitField]: _limit,
				[hasNextField]: hasNext,
				[hasPrevField]: hasPrev,
				[nextPageField]: nextPage,
				[prevPageField]: prevPage,
				[pagesField]: pages,
				[pageField]: _page,
				[resultField]: items
			};
		});
};
/* eslint-enable complexity, no-unused-vars */

module.exports = {
	aggregate,
	aggregatePaginate
};
