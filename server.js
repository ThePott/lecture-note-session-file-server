const express = require("express")
const multer = require("multer")
const path = require("path")

/** path 안 쓰고 파일명, 확장자 구분하기 */
// const makeFilename = (originalname) => {
//   const splitedArray = originalname.split(".")
//   const extension = splitedArray.at(-1)
//   splitedArray.pop()
//   const filename = splitedArray.join(".")

//   return `${filename}-${Date.now()}.${extension}`
// }

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (_req, file, callback) => callback(
    null,
    `${file.filename}__${Date.now()}${path.extname(file.originalname)}`
  ),
})

const upload = multer({ storage: storage });

const app = express()


const fs = require("fs");
app.get("/download/:filename", (req, res) => {
  const fileName = req.params.filename;
  const filePath = path.join(__dirname, "uploads", fileName);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send("파일을 찾을 수 없습니다.");
    }
    res.download(filePath, fileName, (err) => {
      if (err) {
        console.error(err);
        if (!res.headersSent) {
          res.status(500).send("파일 다운로드 중 오류가 발생했습니다.");
        }
      }
    });
  });
});

app.post("/upload", upload.any(), (req, res) => {
  res.send("파일 업로드 성공");
});


app.get("/", (req, res) => {
  res.send("---- 캬 난 천재야")
})

const PORT = 3000
app.listen(PORT, () => console.log("---- server is on:", PORT))