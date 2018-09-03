const sample = size => (pipeline = []) => (
	pipeline.concat([{
		$sample: { size }
	}])
);

module.exports = {
	sample
};
