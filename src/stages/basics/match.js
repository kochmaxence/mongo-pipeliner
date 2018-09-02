const ObjectId = require('mongoose').Types.ObjectId;

const recursiveCastId = obj => (
	Object
		.keys(obj)
		.reduce((acc, key) => {
			let value = obj[key];

			if (typeof value === 'object')
				value = recursiveCastId(value);

			if (key === '_id')
				value = ObjectId(value);

			acc[key] = value;

			return acc;
		}, {})
);


const match = query => (pipeline = []) => (
	pipeline.concat([{
		// $match: recursiveCastId(query) || {}
		$match: query || {}
	}])
);

module.exports = {
	match
};
