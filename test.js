import test from 'tape'
import {rehype} from 'rehype'
import rehypeMeta from 'rehype-meta'
import rehypeInferTitleMeta from './index.js'

test('rehypeInferTitleMeta', async (t) => {
  t.deepEqual(
    (await rehype().use(rehypeInferTitleMeta).process('<h1>a</h1>')).data,
    {meta: {title: 'a'}},
    'should set a title (in `data.meta`)'
  )

  t.deepEqual(
    (
      await rehype()
        .use(rehypeInferTitleMeta, {selector: '.x'})
        .process('<h1>a</h1><p class=x>b</p>')
    ).data,
    {meta: {title: 'b'}},
    'should support `options.selector`'
  )

  t.equal(
    String(
      await rehype()
        .use(rehypeInferTitleMeta)
        .use(rehypeMeta)
        .process('<h1>a</h1>')
    ),
    '<html><head>\n<title>a</title>\n</head><body><h1>a</h1></body></html>',
    'should integrate w/ `rehype-meta`'
  )

  t.end()
})
