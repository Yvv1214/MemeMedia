const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},


			actions: {
				// Use getActions to call a function within a fuction
				
				syncTokenfromLocalStorage: () => {
					const token = localStorage.getItem('token')
					if(token && token != '' && token != undefined)
					setStore({token: token});
				},

				logout: () => {
					const token = localStorage.removeItem('token');
					console.log('login out');
					setStore({token: null});
				},
			
				// make it async so u can use it with .then() on the login page actions.login.then()
					login: async (email, password) => {
						const options = {
							method:'POST',
							headers: {
								"Content-Type": "application/json"
						},
							body: JSON.stringify({
								"email": email,
								"password": password
							})
						};
		
				//'try' this if it doesnt work it moves to catch
						try{
						const resp = await fetch('https://yvv1214-musical-garbanzo-w9qp54gvvq7f54j-3001.app.github.dev/api/login', options)
								if(resp.status !== 200) {
								alert('an error occured');
								return false;
								 }
				// if response status is not 200 get alert else jsonify
						const data = await resp.json()
							console.log(data, 'this came from backend');
							localStorage.setItem('data', data.access_token);
							setStore({token: data.access_token})	
							console.log(getStore().token, 'access token')
							return true;
				// access_token comes from the postman where u post/login that has the hash and the token being used is the one thats null atop
				//the login() also stores the token with setStore and making token: null into token:lasdjfljoiwroifn
						}			
						
						catch(error) {
							  console.error('There was an error', error)
							  }
						
				
					}
					},
			

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				const store = getStore()
				const opts = {
					headers: {
						"Authorization" : "Bearer" + store.token
					}
				}
				
					// fetching data from the backend
					fetch("https://yvv1214-musical-garbanzo-w9qp54gvvq7f54j-3001.preview.app.github.dev/api/private", opts)
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => 
					console.log("Error loading message from backend", error))
			},


			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};


export default getState;
