import "./App.css";
import { useState } from "react";
import Markdown from "react-markdown";
import { openai } from "./configs/openai";
import { Button, Card, Form, Layout, Space, Spin } from "antd";
import { Content } from "antd/es/layout/layout";
import { SearchOutlined, CheckOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";

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

function App() {
  const [form] = useForm();
  const [responseAI, setResponseAI] = useState();
  const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(false);
      });
  }

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Layout style={layout}>
        <Content style={content}>
          <h3>Tanya aja🚀</h3>
          <Form className="form" onFinish={onFinish} form={form}>
            <Form.Item name="query">
              <TextArea type="text" />
            </Form.Item>
            <Space wrap>
              <Button type="primary" htmlType="submit" disabled={isLoading}>
                <SearchOutlined />
                {isLoading ? "Loading..." : "Tanyain"}
              </Button>
              <Button type="default" htmlType="button" shape="round" onClick={onReset}>
                Reset
              </Button>
            </Space>
          </Form>
          <Card
            title={responseAI ? <CheckOutlined /> : "Result"}
            bordered={false}
            style={{ width: 800, textAlign: "start" }}
          >
            {responseAI && !isLoading && (
              <div className="result">
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
