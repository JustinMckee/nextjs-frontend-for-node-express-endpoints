import axios from 'axios';

export class AppViewModel {
	constructor() {
		this.initialize();
	}

	initialize() {
		console.log('AppViewModel initialized');
	}
	// GET w/ native fetch()
	async getUsers() {
		console.log('GET Users clicked');
		return fetch('http://localhost:3333/users')
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json(); // Parse the response as JSON
			})
			.then((data) => {
				return data; // Return the parsed data
			})
			.catch((error) => {
				return 'Error fetching users, man: ' + error;
			});
	}

	// GET w/ Axios
	async getUsersAxios() {
		console.log('GET Users with Axios clicked');
		return axios
			.get('http://localhost:3333/users')
			.then((response) => {
				return response.data; // Return the data from the response
			})
			.catch((error) => {
				return 'Error fetching users with Axios, dude: ' + error;
			});
	}

	// GET w/ native fetch()
	async getUserById(id: number) {
		console.log('GET User by Id clicked');
		return fetch(`http://localhost:3333/users/${id}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json(); // Parse the response as JSON
			})
			.then((data) => {
				return data; // Return the parsed data
			})
			.catch((error) => {
				console.error('Error fetching user by ID:', error);
			});
	}

	// GET w/ Axios
	async getUserByIdAxios(id: number) {
		console.log('GET User by Id with Axios clicked');
		return axios
			.get(`http://localhost:3333/users/${id}`)
			.then((response) => {
				return response.data; // Return the data from the response
			})
			.catch((error) => {
				console.error('Error fetching user by ID with Axios:', error);
			});
	}

	// POST w/ native fetch()
	async createUser(data: { name?: string; email?: string }) {
		console.log('POST User clicked');
		return fetch('http://localhost:3333/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				console.log(response);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json(); // Parse the response as JSON
			})
			.then((data) => {
				return data; // Return the parsed data
			})
			.catch((error) => {
				console.error('Error creating user', error);
			});
	}

	// POST w/ Axios
	async createUserAxios(data: { name?: string; email?: string }) {
		console.log('POST User with Axios clicked');
		return axios
			.post('http://localhost:3333/users', data)
			.then((response) => {
				return response.data; // Return the data from the response
			})
			.catch((error) => {
				console.error('Error creating user with Axios:', error);
			});
	}

	// DELETE w/ native fetch()
	async deleteUser(id: number) {
		console.log('DELETE User clicked');
		return fetch(`http://localhost:3333/users/${id}`, {
			method: 'DELETE',
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json(); // Parse the response as JSON
			})
			.then((data) => {
				return data; // Return the parsed data
			})
			.catch((error) => {
				console.error('Error deleting user', error);
			});
	}

	// DELETE w/ Axios
	async deleteUserAxios(id: number) {
		console.log('DELETE User with Axios clicked');
		return axios
			.delete(`http://localhost:3333/users/${id}`)
			.then((response) => {
				return response.data; // Return the data from the response
			})
			.catch((error) => {
				console.error('Error deleting user with Axios:', error);
			});
	}

	// PUT w/ native fetch()
	async updateUser(id: number, data: { name?: string; email?: string }) {
		console.log('PUT User clicked');
		return fetch(`http://localhost:3333/users/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json(); // Parse the response as JSON
			})
			.then((data) => {
				return data; // Return the parsed data
			})
			.catch((error) => {
				console.error('Error updating user', error);
			});
	}

	// PUT w/ Axios
	async updateUserAxios(id: number, data: { name?: string; email?: string }) {
		console.log('PUT User with Axios clicked');
		return axios
			.put(`http://localhost:3333/users/${id}`, data)
			.then((response) => {
				return response.data; // Return the data from the response
			})
			.catch((error) => {
				console.error('Error updating user with Axios:', error);
			});
	}
}
