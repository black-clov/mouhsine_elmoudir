import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiTensorflow,
  SiPytorch,
  SiJupyter,
  SiUnity,
  SiBlender,
  SiOpencv,
  SiDocker,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons"><CgCPlusPlus /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><TbBrandGolang /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>

      {/* Frontend / Backend */}
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNextdotjs /></Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiRedis /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFirebase /></Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>

      {/* XR / 3D / Game Dev */}
      <Col xs={4} md={2} className="tech-icons"><SiUnity /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiBlender /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiOpencv /></Col>

      {/* AI / Data Science */}
      <Col xs={4} md={2} className="tech-icons"><SiTensorflow /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPytorch /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJupyter /></Col>

      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>

      {/* Blockchain */}
      <Col xs={4} md={2} className="tech-icons"><SiSolidity /></Col>
    </Row>
  );
}

export default Techstack;
