const sort = query => (pipeline = []) => {
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

	return pipeline.concat([{
		$sort: _query
	}]);
};

module.exports = { sort };
