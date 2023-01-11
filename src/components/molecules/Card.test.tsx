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

/**
 * @description SUGGESTIONS FROM CHATGPT
 * Here are a few example unit tests that you could write for the Card component:

    Verify that the component renders the correct cover image:

test("renders the correct cover image", () => {
    const props = {
        cover: "path/to/cover.jpg",
        date_event: "2022-12-01",
        tickets: "123",
        title: "Test Title",
        categories: [{id:1,name:'test1'},{id:2,name:'test2'}],
        onClick: jest.fn()
    };
    const { getByAltText } = render(<Card {...props} />);
    expect(getByAltText("")).toHaveAttribute("src", "path/to/cover.jpg");
});

    Verify that the component renders the correct title:

test("renders the correct title", () => {
    const props = {
        cover: "path/to/cover.jpg",
        date_event: "2022-12-01",
        tickets: "123",
        title: "Test Title",
        categories: [{id:1,name:'test1'},{id:2,name:'test2'}],
        onClick: jest.fn()
    };
    const { getByText } = render(<Card {...props} />);
    expect(getByText("Test Title")).toBeInTheDocument();
});

    Verify that the onClick function is called with the correct props when clicking on the card element:

test("onClick is called with correct props", () => {
    const onClick = jest.fn();
    const props = {
        cover: "path/to/cover.jpg",
        date_event: "2022-12-01",
        tickets: "123",
        title: "Test Title",
        categories: [{id:1,name:'test1'},{id:2,name:'test2'}],
        onClick: onClick
    };
    const { getByTestId } = render(<Card {...props} />);
    fireEvent.click(getByTestId("card-element"));
    expect(onClick).toHaveBeenCalledWith(props);
});

    Verify that the component doesn't render the "date_event" div if it's falsy:

test("date_event is not rendered if falsy", () => {
    const props = {
        cover: "path/to/cover.jpg",
        date_event: "",
        tickets: "123",
        title: "Test Title",
        categories: [{id:1,name:'test1'},{id:2,name:'test2'}],
        onClick: jest.fn()
    };
    const { queryByText } = render(<Card {...props} />);
    expect(queryByText(Date.readableDate(""))).toBeNull();
});
 */
