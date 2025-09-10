export const Talk = () => {
	return (
		<div className='slides'>
			<section>
				<h2>Return to sender</h2>
				<h4>Why your packages always get lost</h4>
				<aside className='notes'>
					private notes
				</aside>
			</section>

			<section className='warning-slide'>
				<h1 className='warning-title'>⚠️ WARNING ⚠️</h1>
				<div className='warning-content'>
					<p>This presentation contains OPINIONS.</p>
					<p>
						All opinions have been thoroughly verified, validated,
						and certified as OBJECTIVELY CORRECT™ by an independent
						panel of one (1) developer.
					</p>
					<p>
						Side effects may include: sudden urges to refactor
						everything, laughing at bad jokes and uncontrollable
						eye-rolling at bad code.
					</p>
					<p>Viewer discretion is advised.</p>
					<br />
					<p className='warning-footer'>
						...anyway, let's get started!
					</p>
				</div>
			</section>

			<section>
				<h2>So who am I?</h2>
				<ul>
					<li>Hey I'm Mike 👋</li>
					<li>
						<div className='with-logo'>
							Senior Engineer @ <Loveholidays />
						</div>
					</li>
					<li>Also interested in UI/UX</li>
					<li>Also interested other things</li>
					<li>It's lovely to meet you all!</li>
				</ul>
				<p className='italic footer'>
					Yes we are hiring, come talk to me afterwards if you're
					interested.
				</p>
			</section>

			<section data-timing={20}>
				<img src='assets/dwight-basic.gif' />
				<div>Pretty basic?</div>
				<aside className='notes'>
					<p>
						Packages are pretty basic right, you pick them up when
						you first learn go.
					</p>

					<p>
						Literally the first line you’ll write will be “package
						main” before you even get to your hello world.
					</p>

					<p>
						So packages are pre-hello world levels of easy.. right?
					</p>
				</aside>
			</section>

			<section>
				<img src='assets/kick-contest.jpg' />
				<div>Have you mastered the basics?</div>
				<aside className='notes'>
					<p>Yes and no. Let me tell you a quick story.</p>

					<p>
						I used to play rugby a few years ago, and more often
						than not we’d miss opportunities, we wouldn’t gel.
					</p>

					<div>
						We had some great players, we were the bottom division
						of our club not because we lacked talent.. We just
						didn’t have the time.. or inclination to do regular
						practice.
					</div>

					<div>
						Anyway we practically give away a couple of tries and
						the old dog pulls us in, he gave the same pep talk every
						game.
					</div>

					<div>
						“It’s all about the simple basics of Rugby lads, throw
						well, hands out and catch the ball, keep a strong line”
					</div>

					<div>
						That was all it took, invariably the game would pick up,
						we didn’t do anything special. We just played a good
						game and kept at those simple basics of Rugby.
					</div>
				</aside>
			</section>

			<section>
				<h2>Packages are like this</h2>
				<div>If you don't throw a good ball,</div>
				<div>no one can catch it.</div>
			</section>

			<section>
				<h2>What does this look like?</h2>
				<code>
					package main

					showing model.Payment
				</code>
				<aside className='notes'>
					<div>This is a bad coding pass, why?</div>

					<div>
						For the consumer, the person catching the ball - they
						have to get into a weird position to receive your code.
					</div>
				</aside>
			</section>

			<section>
				Conflicts!

				<code></code>

				<aside className='notes'>
					<div>This gets even worse as we get more imports</div>

					<div>
						Doubly so in this example where we have multiple model
						imports from different model packages!
					</div>

					<div>
						The consumer can use import aliasing, there's always
						that guy or girl with glue for hands but we can do
						better.
					</div>
				</aside>
			</section>

			<section>
				<h2>Design packages for consumption</h2>
				<div>
					Like the go proverb on interfaces (copy in here), we should
					be designing packages for the consumer
				</div>

				<div>[picture of sushi box]</div>
			</section>

			<section>
				<h2>Bus factor</h2>
				<div>[simba meme]</div>

				<aside className='notes'>
					<div>
						We don't always feel this in the code we write, until
						you onboard someone new to your team and have to explain
						it.
					</div>

					<div>
						AI agents are included here, you'll have to explain the
						context to them too if you want quality results.
					</div>
				</aside>
			</section>

			<section>
				<h2>How can we improve?</h2>
			</section>

			<section>
				<h2>Using _test packages</h2>

				<code>[code example]</code>

				<aside className='notes'>
					<div>
						If you aren't already, I really recommend to use _test
						packages which will force you to use the interface as
						you build the package.
					</div>

					<div>
						The beauty of this is that, you can work on an existing
						codebase and start here to understand the lay of the
						land.
					</div>

					<div>
						Before you start making larger file structure changes
					</div>
				</aside>
			</section>

			<section>
				<h2>Hidden benefit: less coupling</h2>

				[here we want to show on the left, model/view/handlers coupling
				to other model/view/handlers in different domains as a code
				example]

				<div>[also coupling meme]</div>

				<aside className='notes'>
					<div>
						Isolation can hide coupling by allowing dependencies
						between domains at different levels
					</div>
				</aside>
			</section>
		</div>
	)
}

