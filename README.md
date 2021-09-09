# API To README

Script to insert REST API endpoints to README.md

![npm](https://img.shields.io/npm/v/api-to-readme?style=flat-square) ![npm](https://img.shields.io/npm/dm/api-to-readme?style=flat-square) ![NPM](https://img.shields.io/npm/l/api-to-readme?style=flat-square) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/api-to-readme?style=flat-square) ![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/api-to-readme?style=flat-square)

---

## :rocket: Getting Started

### Install

```bash
npm install api-to-readme
```

### Usage

```js
/scripts/generateAPI.js

// ES5
const { makeReadme } = require('api-to-readme')

// Typescript
import { makeReadme, API } from 'api-to-readme'

const apis: API[]= [
  {
    name: "Search",
    description: "Search for user",
    endpoint: "/search/",
    method: "GET",
    queryString: [
      {
        type: "string",
        name: "q",
        description: "Search query",
        required: true,
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
]

makeReadme(apis, {
  readmePath: path.join(__dirname, "README.md"),
  startComment: "api-start",
  endComment: "api-end",
})
```

### Run

```bash
# run the script
node scripts/generateAPI.js
```

### **Before**

```md
/README.md

# My Awesome Project

...

## API Reference

<!-- api-start -->
<!-- api-end -->

...
```

### **After**

````md
/README.md

# My Awesome Project

...

## API Reference

<!-- api-start -->

### **Search**

Search for user

| Parameter | Type     | Description               |
| --------- | -------- | ------------------------- |
| `q`       | `string` | **Required** Search query |

```http
GET /search/
```

- Response

```json
{
  "code": 200,
  "posts": [
    {
      "name": "string"
    },
    {
      "name": "string"
    }
  ]
}
```

<!-- api-end -->

...
````

## :checkered_flag: Contribution

```bash
# Clone this project
$ git clone https://github.com/arpitBhalla/api-to-readme

# Access
$ cd api-to-readme

# Install dependencies
$ npm install

# Start contribution

```

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made with :heart: by <a href="https://github.com/arpitBhalla" target="_blank">Arpit Bhalla</a>

## Author

**Arpit Bhalla**

- Website: [arpitbhalla.me](https://arpitbhalla.vercel.app/)
- GitHub: [arpitBhalla](https://github.com/arpitbhalla/)
- LinkedIn: [arpitbhalla](https://linkedin.com/in/arpitbhalla/)

&#xa0;

<a href="#top">Back to top</a>
