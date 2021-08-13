# APIS

## About

## API

<!--api-start-->
### **Search**

Search for user

> **`GET`**  **/search?q={string}&page={number}&perPage={number}**

**Response**

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

### **New User**

> **`POST`**  **/newUser**

**Request Body**

```json
{
  "name": "string",
  "password": "string"
}
```

**Response**

```json
{
    "code": 200
}
```

<!--api-end-->
