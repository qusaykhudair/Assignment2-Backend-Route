// 1. Write a function that logs the current file path and directory. 
// function logCurrentFileAndDir() {
//   console.log({ File: __filename, Dir: __dirname });
// }
// logCurrentFileAndDir();


// 2. Write a function that takes a file path and returns its file name.
// const path = require('node:path');

// function getFileName(filePath) {
//   return path.basename(filePath);
// }

// console.log(getFileName("/user/files/report.pdf")); // "report.pdf"


// 3. Write a function that builds a path from an object .
// const path = require('node:path');

// function buildPath(obj) {
//   return path.format(obj);
// }

// console.log(buildPath({ dir: "/folder", name: "app", ext: ".js" }));

// 4. Write a function that returns the file extension from a given file path. 
// const path = require('node:path');

// function getExtension(filePath) {
//   return path.extname(filePath);
// }

// console.log(getExtension("/docs/readme.md")); // ".md"


// 5. Write a function that parses a given path and returns its name and ext.
// const path = require('node:path');
// function parseNameExt(filePath) {
//   const parsed = path.parse(filePath);
//   return { Name: parsed.name, Ext: parsed.ext };
// }
// console.log(parseNameExt("/home/app/main.js"));

// 6. Write a function that checks whether a given path is absolute.
// const path = require('node:path');
// function isAbsolutePath(filePath) {
//   return path.isAbsolute(filePath);
// }
// console.log(isAbsolutePath("/home/user/file.txt")); // true


// 7. Write a function that joins multiple segments.
// const path = require('node:path');
// function joinSegments(...segments) {
//   return path.join(...segments);
// }
// console.log(joinSegments("src", "components", "App.js"));


// 8. Write a function that resolves a relative path to an absolute one.
// const path = require('node:path');

// function resolvePath(relativePath) {
//   return path.resolve(relativePath);
// }

// console.log(resolvePath("./index.js"));

// 9. Write a function that joins two paths. 
// const path = require('node:path');

// function joinTwoPaths(p1, p2) {
//   return path.join(p1, p2);
// }

// console.log(joinTwoPaths("/folder1", "folder2/file.txt"));

// 10. Write a function that deletes a file asynchronously.
// const fs = require('node:fs');
// function deleteFile(filePath) {
//   fs.unlink(filePath, (err) => {
//     if (err) return console.log("Error:", err);
//     console.log(`${path.basename(filePath)} is deleted.`);
//   });
// }


// 11. Write a function that creates a folder synchronously. 
// const fs = require('node:fs');

// function createFolderSync(folderPath) {
//   fs.mkdirSync(folderPath, { recursive: true });
//   console.log("Success");
// }


// 12. Create an event emitter that listens for a "start" event and logs a welcome message.
// const EventEmitter = require('node:events');
// const emitter = new EventEmitter();

// emitter.on("start", () => console.log("Welcome event triggered!"));
// emitter.emit("start");


// 13. Emit a custom "login" event with a username parameter.
// const EventEmitter = require('node:events');
// const emitter = new EventEmitter();

// emitter.on("login", (username) => {
//   console.log(`User logged in: ${username}`);
// });

// emitter.emit("login", "Ahmed");


// 14. Read a file synchronously and log its contents. (1 Grade)
// const fs = require('node:fs');

// function readFileSyncContent(filePath) {
//   const data = fs.readFileSync(filePath, 'utf-8');
//   console.log("the file content =>", data);
// }

// readFileSyncContent("notes.txt");


// 15. Write asynchronously to a file.
// const fs = require('node:fs');

// function writeAsync(path, content) {
//   fs.writeFile(path, content, (err) => {
//     if (err) return console.log(err);
//     console.log("File saved asynchronously.");
//   });
// }

// writeAsync("./async.txt", "Async save");

// 16. Check if a directory exists.
// const fs = require('node:fs');

// function dirExists(path) {
//   return fs.existsSync(path);
// }

// console.log(dirExists("./notes.txt")); // true

// 17. Write a function that returns the OS platform and CPU architecture. 
// const os = require('node:os');

// function getOSInfo() {
//   return { Platform: os.platform(), Arch: os.arch() };
// }

// console.log(getOSInfo());

