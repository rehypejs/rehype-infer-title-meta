/**
 * @typedef {import('hast').Root} Root
 *
 * @typedef Options
 *   Configuration.
 * @property {string} [selector='h1']
 *   CSS selector to the title.
 *   Can be a selector list (`'title, h1, .main-heading'`), in which case
 *   the first element in the tree that matches is used.
 */

import {select} from 'hast-util-select'
import {toText} from 'hast-util-to-text'

/**
 * Plugin to infer file metadata from the main title of a document.
 *
 * @type {import('unified').Plugin<[Options?]|[], Root>}
 */
export default function rehypeInferTitleMeta(options = {}) {
  const {selector = 'h1'} = options

  return (tree, file) => {
    const node = select(selector, tree)

    const matter = /** @type {Record<string, unknown>} */ (
      file.data.matter || {}
    )
    const meta = /** @type {Record<string, unknown>} */ (
      file.data.meta || (file.data.meta = {})
    )

    if (node && !matter.title && !meta.title) {
      meta.title = toText(node)
    }
  }
}
