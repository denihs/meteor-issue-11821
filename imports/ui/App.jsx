import React from 'react';
import { Meteor } from "meteor/meteor";

export const App = () => (
  <div>
    <button onClick={() => {
      Meteor.loginWithFacebook({
        loginStyle: "redirect",
        requestPermissions: ["email"],
      });
    }}>
      Login With Facebook
    </button>
  </div>
);
