// render chat templates to the DOM
// clear the list of chats (when the room changes)

// import React, { useState } from "react";

// const Ui = list => {
//   const [list, setList] = useState(list);
//   return console.log(list);
// };

// export default Ui;

class ChatUI {
  constructor(list) {
    this.list = list;
  }
  render(data) {
    const html = `
    <li>
    <span>${data.username}</span>
    <span>${data.message}</span>
    <div>${data.created_at.toDate()}</div>
    </li>
    `;
    this.list += html;
  }
}
