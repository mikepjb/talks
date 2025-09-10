import { useEffect, useRef } from 'npm:react'
import Reveal from 'npm:reveal.js'
import RevealNotes from 'npm:reveal.js/plugin/notes/notes.js'
import { Talk } from './Talk.tsx'

function App() {
	console.log('Loading presentation application')
	const deckDivRef = useRef<HTMLDivElement>(null) // reference to deck container div
	const deckRef = useRef<Reveal.Api | null>(null) // reference to deck reveal instance

	useEffect(() => {
		// Prevents double initialization in strict mode
		if (deckRef.current) return

		deckRef.current = new Reveal(deckDivRef.current!, {
			transition: 'slide',
			// other config options
		})

		deckRef.current.initialize({
			plugins: [RevealNotes],
		})

		return () => {
			try {
				if (deckRef.current) {
					deckRef.current.destroy()
					deckRef.current = null
				}
			} catch (_) {
				console.warn('Reveal.js destroy call failed.')
			}
		}
	}, [])

	return (
		<div className='reveal' ref={deckDivRef}>
			<Talk />
		</div>
	)
}

export default App
