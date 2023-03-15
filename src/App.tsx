import { Graph } from '@antv/x6'
import React, { useEffect, useRef } from 'react'
import './App.css'
import { SNAP_PORT_RECT } from './port-node'
import { OrthSnapline } from './snapline'
const Arrowhead = {
  tagName: 'circle',
  attrs: {
    r: 5,
    fill: '#fff',
    stroke: '#0170fe',
    'stroke-width': 2,
    cursor: 'move'
  }
}

function App() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const editor = new Graph({
      container: ref.current!,
      width: 800,
      height: 600,
      grid: true,
      connecting: {
        router: 'normal',
        anchor: 'center',
        connectionPoint: 'anchor',
        allowBlank: true,
        allowMulti: true,
        allowLoop: false,
        allowNode: false,
        allowEdge: true,
        allowPort: true,
        validateEdge: ({ edge }) => {
          edge.addTools([
            {
              name: 'source-arrowhead',
              args: Arrowhead
            },
            {
              name: 'target-arrowhead',
              args: Arrowhead
            },
            'vertices',
            'segments'
          ])
          return true
        }
      }
    })
    const snapline = new OrthSnapline({
      enabled: true,
      sharp: true
    })
    editor.use(snapline)
    editor.addNode({
      shape: 'rect',
      x: 50,
      y: 50,
      width: 100,
      height: 40,
      attrs: { label: { text: 'A' } }
    })

    editor.addNode({
      shape: 'circle',
      x: 250,
      y: 80,
      width: 50,
      height: 50,
      attrs: { label: { text: 'B' } }
    })

    editor.addNode({
      shape: SNAP_PORT_RECT,
      x: 400,
      y: 250,
      width: 80,
      height: 40,
      ports: [
        { id: 'port2', group: 'right' },
        { id: 'port3', group: 'right' },
        { id: 'port4', group: 'bottom' },
        { id: 'port5', group: 'bottom' },
        { id: 'port6', group: 'bottom' },
        { id: 'port7', group: 'absolute', args: { x: -10, y: 10 } }
      ]
    })

    editor.addNode({
      shape: SNAP_PORT_RECT,
      x: 400,
      y: 350,
      width: 100,
      height: 60,
      ports: [
        { id: 'port1', group: 'left' },
        { id: 'port2', group: 'left' },
        { id: 'port3', group: 'left' },
        { id: 'port4', group: 'left' }
      ]
    })

    editor.addNode({
      shape: SNAP_PORT_RECT,
      x: 400,
      y: 500,
      width: 100,
      height: 60,
      ports: [
        { id: 'port1', group: 'top' },
        { id: 'port2', group: 'top' },
        { id: 'port3', group: 'top' },
        { id: 'port4', group: 'top' }
      ]
    })
    editor.addNode({
      x: 200,
      y: 500,
      width: 100,
      height: 60,
      angle: 45,
      ports: [
        {
          id: 'port1',
          attrs: {
            circle: {
              r: 6,
              magnet: true,
              stroke: '#31d0c6',
              strokeWidth: 2,
              fill: '#fff'
            }
          }
        },
        {
          id: 'port2',
          attrs: {
            circle: {
              r: 6,
              magnet: true,
              stroke: '#31d0c6',
              strokeWidth: 2,
              fill: '#fff'
            }
          }
        }
      ]
    })

    return () => {
      editor.dispose()
    }
  }, [])

  return <div className='editor' ref={ref}></div>
}

export default App