const Loveholidays = () => {
	return (
		<svg
			width='160'
			height='32'
			viewBox='0 0 160 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M15.4025 8.68688L14.9965 4.79041C14.9082 3.07075 17.4259 3.06898 17.3385 4.79041L16.9325 8.68688C16.8243 9.6004 15.5067 9.5929 15.4023 8.68688H15.4025Z'
				fill='#FFBC2B'
			/>
			<path
				d='M10.7139 10.3649L8.41411 7.19343C7.47631 5.75032 9.66004 4.48761 10.4423 6.02252L12.039 9.6C12.402 10.4452 11.2573 11.0976 10.7139 10.3651V10.3649Z'
				fill='#FFBC2B'
			/>
			<path
				d='M7.4923 14.1625L3.91481 12.5658C2.3811 11.7849 3.64103 9.59961 5.08593 10.5376L8.25739 12.8374C8.99444 13.3877 8.32924 14.5253 7.4923 14.1625Z'
				fill='#FFBC2B'
			/>
			<path
				d='M6.79137 19.1276L2.8949 19.5336C1.17524 19.6219 1.17347 17.1042 2.8949 17.1916L6.79137 17.5976C7.70489 17.7058 7.69739 19.0234 6.79137 19.1278V19.1276Z'
				fill='#FFBC2B'
			/>
			<path
				d='M25.5876 17.5536L29.4841 17.1476C31.2037 17.0594 31.2055 19.5771 29.4841 19.4896L25.5876 19.0836C24.6741 18.9754 24.6816 17.6578 25.5876 17.5534V17.5536Z'
				fill='#FFBC2B'
			/>
			<path
				d='M24.0997 12.7993L27.2711 10.4995C28.7143 9.56171 29.977 11.7454 28.4421 12.5277L24.8646 14.1244C24.0193 14.4874 23.367 13.3427 24.0995 12.7993H24.0997Z'
				fill='#FFBC2B'
			/>
			<path
				d='M20.3021 9.5779L21.8988 6.00041C22.6797 4.46669 24.865 5.72663 23.927 7.17152L21.6272 10.343C21.0767 11.08 19.9393 10.4148 20.3021 9.5779Z'
				fill='#FFBC2B'
			/>
			<path
				d='M24.8906 21.6345C23.4848 22.5638 21.9541 22.8551 20.402 22.6376C21.853 20.9229 22.485 19.083 22.7353 18.1213C22.989 17.1468 22.9763 16.1525 22.699 15.2459C22.168 13.5107 20.8639 12.4746 19.2103 12.4746C17.8468 12.4746 16.8107 13.158 16.1996 14.4554C15.5882 13.1581 14.5523 12.4746 13.1888 12.4746C11.5354 12.4746 10.2313 13.5107 9.70011 15.2459C9.42277 16.1524 9.41014 17.1466 9.66379 18.1213C9.8594 18.8732 10.2445 20.0084 10.9752 21.2142C9.34224 21.5827 7.85649 22.3893 6.66702 23.556C6.38376 23.8513 6.45028 24.2155 6.63208 24.4289C6.81427 24.6427 7.16306 24.7674 7.50079 24.5339C8.79113 23.602 10.2453 23.0189 11.7093 22.9001C13.4389 22.7598 15.09 22.9479 17.0977 23.8707C18.0645 24.3152 19.2836 24.8178 20.827 24.8178C22.8301 24.8178 24.6589 23.9864 25.7556 22.5302C25.969 22.2308 25.8811 21.9069 25.6991 21.7187C25.5173 21.5306 25.197 21.4317 24.8908 21.6341L24.8906 21.6345ZM20.948 16.9956C20.948 17.647 20.5094 19.9112 18.25 21.9696C17.5852 21.7154 15.6048 20.839 13.1682 20.9566C11.9184 19.4985 11.4498 17.7682 11.4446 16.9966C11.4332 15.305 12.4685 14.7477 13.3455 14.7477C14.257 14.7477 14.9376 15.3243 15.1664 16.2897C15.2815 16.7755 15.7045 17.115 16.2041 17.115C16.7037 17.115 17.1178 16.7757 17.2329 16.2897C17.4615 15.3241 18.1423 14.7477 19.0538 14.7477C20.2111 14.7477 20.948 15.6565 20.948 16.9956Z'
				fill='#FFBC2B'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M107.974 7.79822C106.999 7.79822 106.257 8.42485 106.257 9.42322C106.257 10.4216 106.999 11.0245 107.974 11.0245C108.948 11.0245 109.668 10.4208 109.668 9.42322C109.668 8.42567 108.926 7.79822 107.974 7.79822ZM81.4861 12.5098C80.1168 12.5098 78.8169 13.0899 78.0743 14.4363V8.76473C78.0743 8.55149 77.9011 8.37829 77.6879 8.37829H75.8839C75.6707 8.37829 75.4983 8.55149 75.4983 8.76473V24.2386C75.4983 24.4518 75.6707 24.625 75.8839 24.625H77.6879C77.9011 24.625 78.0743 24.4518 78.0743 24.2386V17.6152C78.0743 15.8513 79.2116 14.7835 80.8129 14.7835C82.2058 14.7835 83.2034 15.8048 83.2034 17.4992V24.2386C83.2034 24.4518 83.3758 24.625 83.589 24.625H85.3929C85.6062 24.625 85.7794 24.4518 85.7794 24.2386V17.0817C85.7794 14.3203 83.9689 12.5098 81.4861 12.5098ZM45.7598 12.5098C42.2786 12.5098 39.7018 15.0392 39.7018 18.683C39.7018 22.3268 42.2777 24.8799 45.7598 24.8799C49.2418 24.8799 51.8169 22.3505 51.8169 18.683C51.8169 15.0155 49.241 12.5098 45.7598 12.5098ZM45.7598 22.5825C43.7867 22.5825 42.348 21.1438 42.348 18.6838C42.348 16.2239 43.7867 14.8309 45.7598 14.8309C47.7328 14.8309 49.1944 16.2467 49.1944 18.6838C49.1944 21.1209 47.732 22.5825 45.7598 22.5825ZM57.3357 21.0499L54.3186 13.0147C54.2622 12.8644 54.1176 12.7647 53.9575 12.7647H51.9861C51.7132 12.7647 51.5261 13.04 51.6274 13.2941L56.0539 24.3815C56.1127 24.5286 56.2549 24.6242 56.4125 24.6242H58.3022C58.4607 24.6242 58.6029 24.5278 58.6609 24.3799L63.0441 13.2925C63.1446 13.0392 62.9575 12.7647 62.6854 12.7647H60.7826C60.6217 12.7647 60.4771 12.8652 60.4207 13.0155L57.3357 21.0499ZM62.9044 18.683C62.9044 14.9698 65.2949 12.5098 68.6372 12.5098L68.6364 12.5106C71.8627 12.5106 74.1601 14.9706 74.1601 18.6144C74.1601 18.7026 74.1601 18.7949 74.1585 18.8881C74.1552 19.0972 73.982 19.2639 73.7728 19.2639H65.504C65.6895 21.5621 66.9428 22.6528 68.6601 22.6528C70.0457 22.6528 71.1282 22.0874 71.8137 20.5997C71.8978 20.4167 72.1168 20.3235 72.3047 20.3954L73.7704 20.9567C73.9738 21.0343 74.0751 21.2672 73.9877 21.4673C72.9403 23.8693 70.9395 24.8799 68.7067 24.8799C65.3178 24.8799 62.9044 22.3963 62.9044 18.683ZM68.6143 14.6446C66.9893 14.6446 65.9215 15.5964 65.5735 17.4297H71.5155C71.1903 15.527 70.0996 14.6446 68.6143 14.6446ZM87.1119 18.683C87.1119 15.0392 89.6887 12.5098 93.1699 12.5098C96.6519 12.5098 99.2279 15.0155 99.2279 18.683C99.2279 22.3505 96.6519 24.8799 93.1699 24.8799C89.6879 24.8799 87.1119 22.3268 87.1119 18.683ZM89.7581 18.6838C89.7581 21.1438 91.1968 22.5825 93.1699 22.5825C95.1421 22.5825 96.6045 21.1209 96.6045 18.6838C96.6045 16.2467 95.1429 14.8309 93.1699 14.8309C91.1968 14.8309 89.7581 16.2239 89.7581 18.6838ZM108.841 12.7647H107.037H107.036C106.823 12.7647 106.65 12.9371 106.65 13.1503V24.2386C106.65 24.4518 106.823 24.625 107.037 24.625H108.841C109.054 24.625 109.227 24.4518 109.227 24.2386V13.1512C109.227 12.9379 109.054 12.7647 108.841 12.7647ZM121.931 8.37829H120.15C119.937 8.37829 119.764 8.55149 119.764 8.76473V14.7149C118.998 13.4387 117.744 12.5098 115.888 12.5098C112.801 12.5098 110.503 15.1095 110.503 18.683C110.503 22.2566 112.801 24.8799 115.888 24.8799C117.745 24.8799 118.998 23.9518 119.764 22.6749V24.2386C119.764 24.4518 119.937 24.625 120.15 24.625H121.931C122.145 24.625 122.317 24.4518 122.317 24.2386V8.76473C122.317 8.55149 122.145 8.37829 121.931 8.37829ZM116.469 22.5825C114.496 22.5825 113.104 21.1438 113.104 18.6838C113.104 16.2239 114.497 14.8309 116.469 14.8309C118.441 14.8309 119.811 16.2468 119.811 18.6838C119.811 21.1209 118.419 22.5825 116.469 22.5825ZM145.823 12.7647H147.801C148.084 12.7647 148.27 13.0588 148.151 13.3146L141.154 28.2778C141.091 28.4134 140.954 28.5 140.805 28.5H138.849C138.566 28.5 138.38 28.2059 138.499 27.9502L141.073 22.442L136.676 13.3178C136.552 13.0613 136.739 12.7639 137.024 12.7639H139.083C139.235 12.7639 139.373 12.8538 139.435 12.9927L142.397 19.6111L145.473 12.9878C145.537 12.8521 145.673 12.7647 145.823 12.7647ZM154.706 17.7549L153.522 17.4763C152.106 17.1283 151.131 16.8031 151.131 15.9216C151.131 15.1789 151.967 14.6683 153.243 14.6683C154.52 14.6683 155.633 15.1797 156.015 16.5098C156.073 16.71 156.277 16.8293 156.479 16.7794L157.908 16.4257C158.114 16.375 158.236 16.1699 158.192 15.9632C157.715 13.7418 155.73 12.5327 153.243 12.5327C150.458 12.5327 148.648 13.9248 148.648 15.9673C148.648 17.7541 149.762 18.915 152.431 19.5645L153.591 19.866C155.192 20.2378 155.912 20.6087 155.912 21.3979C155.912 22.1871 154.984 22.7672 153.498 22.7672C152.013 22.7672 150.868 22.1144 150.397 20.6994C150.33 20.4984 150.114 20.3889 149.913 20.4534L148.558 20.8905C148.356 20.9559 148.246 21.1716 148.308 21.3742C149.061 23.8252 151.154 24.8791 153.522 24.8791C156.47 24.8791 158.395 23.3938 158.395 21.3047C158.395 19.518 157.189 18.3807 154.705 17.7541L154.706 17.7549ZM37.1993 20.71C37.1993 22.1079 37.9803 22.2982 39.0212 22.2606H39.0204C39.2401 22.2525 39.4223 22.4273 39.4223 22.6463V24.1675C39.4223 24.3636 39.2745 24.5294 39.0792 24.5515C36.3872 24.8513 34.7728 23.5776 34.7728 20.71V8.78515C34.7728 8.57192 34.946 8.39872 35.1593 8.39872H36.8129C37.0261 8.39872 37.1993 8.57192 37.1993 8.78515V20.71ZM104.811 22.2606C103.77 22.2982 102.989 22.1079 102.989 20.71V8.78515C102.989 8.57192 102.816 8.39872 102.603 8.39872H100.949C100.736 8.39872 100.564 8.57192 100.564 8.78515V20.71C100.564 23.5776 102.178 24.8513 104.87 24.5515C105.065 24.5294 105.213 24.3636 105.213 24.1675V22.6463C105.213 22.4273 105.031 22.2525 104.811 22.2606ZM135.466 21.6258C135.646 22.165 136.048 22.3734 136.574 22.4355H136.575C136.767 22.4583 136.909 22.6266 136.909 22.8203V24.4453C136.909 24.6577 136.736 24.8317 136.524 24.8317C134.7 24.8301 133.475 23.9927 133.055 22.3121L133.048 22.2892C132.937 22.5082 132.848 22.6748 132.848 22.6748C132.082 23.9518 130.829 24.8799 128.972 24.8799C125.885 24.8799 123.587 22.2565 123.587 18.683C123.587 15.1095 125.886 12.5098 128.972 12.5098C130.828 12.5098 132.082 13.4387 132.848 14.7149V13.1512C132.848 12.9379 133.021 12.7647 133.234 12.7647H135.015C135.229 12.7647 135.401 12.9379 135.401 13.1512V20.7835V21.161C135.401 21.3186 135.417 21.4763 135.466 21.6258ZM126.187 18.683C126.187 21.1438 127.579 22.5825 129.552 22.5825C131.502 22.5825 132.895 21.1201 132.895 18.683C132.895 16.2459 131.524 14.8301 129.552 14.8301C127.58 14.8301 126.187 16.2222 126.187 18.683Z'
				fill='#0374DA'
			/>
		</svg>
	)
}
