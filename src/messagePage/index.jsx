import React from "react";
import { connect } from "react-redux";

import TitleRow from "./titleRow";
import MessageBubbles from "./messageBubbles";
import Footer from "./footer";

import "./messagePageStyles.css";

const MessagePage = (props, user = "George") => (
  <div id="container">
    {/* <div id="messagingAppContainer">
      <TitleRow user={user} />
      <div id="messagingBody">
        <MessageBubbles messages={props.messages} user={user} />
      </div>
      <Footer />
    </div> */}

    <h1>YOU'RE IN MESSAGES</h1>
  </div>
);

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    messages: state.messages.messages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagePage);
