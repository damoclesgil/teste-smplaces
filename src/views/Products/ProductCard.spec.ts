import ProductCard from "./ProductCard.vue";
import { mount } from "@vue/test-utils";

const mockedProduct = {
  ProductID: 6489,
  Name: "Unlocked Phone",
  Price: 109,
  "Retail Price": 129.99,
  ThumbnailURL: "https://dummyimage.com/150x150/AAF4EE/000000",
  PictureURL: "https://dummyimage.com/350x350/AAF4EE/000000",
  Description:
    "Nam in facilisis turpis. Proin vel dui commodo purus accumsan ornare sit amet sit amet ex. Integer at aliquet diam. Pellentesque feugiat convallis justo, id ultrices dui interdum pharetra. Sed rutrum nec massa ornare posuere. Cras porttitor, magna accumsan dapibus varius, ipsum ligula viverra ante, id sollicitudin nunc odio vitae magna. Fusce et neque varius, iaculis lorem quis, bibendum est.",
  Category: "Electronics",
  CategoryID: 2,
  Brand: "BLU",
  Color: "Black|Blue",
  Badges: "Featured",
  RatingAvg: 4.1,
  RatingCount: 4,
  Stock: 19,
  DateCreated: "2018-02-28 23:37:28",
};

describe("ProductCard", () => {
  it("It's rendering the ProductCard component correctly", () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: { ...mockedProduct },
      },
    });
    const img = wrapper.get("img").element.src;
    expect(img).toEqual("https://dummyimage.com/150x150/AAF4EE/000000");
  });
});
