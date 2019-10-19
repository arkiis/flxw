// dom queries
const chatList = document.querySelector(".chat-list");

// class instances
const chatUI = new ChatUI(chatList);
const newChat = new Chat("general", "shaun");

// get chats and render
newChat.getChats(data => {
  chatUI.render(data);
});
