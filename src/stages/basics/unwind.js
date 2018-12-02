const { makeStage } = require('../../helpers');

const unwind = makeStage((path, { includeArrayIndex, preserve } = {}) => (
  {
    $unwind: Object.assign(
      {
        path: '$'+path
      },
      (includeArrayIndex && { includeArrayIndex }),
      (preserve && { preserveNullAndEmptyArrays: preserve })
    )
  }
));

module.exports = {
  unwind
};
