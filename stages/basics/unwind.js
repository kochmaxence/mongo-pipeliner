const unwind = (path, { includeArrayIndex, preserve } = {}) => (pipeline = []) => (
	pipeline.concat([{
		$unwind: Object.assign(
			{
				path: '$'+path
			},
			(includeArrayIndex && { includeArrayIndex }),
			(preserve && { preserveNullAndEmptyArrays: preserve })
		)
	}])
);

module.exports = {
	unwind
};
