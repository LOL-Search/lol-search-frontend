import "./App.css";
import Layout from "./components/layout/Layout";
import { GlobalStyle } from "./style/global";
import WriteForm from "./pages/Board/WriteForm";
import { ConfigProvider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostList from "./pages/Board/PostList";
import ChatList from "./pages/Chat/ChatList";
import ChatAdd from "./pages/Chat/ChatAdd";
import ChatRoom from "./pages/Chat/ChatRoom";
import ViewPost from "./pages/Board/ViewPost";
import UserStats from "./pages/userStat/UserStat";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#054762",
            },
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ChatList />} />
              <Route path="/chat/add" element={<ChatAdd />} />
              <Route path="/chat/room" element={<ChatRoom />} />
              <Route path="/board/write" element={<WriteForm />} />
              <Route path="/board/list" element={<PostList />} />
              <Route path="/board/view" element={<ViewPost />} />
              <Route path="/user/search" element={<UserStats />} />
            </Routes>
          </BrowserRouter>
        </ConfigProvider>
      </Layout>
    </>
  );
}

export default App;
