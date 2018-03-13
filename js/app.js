// ZMIENNE DO KOMUNIKACJI Z SERWEREM 
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
	'X-Client-Id': '2832',
	'X-Auth-Token': 'afe242bb8b5dec05b8901906638fa839'
};
// METODA UMIESZCZAJĄCA NAGŁÓWKI W KAŻDYM ZAPYTANIU
$.ajaxSetup({
	headers: myHeaders
});
// ODPYTYWANIE O ZASÓB TABLICY
$.ajax({
	url: baseUrl + '/board',
	method: 'GET',
	success: function(response) {
	  setupColumns(response.columns);
	}
});

//TWORZENIE KOLUMN I DODAWANIE DO TABLICY
function setupColumns(columns) {
	columns.forEach(function (column) {
		var col = new Column(column.id, column.name);
		board.createColumn(col);
		setupCards(col, column.cards);
	});
}

// TWORZENIE KART W KOLUMNACH I DODAWANIE DO TABLICY
function setupCards(col, cards) {
	cards.forEach(function (card) {
		var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
		col.addCard(cardObj);
	})
}


