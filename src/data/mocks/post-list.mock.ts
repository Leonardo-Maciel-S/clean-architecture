import { PostModel } from "../../domain/models/post.model";

export function PostsListMock(): PostModel[] {
  return [
    {
      id: "1",
      title: "Mock 1",
      body: "Todays article will demonstrate how to develop a login form in react js using formik.",
    },
    {
      id: "1",
      title: "Mock 2",
      body: "In this article, I will teach you how to parse or read CSV files in ReactJS in the simplest way possible.",
    },
  ];
}
