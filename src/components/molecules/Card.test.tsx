import { vi } from "vitest";
import * as Router from "react-router-dom";
// import {  } from "@testing-library/dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./Card";

vi.mock("react-router-dom");

vi.mocked(Router.useNavigate);

describe("Card component", () => {
  const state = {
    id: 66,
    title: "Marcelo D2 e um punhado de Bamba",
    event_date: "2023-01-20 22:00:00",
    categories: [
      {
        term_id: 38,
        name: "Centro",
        slug: "centro",
        term_group: 0,
        term_taxonomy_id: 38,
        taxonomy: "category",
        description: "",
        parent: 30,
        count: 12,
        filter: "raw",
      },
      {
        term_id: 37,
        name: "Lapa",
        slug: "lapa",
        term_group: 0,
        term_taxonomy_id: 37,
        taxonomy: "category",
        description: "",
        parent: 31,
        count: 9,
        filter: "raw",
      },
      {
        term_id: 36,
        name: "Hip-hop",
        slug: "hip-hop",
        term_group: 0,
        term_taxonomy_id: 36,
        taxonomy: "category",
        description: "",
        parent: 32,
        count: 8,
        filter: "raw",
      },
      {
        term_id: 48,
        name: "Samba",
        slug: "samba",
        term_group: 0,
        term_taxonomy_id: 48,
        taxonomy: "category",
        description: "",
        parent: 32,
        count: 2,
        filter: "raw",
      },
    ],
    cover:
      "http://sextou.local/wp-content/uploads/2023/01/MARCELO_D2_EVENTIM_1240x480-768x297.jpg",
    tickets:
      "https://www.eventim.com.br/event/marcelo-d2-e-um-punhado-de-bamba-circo-voador-16379975/",
    description:
      '<img class="alignnone size-full wp-image-68" src="http://sextou.local/wp-content/uploads/2023/01/324419935_739576277221016_6661627027708603135_n.jpg" alt="" width="750" height="750" />\r\n\r\n<span class="_aacl _aaco _aacu _aacx _aad7 _aade">Avisa l\u00e1 que agora \u00e9 samba! 20 de janeiro tem estreia do projeto Marcelo D2 e um Punhado de Bamba no <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz notranslate _a6hd" role="link" href="https://www.instagram.com/circovoador/">@circovoador</a>\r\n\r\nAncestralidade de futuro em um show totalmente novo, com m\u00fasicas in\u00e9ditas e com os cl\u00e1ssicos da minha carreira em uma sonoridade afro samba digital\r\n\r\nPra abrir os trabalhos da noite, show do meu filho <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz notranslate _a6hd" role="link" href="https://www.instagram.com/sainktt/">@sainktt</a>\r\n\r\nO Circo vai pegar fogo! Te espero l\u00e1!</span>',
  };

  const component = <Card {...state} />;

  it("renders", () => {
    render(component);
  });

  it("renders cover correctly", () => {
    render(component);

    const HTMLelement = screen.getByRole("img");

    expect(HTMLelement).toHaveAttribute("src", state.cover);
  });

  it("renders Title", () => {
    render(component);

    expect(screen.getByText(state.title)).toBeInTheDocument();
  });

  it("doesn't render onClick on default", () => {
    const handleClick = vi.fn();
    render(component);

    const spanElement = screen.getByTestId("span");

    fireEvent.click(spanElement);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("render onClick if prompted", () => {
    const handleClick = vi.fn(() => {});

    render(<Card {...state} onClick={handleClick} />);

    const spanElement = screen.getByTestId("span");

    fireEvent.click(spanElement);
    expect(handleClick.called).toBe(true);
  });

  it("render date correctly", () => {
    const regex = /^([a-zA-Z]+),\s(\d{1,2})\sde\s([a-zA-Z]+)$/;

    render(component);

    const dateElement = screen.getByTestId("date");

    expect(dateElement).toHaveTextContent(regex);
  });

  it("render categories correctly", () => {
    render(component);

    const element = screen.getByTestId("categories");

    expect(element.children.length).toBe(state.categories.length);

    state.categories.forEach((pill, index) => {
      expect(element.children[index]).toHaveTextContent(pill.name);
    });
  });

  // TODO: test click on button
});
