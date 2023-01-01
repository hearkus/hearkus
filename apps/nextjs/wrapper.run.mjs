import { execSync } from 'child_process';

const port = process.env.NEXT_PORT || 3000;
const command = `next dev -p ${port}`;

execSync(command, { stdio: 'inherit' });
