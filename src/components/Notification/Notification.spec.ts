import Notification from "./Notification.vue";
import { mount } from "@vue/test-utils";

describe("Notification", () => {
  it("It's rendering the Notification Compoment correctly", () => {
    const wrapper = mount(Notification, {
      props: {
        showNotification: true,
      },
    });
    expect(wrapper.text()).toEqual("Product added successfully!");
  });
});
