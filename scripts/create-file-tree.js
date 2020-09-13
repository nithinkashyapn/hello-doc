const fs = require('fs');
const path = require('path');

const postsDirectory = path.join(process.cwd(), '../content');

const getAllPageSlugs = () => {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, '')
            }
        };
    });
};

const GetFiles = async () => {
    const entries = getAllPageSlugs();

    let templateString = ``

    fs.writeFile('../data/files.json', JSON.stringify(entries), function (
        err,
        data
    ) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    });
};

GetFiles();
