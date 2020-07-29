export default {
  title: "On the Way Page",
  name: "onTheWayPage",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Cars",
      name: "cars",
      type: "array",
      of: [{ type: "carForSale" }],
    },
  ],
};
