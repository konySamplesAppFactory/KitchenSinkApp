function p2kwiet20606288544525_frmSegmentFeatures_postshow_seq0(eventobject, neworientation) {
    if (kony.os.deviceInfo().name == "Windows" && channel == "tablet") {
        frmSegmentFeatures.segSegmentFeatureCat.separatorThickness = 0;
    }
    segmentFeaturesSetting.call(this);
    SecHdrTemplatesTab.call(this);
    dataForSeg.call(this, null);
}