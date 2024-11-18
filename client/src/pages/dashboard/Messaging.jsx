import { useState } from "react";
import "../css/Messaging.css";
// import '../'
import profile from "../../assets/images/profileimg.png";
import Sidebar from "../../Components/partials/Sidebar";
import Navbar from "../../Components/partials/Navbar";

const MessagingScreen = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Evelina",
      profileImage: profile,
      messages: [
        { sender: "Evelina", content: "Hey, Lumina!" },
        { sender: "Lumina", content: "Hey Evelina, how are you?" },
        { sender: "Evelina", content: "I'm great, let's catch up later." },
      ],
    },
    {
      id: 2,
      name: "Liam",
      profileImage: profile,
      messages: [
        { sender: "Liam", content: "Did you finish the project?" },
        { sender: "Lumina", content: "Not yet, still working on it." },
      ],
    },
    {
      id: 3,
      name: "Lyra",
      profileImage: profile,
      messages: [
        { sender: "Lyra", content: "Did you check the new task?" },
        { sender: "Lumina", content: "I just checked it, thanks!" },
      ],
    },
    {
      id: 4,
      name: "Jayden",
      profileImage: profile,
      messages: [
        { sender: "Jayden", content: "Let’s catch up later!" },
        { sender: "Lumina", content: "Sure, let's do that." },
      ],
    },
    {
      id: 5,
      name: "Prince",
      profileImage: profile,
      messages: [
        { sender: "Prince", content: "Can we discuss the project?" },
        { sender: "Lumina", content: "Yes, let’s talk about it." },
      ],
    },
    {
      id: 6,
      name: "Emmanuelle",
      profileImage: profile,
      messages: [
        { sender: "Emmanuelle", content: "Are you available for a call?" },
        { sender: "Lumina", content: "Yes, I’m available now." },
      ],
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    const updatedChats = chats.map((chat) => {
      if (chat.id === selectedChat) {
        return {
          ...chat,
          messages: [...chat.messages, { sender: "Lumina", content: message }],
        };
      }
      return chat;
    });

    setChats(updatedChats);
    setMessage("");
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="info">
        <Navbar />
        <div className="whatsapp-container">
          <div className="chat-list">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className={`chat-item ${
                  selectedChat === chat.id ? "active" : ""
                }`}
                onClick={() => setSelectedChat(chat.id)}
              >
                <img
                  src={chat.profileImage}
                  alt={chat.name}
                  className="profile-image"
                />
                <div className="chat-details">
                  <div className="chat-name">{chat.name}</div>
                  <div className="last-message">
                    {chat.messages[chat.messages.length - 1].content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="message-area">
            <div className="messages">
              {chats
                .find((chat) => chat.id === selectedChat)
                .messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`message ${
                      msg.sender === "Lumina" ? "sent" : "received"
                    }`}
                  >
                    {msg.content}
                  </div>
                ))}
            </div>

            <div className="message-input">
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingScreen;
