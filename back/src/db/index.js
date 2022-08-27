import mongoose from "mongoose";
import { User } from "./models/User";
<<<<<<< HEAD
=======
import { Education } from "./models/Education";
import { Project } from "./models/Project";
import { Award } from "./models/Award";
import { Certificate } from "./models/Certificate";
>>>>>>> 03ad744f4c5c72f20a0bf234c173a5cf08dd476f

const DB_URL =
  process.env.MONGODB_URL ||
  "MongoDB 서버 주소가 설정되지 않았습니다.\n./db/index.ts 파일을 확인해 주세요.";

mongoose.connect(
<<<<<<< HEAD
    `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@cluster0.cnmeavp.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true}
=======
  `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@${DB_URL}/?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
>>>>>>> 03ad744f4c5c72f20a0bf234c173a5cf08dd476f
);

const db = mongoose.connection;

db.on("connected", () =>
  console.log("정상적으로 MongoDB 서버에 연결되었습니다.  " + DB_URL)
);
db.on("error", (error) =>
  console.error("MongoDB 연결에 실패하였습니다...\n" + DB_URL + "\n" + error)
);

<<<<<<< HEAD
export { User };
=======
export { User, Education, Certificate, Award, Project };
>>>>>>> 03ad744f4c5c72f20a0bf234c173a5cf08dd476f
