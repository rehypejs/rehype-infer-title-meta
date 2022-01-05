import test from 'tape'
import {rehype} from 'rehype'
import rehypeMeta from 'rehype-meta'
import rehypeInferTitleMeta from './index.js'

test('rehypeInferTitleMeta', async (t) => {
  let file = await rehype().use(rehypeInferTitleMeta).process('<h1>a</h1>')

  t.deepEqual(
    file.data,
    {meta: {title: 'a'}},
    'should set a title (in `data.meta`)'
  )

  file = await rehype()
    .use(rehypeInferTitleMeta, {selector: '.x'})
    .process('<h1>a</h1><p class=x>b</p>')

  t.deepEqual(
    file.data,
    {meta: {title: 'b'}},
    'should support `options.selector`'
  )

  file = await rehype()
    .use(rehypeInferTitleMeta)
    .use(rehypeMeta)
    .process('<h1>a</h1>')

  t.equal(
    String(file),
    '<html><head>\n<title>a</title>\n</head><body><h1>a</h1></body></html>',
    'should integrate w/ `rehype-meta`'
  )

  t.end()
})
