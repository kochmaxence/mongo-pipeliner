
const limit = n => (pipeline = []) => (
	pipeline.concat([{
		$limit: n
	}])
);

module.exports = { limit };
