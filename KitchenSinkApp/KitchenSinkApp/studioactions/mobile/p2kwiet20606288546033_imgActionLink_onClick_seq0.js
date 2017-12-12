function p2kwiet20606288546033_imgActionLink_onClick_seq0(eventobject, context) {
    function alert_onClick_5076620606288543623_True() {}

    function alert_onClick_5076620606288543623_Callback() {
        alert_onClick_5076620606288543623_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle": "",
        "yesLabel": "Yes",
        "noLabel": "No",
        "message": "You clicked link",
        "alertHandler": alert_onClick_5076620606288543623_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}