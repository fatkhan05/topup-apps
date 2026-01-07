import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const versionPath = join(process.cwd(), 'version.json');
    const versionData = JSON.parse(readFileSync(versionPath, 'utf8'));
    
    return Response.json({ version: versionData.version });
  } catch (error) {
    console.error('Error reading version:', error);
    return Response.json({ version: '1.0.0' }, { status: 200 });
  }
}

