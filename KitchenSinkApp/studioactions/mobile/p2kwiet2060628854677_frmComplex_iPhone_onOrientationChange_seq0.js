function p2kwiet2060628854677_frmComplex_iPhone_onOrientationChange_seq0(eventobject, neworientation) {
    if (kony.os.getDeviceCurrentOrientation() == constants.DEVICE_ORIENTATION_PORTRAIT) frmComplex.lblComplex.text = "Please rotate the device to observe Landscape mode";
    else if (kony.os.getDeviceCurrentOrientation() == constants.DEVICE_ORIENTATION_LANDSCAPE) frmComplex.lblComplex.text = "Please rotate the device to observe Portrait mode";
    else {}
}