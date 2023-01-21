// import { isPromise } from "@testing-library/jest-dom";
import Requests from "./Requests";

describe("Request class", () => {
  const getEvents = Requests.getEvents();

  it("if returns a promise", () => {
    console.log(getEvents);

    // expect(isPromise(getEvents))
  });
});
