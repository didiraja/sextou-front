import { render } from "@testing-library/react";

import Card from "./Card";

describe("Card component", () => {
  const component = (
    <Card
      {...{
        event: {
          date: "30/12/2022 13:44",
          title: "Slipknot & BMTH",
          cover: { url: "http://placeimg.com/640/360/tech" },
          neighborhood: { id: 0, title: "Barra da Tijuca" },
          zone: { id: 1, title: "Zona Oeste" },
          mood: { id: 2, title: "Rock" },
        },
        highlight: false,
        cover: "http://placeimg.com/640/360/tech",
        neighborhood: "Barra da Tijuca",
        zone: "Zona Oeste",
        mood: "Rock",
      }}
    >
      Lapa
    </Card>
  );

  it("renders", () => {
    render(component);
  });

  // it("NO highlight classname after param", () => {
  //   const { container } = render(component);

  //   const HTMLelement = container.getElementsByClassName("highlight");

  //   expect(HTMLelement.length).toBe(0);
  // });

  // it("highlight classname after param", () => {
  //   const { container } = render(componentHighlight);

  //   // firstChild offers more API options than getElementsBy
  //   const HTMLelement = container.firstChild;

  //   expect(HTMLelement).toHaveClass("highlight");
  // });
});
