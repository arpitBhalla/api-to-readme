import fs from "fs";

export type API = {
  name: string;
  description?: string;
  endpoint: string;
  method: "POST" | "GET" | "DELETE" | "PUT";
  request?: unknown;
  response: unknown;
};

export type Options = {
  readmePath?: string;
  startComment?: string;
  endComment?: string;
};

export const makeReadme = (
  apis: API[],
  options: Options = {}
): string | void => {
  const { readmePath, startComment = "api", endComment = "api-end" } = options;
  const md = apis
    .map((api) => {
      const request = api.request
        ? `\n**Request Body**\n
${"```json"}
${JSON.stringify(api.request, null, 2)}
${"```"}\n`
        : "";
      return `### **${api.name}**
${api.description ? `\n${api.description}\n` : ""}
> **\`${api.method}\`**  **/${api.endpoint}**
${request}
**Response**\n
${"```json"}
${JSON.stringify(api.response, null, 4)}
${"```"}
`;
    })
    .join("\n");
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
