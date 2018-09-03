const redact = expr => (pipeline = []) => (
	pipeline.concat([{
		$redact: expr
	}])
);

module.exports = {
	redact
};
