import React from "react";
import { shallow, configure } from "enzyme";
import { render } from "react-dom";
import Adapter from "enzyme-adapter-react-16";

import Login from "./Pages/login";
import TimeTables from "./Pages/timeTables";
import Announcements from "./Pages/announcements";
import fgtPass from "./Pages/fgtPass";
import NavBar from "./components/NavigationBar";
import SideNav from "./components/SideNavigation";
import PostDetail from "./components/posts/PostDetail";
import PostAdding from "./components/posts/PostAdding";
import UploadTimeTables from "./components/timeTables/UploadTimeTables";

configure({ adapter: new Adapter() });

jest.dontMock("bootstrap");

describe("Login", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("TimeTables", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<TimeTables />);
    expect(wrapper).toMatchSnapshot();
  });
});
describe("announcements", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Announcements />);
    expect(wrapper).toMatchSnapshot();
  });
});
describe("fgtPassword", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<fgtPass />);
    expect(wrapper).toMatchSnapshot();
  });
});
describe("Navigation Bar", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
describe("SideNavigation", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SideNav />);
    expect(wrapper).toMatchSnapshot();
  });
});
describe("Adding a post", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<PostAdding />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Detail of a post", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<PostDetail />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Uploading a time table", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<UploadTimeTables />);
    expect(wrapper).toMatchSnapshot();
  });
});
