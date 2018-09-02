const lookup = (localField, { from, foreignField, as } = {}) => (pipeline = []) => (
	pipeline.concat([{
		$lookup: {
			localField,
			from: from || localField,
			foreignField: foreignField || '_id',
			as: as || localField
		}
	}])
);

module.exports = {
	lookup
};
