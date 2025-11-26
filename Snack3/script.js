const books = [
  { 
	  title: "React Billionaire", 
	  pages: 250, 
	  author: {
		  name: 'Alice',
		  age: 35
	  },
	  available: false,
	  price: '101€',
	  tags: ['advanced', 'js', 'react', 'senior']
  },
  { 
	  title: "Advanced JS", 
	  pages: 500, 
	  author: {
		  name: 'Bob',
		  age: 20
	  },
	  available: true,
	  price: '25€',
	  tags: ['advanced', 'js', 'mid-senior']
  },
  { 
	  title: "CSS Secrets", 
	  pages: 320, 
	  author: {
		  name: 'Alice',
		  age: 17
	  },
	  available: true,
	  price: '8€',
	  tags: ['html', 'css', 'junior']
  },
  { 
	  title: "HTML Mastery", 
	  pages: 200, 
	  author: {
		  name: 'Charlie',
		  age: 50
	  },
	  available: false,
	  price: '48€',
	  tags: ['html', 'advanced', 'junior', 'mid-senior']
  },
];

//Creare un array (authors) che contiene gli autori dei libri.
//Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
//Ordina l’array authors in base all’età, senza creare un nuovo array.                              (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)


//Ho messo map perche mi chiedeva di prendere gli a utori dei libri
const authors = books.map(books => books.author);
console.log(authors)

//Ho inserito .EVERY che mi controlla tutti gli elementi dell array per vedere se soddisfano le condizioni ma basta solo uno che non soddisfa la condizione e mi restituisce false ma se la soddisfa restituisce true poi ho usato l operatore ternario (e come un if/else scritto in una sola riga SI(?) usa il numero 1 NO(:) usa il numero -1) Poi ce il .SORT che mi serve per ordinare l eta in modo crescente

const areAuthorsAdults = authors.every(book => book.age >= 18);
authors.sort((a, b) => (a.age - b.age) * (areAuthorsAdults ? 1 : -1)) 

console.log(authors)