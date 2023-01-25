import { render } from "@testing-library/react";
import Pill from "./Pill";
const component = <Pill>Lapa</Pill>;

it("renders", () => {
  render(component);
});

// describe("Pill component", () => {
//   const component = <Pill>Lapa</Pill>;
//   const componentHighlight = <Pill highlight>Lapa</Pill>;

//   it("renders", () => {
//     render(component);
//   });

//   // it("renders with highlight", () => {
//   //   render(componentHighlight);
//   // });

//   // it("NO highlight classname after param", () => {
//   //   const { container } = render(component);

//   //   const HTMLelement = container.getElementsByClassName("highlight");

//   //   expect(HTMLelement.length).toBe(0);
//   // });

//   // it("highlight classname after param", () => {
//   //   const { container } = render(componentHighlight);

//   //   // firstChild offers more API options than getElementsBy
//   //   const HTMLelement = container.firstChild;

//   //   expect(HTMLelement).toHaveClass("highlight");
//   // });
// });
