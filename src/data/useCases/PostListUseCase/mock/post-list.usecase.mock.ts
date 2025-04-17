import { IPostList } from "../../../../domain/contracts/post.contracts";
import { PostModel } from "../../../../domain/models/post.model";
import { PostsListMock } from "../../../mocks/post-list.mock";

export class PostListUseCaseMock implements IPostList {
  async list(): Promise<PostModel[]> {
    return await Promise.resolve(PostsListMock());
  }
}
