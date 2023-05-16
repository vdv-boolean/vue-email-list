const app = Vue.createApp({
	data() {
		return {
			mailAddress: null
		};
	},
	methods: {
		play() {
			this.mailAddress = null
			axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then(serverResponse => this.mailAddress = serverResponse.data.response);
		},
	},
	computed: {
		result() {
			
		},
	},
});

app.mount('#app');