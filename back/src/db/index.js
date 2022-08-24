import mongoose from "mongoose";
import { User } from "./models/User";

const DB_URL =
  process.env.MONGODB_URL ||
  "MongoDB 서버 주소가 설정되지 않았습니다.\n./db/index.ts 파일을 확인해 주세요.";

// mongoose.connect(DB_URL);
// const db = mongoose.connection;

//종훈님 계정
mongoose.connect(
  `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@${DB_URL}/?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// mongoose.connect(
//   `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@cluster0.2apfxc0.mongodb.net/?retryWrites=true&w=majority`,
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );
const db = mongoose.connection;

db.on("connected", () =>
  console.log("정상적으로 MongoDB 서버에 연결되었습니다.  " + DB_URL)
);
db.on("error", (error) =>
  console.error("MongoDB 연결에 실패하였습니다...\n" + DB_URL + "\n" + error)
);

export { User };
