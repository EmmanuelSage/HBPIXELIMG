const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const folderPath = './bosses/firstdiffbee'; // Change this to your folder path
const targetWidth = 219;
const targetHeight = 219;
// const targetWidth = 141;
// const targetHeight = 147;

async function processImages(directory) {
    try {
        const files = fs.readdirSync(directory);

        for (const file of files) {
            const filePath = path.join(directory, file);

            // Ensure it's a file and not a directory
            if (!fs.lstatSync(filePath).isFile()) continue;

            try {
                // Read image metadata
                const metadata = await sharp(filePath).metadata();

                // Check dimensions
                if (metadata.width !== targetWidth || metadata.height !== targetHeight) {
                    console.log(`Resizing ${file} (${metadata.width}x${metadata.height}) -> ${targetWidth}x${targetHeight}`);

                    const tempFilePath = `${filePath}.png`;

                    // Resize and overwrite the file
                    await sharp(filePath)
                        .resize(targetWidth, targetHeight)
                        .toFile(tempFilePath);

                    // Replace original file with resized file
                    fs.unlinkSync(filePath); // Delete old file
                    fs.renameSync(tempFilePath, filePath); // Rename temp file

                    console.log(`✅ Resized: ${file}`);
                } else {
                    console.log(`✅ Skipping ${file} (Already ${targetWidth}x${targetHeight})`);
                }
            } catch (err) {
                console.error(`❌ Error processing ${file}:`, err.message);
            }
        }
    } catch (err) {
        console.error('Error reading directory:', err.message);
    }
}

// Run the script
processImages(folderPath);
