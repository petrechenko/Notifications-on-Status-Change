//Purpose:
//This function will send a slack notification with details
//that were changed on the object

//Action Type: Custom Action
//Open in new window: no

//More info on custom actions here:
//https://docs.dayback.com/article/5-custom-actions

initiate(event);

function initiate(event) {

  //object in the popover menu you want to change
  var newObject = changesObject.status;

  //your webhook from Zapier
  var webHook = "https://hooks.zapier.com/hooks/catch/4410835/xfa53m/";

  var userName = seedcodeCalendar.get('config').accountName;

  //data you want to send in your message
  var sendData = {
    "text": userName + " changed the status of this event to [[status]]: [[title]]",
    "username": "DayBack",
    "icon": "https://dayback.com/wp-content/uploads/2019/01/DBkChartLogoMdNoSpace.png",
  };

  if (newObject) {
    //send webhook to Zapier
    $.ajax(webHook, {
      type: "POST",
      data: JSON.stringify(sendData),
      success: function() {
        //showing a confirmation message in DayBack's message drawer after the "saved" success message
        dbk.showMessage("This status change has been sent to Slack", 4000, 5000);
      },
      failure: function(errMsg) {
        dbk.showMessage(errMsg);
      }
    });
  }
}
