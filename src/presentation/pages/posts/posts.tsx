import { useEffect, useState } from "react";
import { PostModel } from "../../../domain/models/post.model";
import { ItemPost } from "./components/item-post";
import { IPostList } from "../../../domain/contracts/post.contracts";

type Props = {
  postListUseCase: IPostList;
};

export function Posts({ postListUseCase }: Props) {
  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const data = await postListUseCase.list();

      setPosts(data);
    }

    loadPosts();
  }, []);

  return posts.map((post) => (
    <ItemPost key={post.id} data-testid="post" post={post} />
  ));
}
