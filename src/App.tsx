import "./App.css";
import Layout from "./components/layout/Layout";
import { GlobalStyle } from "./style/global";
import WriteForm from "./pages/board/WriteForm";
import { ConfigProvider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostList from "./pages/board/PostList";
import UserStats from "./pages/userStat/UserStat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/board/write" element={<WriteForm />} />
              <Route path="/board/list" element={<PostList />} />
              <Route path="/user/search" element={<UserStats />} />
            </Routes>
          </BrowserRouter>
        </ConfigProvider>
      </Layout>
    </>
  );
}

export default App;
