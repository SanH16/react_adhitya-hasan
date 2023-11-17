import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../utils/auth";
// import { APIauth } from "../apis/APIauth.js";
import { Button, Form, Input } from "antd";

function LoginPage() {
  const navigate = useNavigate();
  //   const { search } = useLocation();

  const onFinish = (e) => {
    // e.preventDefault();
    const formData = new FormData(e.target);
    const { username, password } = Object.fromEntries(formData);
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username, // kminchelle
        password, // 0lelplR
      }),
    }).then(async (res) => {
      if (res.status === 400) return alert("your username or password is wrong");
      const { token } = await res.json();
      auth.storeAuthCredential(token);
      let returnTo = "/";
      return navigate(returnTo);
    });

    console.log("Success:", e);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <h1>Login Page</h1>

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPage;
