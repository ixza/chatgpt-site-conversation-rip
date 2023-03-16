# chatgpt-conversation-rip
Browser script that spits out a ChatGPT (GPT3.5) conversation in JSON directly from the Openai site without using their API.<br>
It captures the code written by ChatGPT as well.
<div align="center">
<img src="https://user-images.githubusercontent.com/116339318/225711044-55247585-886e-43fc-ba25-8b6949513c80.png" width="900" height="100"/>
<img src="https://user-images.githubusercontent.com/116339318/225711182-0adf9644-49b0-4877-898f-c864d7833e9d.png" width="400" height="400"/>
</div>

# Usage
1. Go to https://chat.openai.com/chat and select a conversation
2. Open browser console with F12 and paste the below code
```
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
```
