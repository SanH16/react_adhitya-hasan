import React from "react";
import video from "../../assets/img/video.mp4";
import { SmileOutlined } from "@ant-design/icons";
import { Col, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

const words = {
  title: "About Us",
  description:
    "See nature view, Where the ocean's beauty meets your soul's serenity. We are a team committed to helping you plan your dream trip. We offer a variety of services, including flight booking, hotel booking, and package tours. We also provide information on tourist destinations, travel tips, and reviews from other travelers. Our goal is to make your trip an unforgettable experience.",
};
export default function About() {
  return (
    <>
      <section id="about" className="tour" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
        <div className="tour-container section-container">
          <h4 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
            Watch Our Video Tour
          </h4>
          <div className="video-container">
            <video src={video} autoPlay loop muted />
          </div>
        </div>
      </section>
      <div className="text-center mb-5" data-aos="zoom-in" data-aos-duration="1000">
        <Col span={24}>
          <Space wrap style={{ fontSize: "50px" }}>
            <SmileOutlined />
            <Title level={1}>{words.title}</Title>
          </Space>
        </Col>
        <Col span={24} className="mt-3">
          <Paragraph>{words.description}</Paragraph>
          <Paragraph>
            <span className="owner">Owner : </span>Adhitya San
          </Paragraph>
        </Col>
      </div>
    </>
  );
}
