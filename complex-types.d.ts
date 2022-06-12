// Need a random export to turn this into a module?
export type Whatever = unknown

declare module 'vfile' {
  interface DataMap {
    meta: {
      /**
       * Title of this document.
       *
       * Populated by `rehype-infer-title-meta` from the HTML.
       */
      title?: string
    }
  }
}
