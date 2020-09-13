const fs = require('fs');
const path = require('path');

const postsDirectory = path.join(process.cwd(), 'content');

export function getAllPageSlugs() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, '')
            }
        };
    });
}
