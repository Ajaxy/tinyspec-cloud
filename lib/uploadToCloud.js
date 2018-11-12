const fs = require('fs');
const path = require('path');
const superagent = require('superagent');
const chalk = require('chalk');
const jsYaml = require('js-yaml');
const options = require('./options');

const CLOUD_UPLOAD_URL = 'https://tinyspec.cloud/upload';

async function uploadToCloud() {
  const {
    name, version, key, source,
  } = options;

  let yaml;
  try {
    const content = fs.readFileSync(path.resolve(process.cwd(), source), 'utf8');

    if (source.endsWith('.json')) {
      yaml = jsYaml.safeDump(JSON.parse(content));
    } else if (source.endsWith('.yaml')) {
      jsYaml.safeLoad(content);

      yaml = content;
    } else {
      throw new Error('Only `.yaml` and `.json` sources supported');
    }
  } catch (err) {
    exitWithError(`Failed to parse YAML: ${err.message}`);
  }

  if (typeof name !== 'string' || !/^[a-z][a-z\-\d]*[a-z\d]$/.test(name)) {
    exitWithError('Project name should match rules for subdomains');
  }

  try {
    const { body: { success, newProjectKey, urls } } = await superagent
      .post(CLOUD_UPLOAD_URL)
      .send({
        name, version, key, yaml,
      });

    if (!success) {
      exitWithError('Unknown error');
    }

    // eslint-disable-next-line no-console
    console.log(`
🎉 ${chalk.bold.green('Congratulations!')}

Your project ${chalk.bold.magenta(name)} is ${newProjectKey ? 'created' : 'updated'} in ${chalk.bold('Tinyspec Cloud')}.
In a couple of minutes it will be published to these URLs:
${chalk.cyan(urls)}
`);

    if (newProjectKey) {
      // eslint-disable-next-line no-console
      console.log(`Please store your access key: ${chalk.bold.magenta(newProjectKey)}
${chalk.bold('If you lose your key, you won\'t be able to publish updates to your project.')}
    `);
    }
  } catch (err) {
    const { message } = err.response ? err.response.error || err.response.body : err;
    exitWithError(message);
  }
}

function exitWithError(message) {
  // eslint-disable-next-line no-console
  console.error(`\n${chalk.bold.red('ERR')} 😣 ${message}\n`);
  process.exit(1);
}

module.exports = uploadToCloud;
