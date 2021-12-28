import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

Meteor.startup(function () {
  Accounts.loginServiceConfiguration.upsert(
    {
      service: "facebook",
    },
    {
      $set: {
        appId: "303921328410143",
        secret: "574f53e0d10d849540adb7b41b11306d",
      },
    }
  );
});
