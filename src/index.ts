import path from "path";
import fs from "fs";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const filePath = path.resolve(__dirname, "..", "public", "sample.wmf");

console.log("File Path:", filePath);

if (fs.existsSync(filePath)) {
  console.log("파일이 존재합니다.");
} else {
  console.log("파일이 존재하지 않습니다.");
}

fs.readFile(filePath, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
