import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import { openai } from "../configs/openai";
import { Button, Card, Form, Layout, Space, Spin, message } from "antd";
import { Content } from "antd/es/layout/layout";
import { SmileOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonFloat from "./button-float";

const layout = {
  background: "white",
  width: 800,
  margin: "auto",
};

const content = {
  display: "flex",
  textAlign: "center",
  minHeight: 120,
  paddingTop: 40,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "24px",
};

const cardStyle = {
  background: "#C69DD2",
  width: 800,
  textAlign: "center",
  borderRadius: "16px",
  boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
};

export default function EmojiChatbot() {
  const [form] = useForm();
  const [responseAI, setResponseAI] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    AOS.init();
  }, []);

  function onFinish(values) {
    console.log(values);
    if (!values.query) {
      messageApi.open({
        type: "error",
        content: "Please input your feeling",
      });
      return;
    }
    setIsLoading(true);

    openai.chat.completions
      .create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You will be provided with a message, and your task is to respond using emojis only.",
          },
          {
            role: "user",
            content: values.query,
          },
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
      })
      .then((response) => {
        if (response) {
          setResponseAI(response.choices[0].message.content);
          messageApi.open({
            type: "success",
            content: "Generate Emoji Sucessfull 🚀",
          });
        } else {
          messageApi.open({
            type: "error",
            content: "Couldn't find an answer to your question. Please try again later.",
          });
        }
        setIsLoading(false);
      });
  }

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      query: "I'm feeling a little better right now",
    });
  };
  return (
    <>
      <Layout style={layout}>
        <Content style={content}>
          <h3>Emoji Chatbot🚀</h3>
          <SmileOutlined data-aos="zoom-in" data-aos-duration="1000" style={{ fontSize: 80 }} />
          <Form className="form" onFinish={onFinish} form={form}>
            <Form.Item name="query" data-aos="fade-right" data-aos-duration="1000">
              <TextArea type="text" placeholder="I'm feeling a little better right now" />
            </Form.Item>
            {contextHolder}
            <Space wrap>
              <Button
                type="primary"
                htmlType="submit"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                disabled={isLoading}
              >
                <SmileOutlined />
                {isLoading ? "Loading..." : "Feel it"}
              </Button>
              <Button
                type="default"
                htmlType="button"
                shape="round"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="400"
                onClick={onReset}
              >
                Reset
              </Button>
              <Button
                type="link"
                htmlType="button"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="600"
                onClick={onFill}
              >
                Fill form
              </Button>
            </Space>
          </Form>
          <Card
            title="Result"
            bordered={false}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
            style={cardStyle}
          >
            {responseAI && !isLoading && (
              <div className="image-result">
                <span role="img" style={{ fontSize: 50 }}>
                  {responseAI}
                </span>
              </div>
            )}
            {isLoading && (
              <Space size="middle">
                <Spin size="large" />
              </Space>
            )}
          </Card>
          <ButtonFloat />
        </Content>
      </Layout>
    </>
  );
}
