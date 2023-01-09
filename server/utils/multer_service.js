
import multer from "multer";

const fileTypeMap = { "image/png": ".png", "image/jpg": ".jpg", "image/jpeg": ".jpeg" };

const mystorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/avatars");
  },
  filename: function (req, file, cb) {
    // Get File Name
    const filename = req.user.data.email;
    // Get File Extension
    const extension = fileTypeMap[file.mimetype];
    cb(null, filename + `${extension}`);
  }
});

const myFileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: mystorage, fileFilter: myFileFilter });

export { upload };
