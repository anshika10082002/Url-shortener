# Lithium

### Project Title
  ##  Url-Shortener

*This is a **Node.js** backend application built with **Express** and **MongoDB** that allows users to shorten URLs. The short URLs are generated using the **shortid** library and can be **cached** using **Redis** to improve performance.*"

*Users are redirected to the original URL when they hit these short links. Short links save a lot of space when displayed, printed, messaged, or tweeted. Additionally, users are less likely to mistype shorter URLs*.

*The shortened URL is nearly one-fifth the size of the actual URL.*

- Used a tool like **Postman** to send HTTP requests.

## Installation
- Install dependencies using command: *npm install*
**Dependencies used in this project**
- express
- mongoose
- redis
- shortid

## Use cases
- To optimise links shared across users
- Easy tracking of individual links and sometimes hiding the affiliated original URLs.

- For example, if we shorten the following URL through TinyURL:

https://babeljs.io/blog/2020/10/15/7.12.0#class-static-blocks-12079httpsgithubcombabelbabelpull12079-12143httpsgithubcombabelbabelpull12143

- We would get:

https://tinyurl.com/y4ned4ep



# Phase I
## Models
## Url Model

```yaml
{ 
  urlCode: { mandatory, unique, lowercase, trim },
   longUrl: {mandatory, valid url},
    shortUrl: {mandatory, unique} 
    }
```
# Create Short Url
 - **Endpoint** :- /url/shorten
 - **Method** :- POST
    - Request body receives original Url

    -  OriginalUrl is http://abc.com/user/images/name/2 then
    -  shortened url should be http://localhost:3000/xyz
    - Return the shortened unique url. 
    - Same response is returned for an original url everytime
    - Returning HTTP status 400 for an invalid request

# GET urlCode
 - **Endpoint** :- /:urlCode
 - **Method** :- GET
    - Redirect to the original URL corresponding
    - Used a valid HTTP status code for a redirection scenario.
    - Returning a suitable error for a url not found
    - Returning HTTP status 400 for an invalid request

- *Testing*
    - To test these apis create a new collection in Postman named  Url Shortner
    - Each api should have a new request in this collection

# Phase II
    - Use caching while fetching the shortened url to minimize db calls.
    - Figure out if you can also use caching while redirecting to the original url from the shortedned url

# Response
# Successful Response structure
```yaml
{
  status: true,
  data: {

  }
}
```

# Error Response structure
```yaml
{
  status: false,
  message: ""
}
```

# Url shorten response

```yaml
{
  "data": {
    "longUrl": "http://www.abc.com/oneofthelongesturlseverseenbyhumans.com",
    "shortUrl": "http://localhost:3000/ghfgfg",
    "urlCode": "ghfgfg"
  } 
}
```