const { makeStage } = require('../../helpers');

const sort = makeStage(query => {
  const _query = (
    Object
      .keys(query)
      .reduce((acc, key) => {
        const value = query[key];


        acc[key] = (
          typeof value === 'number'
            ? value
            : value === 'asc'
            ? 1
            : -1
        );

        return acc;
      }, {})
  );

  return { $sort: _query };
});

module.exports = { sort };
