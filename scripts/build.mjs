import { copyFileSync, existsSync, renameSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const rootIndex = 'index.html';
const sourceIndex = 'index.source.html';
const backupIndex = '.index.deploy.backup.html';

function run(command, args) {
  const result = spawnSync(command, args, { stdio: 'inherit', shell: process.platform === 'win32' });
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(' ')} failed`);
  }
}

if (existsSync(backupIndex)) {
  throw new Error(`${backupIndex} already exists. Restore or remove it before building.`);
}

try {
  renameSync(rootIndex, backupIndex);
  copyFileSync(sourceIndex, rootIndex);
  run('tsc', ['-b']);
  run('vite', ['build']);
  copyFileSync('dist/index.html', 'dist/404.html');
} finally {
  if (existsSync(backupIndex)) {
    renameSync(backupIndex, rootIndex);
  }
}
