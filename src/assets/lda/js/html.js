
function testJs(){
	alert("loaded");
}


function topicise() {
	console.log("analysing "+sentences.length+" sentences...");
	var documents = new Array();
	var f = {};
	var vocab=new Array();
	var docCount=0;
	for(var i=0;i<sentences.length;i++) {
		if (sentences[i]=="") continue;
		var words = sentences[i].split(/[\s,\"]+/);
		if(!words) continue;
		var wordIndices = new Array();
		for(var wc=0;wc<words.length;wc++) {
			var w=words[wc].toLowerCase().replace(/[^a-z\'A-Z0-9 ]+/g, '');
			//TODO: Add stemming
			if (w=="" || w.length==1 || stopwords[w] || w.indexOf("http")==0) continue;
			if (f[w]) { 
				f[w]=f[w]+1;			
			} 
			else if(w) { 
				f[w]=1; 
				vocab.push(w); 
			};	
			wordIndices.push(vocab.indexOf(w));
		}
		if (wordIndices && wordIndices.length>0) {
			documents[docCount++] = wordIndices;
		}
	}
		
	var V = vocab.length;
	var M = documents.length;
	var K = parseInt($( "#topics" ).val());
	//var k = 2;
	var alpha = 0.1;  // per-document distributions over topics
	var beta = .01;  // per-topic distributions over words
	lda.configure(documents,V,10000, 2000, 100, 10);
	lda.gibbs(K, alpha, beta);
	var theta = lda.getTheta();
	var phi = lda.getPhi();
	var text = '';
	//topics
	var topTerms=20;
	var topicText = new Array();
	for (var k = 0; k < phi.length; k++) {
		text+='<canvas id="topic'+k+'" class="topicbox color'+k+'"><ul>';
		var tuples = new Array();
		for (var w = 0; w < phi[k].length; w++) {
			 tuples.push(""+phi[k][w].toPrecision(2)+"_"+vocab[w]);
		}
		tuples.sort().reverse();
		if(topTerms>vocab.length) topTerms=vocab.length;
		topicText[k]='';
		for (var t = 0; t < topTerms; t++) {
			var topicTerm=tuples[t].split("_")[1];
			var prob=parseInt(tuples[t].split("_")[0]*100);
			if (prob<0.0001) continue;
			text+=( '<li><a href="javascript:void(0);" data-weight="'+(prob)+'" title="'+prob+'%">'+topicTerm +'</a></li>' );			
			var topicProbs = "topic "+k+": "+ topicTerm+" = " + prob  + "%";
			console.log("topic "+k+": "+ topicTerm+" = " + prob  + "%");
			// document.getElementById("probabilities").innerHTML = topicProbs;
			topicText[k] += ( topicTerm +" ");
		}

		text+='</ul></canvas>';
	}
	$('#topiccloud').html(text);
	
	text='<div class="spacer"> </div>';
	//highlight sentences	
	for (var m = 0; m < theta.length; m++) {
		text+='<div class="lines">';
		text+='<div style="display:table-cell;width:100px;padding-right:5px">';
		for (var k = 0; k < theta[m].length; k++) {
			text+=('<div class="box bgcolor'+k+'" style="width:'+parseInt(""+(theta[m][k]*100))+'px" title="'+topicText[k]+'"></div>');
		}
		text+='</div>'+sentences[m]+'</div>';
	}
	$("#output").html(text);
	// $("#probabilities").html(prob);


	// for (var num = 0; num < theta.length; num++) {
	// 	$("#probabilities").html(text);
	// }

	
	for (var k = 0; k < phi.length; k++) {
		if(!$('#topic'+k).tagcanvas({
		      textColour: $('#topic'+k),
			  maxSpeed: 0.05,
			  initial: [(Math.random()>0.5 ? 1: -1) *Math.random()/2,(Math.random()>0.5 ? 1: -1) *Math.random()/2],  //[0.1,-0.1],
			  decel: 0.98,
			  weightSize:10,
			  weightMode:'size',
			  weightFrom:'data-weight',
			  weight: true,
			}))	
		{
			$('#topic'+k).hide();
		} else {
			//TagCanvas.Start('topic'+k);
		}
	}

	// var reasonsSplit = sentences.split(",");
	// console.log(reasonsSplit + "working");
}

//need to uncomment this out ltr

// $(document).ready(function(){
// 	var select = $( "#topics" );
// 	var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
// 		min: 2,
// 		max: 10,
// 		range: "min",
// 		value: select[0].selectedIndex+2,
// 		slide: function( event, ui ) {
// 			select[0].selectedIndex = ui.value-2;
// 		}
// 	});
// 	$( "#topics" ).change(function() {
// 		slider.slider( "value", this.selectedIndex + 2 );
// 	});
// });
function btnTopiciseClicked(arrayText) {
	$('#btnTopicise').attr('disabled','disabled');
	//sentences = $('#topicCloudText').val().split("\n");
	sentences = arrayText;
	console.log(arrayText);
	topicise();
	$('#btnTopicise').removeAttr('disabled');
	
}
var sentences;
