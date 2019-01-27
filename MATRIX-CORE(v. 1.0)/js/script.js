//---------add test script ----------//
var script = document.createElement('script');
script.src = 'js/testing.js';
document.getElementsByTagName('head')[0].appendChild(script);
//---------------end----------------//
//var sizeX = prompt("Size-X"); //NEED code 
//var sizeY = prompt("Size-Y"); //NEED code

$(document).ready(function() {

//----------MATRIX CREATE STARTING--------------//
	var sizeX = 12; //small 9; default value 17;  large 33;
	var sizeY = 12; //small 9; default value 16;  large 33;
	var amountCells = sizeX*sizeY; //amount cells
	var className = ".matrix-cell";
	var cellValue_0, cellValue_1, cellEven, cellOdd;
	var cellNumber, x, y, cellValue, cellContent, cellValueRnd;
	var rndValue;
	
	function matrixCreate(sX,sY){
//#########(NEED ADD CODE) inspection for the argument value!#########//
		var cellNumber = 1; //create LOCAL var unique key for create unique key for the cell
			for (var y = 1; y-1<sY; y++){
				for (var x = 1; x-1<sX; x++){
					$("#matrix").append('<div class="matrix-cell" data-x='+x+' data-y='+y+' data-cell-value="0" data-cell-number='+cellNumber+' data-cell-content = "0">'+x+':'+y+'</div>');
					cellNumber++;  
				}
				$("#matrix").append('<br/>');
			}
	}	
	matrixCreate(sizeX,sizeY); // starting matrix
//-----------------------ENDING--------------------//

	$('.matrix-cell:first').attr('data-cell-content','house'); // change content of element  with 0  on "house"

	function dataSample(className,dataName,value){ //func sample data of attributes 
			return $(""+className+"["+dataName+" = '"+arguments[2]+"']"); //sample attribute 
		}
//----------add attribute data for the matrix--------------//	
	for (var i = 1; i<(amountCells+1); i++){
		rndValue = Math.floor(Math.random() * 10); // от 0 до 9
		dataSample(className,"data-cell-number",i).attr("data-rnd",""+rndValue+"");
	}
//------------------------ending---------------------------//
	
//----------------MATRIX ANALYZER STARTING-----------------//
	function matrixAnalyzer(){
		cellValue_1 = dataSample(className,"data-cell-value",1).length;
		cellValue_0 = dataSample(className,"data-cell-value",0).length;
		cellEven = Math.floor(amountCells / 2); //amount cells Even
		cellOdd = amountCells - cellEven; //amount cells Odd
		
		$(""+className+"").click(function(){
			$(""+className+"").removeAttr("data-flag");
			$(this).attr('data-flag','flag');
			$(""+className+"").css({'background':'#FFE4B5'});
			dataSample(className,"data-flag","flag").css({'background':'blue'});
			cellNumber = $(this).data('cell-number');
			cellValue = $(this).data('cell-value');
			x = parseFloat($(this).data('x'));
			y = parseFloat($(this).data('y'));
			cellContent = $(this).data('cell-content');
			cellContent = $(this).data('cell-content');
			cellValueRnd = $(this).data('rnd');
			actionBorders(x,y);
			showConsoleInfo();
			});

		function showConsoleInfo(){
			$("#info-size-matrix").html('Size of matrix: '+sizeX+'x'+sizeY);
			$("#info-cells-amount").html(amountCells);
			$("#info-cells-even").html(cellEven);
			$("#info-cells-odd").html(cellOdd);
			$("#info-cells-value0").html(cellValue_0);
			$("#info-cells-value1").html(cellValue_1);
			$("#info-number").html(cellNumber);
			$("#info-value").html(cellValue);
			$("#info-x").html(x);
			$("#info-y").html(y);
			$("#info-content").html(cellContent);
			$("#info-rnd").html(cellValueRnd);
			
		};
		showConsoleInfo();
	}
//-----------------------ENDING----------------------//
	
	alert("sdfds");
	function actionBorders (x,y){
		var arr = new Array(); 
		arr[0] = $(""+className+"[data-x="+(x)+"][data-y="+(y)+"]").data('cell-number');
		arr[1] = $(""+className+"[data-x="+(x-1)+"][data-y="+(y-1)+"]").data('cell-number');
		arr[2] = $(""+className+"[data-x="+(x)+"][data-y="+(y-1)+"]").data('cell-number');
		arr[3] = $(""+className+"[data-x="+(x+1)+"][data-y="+(y-1)+"]").data('cell-number');
		arr[4] = $(""+className+"[data-x="+(x-1)+"][data-y="+(y)+"]").data('cell-number');
		arr[5] = $(""+className+"[data-x="+(x+1)+"][data-y="+(y)+"]").data('cell-number');
		arr[6] = $(""+className+"[data-x="+(x-1)+"][data-y="+(y+1)+"]").data('cell-number');
		arr[7] = $(""+className+"[data-x="+(x)+"][data-y="+(y+1)+"]").data('cell-number');
		arr[8] = $(""+className+"[data-x="+(x+1)+"][data-y="+(y+1)+"]").data('cell-number');
		
		for (var i = 1; i<arr.length; i++){
			dataSample(className,"data-cell-number",arr[i]).css({'background':'lime'})
			if (dataSample(className,"data-cell-number",arr[i]).data('cell-content') == "house"){
				alert('yes!!!');
			}
		}
		if (dataSample(className,"data-cell-number",arr[0]).data('cell-content') == "house"){
				alert('yes!!!');
			}
	}
	
	
	
	matrixAnalyzer();
});
