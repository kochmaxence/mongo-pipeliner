const project = (query) => (pipeline = []) => (
	pipeline.concat([{
		$project: query
	}])
);

module.exports = {
	project
};
