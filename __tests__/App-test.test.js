import React from "react";
import renderer from 'react-test-renderer';
import { render, fireEvent } from "@testing-library/react-native"
import Seperator from "../src/screens/home/components/Seperator"
import CustomButton from "../src/screens/AddCharacter/components/CustomButton"
import Input from "../src/screens/AddCharacter/components/Input"
import AddCharacter from "../src/screens/addCharacter"
import Home from '../src/screens/home'
import { deleteItem } from "../src/screens/home/utils/deleteItem"
import Icon from "../src/screens/home/components/Icon"
import AddItem from "../src/screens/home/components/AddItem"
import { Provider } from "react-redux"
import { Store } from "../src/redux/Store"
import { SystemReducer } from "../src/redux/reducer/SystemReducer"
import { PULL_ALL_CHARACTERS } from "../src/redux/action/actionTypes"
import api from "../src/api"

test('renders homescreen', () => {
  renderer.create(
    <Provider store={Store}>
      <Home />
    </Provider>)
});


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

test('renders Icon', () => {
  const tree = renderer.create(<Icon />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders AddItem', () => {
  const tree = renderer.create(<AddItem />).toJSON();
  expect(tree).toMatchSnapshot();
});


describe("Controlling text inputs", () => {

  it("Checking text input with testID = name", () => {
    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock); //reactaki usestate yerine kullanıcaz

    const { getByTestId } = render(
      <Provider store={Store}>
        <AddCharacter />
      </Provider>
    );
    const Input = getByTestId("name");
    fireEvent.changeText(Input, 'test')
    expect(getByTestId('name').props.value).toEqual('test');


  })
})

describe("testing job input", () => {

  it("Checking text input with testID = job", () => {
    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock); //reactaki usestate yerine kullanıcaz

    const { getByTestId } = render(
      <Provider store={Store}>
        <AddCharacter />
      </Provider>
    );
    const Input = getByTestId("job");
    fireEvent.changeText(Input, 'test')
    expect(getByTestId('job').props.value).toEqual('test');


  })
})

describe("testing about input", () => {

  it("Checking text input with testID = about", () => {
    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock); //reactaki usestate yerine kullanıcaz

    const { getByTestId } = render(
      <Provider store={Store}>
        <AddCharacter />
      </Provider>
    );
    const Input = getByTestId("about");
    fireEvent.changeText(Input, 'test')
    expect(getByTestId('about').props.value).toEqual('test');


  })
})

describe("testing avatar Input", () => {

  it("Checking text input with testID = avatar", () => {
    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock); //reactaki usestate yerine kullanıcaz

    const { getByTestId } = render(
      <Provider store={Store}>
        <AddCharacter />
      </Provider>
    );
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

describe('reducer', () => {
  const result = SystemReducer(undefined, {});
  it('should return the initial state', () => {
    expect(result).toEqual({ allCharacters: {}, loading: false })
  })

  it('should handle PULL_ALL_CHARACTERS', () => {

    const user = {
      name: "",
      job: "",
      about: "",
      id: Math.random(),
      avatar: "",
      isManuel: true
    };


    const newState = SystemReducer(undefined, {
      type: PULL_ALL_CHARACTERS,
      payload: user
    });
    expect(newState).toEqual({ allCharacters: user, loading: false });

  })
})

describe('allCharacters api call', () => {
  test('should pass', () => {
    const testData = {
      name: "",
      job: "",
      about: "",
      id: Math.random(),
      avatar: "",
      isManuel: true
    };

    const response = { json: jest.fn().mockResolvedValueOnce(testData) };
    global.fetch = jest.fn().mockResolvedValueOnce(response);

    return api.allCharacters().then((testData) => {
      expect(testData).toEqual(testData);
    });
  });
})

//create a test function for characterDetails call from api
describe('characterDetails api call', () => {
  test('should pass', () => {
    const testData = {
      name: "",
      job: "",
      about: "",
      id: Math.random(),
      avatar: "",
      isManuel: true
    };

    const response = { json: jest.fn().mockResolvedValueOnce(testData) };
    global.fetch = jest.fn().mockResolvedValueOnce(response);

    return api.characterDetails(1).then((testData) => {
      expect(testData).toEqual(testData);
    });
  });
})