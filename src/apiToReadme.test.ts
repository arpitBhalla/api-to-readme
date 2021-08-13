import { makeReadme, API } from "./apiToReadme";

describe("Name of the group", () => {
  const apis: API[] = [
    {
      name: "Search",
      endpoint: "search?q={string}&page={number}&perPage={number}",
      method: "GET",
      response: {
        code: 200,
      },
    },
  ];

  it("should ", () => {
    const readme = makeReadme(apis);
    expect(readme).toMatchSnapshot();
  });
});
