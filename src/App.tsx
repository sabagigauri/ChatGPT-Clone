import React, { useState } from "react";


interface Message {
  user: string;
  text: string;
}

const App: React.FC = () => {
  const [user1Message, setUser1Message] = useState<string>("");
  const [user2Message, setUser2Message] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleMessageSubmit = (
    event: React.FormEvent,
    user: string,
    message: string,
    setMessage: React.Dispatch<React.SetStateAction<string>>
  ) => {
    event.preventDefault();
    if (message.trim() !== "") {
      setMessages([...messages, { user, text: message }]);
      setMessage("");
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setMessage: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setMessage(event.target.value);
  };

  return (
    <div className="main-container">
      <div className="leftSide"></div>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.user === "User 1" ? "user1" : "user2"
            }`}
          >
            <h5></h5>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) =>
          handleMessageSubmit(e, "User 1", user1Message, setUser1Message)
        }
      >
        <span>User 1</span>
        <div className="inp-div">
          <input
            type="text"
            value={user1Message}
            onChange={(e) => handleInputChange(e, setUser1Message)}
          />
          <button type="submit"></button>
        </div>
      </form>
      <form
        onSubmit={(e) =>
          handleMessageSubmit(e, "User 2", user2Message, setUser2Message)
        }
      >
        <span>User 2</span>
        <div className="inp-div-2">
          <input
            type="text"
            value={user2Message}
            onChange={(e) => handleInputChange(e, setUser2Message)}
          />
          <button type="submit"></button>
        </div>
      </form>
    </div>
  );
};

export default App;
