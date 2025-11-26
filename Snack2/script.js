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

//Creare un array (availableBooks) che contiene tutti i libri disponibili.
//Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
//Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).


// Ho usato FILTER perchè mi serviva per prendere solo gli elementi che superavano una certa prova (CONDIZIONE)

const availableBooks = books.filter(books => books.available);
console.log(availableBooks);

// Allora ho usato molte operazioni come il (MAP: che mi serve per prendere l' array con la stessa lunghezza dell vecchio ma con i dati modificati) , (PARSEFLOAT: che trasforma la stringa numerica in un numero vero , poi .REPLACE: nel caso dell' esercizio cerca il simbolo dell' euro e lo sostituisce con il nulla sempre in stringa) , (.TOFIXED(2) è fondamentale per i soldi ci assicura che ci siano sempre due decimali dopo la virgola restituendo una stringa) , (poi ho usato lo SPREED OPERATOR che mi permette di copiare tutte le proprietà che ci sono nel libro originale poi il PRICE che scrivendolo cosi ${} mi sovrascrive la proprietà con il nuovo valore scontato)


const discountedBooks = availableBooks.map(book => {
  const price = parseFloat(book.price.replace('€', ''));
	const discountedPrice = (price * 0.8).toFixed(2)
	return{
		...book,
		price: `${discountedPrice}`
	}
});

console.log(discountedBooks);


	// Ho usato il .FIND che mi serve per restituire il primo elemento che soddisfa una condizione poi ho usato il (PARSEFLOAT , .REPLACE: per trasformare la stringa in numero) poi ho usato un controllo matematico (RETURN PRICE % 1 === 0) Questo significa che sta cercando il libro con il prezzo tondo senza centesimi 
	
const fullPricedBook = discountedBooks.find(book => { 
	const price = parseFloat(book.price.replace('€', ''));
	return price % 1 === 0;
});

console.log(fullPricedBook);
