export default {
  title: "About Page",
  name: "aboutPage",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Upper Banner",
      name: "upperBanner",
      type: "image",
    },
    {
      title: "Lower Banner",
      name: "lowerBanner",
      type: "image",
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
