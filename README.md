[![view on npm](http://img.shields.io/npm/v/dmd-plugin-example.svg)](https://www.npmjs.org/package/dmd-plugin-example)
[![npm module downloads per month](http://img.shields.io/npm/dm/dmd-plugin-example.svg)](https://www.npmjs.org/package/dmd-plugin-example)
[![Dependency Status](https://david-dm.org/jsdoc2md/dmd-plugin-example.svg)](https://david-dm.org/jsdoc2md/dmd-plugin-example)

# dmd-plugin-example

This is a simple example demonstrating how to construct a dmd plugin. It adds a generated date to the bottom of your API docs.

To make your own plug-in, clone this project, edit and publish to npm. 

To use a plug-in in your project, first install it as a devDependency: 
```
$ npm install dmd-plugin-example --save-dev
```

Then pass the plug-in name to `jsdoc2md` or `dmd`:
```
$ jsdoc2md --plugin dmd-plugin-example lib/*.js 
```

Notes: params partial is mainly from params-table-html
Params are actually the request parameters

This has been created to be used with backed api calls and compodoc. Special manipulation of JSdoc tags for api-specific info
Formatting to match compodoc

In general, should be used for Express.js functions of the form `funcName(req, res [,next, param...])`

Thus, each function has parameters `req`, `res`, and optionally `next` and additional ID parameters.

But each request will have it's own parameters which should be documented. Those are each documented using the `@property` tag.

Sometimes these functions return and error but usually they pass info to the next middleware or response object.

When providing info to the response object, document with `@yields [{type}] description`. Rather than type, we want to specificy the HTTP response code.
To include message info in the status code, replace spaces with `_`-they will be cleaned up for output. For example, status `200 OK` would have a JSdoc like `@yields {200_OK} function description`.

Finally examples can be split into response and request. The normal `example` tag has an optional `<caption>...</cpation>`. Specify `Response` or `Request` here to indicate the example type. Multiple types are allowed.
Additional comments can be included with the example as a second line in `<p>comment</p>`.
If a caption is specified, this needs to be on it's own line. If no caption speicified, it should be on the sample line as the `@example` tag.