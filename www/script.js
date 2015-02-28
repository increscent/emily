for (var i = 1; i <= 4; i++) {
	document.getElementById(i.toString()).addEventListener('click', handle_answer);
}
for (var i = 1; i <= 3; i++) {
	document.getElementById('try-again-' + i).addEventListener('click', show_question);
}
document.getElementById('yes').addEventListener('click', handle_yes);
document.getElementById('no').addEventListener('click', handle_no);

function show_question(e) {
	for (var i = 1; i <= 4; i++) {
		document.getElementById(i + '-answer').className = 'hidden';
	}
	document.getElementById('question').className = '';
}
show_question();

function handle_answer(e) {
	var target = e.target;
	document.getElementById(target.id + '-answer').className = '';
	document.getElementById('question').className = 'hidden';
}

function handle_yes(e) {
	alert('You are so awesome!');
	ajax_request('GET', '/yes', {}, function (result) {
	});
}

function handle_no(e) {
	alert('I\'m sorry. This application was not built to handle that kind of answer.');
	ajax_request('GET', '/no', {}, function (result) {
	});
}

function ajax_request(type, url, data, callback) {
	var request = new XMLHttpRequest();
	
	request.open(type.toUpperCase(), url, true);
	request.setRequestHeader("Content-type","application/json");
	request.onload = function () {
		return callback(request.response);
	};
	if (type.toLowerCase() === 'post') data = JSON.stringify(data);
	request.send(data);
}