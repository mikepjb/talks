import { useEffect, useRef } from 'npm:react'
import Reveal from 'npm:reveal.js'

function App() {
	console.log('hello.')
	const deckDivRef = useRef<HTMLDivElement>(null) // reference to deck container div
	const deckRef = useRef<Reveal.Api | null>(null) // reference to deck reveal instance

	useEffect(() => {
		// Prevents double initialization in strict mode
		if (deckRef.current) return

		deckRef.current = new Reveal(deckDivRef.current!, {
			transition: 'slide',
			// other config options
		})

		deckRef.current.initialize().then(() => {
			// good place for event handlers and plugin setups
		})

		return () => {
			try {
				if (deckRef.current) {
					deckRef.current.destroy()
					deckRef.current = null
				}
			} catch (e) {
				console.warn('Reveal.js destroy call failed.')
			}
		}
	}, [])

	return (
		<div className='reveal' ref={deckDivRef}>
			<div className='slides'>
				<section>Slide 1</section>
				<section>Slide 2</section>
			</div>
		</div>
	)
}

export default App
