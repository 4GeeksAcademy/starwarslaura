const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],
			planets: [],
			vehicles: []
		},
		actions: {
			getAllCharacters:()=>{
				fetch("https://www.swapi.tech/api/people/",{
					method: 'GET',
				})
				.then(response => response.json())
					.then(data => setStore({characters: data.results }))
					.catch(error => console.log(error));
			},
			getAllPlanets:()=>{
				fetch("https://www.swapi.tech/api/planets/",{
					method: 'GET',
				})
				.then(response => response.json())
					.then(data => setStore({planets: data.results }))
					.catch(error => console.log(error));
			},
			getAllVehicles:()=>{
				fetch("https://www.swapi.tech/api/vehicles/",{
					method: 'GET',
				})
				.then(response => response.json())
					.then(data => setStore({vehicles: data.results }))
					.catch(error => console.log(error));
			},
			// }
			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			}
		}
	};

export default getState;
