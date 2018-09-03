# mongo-pipeliner

Yet Another Pipeline Generator... With bonuses.

## Status

Until it is published to NPM:
- Consider the whole repository **unstable**.
- All changes will be made directly in **master**.
- Dead code ~can~ will happen.
- Weird things.

## Roadmap

Before being published to npm, the following todo list must be completed:

- Documentation
- All mongo stages
- Tests
- CI

First version will be 0.0.0. More work must be done to have a clean API.

When the API is production-ready, the version will jump to 1.0.0 and stay semver.

## Getting started

### Prerequisites

The package `mongodb` is used to cast ObjectId. If you already use a library like `mongoose`, you should already have it.

### Installing

`npm install --save mongo-pipeliner`

## Usage

## Contributing

## Documentation

### runners

* `pipeline`
* `pipelineA`
* `aggregate`
* `aggregatePaginate`

### stages

#### Basics

* `count`
* `facet`
* `group`
* `limit`
* `lookup`
* `match`
* `project`
* `skip`
* `sort`
* `unwind`

#### Compounds

* `selfGroup`
* `groupWithObject`
* `lookupUnwind`
* `unwindLookup`
* `lookups`
* `lookupSubRef`
* `lookupSubRefs`
* `paginate`
