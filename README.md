# dmd-compodoc-api-plugin

This has been created to be used with backed api calls and compodoc. Special manipulation of JSdoc tags for api-specific info
Formatting to match compodoc

Cloned and adapted from [dmd-example-plugin](https://github.com/jsdoc2md/dmd-plugin-example)

## Install
With NPM:
```
$ npm install https://github.com/bhofmei/dmd-compodoc-api-plugin --save-dev
```

With yarn:
```
$ yarn add https://github.com/bhofmei/dmd-compodoc-api-plugin --dev
```

## Use with JSdoc

Then pass the plug-in name to `jsdoc2md` or `dmd`:
```
$ jsdoc2md --plugin dmd-plugin-example lib/*.js 
```

## JSDoc Adaptions

* In general, should be used for Express.js functions of the form `funcName(req, res [,next, param...])`. Thus, each function has parameters `req`, `res`, and optionally `next` and additional ID parameters.

* Request parameters
  * But each request will have it's own parameters which should be documented.
  * Those are each documented using the `@property` tag with syntax like a normal parameter

* Sometimes these functions return and error but usually they pass info to the next middleware or response object.

* HTTP Response
  * When providing info to the response object, document with `@yields [{type}] description`.
  * Rather than type, we want to specificy the HTTP response code.
  * To include message info in the status code, replace spaces with `_`-they will be cleaned up for output.
  * For example, status `200 OK` would have a JSdoc like `@yields {200_OK} function description`.
  
* For endpoint functions
  * Specify the HTTP type with `@apiType`. Should be one of `GET`, `POST`, `DELETE`, `PUT`, `PATCH`, `HEAD`, or `OPTIONS`.
  * Specify the URL path with `@apiPath`. This is the express route
* For middleware and/or parameter identification functions: set `@access protected`

* Examples
  * Finally examples can be split into response and request. 
  * The normal `example` tag has an optional `<caption>...</cpation>`. Specify `Response` or `Request` here to indicate the example type. Multiple types are allowed.
  * Additional comments about the example can be included with the example as a second line in `<p>comment</p>`.
  * If a caption is specified, comment needs to be on it's own line. If no caption speicified, it should be on the sample line as the `@example` tag.

* All normal JSDoc tags will work for documenting functions/modules which aren't express functions