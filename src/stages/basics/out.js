const out = collection => (pipeline = []) => (
	pipeline.concat([{
		$out: collection
	}])
);

module.exports = {
	out
};
