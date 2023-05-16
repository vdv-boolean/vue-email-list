const app = Vue.createApp({
	data() {
		return {
            mailArray: [],
            numberMail: 10,
		};
	},
	methods: {
        generateMail() {
            for(let i = 0; i < this.numberMail; i++) {
			this.mailArray = []
			axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then(serverResponse => this.mailArray.push(serverResponse.data.response));
            }
		},
	},
	computed: {
	},
});

app.mount('#app');