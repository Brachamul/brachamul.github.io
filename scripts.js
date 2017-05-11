function vueSetup() {

	// Store
	window.store = new Vuex.Store({
		state: {
			'meta' : {
				'siteName' : "My Amazing Vue Site"
			}
		},
		mutations: {
			updateData(state, payload) {
				for (param in payload) {
					state[param] = payload[param]
				}
			}
		}
	})


	// App
	var app = new Vue({
		el: '#app',
		store,
		template: `

			<div id="app" lang="fr">

				<h1>{{ meta.siteName }}</h1>

				<p>Can you see me from fetch as google ?</p>

			</div>
	
		`,
		computed: {
			meta () {
				return this.$store.state.meta
			}
		}
	})

}