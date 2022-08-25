const userMock = {
  id: "abcde-12345",
  school: "학교",
  major: "전공",
  degree: "학적", // school major degree 변수명
};
let educationlist = [userMock];

async function get(endpoint, params = "") {
  console.log(`%cGET 요청 ${"/" + endpoint + "/" + params}`, "color: #a25cd1;");

  if (endpoint === "educations") {
    const matchingEdu = educationlist.find((user) => user.id === params);
    return { data: matchingEdu };
  }

  if (endpoint === "educationlist") {
    const data = educationlist.filter((edu)=>edu.user_id==params);
    return { data };
  }

  return;
}

async function post(endpoint, data) {
  console.log(
    `%cPOST 요청 ${"/" + endpoint + "/"}, 데이터: ${JSON.stringify(data)}`,
    "color: blue;"
  );

  if (endpoint === "education/register") {
    const newUser = { ...data };
    newUser.description = "설명이 없습니다. 설명을 추가해 주세요.";
    const random = Math.random();
    newUser.id = `abcde-${random}`;

    educationlist.push(newUser);
    return { data: newUser };
    
  }
  console.log(educationlist);
  return;
}

async function put(endpoint, data) {
  console.log(
    `%cPUT 요청 ${"/" + endpoint + "/"}, 데이터: ${JSON.stringify(data)}`,
    "color: green;"
  );

  const urlAndId = endpoint.split("/");
  const userId = urlAndId[1];
  data.id = userId;
  educationlist = educationlist.filter((user) => user.id !== userId);
  educationlist.push(data);

  const response = { data };
  return response;
}

// 아래처럼 export한 후, import * as A 방식으로 가져오면,
// A.get, A.put 로 쓸 수 있음.
export { get, post, put };
