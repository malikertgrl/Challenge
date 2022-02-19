import React from "react";
import renderer from 'react-test-renderer';
import { render, fireEvent } from "@testing-library/react-native"
import Seperator from "../src/screens/home/components/Seperator"
import CustomButton from "../src/screens/AddCharacter/components/CustomButton"
import Input from "../src/screens/AddCharacter/components/Input"
import AddCharacter from "../src/screens/addCharacter"
import { deleteItem } from "../src/screens/home/utils/deleteItem"


test('renders seperator', () => {
  const tree = renderer.create(<Seperator />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders customButton', () => {
  const tree = renderer.create(<CustomButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders Input', () => {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});


describe("Controlling text inputs", () => {

  it("Checking text input with testID = name", () => {
    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock); //reactaki usestate yerine kullanıcaz

    const { getByTestId } = render(<AddCharacter />);
    const Input = getByTestId("name");
    fireEvent.changeText(Input, 'test')
    expect(getByTestId('name').props.value).toEqual('test');


  })

  it("Checking text input with testID = job", () => {
    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock); //reactaki usestate yerine kullanıcaz

    const { getByTestId } = render(<AddCharacter />);
    const Input = getByTestId("job");
    fireEvent.changeText(Input, 'test')
    expect(getByTestId('job').props.value).toEqual('test');


  })
  it("Checking text input with testID = about", () => {
    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock); //reactaki usestate yerine kullanıcaz

    const { getByTestId } = render(<AddCharacter />);
    const Input = getByTestId("about");
    fireEvent.changeText(Input, 'test')
    expect(getByTestId('about').props.value).toEqual('test');


  })

  it("Checking text input with testID = avatar", () => {
    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock); //reactaki usestate yerine kullanıcaz

    const { getByTestId } = render(<AddCharacter />);
    const Input = getByTestId("avatar");
    fireEvent.changeText(Input, 'test')
    expect(getByTestId('avatar').props.value).toEqual('test');


  })

})

it("delete item", () => {
  const data = [
    { name: "malik", job: "developer", about: "blabla", id: "1" },
    { name: "Soner", job: "developer", about: "blabla", id: "2" }
  ]

  expect(deleteItem(1, data)).toHaveLength(1)
})




