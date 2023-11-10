import React from "react";
import { Space, FloatButton } from "antd";
import { CommentOutlined, UpCircleOutlined, FileImageOutlined, SmileOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function ButtonFloat() {
  return (
    <>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ right: 24 }}
        icon={<UpCircleOutlined />}
        tooltip={<div>Navigate</div>}
      >
        <Space wrap>
          <Link to="/emoji-ai">
            <FloatButton icon={<SmileOutlined />} tooltip={<div>Emoji Generator</div>} />
          </Link>
          <Link to="/imageai">
            <FloatButton icon={<FileImageOutlined />} tooltip={<div>Image Generator</div>} />
          </Link>
          <Link to="/">
            <FloatButton icon={<CommentOutlined />} tooltip={<div>PromptAI</div>} />
          </Link>
        </Space>
      </FloatButton.Group>
    </>
  );
}
