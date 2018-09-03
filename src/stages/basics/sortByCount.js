const sortByCount = field => (pipeline = []) => (
	pipeline.concat([{
		$sortByCount: field
	}])
);
