const fs = require("fs");
const path = require("path");

const globalsPath = path.join(__dirname, "src/app/globals.css");
let globalsContent = fs.readFileSync(globalsPath, "utf-8");

const standardGrays = `
  --gray-950: #030712;
  --gray-900: #111827;
  --gray-800: #1f2937;
  --gray-700: #374151;
  --gray-600: #4b5563;
  --gray-500: #6b7280;
  --gray-400: #9ca3af;
  --gray-300: #d1d5db;
  --gray-200: #e5e7eb;
  --gray-100: #f3f4f6;
  --gray-50: #f9fafb;
`;

// Replace the inverted grays with standard grays
globalsContent = globalsContent.replace(/--gray-900:.*?;[\s\S]*?--gray-50:.*?;/m, standardGrays.trim());
fs.writeFileSync(globalsPath, globalsContent);


function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(__dirname, "src"), (filePath) => {
  if (filePath.endsWith(".tsx") || filePath.endsWith(".ts")) {
    let content = fs.readFileSync(filePath, "utf-8");

    // Replace inverted grays with correct standard grays mapping
    content = content.replace(/gray-100/g, "TMP_900");
    content = content.replace(/gray-200/g, "TMP_800");
    content = content.replace(/gray-300/g, "TMP_700");
    content = content.replace(/gray-400/g, "TMP_600");
    content = content.replace(/gray-500/g, "TMP_500");
    content = content.replace(/gray-600/g, "TMP_400");
    content = content.replace(/gray-700/g, "TMP_300");
    content = content.replace(/gray-800/g, "TMP_200");
    content = content.replace(/gray-900/g, "TMP_100");
    content = content.replace(/gray-50/g, "TMP_950");

    // Replace TMP back to gray
    content = content.replace(/TMP_/g, "gray-");

    // Buttons that were bg-gray-100 text-black will now be bg-gray-900 text-black (invisible)
    // We want primary CTA buttons to be white text.
    // Replace text-black with text-white on all these primary buttons.
    content = content.replace(/text-black/g, "text-white");

    fs.writeFileSync(filePath, content);
  }
});
console.log("Colors fixed successfully");
