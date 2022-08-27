import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import * as Api from "../../api";
import Education from "./Education";
import EducationAddForm from "./EducationAddForm";

function Educations({portfolioOwnerId,isEditable }) {
  
  const [educations, setEducations] = useState([]);
  //useState로 isAdding 상태를 생성함.
  const [isAdding, setIsAdding] = useState(false);
  //delete education
  // const handleRemove=(id)=>{
  //   const removeItem = educations.filter((education)=>{
  //     return education.id!==id;
  //   })
  //   setEducations(removeItem);
  // }
  useEffect(() => {
    // "`users/${portfolioOwnerId}/edu`"로 GET
    Api.get("edu",portfolioOwnerId).then((res) =>
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
            key={education.edu_id}
            edu={education}
            isEditable={isEditable}
            setEdu={setEducations}
          />
          </Col>
          <Col xl={1}>
          {/* <Button variant="outline-danger" onClick={()=>handleRemove(education.id)}>삭제</Button> */}
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
