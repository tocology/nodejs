# NodeJS

This repository deals with how to make web application using Nodejs.

## Development

### Preperation

Basically, Nodejs is used as already mentioned. So, we need to install nodejs first.

For getting information about how to install, please visit [Node.js](https://nodejs.org/en/)

### Build

```console
> npm install
```

### Test

- **BasicRouter**

In this example, we do not use `route` module for routing user access.

Alternatively, we try to make `route` by ourselves.

Futhermore, I recommend [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop) 
which is one of Chrome Web Application when we need to test POST method API.

```console
> node example/BasicRouter.js
```

- **Static Web Server**

Basically, we apply `route` module that we made at previous example.

However, we need to add more imported modules like `fs` and `path`.

```console
> node example/WebServerBegin/WebServer_old.js
```

At this example, you can find that there are kind of nested callbacks just in one function(`webserver()`)

Hopefully, there have been changes from upgrade of es6; `Promise`

So, we apply this method to our example.

```console

```

### License

MIT

### Reference

- **Udemy Lecture** : [all-about-nodejs](https://www.udemy.com/all-about-nodejs/)
