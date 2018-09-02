
const { lookup } = require('../basics/lookup');
const { unwind } = require('../basics/unwind');

const lookupUnwind = (field, opts) => (pipeline = []) => (
	unwind(field, opts)(lookup(field, opts)(pipeline))
);

const unwindLookup = (field, opts) => (pipeline = []) => (
	lookup(field, opts)(unwind(field, opts)(pipeline))
);

const lookups = lookups => (pipeline = []) => (
	lookups.reduce((pipeline, [ field, opts ]) => (
		lookup(field, opts)(pipeline)
	), pipeline)
);

const lookupSubRef = (path, opts) => (pipeline = []) => {
	const _path = path.split('.');
	const _field = _path.pop(); // eslint-disable-line no-unused-vars

	return lookup(`${path}`, opts) (unwind(_path.join('.'), { preserve: opts.preserve || false })(pipeline));
};

const lookupSubRefs = lookups => (pipeline = []) => (
	lookups.reduce((pipeline, ([ path, opts ]) => (
		lookupSubRef(path, opts)(pipeline)
	)), pipeline)
);

module.exports = {
	lookupUnwind,
	unwindLookup,
	lookups,
	lookupSubRef,
	lookupSubRefs
};
