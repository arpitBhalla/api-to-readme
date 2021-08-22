<h1 align="center">API To README</h1>

<p align="center">

  <img alt="License" src="https://img.shields.io/github/license/arpitBhalla/api-to-readme?style=flat-square">

  <img alt="Github issues" src="https://img.shields.io/github/issues/arpitBhalla/api-to-readme?style=flat-square" />

  <img alt="NPM installs" src="https://img.shields.io/npm/v/api-to-readme?style=flat-square" />

   <img alt="Github stars" src="https://img.shields.io/github/stars/arpitBhalla/api-to-readme?style=flat-square" />
</p>

<hr>

## :rocket: Getting Started

```bash
npm install api-to-readme
```

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

### Preview

---

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

---

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
