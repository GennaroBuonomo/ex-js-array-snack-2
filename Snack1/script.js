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


//Crea un array (longBooks) con i libri che hanno più di 300 pagine;
//Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
//Stampa in console ogni titolo nella console.


// Ho usato FILTER perchè mi serviva per prendere solo gli elementi che superavano una certa prova (CONDIZIONE)

const longBooks = books.filter(book => book.pages > 300);
console.log(longBooks);

//Ho usato MAP perchè ho preso la lista trasformato gli oggetti complessi in semplici titoli (COME LA RICHIESTA DELLA CONSEGNA)

const longBooksTitles = longBooks.map(book => book.title);
console.log(longBooksTitles)

//Ho usato il FOREACH perchè voglio che succedono cose (CHE STAMPI IN CONSOLE IL TITOLO)

books.forEach(book => {
  console.log(book.title);
});