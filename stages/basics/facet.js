
const facet = query => (pipeline = []) => (
	pipeline.concat([{
		$facet: query
	}])
);

module.exports = { facet };
