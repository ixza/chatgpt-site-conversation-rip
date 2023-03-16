var conversation_body = document.getElementsByClassName("flex flex-col items-center text-sm")
var title = document.getElementsByClassName("flex py-3 px-3 items-center gap-3 relative rounded-md cursor-pointer break-all pr-14 bg-gray-800 hover:bg-gray-800 group")[0].childNodes[1].innerText
var messages = conversation_body[0].childNodes
var output = Array()
messages.forEach(function(elem, i){
  if (elem.classList.contains('group')){
		txt = messages[i].lastElementChild.innerText.replace(/\n\s*\n/g, '\n')
		if (i % 2 == 0){
			var json = {user_name:txt}
		}
		else{
			var json = {ai_name:txt}
		}
		json = JSON.stringify(json)
		output.push(json)
  }
})
output = "["+output.join(',\r\n')+"]";
var fakeelem = document.createElement("a");
var file = new Blob([output],
                { type: "application/json" });
fakeelem.href = URL.createObjectURL(file);
fakeelem.download = title+'.json';
fakeelem.click();
URL.revokeObjectURL(fakeelem.href);
