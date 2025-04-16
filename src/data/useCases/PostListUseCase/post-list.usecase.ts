import { IPostList } from "../../../domain/contracts/post.contracts";
import { PostModel, PostModelAPI } from "../../../domain/models/post.model";
import { postListAdapter } from "./post-list.adapter";
import { IHttpClient } from "../../../infra/contracts/http-client";

export class PostListUseCase implements IPostList {
  constructor(private readonly httpClient: IHttpClient<PostModelAPI[]>) {}

  async list(): Promise<PostModel[]> {
    const { data } = await this.httpClient.request(
      "get",
      "http://localhost:3333/posts"
    );

    return data.map((post) => postListAdapter.toPostModel(post));
  }
}
