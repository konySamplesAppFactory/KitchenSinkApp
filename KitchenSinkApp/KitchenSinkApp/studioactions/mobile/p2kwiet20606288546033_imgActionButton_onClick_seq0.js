function p2kwiet20606288546033_imgActionButton_onClick_seq0(eventobject, context) {
    function alert_onClick_5931520606288544954_True() {}

    function alert_onClick_5931520606288544954_Callback() {
        alert_onClick_5931520606288544954_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle": "",
        "yesLabel": "Yes",
        "noLabel": "No",
        "message": "You clicked button",
        "alertHandler": alert_onClick_5931520606288544954_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}