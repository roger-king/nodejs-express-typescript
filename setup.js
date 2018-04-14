const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const directories = __dirname.split('/');
const projectName = directories[directories.length - 1];

const rewritePackageJson = async () => {
    const { stdout, stderr } = await exec('git config user.name');

    if (stderr) {
        console.log(`Error getting git config username ${JSON.stringify(stderr)}`);
        process.exit(1);
    }

    const name = stdout;

    fs.readFile('./package.json', 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading package json to edit: ${err}`);
            process.exit(1);
        }

        let newPackageJson = data.replace('nodejs-express-typescript-seed', projectName).replace('roger king', name);

        fs.writeFileSync('./package.json', newPackageJson);
    });
};

const createReadeMe = async () => {
    await exec('mv README.md Struct.md');
    fs.writeFileSync('README.md', `# ${projectName}\n[Project File Structure Docs](./Struct.md)`);
};

const gitInit = async () => {
    await exec('rm -rf .git');
    await exec('git init');
};

const setup = () => {
    rewritePackageJson();
    createReadeMe();
    gitInit();

    // Clean Up Setup file :)
    exec('rm setup.js');
};

setup();
