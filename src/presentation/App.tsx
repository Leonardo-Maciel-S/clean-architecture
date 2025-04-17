import { PostListUseCase } from "../data/useCases/PostListUseCase/post-list.usecase";
import "./App.css";
import { Posts } from "./pages/posts/posts";
import { AxiosHttpClient } from "../infra/implementations/axios-http-client/axios-http-client";

function App() {
  const postListUseCase = new PostListUseCase(new AxiosHttpClient());
  return <Posts postListUseCase={postListUseCase} />;
}

export default App;
