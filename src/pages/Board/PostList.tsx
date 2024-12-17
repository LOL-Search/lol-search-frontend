import React from "react";
import { Input, List, Flex, Button } from "antd";
import type { GetProps } from "antd";
import styled from "styled-components";

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

// interface IData {
//   title: string;
// }

const ListContainer = styled.div`
  height: 490px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const PostList = () => {
  return (
    <Flex vertical gap="medium" style={{ width: "96%" }}>
      <Search
        size="large"
        enterButton
        placeholder="제목 및 작성자를 검색하세요"
        onSearch={onSearch}
      />
      <ButtonContainer>
        <Button style={{ width: "100px" }}>게시글 작성</Button>
      </ButtonContainer>
      <ListContainer>
        <List
          pagination={{
            position: "bottom",
            align: "center",
            pageSize: 6,
          }}
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
                description="2시간 전  |  집에 가고 싶다"
              />
            </List.Item>
          )}
        />
      </ListContainer>
    </Flex>
  );
};

export default PostList;
