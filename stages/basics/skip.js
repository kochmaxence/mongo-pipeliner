
const skip = n => (pipeline = []) => (
	pipeline.concat([{
		$skip: n
	}])
);

module.exports = { skip };
