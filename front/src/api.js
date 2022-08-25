// Mock은 가짜라는 뜻을 가집니다. 임시로 가짜 사용자 데이터를 설정합니다.
const userMock1 = {
  id: "abcde-1",
  email: "ktkim@elicer.com",
  name: "튜터",
  description: "안녕하세요!",
}
const userMock2 = {
  id: "abcde-12",
  email: "ironman@avengers.com",
  name: "아이언맨",
  description: "I, am, Ironman",
}
const userMock3 = {
  id: "abcde-123",
  email: "captain_america@avengers.com",
  name: "캡틴아메리카",
  description: "I can do this all day",
}
const userMock4 = {
  id: "abcde-1234",
  email: "thor@avengers.com",
  name: "토르",
  description: "Strongest Avenger",
}
const userMock5 = {
  id: "abcde-12345",
  email: "natasha@avengers.com",
  name: "나타샤",
  description: "Strongest Agent",
}

const eduMock = {
  id: "abcde-123456",
  school: "학교",
  major:"전공",
  position: "학적" 
}

const certificateMock = {
id: "abcde-12345678",
title: "자격증내역",
description: "상세내역",
when_date: new Date().toISOString().split("T")[0]
}


let userlist = [userMock1, userMock2, userMock3, userMock4, userMock5]

let educationlist = [eduMock]

let certificatelist = [certificateMock]



async function get(endpoint, params = "") {
console.log(
  `%cGET 요청 ${"/" + endpoint + "/" + params}`,
  "color: #a25cd1;"
);
//user get
if (endpoint === "users") {
  const matchingUser = userlist.find(user => user.id === params)
  return {data: matchingUser}
}

if (endpoint === "userlist") {
  const data = userlist
  return {data}
}
// education get
if (endpoint === "educations") {
  const matchingEdu = educationlist.find(edu => edu.id === params)
  return {data: matchingEdu}
}


if (endpoint === "educationlist") {
  const data = educationlist
  return {data}
}


// certificate get
if (endpoint === "certificates") {
  const matchingCertificate = certificatelist.find(certificate => certificate.id === params)
  return {data: matchingCertificate}
}


if (endpoint === "certificatelist") {
  const data = certificatelist
  return {data}
}

return 
}

async function post(endpoint, data) {

console.log(
  `%cPOST 요청 ${"/" + endpoint + "/"}, 데이터: ${JSON.stringify(data)}`,
  "color: blue;"
);

if (endpoint === "user/register") {
  const newUser = {...data}
  newUser.description = "설명이 없습니다. 설명을 추가해 주세요."
  const random = Math.random()
  newUser.id = `abcde-${random}`
  
  userlist.push(newUser)
  return {data: newUser}
}

if (endpoint === "user/login") {
  const matchingUser = userlist.find(user => user.email === data.email)
  matchingUser.token = "temp-token"
  console.dir(matchingUser)
  return {data: matchingUser}
}

if (endpoint === "education/create") {
  const newUser = {...data}
  newUser.description = "설명이 없습니다. 설명을 추가해주세요."
  const random = Math.random()
  newUser.id = `abcde-${random}`

  educationlist.push(newUser)
  return {data: newUser}
}


if (endpoint === "certificate/create") {
  const newUser = {...data}
  newUser.description = "설명이 없습니다. 설명을 추가해주세요."
  const random = Math.random()
  newUser.id = `abcde-${random}`

  certificatelist.push(newUser)
  return {data: newUser}
}

return 
}

// put
async function put(endpoint, data) {

console.log(
  `%cPUT 요청 ${"/" + endpoint + "/"}, 데이터: ${JSON.stringify(data)}`,
  "color: green;"
);

const urlAndId = endpoint.split("/")
const userId = urlAndId[1]
data.id = userId
userlist = userlist.filter(user => user.id !== userId)
userlist.push(data)
educationlist = educationlist.filter(user => user.id !== userId)
educationlist.push(data)
certificatelist = certificatelist.filter(user => user.id !== userId)
certificatelist.push(data)

const response = {data}
return response
}


// 아래처럼 export한 후, import * as A 방식으로 가져오면,
// A.get, A.put 로 쓸 수 있음.
export { get, post, put };
