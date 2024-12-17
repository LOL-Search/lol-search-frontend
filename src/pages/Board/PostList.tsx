import React from "react";
import { Input, List, Flex } from "antd";
import type { GetProps } from "antd";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];
const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const PostList = () => {
  return (
    <Flex vertical gap="large">
      <Search
        size="large"
        enterButton
        placeholder="제목 및 작성자를 검색하세요"
        onSearch={onSearch}
      />
      <List
        pagination={{ position: "bottom", align: "center" }}
        size="large"
        dataSource={data}
        renderItem={(item) => (
          <List.Item.Meta
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        )}
      />
    </Flex>
  );
};

export default PostList;
