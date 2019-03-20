# Notifications-on-Status-Change
This small App connects Slack or Twilio using Zapier to DayBack Online Calendar. It will send a notification to your phone or Slackbot every time there is a change on the Event Status. Here is how it's gonna look like in Slack:

![alt text](https://github.com/petrechenko/Notifications-on-Status-Change/blob/master/images/Screen%20Shot%202019-01-31%20at%2011.29.24.png)

Instractions on getting started using Twilio:

After you created an account with Twilio and set up a phone number you want to use, you would get your own ACCOUNT SID and AUTH TOKEN:




That’s the only 3 things you would need to get from Twilio. Your trial balance would cover the trial number cost and to play around with messages. With this trial account, you would be able to send messages only to your personal number and only from trial number. More information on how to set up your Twilio Account you can find here: https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account

Next, you would need to head to Zapier website and create a free trial account. It’s pretty easy and straightforward. The fun starts when you create your first “Zap” (this is how they call their Trigger App).

On the top of the home page, you would find a button called “Make a Zap!”. It would take you to a page with different Built-In Apps and the only one we would need for right now is called “Webhooks”:

After clicking on it, you would need to select “Catch Hook” and to skip for now “Child Key” (you would be able to modify it after the setup is finished). Please Copy a custom webhook URL and paste it into the custom action file after the comment “your webhook from Zapier” and press “Ok, I did this”.

You would have to go to your Calendar and apply the custom action to verify the Webhook is working. The instructions on creating Custom Actions in DayBack are here. And try changing the status on one of the events. It wouldn’t send you the text yet but it would activate the Webhook.

If it’s all good, it automatically would take you to the next page where you add your App to the Webhook. Click on “Twilio” after you search for it in the find bar. Then “Send SMS” on the next page and “Connect an account”. Copy and Paste from Twilio website Account SID and TOKEN:





Click on “Test” button on the right of the screen to check if your account is active with Twilio. After Success press on “Save and Continue”. On “Set Up Template” screen you select everything from the dropdown menu so it would look like this, only with your numbers:




You could change “Message” field directly in the JavaScript file after the comment “data you want to send in your message”. And just “Continue” and “Finish”. Don’t forget to turn your ZAP on, as I forgot to do it myself a couple times while testing :)

You are welcome to modify your SMS with the paid plan from Twilio or some changes are available within .js file.


