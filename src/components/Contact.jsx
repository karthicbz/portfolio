import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <p>
          Have a Question or want to work together?
          <br />
          Feel free to contact me through any of the methods listed below
        </p>
      </div>
      <div className="email">
        <a href="mailto:pkarthicbz@gmail.com">pkarthicbz@gmail.com</a>
      </div>
      <div>
        <p>You can also leave me a message here</p>
      </div>
      <form action="" method="post">
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
      </form>
    </div>
  );
};

export default Contact;
