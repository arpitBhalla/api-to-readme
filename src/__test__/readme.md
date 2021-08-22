# My Project

## API

<!--api-start-->

### **Search**

Search for user

| Parameter | Type     | Description               |
| --------- | -------- | ------------------------- |
| `q`       | `string` | **Required** Search query |
| `page`    | `number` | Page number               |
| `perPage` | `number` | Number of items per page  |

```http
GET search
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

### **New User**

```http
POST newUser
```

- Request

```json
{
  "name": "string",
  "password": "string"
}
```

- Response

```json
{
  "code": 200
}
```

<!--api-end-->
