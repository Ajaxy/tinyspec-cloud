const chalk = require('chalk');
const yargs = require('yargs');

const description = `Welcome to ${chalk.blue.bold('tinyspec Cloud')}!

This CLI allows you to deploy your OpenAPI specification to the Cloud and then
access its auto-generated versions in different formats (HTML, PDF, YAML, JSON).

More info on ${chalk.green.bold('https://tinyspec.cloud')}.

${chalk.gray('Note that environment variables prefixed by `TINYSPEC_` are supported for options setting.')}`;

const { argv } = yargs
  .env('TINYSPEC')
  .version(false)
  .usage('$0', description)
  .option('name', {
    alias: 'n',
    description: 'Project Name',
    required: true,
  })
  .option('version', {
    alias: 'v',
    description: 'Project Version',
  })
  .option('key', {
    alias: 'k',
    description: 'Project Secret Key',
  })
  .option('source', {
    alias: 's',
    description: 'Source OpenAPI specification file in YAML or JSON format',
    default: 'openapi.yaml',
  })
  .alias('h', 'help');

module.exports = argv;
