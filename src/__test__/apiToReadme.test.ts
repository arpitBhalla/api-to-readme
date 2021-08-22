import { makeReadme, API } from "../apiToReadme";
import path from "path";

describe("Name of the group", () => {
  const apis: API[] = [
    {
      name: "Search",
      description: "Search for user",
      endpoint: "search",
      method: "GET",
      queryString: [
        {
          type: "string",
          name: "q",
          description: "Search query",
          required: true,
        },
        {
          type: "number",
          name: "page",
          description: "Page number",
        },
        {
          type: "number",
          name: "perPage",
          description: "Number of items per page",
        },
      ],
      response: {
        code: 200,
        posts: [
          {
            name: "string",
          },
          {
            name: "string",
          },
        ],
      },
    },
    {
      name: "New User",
      endpoint: "newUser",
      method: "POST",
      request: {
        name: "string",
        password: "string",
      },
      response: {
        code: 200,
      },
    },
  ];

  it("should ", () => {
    const readme = makeReadme(apis);
    expect(readme).toMatchSnapshot();
  });

  it("should ", () => {
    const readme = makeReadme(apis, {
      readmePath: path.join(__dirname, "readme.md"),
      startComment: "api-start",
      endComment: "api-end",
    });
    expect(readme).toMatchSnapshot();
  });
});
