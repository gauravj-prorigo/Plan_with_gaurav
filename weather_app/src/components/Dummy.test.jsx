import { render,screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Dummy from "./Dummy";

describe("dummy testing ", () => {
  const mockdata = {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto",
  };
  global.fetch = vi.fn(()=>
    Promise.resolve({
      ok: true,
      json: ()=> Promise.resolve(mockdata),
    })
  );

  test("Check api called or not",()=>{
    render(<Dummy />);
    expect(global.fetch).toHaveBeenCalled()
  })
  test("check data is on ui or not", async () => {
    render(<Dummy />);
    expect(await screen.findByText(/excepturi opti/i)).toBeInTheDocument()
  });
});
