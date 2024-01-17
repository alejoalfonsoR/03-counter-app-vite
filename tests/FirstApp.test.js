import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirstApp", () => {
            // test("Debe de hacer match con el snpshot", () => {
            //         const title = "Hola, soy Vegeta";
            //         const { container } = render( < FirstApp title = { title }
            //             />);
            //             expect(container).toMatchSnapshot();
            //         });

            test("Debe mostrar el titulo en un h1", () => {
                    const title = "Hola, soy Vegeta";
                    const { container, getAllByText, getByTestId } = render( < FirstApp title = { title }
                        />);
                        expect(getAllByText(title)).toBeTruthy();

                        // const h1 = container.querySelector('h1');
                        // expect(h1.innerHTML).toContain(title)
                        expect(getByTestId('test-title').innerHTML).toBe(title);
                    });

                test('debe mostrar el subtitulo enviado por props', () => {
                    const title = "Hola, soy Vegeta";
                    const subTitle = "Soy un subtitulo";
                    const { getAllByText } = render( <
                        FirstApp title = { title }
                        subTitle = { subTitle }
                        />
                    );
                    expect(getAllByText(subTitle)).toBeTruthy();


                })
            });