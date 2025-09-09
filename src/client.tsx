import React from 'npm:react'
import { createRoot } from 'npm:react-dom/client'
import App from './App.tsx'

const container = document.getElementById('root')
if (container) {
	const root = createRoot(container)
	root.render(<App />)
}
