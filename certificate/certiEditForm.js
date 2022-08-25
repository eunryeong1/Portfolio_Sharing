import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, Card, Col, Row } from "react-bootstrap";
import * as Api from "../../apiMockup";

function CertiEditForm({ currentcertificate, setIsEditing, setCertificates }) {
  const [certiTitle, setCertiTitle] = useState(currentcertificate.certiTitle);
  const [certiDetail, setCertiDetail] = useState(currentcertificate.certiDetail);
  const [certiDate,setCertiDate] = useState(new Date(currentcertificate.certi_Date));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user_id = currentcertificate.user_id;
    const certi_Date=certiDate.toISOString().split("T")[0];
    await Api.put(`certificates/${currentcertificate.id}`, {
      user_id,
      certiTitle,
      certiDetail,
      certi_Date,
    });
    
    const res = await Api.get("certificatelist", user_id);
    setCertificates(res.data);
    setIsEditing(false);
  };

  return (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="certificateEditTitle" className="mb-3">
            <Form.Control
              type="text"
              placeholder="자격증 이름"
              value={certiTitle}
              onChange={(e) => setCertiTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="certificateEditDetail" className="mb-3">
            <Form.Control
              type="detail"
              placeholder="세부사항"
              value={certiDetail}
              onChange={(e) => setCertiDetail(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Row} className="mt-3">
          <Col xs="auto">
            <DatePicker
            selected={certiDate} 
            onChange={(date) => setCertiDate(date)}
          />
          </Col>
          </Form.Group>

          <Form.Group as={Row} className="mt-3 text-center">
            <Col sm={{ span: 20 }}>
              <Button variant="primary" type="submit" className="me-3">
                확인
              </Button>
              <Button variant="secondary" onClick={    () => setIsEditing(false)     }>
                취소
              </Button>
              </Col>
              
          </Form.Group>
        </Form>
  );
}

export default CertiEditForm;
