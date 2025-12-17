import { fireEvent, render, screen } from "@testing-library/react";
import { resolveConfig } from "vite";
import { describe, expect } from "vitest";
import UserSearch from "./practice";

// describe(("practice"),()=>{
//     it('check',async()=>{
//         const mockdata = {
//             "gaurav" : "1",
//         }
//         const mockfun = vi.fn(()=> Promise.resolve(mockdata))
//         render(<UserSearch searchUser={mockfun}/>)
//         const button = screen.getByRole('button')
//        fireEvent.click(button)

//         expect(mockfun).toHaveBeenCalledOnce()
//     })
// })

describe("api test", () => {
  it("check api si running", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve("gaurav"),
      })
    );
    render(<UserSearch />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(global.fetch).toHaveBeenCalledOnce();
  });

  it("check showing loader",()=>{
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve("gaurav"),
      })
    );
    render(<UserSearch />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })
});
