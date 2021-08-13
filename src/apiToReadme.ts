import fs from "fs";

export type API = {
  name: string;
  endpoint: string;
  method: "POST" | "GET";
  request?: unknown;
  response: unknown;
};

export const makeReadme = (
  apis: API[],
  readmePath?: string,
  startComment = "api",
  endComment = "api-end"
): string | void => {
  const md = apis
    .map((api) => {
      const request = api.request
        ? `#### **Request Body**
${"```json"}
${JSON.stringify(api.request, null, 2)}
${"```"}`
        : "";
      return `## API\n
### **${api.name}**\n
> **\`${api.method}\`**  **/${api.endpoint}**
${request}
#### **Response**\n
${"```json"}
${JSON.stringify(api.response, null, 4)}
${"```"}
`;
    })
    .join("");
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
  }
};
