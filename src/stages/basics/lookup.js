const { makeStage } = require('../../helpers');

const lookup = makeStage((localField, { from, foreignField, as } = {}) => (
	{
		$lookup: {
			localField,
			from: from || localField,
			foreignField: foreignField || '_id',
			as: as || localField
		}
	}
));

module.exports = {
	lookup
};
