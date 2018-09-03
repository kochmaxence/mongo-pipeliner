const sortByCount = field => (pipeline = []) => (
	pipeline.concat([{
		$sortByCount: field
	}])
);

module.exports = {
	sortByCount
};
