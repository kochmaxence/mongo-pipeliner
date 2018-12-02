module.exports = [
	'./stages/basics/group',
	'./stages/basics/lookup',
	'./stages/basics/match',
	'./stages/basics/unwind',
	'./stages/basics/sort',
	'./stages/basics/skip',
	'./stages/basics/limit',
	'./stages/basics/facet',
	'./stages/basics/count',
	'./stages/basics/project',
	'./stages/basics/sortByCount',
	'./stages/basics/sample',
	'./stages/basics/replaceRoot',
	'./stages/basics/redact',
	'./stages/basics/listSessions',
	'./stages/basics/indexStats',
	'./stages/basics/addFields',

	'./stages/compounds/group',
	'./stages/compounds/lookup',
	'./stages/compounds/paginate',

	'./runners/aggregate',
	'./runners/pipeline'
].reduce((acc, file) => (
	Object.assign(acc, require(file))
), {});
