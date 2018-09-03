const replaceRoot = newRoot => (pipeline = []) => (
	pipeline.concat([{
		$replaceRoot: { newRoot }
	}])
);

module.exports = {
	replaceRoot
};
