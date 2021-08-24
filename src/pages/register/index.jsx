import React, { useState } from "react";
import Input from "../../common/Input";

import "./register.css";

const Register = () => {
    <div className="registerPage">
      <form>
        <Input label="First name" type="text" name="firstName" />
        <Input label="Last name" type="text" name="lastName" />
        <Input label="Email" type="email" name="email" />
        <Input label="Password" type="password" name="password" />
        <Input label="Confirm password" type="password" name="password" />
      </form>
      <button onClick={() => {}}>Register</button>
    </div>
  );
};

export default Register;
