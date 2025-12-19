import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import {
  UserList,
  UserProfile,
  SearchUser,
  UserPosts,
} from "./practice";

describe("api test on 1st example",()=>{
  it("first postive test case",async()=>{
     const mockdata = {
      location: {
        name: "Pimpri",
        region: "maharashtra",
        country: "India",
      },
      current: {
        temp_c: 29.3,
        temp_f: 84.8,
        is_day: 1,
        feelslike_c: 27.9,
        wind_kph: 9.4,
      },

    };

    render(<UserList/>)

    global.fetch =  vi.fn(()=> Promise.resolve({
      ok:true,
      json:()=>Promise.resolve(mockdata)
    }))

    const buton = screen.getByText('Load User')
    fireEvent.click(buton)
    expect(screen.getByText("Loading...")).toBeInTheDocument()
    expect(global.fetch).toHaveBeenCalled()
    await waitFor(()=>{
      expect(screen.getByText(/Pimpri/)).toBeInTheDocument()
    })
  })
})


describe("api testing 2nd example",()=>{

  const mockdata = {
      location: {
        name: "Pimpri",
        region: "maharashtra",
        country: "India",
      },
      current: {
        temp_c: 29.3,
        temp_f: 84.8,
        is_day: 1,
        feelslike_c: 27.9,
        wind_kph: 9.4,
      },

    };
  it("Hello man",async()=>{
     global.fetch =  vi.fn(()=> Promise.resolve({
      ok:true,
      json:()=>Promise.resolve(mockdata)
    }))

    render(<UserProfile/>)

    expect(screen.getByText("Loading..."))
    expect(global.fetch).toHaveBeenCalled()
   const name = await screen.findByText(/Pimpri/)
    expect(name).toBeInTheDocument()
  })
})


describe("api testing 3rd example", () => {
  const mockdata = {
    location: {
      name: "Pimpri",
      region: "maharashtra",
      country: "India",
    },
    current: {
      temp_c: 29.3,
      temp_f: 84.8,
      is_day: 1,
      feelslike_c: 27.9,
      wind_kph: 9.4,
    },
  };
  it("Hello man", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockdata),
      })
    );

    render(<SearchUser />);

    const input = screen.getByPlaceholderText("Enter username");
    fireEvent.change(input, { target: { value: "Gaurav" } });

    const clcik = screen.getByText("Search");

    fireEvent.click(clcik);
    // expect(screen.getByText("Username is required")).toBeInTheDocument()
    expect(await screen.findByText("Loading..."));
    expect(input.value).toBe("Gaurav");
    expect(global.fetch).toHaveBeenCalled();
    expect(await screen.findByText(/Pimpri/));
  });
});


describe("api test on 4th example", () => {


  it("response is visbile on ui", async () => {
     const mockdata = [
      {
        id: 1,
        location: { name: "Pimpri" },
      },
      {
        id: 2,
        location: { name: "Pune" },
      },
    ];
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json : ()=>Promise.resolve(mockdata)
      })
    );
    render(<UserPosts userId="2"/>);
    expect(fetch).toBeCalled()
    // expect(screen.getByText("Loading posts...")).toBeInTheDocument()
    expect(
      await screen.findByText("Pimpri")
    ).toBeInTheDocument();
  });

   it("user name not provided", async () => {
     const mockdata = [
      {
        id: 1,
        location: { name: "Pimpri" },
      },
      {
        id: 2,
        location: { name: "Pune" },
      },
    ];
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json : ()=>Promise.resolve(mockdata)
      })
    );
    render(<UserPosts userId=""/>);
    expect(screen.getByText("Select a user"))
  });

  it("Loading is shown or not", async () => {
     const mockdata = [
      {
        id: 1,
        location: { name: "Pimpri" },
      },
      {
        id: 2,
        location: { name: "Pune" },
      },
    ];
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json : ()=>Promise.resolve(mockdata)
      })
    );
    render(<UserPosts userId="2"/>);
    expect(fetch).toBeCalled()
    expect(screen.getByText("Loading posts...")).toBeInTheDocument()
   
  });
});
