# rehype-infer-title-meta

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**rehype**][rehype] plugin to infer file metadata from the main title of a
document.
This plugin sets `file.data.meta.title`.
This is mostly useful with [`rehype-meta`][rehype-meta].

## Contents

*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`unified().use(rehypeInferTitleMeta, options?)`](#unifieduserehypeinfertitlemeta-options)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c):
Node 12+ is needed to use it and it must be `import`ed instead of `require`d.

[npm][]:

```sh
npm install rehype-infer-title-meta
```

## Use

Say `example.js` looks as follows:

```js
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeInferTitleMeta from 'rehype-infer-title-meta'
import rehypeDocument from 'rehype-document'
import rehypeMeta from 'rehype-meta'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'

main()

async function main() {
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
}
```

Now, running `node example` yields:

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

Plugin to infer file metadata of the document’s title.

##### `options.selector`

CSS selector to the title (`string`, default: `'h1'`).
Can be a selector list (`'title, h1, .main-heading'`), in which case the first
element in the tree that matches is used.

## Security

Use of `rehype-infer-title-meta` is safe.

## Related

*   [`rehype-document`](https://github.com/rehypejs/rehype-document)
    — Wrap a document around the syntax tree
*   [`rehype-meta`](https://github.com/rehypejs/rehype-meta)
    — Add metadata to the head of a document
*   [`unified-infer-git-meta`](https://github.com/unifiedjs/unified-infer-git-meta)
    — Infer file metadata from Git
*   [`rehype-infer-description-meta`](https://github.com/rehypejs/rehype-infer-description-meta)
    — Infer file metadata from the description of a document
*   [`rehype-infer-reading-time-meta`](https://github.com/rehypejs/rehype-infer-reading-time-meta)
    — Infer file metadata from the reading time of a document

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

[health]: https://github.com/rehypejs/.github

[contributing]: https://github.com/rehypejs/.github/blob/HEAD/contributing.md

[support]: https://github.com/rehypejs/.github/blob/HEAD/support.md

[coc]: https://github.com/rehypejs/.github/blob/HEAD/code-of-conduct.md

[license]: license

[author]: https://wooorm.com

[rehype]: https://github.com/rehypejs/rehype

[rehype-meta]: https://github.com/rehypejs/rehype-meta
