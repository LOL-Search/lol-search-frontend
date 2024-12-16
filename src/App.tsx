import "./App.css";
import Layout from "./components/layout/Layout";
import { GlobalStyle } from "./style/global";
import WriteForm from "./pages/Board/WriteForm";
import { ConfigProvider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostList from "./pages/Board/PostList";
import ChatList from "./pages/Chat/ChatList";
import ChatAdd from "./pages/Chat/ChatAdd";

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
              <Route path="/board/write" element={<WriteForm />} />
              <Route path="/board/list" element={<PostList />} />
            </Routes>
          </BrowserRouter>
        </ConfigProvider>
      </Layout>
    </>
  );
}

export default App;
