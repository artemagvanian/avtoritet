export default {
  title: "Parter Page",
  name: "partnerPage",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Partners",
      name: "partners",
      type: "array",
      of: [{ type: "partner" }],
    },
  ],
};
