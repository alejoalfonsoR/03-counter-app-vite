import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirstApp", () => {
            const title = "Hola, soy Vegeta";
            const subTitle = "Soy un subtitulo";

            test("debe hacer match con el snapshot", () => {
                        const { container } = render( < FirstApp title = { title }
                            />);
                            expect(container).toMatchSnapshot();
                        });

                    test('debe mostrar el mensaje "Hola, soy Vegeta', () => {
                            render( < FirstApp title = { title }
                                />);
                                expect(screen.getAllByText(title)).toBeTruthy();
                                // screen.debug();
                            });

                        test('debo mostrar el titulo en un h1', () => {

                                render( < FirstApp title = { title }
                                    />);
                                    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
                                })

                            test('debe mostrar el subtitulo enviado por props', () => {

                                    render( <
                                        FirstApp title = { title }
                                        subTitle = { subTitle }
                                        />);
                                        expect(screen.getAllByText(subTitle).length).toBe(1);

                                    })
                            });