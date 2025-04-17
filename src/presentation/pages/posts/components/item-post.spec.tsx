import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ItemPost } from "./item-post";
import { PostsListMock } from "../../../../data/mocks/post-list.mock";

const makeSut = () => {
  render(<ItemPost post={PostsListMock()[0]} />);
};

describe("ItemPost", () => {
  it("Should render ItemPost with correctly values", () => {
    makeSut();

    screen.getByText("Mock 1");
    screen.getByText(
      "Todays article will demonstrate how to develop a login form in react js using formik."
    );
  });
});
