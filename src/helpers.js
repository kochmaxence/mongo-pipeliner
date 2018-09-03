const compose = f => g => x => f(g(x));

const pipe = (...fns) => (
	fns
		.reduce((f, g) => (
			(...args) => g(f(...args))
		))
);

const makeStage = f => (...args) => (pipeline = []) => (
	pipeline.concat(f(...args))
);

module.exports = {
	compose,
	pipe
};
