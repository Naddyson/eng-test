function getText(){
	return text = $(".main_input").text();
}
function makeArray(text){

	var array = [];
	var exp = {};

	var exps_iter = 0;
	var last = 0;console.log(text.length);
	for (var i = 0; i < text.length; i++) {
		console.log(i);
		if (i != text.length){

			if (text[i] == "-" || text[i] == ":"){
				console.log("rerere");
				var word = $.trim(text.substring(last,i).toLowerCase());
				console.log("word="+word);
				exp.word = word;
				var dash = i+1;
				var j = i+1;
				while (j != text.length){
					if (text[j] == ';' || text[j] == ','){
						var translation = $.trim(text.substring(dash,j).toLowerCase());
						console.log("translation="+translation);
						exp.translation = translation;
						array.push(exp);
						last = j+1;
						break;
					} else j++;
				}
			} else continue;
		} else console.log(exps);
	}
}
var main = function () {
	$("button").click(function(){
		makeArray(getText());
	});
	

}
$(document).ready(main);