import Button from "./Button.vue";
import { mount } from "@vue/test-utils";

describe("Button", () => {
  it("It's rendering the button correctly", () => {
    const wrapper = mount(Button);
    expect(wrapper.find("button").isVisible()).toBe(true);
  });
});
