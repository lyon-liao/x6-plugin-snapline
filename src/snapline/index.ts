import { Disposable, Graph } from '@antv/x6'

export class NbSnapline extends Disposable {
  constructor(options: NbSnapline.Options = { enabled: true }) {
    super()
  }

  test() {
    console.log('test')
  }
}

export namespace NbSnapline {
  export interface Options {
    enabled?: boolean
    className?: string
    tolerance?: number
    sharp?: boolean
    /**
     * Specify if snap on node resizing or not.
     */
    resizing?: boolean
    clean?: boolean | number
    filter?: Filter
  }

  export type Filter = null | (string | { id: string })[] | FilterFunction

  export type FilterFunction = (this: Graph, node: Node) => boolean
}
