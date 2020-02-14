
// Chinese translator
function createCardResponse(widgets) {
  return {
    "cards": [
      {
        "sections": [{
          "widgets": widgets
        }]
    }]
  };
}

function onMessage(e) {
  var sourceText = e.message.argumentText;
  var translatedText = "Chinese:" + LanguageApp.translate(sourceText, 'en', 'zh-CN');
  var widgets = [{
    "textParagraph": {
      "text": translatedText}
  }];
  return createCardResponse(widgets);
}








 //Setting the names of messangers
function onMessage(event) {
    var name = "";
  
    //Setting the name for the incoming message
    if (event.space.type == "DM") {
      name = "You";
    } else {
      name = event.user.displayName;
    }
    
    // This is the structure to reply looking for certain words
    var message = name + " said \"" + event.message.text + "\"";
    var outSick = "feel better";
    if (message.indexOf("out sick")>=0) {
      return { "text": outSick };
    }
  }
    
   // what the bot says when added to threads   
  function onAddToSpace(event) {
    var message = "";
  
    if (event.space.type == "DM") {
      message = "Thank you for adding me to a DM, " + event.user.displayName + "!";
    } else {
      message = "Thank you for adding me to " + event.space.displayName;
    }
  
    if (event.message) {
      // Bot added through @mention.
      message = message + " and you said: \"" + event.message.text + "\"";
    }
    return { "text": message };
  }
  
  /*
   * Responds to a REMOVED_FROM_SPACE event in Hangouts Chat.
   * @param {Object} event the event object from Hangouts Chat
   */
  function onRemoveFromSpace(event) {
    console.info("Bot removed from ", event.space.name);
  }
  
  