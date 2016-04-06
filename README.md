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

At this example, you can find that there are kind of nested callbacks just in one function(`webserver()`, `fs.access()` and `fs.readFile()`)

Hopefully, there have been changes from upgrade of es6; `Promise`

So, we refactor our code applying this method to our example. Additionally, we also apply `Stream` method instead of `fs`.

```console
> node example/WebServerBegin/WebServer.js
```

- **Create Own Module** -

Let's make our own module.

In this project, we will make encryption module.

```console
> node example/myModule/app.js
```

**ChatCAT**

To learn NodeJS by building a practical application.

First of all, we will use `nodemon` and then install packages.

```console
> npm install -g nodemon
> npm install
```

Basically, this project uses express.js.

### License

MIT

### Reference

- **Udemy Lecture** : [all-about-nodejs](https://www.udemy.com/all-about-nodejs/)
