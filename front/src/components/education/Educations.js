import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import * as Api from "../../apiMock";
import Education from "./Education";
import EducationAddForm from "./EducationAddForm";

function Educations({portfolioOwnerId,isEditable }) {
  //useState로 educations 상태를 생성함.
  const [educations, setEducations] = useState([]);
  const [education, setEducation]  = useState("");
  //useState로 isAdding 상태를 생성함.
  const [isAdding, setIsAdding] = useState(false);
  //delete education
  const handleRemove=(id)=>{
    const removeItem = educations.filter((education)=>{
      return education.id!==id;
    })
    setEducations(removeItem);
  }
  useEffect(() => {
    // "educationlist/유저id"로 GET 요청하고, response의 data로 educations를 세팅함.
    Api.get("educationlist",portfolioOwnerId).then((res) =>
      setEducations(res.data)
    );
  },[portfolioOwnerId]);
  /*console.log(educations) -object map은 array에 사용*/

  return (
    <Card>
      <Card.Body>
        <Card.Title>학력</Card.Title>
        {educations.map((education) => (
          <>
          <Row className="mb-3">
          <Col xl={11}>
          <Education
            key={education.id}
            edu={education}
            isEditable={isEditable}
            setEdu={setEducations}
          />
          </Col>
          <Col xl={1}>
          <Button variant="outline-danger" onClick={()=>handleRemove(education.id)}>삭제</Button>
          </Col>
          </Row>
          </>
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
