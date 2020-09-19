function solve() {
   let sendButton = document.getElementById("send");
   sendButton.addEventListener("click", sendMessage);

   function sendMessage() {
      if(document.getElementById("chat_input").value != "") {
         let div = document.createElement("div");
         div.className = "message my-message";
         div.innerHTML = document.getElementById("chat_input").value;
         
         document.getElementById("chat_messages").appendChild(div);       
         
         document.getElementById("chat_input").value = "";
      }
   }
}
