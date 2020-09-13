const fs = require('fs');
const path = require('path');

const postsDirectory = path.join('content');

const getAllPageSlugs = () => {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return fileName.replace(/\.md$/, '');
    });
};

const GetFiles = async () => {
    const entries = getAllPageSlugs();

    let templateStringStart = `module.exports = {`;
    let templateStringEnd = `}`;

    entries.forEach((entry) => {
        console.log(entry);
    });

    fs.writeFile(
        './data/files.js',
        JSON.stringify(templateStringStart + entries + templateStringEnd),
        function (err, data) {
            if (err) {
                return console.log(err);
            }
            console.log(data);
        }
    );
};

GetFiles();
