import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

import { UserStateContext } from "../App";
import * as Api from "../api";
import User from "./user/User";
import Certificates from "./certificate/Certificates";
import Educations from "./education/Educations";


function Portfolio() {
  const navigate = useNavigate();
  const params = useParams();
  
  const [portfolioOwner, setPortfolioOwner] = useState(null);
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);
  const userState = useContext(UserStateContext);

  const fetchPorfolioOwner = async (ownerId) => {
    
    const res = await Api.get("users", ownerId);

    const ownerData = res.data;
    
    setPortfolioOwner(ownerData);
    setIsFetchCompleted(true);
  };

  useEffect(() => {
    
    if (!userState.user) {
      navigate("/login", { replace: true });
      return;
    }

    if (params.userId) {
      const ownerId = params.userId;
      fetchPorfolioOwner(ownerId);
    } else {
      const ownerId = userState.user.id;
      fetchPorfolioOwner(ownerId);
    }
  }, [params, userState, navigate]);

  if (!isFetchCompleted) {
    return "loading...";
  }

  return (
    <Container fluid>
      <Row>
        <Col md="3" lg="3">
          <User
            portfolioOwnerId={portfolioOwner.id}
            isEditable={portfolioOwner.id === userState.user?.id}
          />
        </Col>
        <Col>
          <Educations
            portfolioOwnerId={portfolioOwner.id}
            isEditable={portfolioOwner.id === userState.user?.id}
          />
          <div className="mb-2" />
          <Certificates
            portfolioOwnerId={portfolioOwner.id}
            isEditable={portfolioOwner.id === userState.user?.id}
          />
          <div className="mb-2" />
          {/* <Awards
            portfolioOwnerId={portfolioOwner.id}
            isEditable={portfolioOwner.id === userState.user?.id}
          />
          <div className="mb-2" />
          <Projects
            portfolioOwnerId={portfolioOwner.id}
            isEditable={portfolioOwner.id === userState.user?.id}
          />
          <div className="mb-2" /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
