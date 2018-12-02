const { group } = require('../basics/group');

const selfGroup = fields => (pipeline = []) => (
	group(fields.reduce((acc, field) => {
		const data = Array.isArray(field) ? field : [field];

		const key = data[0];
		const value = (
			data[1]
				? data[1]
				: key === '_id'
				? '$_id'
				: { $first: '$'+key }
		);


		acc[key] = value;

		return acc;
	}, {}))(pipeline)
);

const groupWithObject = (obj, overrides) => (pipeline = []) => {
	let keys = Object.keys(obj);
	const overridesKeys = Object.keys(overrides || {});

	if (overrides) {
		keys = keys
			.filter(key => !overridesKeys.includes(key))
			.concat(overridesKeys.reduce((acc, key) => {
				if (!overrides[key])
					return acc;

				acc.push([ key, overrides[key] ]);

				return acc;
			}, []));
	}

	return selfGroup(keys)(pipeline);
};

module.exports = {
	selfGroup,
	groupWithObject
};
