import React from "react";

const NewsletterContent = props => {
  return (
    <form>
      <input type="email" placeholder="email" name="email" />
      <button type="submit">Join</button>
    </form>
  );
};

export default NewsletterContent;
