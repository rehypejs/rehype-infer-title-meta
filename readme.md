# rehype-infer-title-meta

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

**[rehype][]** plugin to infer the title of a document.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`unified().use(rehypeInferTitleMeta, options?)`](#unifieduserehypeinfertitlemeta-options)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a [unified][] ([rehype][]) plugin to infer the title of a
document.

**unified** is a project that transforms content with abstract syntax trees
(ASTs).
**rehype** adds support for HTML to unified.
**vfile** is the virtual file interface used in unified.
**hast** is the HTML AST that rehype uses.
This is a rehype plugin that inspects hast and adds metadata to vfiles.

## When should I use this?

This plugin is particularly useful in combination with
[`rehype-meta`][rehype-meta].
When both are used together, the `<title>` is populated with the document’s
title.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).
In Node.js (version 12.20+, 14.14+, 16.0+, or 18.0+), install with [npm][]:

```sh
npm install rehype-infer-title-meta
```

In Deno with [`esm.sh`][esmsh]:

```js
import rehypeInferTitleMeta from 'https://esm.sh/rehype-infer-title-meta@1'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import rehypeInferTitleMeta from 'https://esm.sh/rehype-infer-title-meta@1?bundle'
</script>
```

## Use

Say our module `example.js` looks as follows:

```js
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeInferTitleMeta from 'rehype-infer-title-meta'
import rehypeDocument from 'rehype-document'
import rehypeMeta from 'rehype-meta'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'

const file = await unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument)
  .use(rehypeInferTitleMeta)
  .use(rehypeMeta)
  .use(rehypeFormat)
  .use(rehypeStringify)
  .process('# Hello, world!')

console.log(file.data)
console.log(String(file))
```

…now running `node example.js` yields:

```js
{meta: {title: 'Hello, world!'}}
```

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```

## API

This package exports no identifiers.
The default export is `rehypeInferTitleMeta`.

### `unified().use(rehypeInferTitleMeta, options?)`

Infer the title from a document as file metadata.
The result is stored on `file.data.meta.title`.

##### `options`

Configuration (optional).

##### `options.selector`

CSS selector to the title (`string`, default: `'h1'`).
Can be a selector list (`'title, h1, .main-heading'`), in which case the first
element in the tree that matches is used.

## Types

This package is fully typed with [TypeScript][].
The additional type `Options` is exported.

It also registers the `file.data.meta` field with `vfile`.
If you’re working with the file, make sure to import this plugin somewhere in
your types, as that registers the new field on the file.

```js
/**
 * @typedef {import('rehype-infer-title-meta')}
 */

import {VFile} from 'vfile'

const file = new VFile()

console.log(file.data.meta.title) //=> TS now knows that this is a `string?`.
```

## Compatibility

Projects maintained by the unified collective are compatible with all maintained
versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, 16.0+, and 18.0+.
Our projects sometimes work with older versions, but this is not guaranteed.

This plugin works with `rehype-parse` version 3+, `rehype-stringify` version 3+,
`rehype` version 4+, and `unified` version 6+.

## Security

Use of `rehype-infer-title-meta` is safe.

## Related

*   [`rehype-document`](https://github.com/rehypejs/rehype-document)
    — wrap a fragment in a document
*   [`rehype-meta`](https://github.com/rehypejs/rehype-meta)
    — add metadata to the head of a document
*   [`unified-infer-git-meta`](https://github.com/unifiedjs/unified-infer-git-meta)
    — infer file metadata from Git
*   [`rehype-infer-description-meta`](https://github.com/rehypejs/rehype-infer-description-meta)
    — infer file metadata from the description of a document
*   [`rehype-infer-reading-time-meta`](https://github.com/rehypejs/rehype-infer-reading-time-meta)
    — infer file metadata from the reading time of a document

## Contribute

See [`contributing.md`][contributing] in [`rehypejs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/rehypejs/rehype-infer-title-meta/workflows/main/badge.svg

[build]: https://github.com/rehypejs/rehype-infer-title-meta/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/rehypejs/rehype-infer-title-meta.svg

[coverage]: https://codecov.io/github/rehypejs/rehype-infer-title-meta

[downloads-badge]: https://img.shields.io/npm/dm/rehype-infer-title-meta.svg

[downloads]: https://www.npmjs.com/package/rehype-infer-title-meta

[size-badge]: https://img.shields.io/bundlephobia/minzip/rehype-infer-title-meta.svg

[size]: https://bundlephobia.com/result?p=rehype-infer-title-meta

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/rehypejs/rehype/discussions

[npm]: https://docs.npmjs.com/cli/install

[esmsh]: https://esm.sh

[health]: https://github.com/rehypejs/.github

[contributing]: https://github.com/rehypejs/.github/blob/main/contributing.md

[support]: https://github.com/rehypejs/.github/blob/main/support.md

[coc]: https://github.com/rehypejs/.github/blob/main/code-of-conduct.md

[license]: license

[author]: https://wooorm.com

[typescript]: https://www.typescriptlang.org

[unified]: https://github.com/unifiedjs/unified

[rehype]: https://github.com/rehypejs/rehype

[rehype-meta]: https://github.com/rehypejs/rehype-meta
