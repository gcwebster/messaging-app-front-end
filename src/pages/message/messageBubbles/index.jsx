import React from "react";

import "./messageBubbleStyles.css";

const MessageBubbles = ({ messages, userId }) => {
  return (
    <div>
      {messages.map((message) => {
        const sender = message.sender === userId;
        return (
          <div className={sender ? "alignRight" : ""} key={message.count}>
            <p className="messageBubble" id={sender ? "user" : "other"}>
              {message.content}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MessageBubbles;
