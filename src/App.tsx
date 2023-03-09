import { Graph } from '@antv/x6'
import React, { useEffect, useMemo, useRef } from 'react'
import './App.css'
import { NbSnapline } from './snapline'

function App() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const editor = new Graph({
      container: ref.current!,
      background: {
        color: '#F2F7FA'
      }
    })
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
      shape: 'ellipse',
      x: 350,
      y: 150,
      width: 80,
      height: 40,
      attrs: { label: { text: 'C' } }
    })

    editor.addNode({
      shape: 'ellipse',
      x: 550,
      y: 350,
      width: 80,
      height: 40,
      attrs: { label: { text: 'D' } }
    })

    return () => {
      editor.dispose()
    }
  }, [])

  return <div className='editor' ref={ref}></div>
}

export default App
