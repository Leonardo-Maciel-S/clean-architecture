import { describe, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { Posts } from "./posts";
import { PostListUseCaseMock } from "../../../data/useCases/PostListUseCase/mock/post-list.usecase.mock";

const makeSut = () => {
  render(<Posts postListUseCase={new PostListUseCaseMock()} />);
};

describe("Posts", () => {
  it("Should render posts with correctly length", () => {
    makeSut();

    waitFor(() => {
      expect(screen.getAllByTestId("post").length).toBe(2);
    });

    screen.findByText("Mock 1");
    screen.findByText("Mock 2");
  });
});
