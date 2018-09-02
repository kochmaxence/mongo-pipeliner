const count = field => (pipeline = []) => (
	pipeline.concat([{
		$count: field
	}])
);

module.exports = {
	count
};
