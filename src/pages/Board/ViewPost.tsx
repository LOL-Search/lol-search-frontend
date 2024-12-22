import { Typography, Divider, Card, List, Input, Button, Flex } from "antd";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../../services/boardAPI";
import { skipToken } from "@reduxjs/toolkit/query";
import parse from "html-react-parser";
import { useGetCommentsQuery } from "../../services/commentAPI";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const PostSection = styled.div``;

const CommentSection = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;

const ViewPost = () => {
  const { postId } = useParams();

  const { data: postData, isLoading: isLoadingPost } = useGetPostQuery(
    postId || "0" //타입오류때문에..
  );

  const { data: commentData, isLoading: isLoadingComment } =
    useGetCommentsQuery(postId || "0");

  console.log(isLoadingPost, commentData, isLoadingComment);
  return (
    <Flex
      style={{
        width: "96%",
        height: "100%",
      }}
      vertical
      justify="space-between"
    >
      <PostSection>
        <Title level={3}>{postData?.title}</Title>
        <Text>
          {postData?.userName} | {postData?.createdAt} | 조회수:
          {postData?.views}
        </Text>
        <Divider />
        <Paragraph>{parse(postData?.content ?? "")}</Paragraph>
      </PostSection>
      <CommentSection>
        <Title level={5}>댓글</Title>
        <List
          locale={{ emptyText: [] }}
          dataSource={commentData}
          renderItem={(item) => (
            <Card size="small" style={{ marginBottom: "0.3rem" }}>
              <span>{item.userName}</span>{" "}
              <span style={{ color: "gray" }}>{item.createdAt}</span>
              <p>{item.content}</p>
            </Card>
          )}
        />
        <TextArea autoSize={{ minRows: 2 }} style={{ marginTop: "0.3rem" }} />
        <ButtonContainer>
          <Button style={{ width: "5rem" }}>등록</Button>
        </ButtonContainer>
      </CommentSection>
    </Flex>
  );
};

export default ViewPost;
