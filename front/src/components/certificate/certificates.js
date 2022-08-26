import { Card, Button, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import CertifiAddForm from "./certiAddForm";
import Certificate from "./certificate";
import * as Api from "../../apiMockup";

function Certificates({ portfolioOwnerId, isEditable }) {
  const [isAdding, setIsAdding] = useState(false)
  const [certificates, setCertificates] = useState([])


  useEffect(() => {
    
    Api.get("certificatelist", portfolioOwnerId).then((res) => setCertificates(res.data));
  }, [portfolioOwnerId]);

  return (
    <>
    <Card>
      <Card.Body>
      <Card.Title>자격증</Card.Title>
          {certificates.map((certificate)=>(
            <Certificate
            key={certificate.id}
            certificate={certificate}
            setCertificates={setCertificates}
            isEditable={isEditable}
            />
          ))}

        
      {isAdding && (
        <CertifiAddForm
          portfolioOwnerId={portfolioOwnerId}
          setIsAdding={setIsAdding}
          setCertificates={setCertificates}
        />
      )} 
      {isEditable&&(
        <Row className="mt-3 text-center text-info">
        <Col sm={{ span: 20 }}>
          <Button
            variant="outline-info"
            size="sm"
            onClick={     () => setIsAdding(true)       }
          >
            +
          </Button>
        </Col>
      </Row>
      )}
      </Card.Body>
    </Card>
    </>
  );
}

export default Certificates;
