import fs from 'fs';
import path from 'path';
import process from 'process';

const workspaces = JSON.parse(fs.readFileSync('./package.json', 'utf-8')).workspaces;
const [newVersion] = process.argv.slice(2);

if (!newVersion || !workspaces) {
  console.error('Usage: node update-versions.mjs <new-version>');
  process.exit(1);
}

function updateVersion(packageDir, newVer) {
  const packageJsonPath = path.join(packageDir, 'package.json');

  if (!fs.existsSync(packageJsonPath)) {
    return;
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
  packageJson.version = newVer;

	if(packageDir === './configs' ) {
		Object.keys(packageJson.dependencies).forEach((key) => {
			if(key.includes('@cyber-walrus')){
				packageJson.dependencies[key] = newVer;
			}
		})
	}

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log(`Updated version in ${packageJsonPath}`);
}


workspaces.forEach((folder) => {
	updateVersion(`./${folder}`, newVersion);
})