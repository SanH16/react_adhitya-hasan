import React from "react";
import newsletter from "../../assets/img/newsletter-vector.png";
import { Button, Col, Form, Input, Modal, Row, Space, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/es/form/Form";

export default function Newsletter() {
  const [form] = useForm();
  const [api, contextHolder] = notification.useNotification();
  const [modal, contextModal] = Modal.useModal();

  const onFinish = (values) => {
    let secondsToGo = 15;
    const instance = modal.success({
      title: `Hola Mr. ${values.firstName}`,
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      instance.update({
        content: (
          <p>
            Welcome to Tripify!🚀
            <br />
            <br />
            <strong>
              {values.firstName} {values.lastName}✨
            </strong>
            <br />
            Request for : ( {values.areaValue} )
            <br />
            Your Email : ( {values.email} 🌐)
            <br />
            <br />
            This modal will be destroyed after {secondsToGo} second.{" "}
          </p>
        ),
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);

    api.open({
      message: `Hola ${values.firstName}🚀`,
      description: "welcome Tripify.",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {contextHolder}
      {contextModal}

      {/* Newsletter */}
      <div className="row mb-5" style={{ marginTop: 190 }}>
        <div id="newsletter" className="col-6 pt-5">
          <h1 className="newsletter mb-5" data-aos="zoom-in-right" data-aos-duration="1000">
            Get more update subscribe our Newsletter
          </h1>
          <Form autoComplete="off" onFinish={onFinish} onFinishFailed={onFinishFailed} form={form}>
            <Row>
              <Col span={12} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                <Space wrap>
                  <Form.Item
                    name="firstName"
                    label="First Name"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    rules={[
                      {
                        required: true,
                        message: "Please input your First Name.🤖",
                      },
                      { whitespace: true, message: "First Name must be contain." },
                      { min: 4, message: "First Name minimum 4" },
                    ]}
                    hasFeedback
                  >
                    <Input
                      className="d-flex form-control rounded-5 py-2 "
                      placeholder="Input your first name..."
                      prefix={<SmileOutlined style={{ fontSize: "20px" }} />}
                    />
                  </Form.Item>
                </Space>
              </Col>
              <Col span={12} data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="400">
                <Form.Item
                  label="Last Name"
                  labelCol={{ span: 24 }}
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input your Last Name.🤖",
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    className="d-flex form-control rounded-5 py-2 ms-2"
                    placeholder="Input your last name..."
                    prefix={<SmileOutlined style={{ fontSize: "20px" }} />}
                  />
                </Form.Item>
              </Col>
              <Col span={24} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">
                <Form.Item
                  label="What can we help you with?"
                  labelCol={{ span: 24 }}
                  name="areaValue"
                  rules={[
                    {
                      required: true,
                      message: "Please input any text.🤖",
                    },
                  ]}
                  hasFeedback
                >
                  <TextArea className="form-control textarea rounded-2 pb-5" placeholder="type me🤖" />
                </Form.Item>
              </Col>
              <Col
                span={24}
                className="form-group input-newsletter mb-3"
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Form.Item
                  labelCol={{ span: 24 }}
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input a valid email.🤖",
                    },
                    {
                      type: "email",
                      message: "The input is not valid E-mail.",
                    },
                  ]}
                  hasFeedback
                >
                  <Input className="d-flex form-control input-email" placeholder="Your email address" />
                </Form.Item>
                <Space wrap>
                  <Button htmlType="submit" className="btn subscribed">
                    Subscribe
                  </Button>
                </Space>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="col-5" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <img src={newsletter} alt="Update vector" className="newsletter-image" />
        </div>
      </div>
    </>
  );
}
