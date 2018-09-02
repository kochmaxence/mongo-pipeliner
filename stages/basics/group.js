const group = fields => (pipeline = []) => (
	pipeline.concat([{
		$group: fields
	}])
);

module.exports = {
	group
};
