const { pipeline } = require('./pipeline');

const { paginate } = require('../stages/compounds/paginate');

/**
 * Run `aggregate` on model
 *
 * `(model, options) => (...stagesFn)`
 *
 * @since 0.0.0
 *
 * @param {object} model A mongoose model or any object with an `aggregate` method.
 * @param {function} model.aggregate The function receiving the pipeline.
 * @param {object} options
 * @param {...function} stagesFn Stages functions
 * @returns {object} pipeline result
 *
 * @example
 * const pipeline = aggregate(match({ name: 'username' }));
 * console.log(pipeline);
 */
const aggregate = (model, options) => (...stagesFn) => ( // eslint-disable-line no-unused-vars
  model
    .aggregate(pipeline(...stagesFn))
);

/* eslint-disable complexity, no-unused-vars */
/**
 * Run `aggregate` on model, with an extra step at the end to produce pagination.
 *
 * `(model, options) => (...stagesFn) => (page, limit)`
 *
 * @since 0.0.0
 *
 * @param {object} model A mongoose model or any object with an `aggregate` method.
 * @param {function} model.aggregate The function receiving the pipeline.
 * @param {object} options
 * @param {string} options.countField String used as a key for the `count` field.
 * @param {string} options.resultField String used as a key for the `result` field.
 * @param {string} options.hasNextField String used as a key for the `hasNext` field.
 * @param {string} options.hasPrevField String used as a key for the `hasPrev` field.
 * @param {string} options.nextPageField String used as a key for the `nextPage` field.
 * @param {string} options.prevPageField String used as a key for the `prevPage` field.
 * @param {string} options.pagesField String used as a key for the `pages` field.
 * @param {string} options.limitField String used as a key for the `limit` field.
 * @param {string} options.pageField String used as a key for the `pages` field.
 * @param {...function} stagesFn Stages functions
 * @param {number} page Current page
 * @param {number} limit Limit of documents to return
 * @returns {object} pipeline result
 *
 * @example
 * const getUsers = aggregatePaginate(User)
 * getUsers([ match({ name: 'username' }) ])(0, 10)
 *   .then(console.log);
 */
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
