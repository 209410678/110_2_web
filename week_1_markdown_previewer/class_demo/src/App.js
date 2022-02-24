import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  
  return (
    <main>
      <h1 className="title">Markdown Previewer</h1>
      <section className="markdown">
        <textarea className="input"></textarea>
        <article className="result"></article>
      </section>
    </main>
  )
  
}

export default App
