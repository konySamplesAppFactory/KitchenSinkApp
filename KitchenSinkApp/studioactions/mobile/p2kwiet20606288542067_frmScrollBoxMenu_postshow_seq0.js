function p2kwiet20606288542067_frmScrollBoxMenu_postshow_seq0(eventobject, neworientation) {
    if (kony.os.deviceInfo().name == "android") {
        glbScrollBegining = false;
        frmScrollBoxMenu.sboxGlobalHome.scrollToEnd()
    }
}