import React from "react";
import { connect } from "react-redux";

import TitleRow from "./titleRow";
import MessageBubbles from "./messageBubbles";
import Footer from "./footer";

import "./messagePageStyles.css";

const MessagePage = (props) => (
  <div id="container">
    <div id="messagingAppContainer">
      <TitleRow user={props.user} />
      <div id="messagingBody">
        <MessageBubbles messages={props.messages} user={props.user} />
      </div>
      <Footer />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  count: state.counter.count,
  messages: state.messages.messages,
  user: state.messages.user,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagePage);
