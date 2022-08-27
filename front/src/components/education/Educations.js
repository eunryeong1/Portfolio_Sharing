import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
<<<<<<< HEAD
import * as Api from "../../apiMock";
=======
import * as Api from "../../api";
>>>>>>> 03ad744f4c5c72f20a0bf234c173a5cf08dd476f
import Education from "./Education";
import EducationAddForm from "./EducationAddForm";

function Educations({portfolioOwnerId,isEditable }) {
<<<<<<< HEAD
  //useState로 educations 상태를 생성함.
  const [educations, setEducations] = useState([]);
  //useState로 isAdding 상태를 생성함.
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    // "educationlist/유저id"로 GET 요청하고, response의 data로 educations를 세팅함.
    Api.get("educationlist",portfolioOwnerId).then((res) =>
=======
  
  const [educations, setEducations] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    // "`users/${portfolioOwnerId}/edu`"로 GET
    Api.get("edu").then((res) =>
>>>>>>> 03ad744f4c5c72f20a0bf234c173a5cf08dd476f
      setEducations(res.data)
    );
  },[portfolioOwnerId]);
  /*console.log(educations) -object map은 array에 사용*/

  return (
    <Card>
      <Card.Body>
        <Card.Title>학력</Card.Title>
        {educations.map((education) => (
          <Education
<<<<<<< HEAD
            key={education.id}
=======
            key={education.edu_id}
>>>>>>> 03ad744f4c5c72f20a0bf234c173a5cf08dd476f
            edu={education}
            isEditable={isEditable}
            setEdu={setEducations}
          />
        ))}
        {isEditable && (
          <Row className="mt-3 mb-3 text-center" >
            <Col sm={{ span: 20 }}>
              <Button onClick={() => setIsAdding(true)}>+</Button>
            </Col>
          </Row>
        )}
        {isAdding && (
          <EducationAddForm
            portfolioOwnerId={portfolioOwnerId}
            setIsAdding={setIsAdding}
            setEdu={setEducations}
          />
        )}
      </Card.Body>
    </Card>
  );
}

export default Educations;
