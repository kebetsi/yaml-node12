# Node12 compatible release of eemeli's yaml (parser)

This is a node12 compatible release published because it is more convenient to pull from NPM than from GitHub in the CI.

For eemeli's `yaml` lib, check [https://www.npmjs.com/package/yaml](https://www.npmjs.com/package/yaml)

## Publish

1. Run `npm login --registry https://registry.npmjs.org`
2. Comment out `registry=...` in `~/.npmrc`
3. Run `npm publish`
