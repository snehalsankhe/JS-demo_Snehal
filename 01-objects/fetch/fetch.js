const url = "https://jsonplaceholder.typicode.com/users";
// document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);

function fetchUserData(){
	fetch(url)
	.then((response) => {
		return response.json()
	})
	.then((users) => {
		let output = '<h2>Lists of Users</h2>';
		output += '<ul>';
		users.map((user) => {
			output += `
				<li>
					<h2>${user.name}</h2>
					<a href="${user.email}">${user.email}</a><br/>
					<a href="tel:${user.phone}">${user.phone}</a><br/>
					<a href="${user.website}">${user.website}</a>
				</li>
			`;
		});
		output += '</ul>'
		document.getElementById("response").innerHTML = output;
	})
	.catch((error) => {
		console.log(error);
	})
}
fetchUserData();