import fs from "fs";

export type API = {
  name: string;
  description?: string;
  endpoint: string;
  method: "POST" | "GET" | "DELETE" | "PUT" | "PATCH";
  queryString?: {
    required?: boolean;
    name: string;
    description?: string;
    type: "string" | "number" | "boolean" | string;
  }[];
  request?: unknown;
  response?: unknown;
};

export type Options = {
  readmePath?: string;
  startComment?: string;
  endComment?: string;
};

const codeSnippet =
  (lang: TemplateStringsArray) =>
  (content: string): string =>
    "```" + (lang || "") + "\n" + content + "\n```";

export const makeReadme = (
  apis: API[],
  options: Options = {}
): string | void => {
  const { readmePath, startComment = "api", endComment = "api-end" } = options;
  const md = apis
    .map((api) => {
      const qString =
        api.queryString?.length &&
        "\n| Parameter | Type| Description|\n|----|----|----|\n" +
          api.queryString
            ?.map((query) => {
              return `| \`${query.name}\` | \`${query.type}\` |${
                query.required ? "**Required**" : ""
              } ${query.description}| `;
            })
            .join("\n");

      const method = "\n" + codeSnippet`http`(`${api.method} ${api.endpoint}`);

      const request =
        api.request &&
        "- Request\n\n" +
          codeSnippet`json`(JSON.stringify(api.request, null, 2));

      const response =
        api.response &&
        "- Response\n\n" +
          codeSnippet`json`(JSON.stringify(api.response, null, 2));
      return [
        `### **${api.name}**`,
        api.description,
        method,
        qString,
        request,
        response,
      ].join("\n");
    })
    .join("\n---\n");

  if (!readmePath) return md;
  const oldReadme = fs.readFileSync(readmePath, "utf8");
  const commentStart = new RegExp(`<!--\\s*${startComment}\\s*-->`).exec(
    oldReadme
  );
  const commentEnd = new RegExp(`<!--\\s*${endComment}\\s*-->`).exec(oldReadme);
  if (commentStart && commentEnd && commentEnd.index > commentStart.index) {
    const newReadme = `${oldReadme.substring(
      0,
      commentStart.index + commentStart[0].length
    )}
${md}
${oldReadme.substring(commentEnd.index)}`;
    if (newReadme !== oldReadme) {
      fs.writeFileSync(readmePath, newReadme, "utf8");
    }
    return newReadme;
  }
};
