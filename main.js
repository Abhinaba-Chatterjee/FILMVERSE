document.addEventListener("DOMContentLoaded", () => {
	const searchInput = document.getElementById('searchInput');
	const searchButton = document.getElementById('searchButton');
	const resultsDiv = document.getElementById('results');
  
	searchButton.addEventListener('click', () => {
	  const query = searchInput.value.trim();
	  if (query !== '') {
		fetchData(query);
	  }
	});
  
	async function fetchData(query) {
	  const url = 'https://netflix-data.p.rapidapi.com/search/?query=${query}&offset=0&limit_titles=50&limit_suggestions=20';
	  const options = {
		method: 'GET',
		headers: {
		  'X-RapidAPI-Key': '7dd5e5cf55msh417984d7a056256p1c63eejsneb1dfe02d99e',
		  'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
		}
	  };
  
	  try {
		const response = await fetch(url, options);
		const data = await response.json();
		displayTitles(data);
	  } catch (error) {
		console.error(error);
	  }
	}
  
	function displayTitles(data) {
	 
	  resultsDiv.innerHTML = '';
  
	  if (data && data.results && data.results.length > 0) {
		// Display titles
		data.results.forEach(movie => {
		  const title = document.createElement('h2');
		  title.textContent = movie.title;
		  resultsDiv.appendChild(title);
		});
	  } else {
		const noResults = document.createElement('p');
		noResults.textContent = 'No movies found.';
		resultsDiv.appendChild(noResults);
  }
  }
  });
  