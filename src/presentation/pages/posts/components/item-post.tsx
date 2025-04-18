import { PostModel } from "../../../../domain/models/post.model";

type Props = {
  post: PostModel;
};
export function ItemPost({ post }: Props) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
