import "./App.css";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { openai } from "./configs/openai";
import { Button, Card, Form, Layout, Space, Spin, message } from "antd";
import { Content } from "antd/es/layout/layout";
import { SearchOutlined, CheckOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import AOS from "aos";
import "aos/dist/aos.css";

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
  alignItems: "start",
  flexDirection: "column",
  gap: "24px",
};

const cardStyle = {
  background: "#90C2E7",
  width: 800,
  textAlign: "start",
  borderRadius: "16px",
  boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
};

function App() {
  const [form] = useForm();
  const [responseAI, setResponseAI] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    AOS.init();
  }, []);

  function onFinish(values) {
    console.log(values);
    setIsLoading(true);

    openai.chat.completions
      .create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: values.query }],
      })
      .then((response) => {
        setResponseAI(response.choices[0].message.content);
        messageApi.open({
          type: "success",
          content: "Successfully created🚀",
        });
        setIsLoading(false);
      });
  }

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      query: "what is react ?",
    });
  };

  return (
    <>
      <Layout style={layout}>
        <Content style={content}>
          <h3>Tanya aja🚀</h3>
          <Form className="form" onFinish={onFinish} form={form}>
            <Form.Item name="query" data-aos="fade-right" data-aos-duration="1000">
              <TextArea type="text" placeholder="what is react ?" />
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
                <SearchOutlined />
                {isLoading ? "Loading..." : "Tanyain"}
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
              <div className="result">
                <CheckOutlined />
                <Markdown>{responseAI}</Markdown>
              </div>
            )}
            {isLoading && (
              <Space size="middle">
                <Spin size="large" />
              </Space>
            )}
          </Card>
        </Content>
      </Layout>
    </>
  );
}

export default App;
