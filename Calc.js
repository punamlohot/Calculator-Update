var inpVal = document.getElementById('calc');
var subInp = document.getElementById('subInput');
var hisBox = document.getElementById('history');
var inp_Val = [];
var sub_Inp = [];
function getValue(e)
{
	//Code to append input
	
	if (inpVal.value == '0')
	{
		inpVal.value = e;
	}
	else 
	{
		inpVal.value += e;
	}
}

function clearAll()
{
	inpVal.value ='0';
	subInp.value = '';
}
function removeLast()
{
	temp = inpVal.value;
	if(temp.length>1)
	{
		inpVal.value = temp.slice(0,-1);
	}
	else
	{
		inpVal.value = '0';
	}
}
function solve()
{
	temp = inpVal.value;
	inpVal.value = eval(temp);
	subInp.value = temp + "=";

	inp_Val.push(inpVal.value);
	sub_Inp.push(temp + "=");
	console.log(inp_Val);
	
	let arr =[];
	arr.push(document.getElementById('subInput').value = temp);
	addHistory();
}
function square()
{

	inpVal.value = inpVal.value**2;

}
function oneByx()
{
	inpVal.value = 1/ inpVal.value;
}
function sqrt()
{
	inpVal.value = Math.sqrt(inpVal.value);
}

//----------------------------------------------------HistoryFunction--------------------------------------------------------------------


// function showHistory() {
	
// };
// function addHistory()
// {
// 	var his = '<div class="container-sm floatinghistory overflow-scroll">';
// 	his += '<h1 class="h1">History</h1>';
// 	his += '<button id="btnn" type="button" onclick="clearHistory()">Clear</button>';
// 	his += '<div id="history"></div>';
// 	his += '</div>';
// 	let history = [];
// 	history.push(document.getElementById('history').innerHTML);

// 	let historySection = document.getElementById("history");
// 	historySection.innerHTML = " ";
//  	for (let i = 0; i < history.length; i++) {
//  	historySection.innerHTML += history[i] + "<br>";
//  	}
// }


// function clearHistory()
// {
// 	hisBox.innerText = " ";

// };

// let historyvisible = true;
// if(historyvisible == false)
// {
// 	document.getElementById('navv').innerHTML = showHistory();
// }
// else
// {
// 	document.getElementById('navv').innerHTML = " ";
// }
