//startup.js file
var appConfig = {
    appId: "ksa2",
    appName: "KitchenSinkApp",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.5.172",
    serverPort: "8080",
    secureServerPort: null,
    isMFApp: false,
    eventTypes: [],
    url: null,
    secureurl: null,
    middlewareContext: "ksa2"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializehdrIconEdit();
    initializehdrOne();
    initializehdrSearch();
    initializewinMangoHeader();
    initializeftrOne();
    initializeactionWidsTemplate();
    initializedynamicRowTemplate1();
    initializedynamicRowTemplate2();
    initializehdr();
    initializerowTemplate1();
    initializerowTemplate2();
    initializerowTemplate3();
    initializeSecHeaderTemplate1();
    initializeSecHeaderTemplate2();
    initializeSecHeaderTemplate3();
    initializesegLoadingOnReachEnd();
    initializespaRowTemplate1();
    initializespaRowTemplate2();
    initializespaSecHdrTemp1();
    initializespaSecHdrTemp2();
    initializevbox2060628854113();
    initializevbox2060628854115();
    initializevbox2060628854117();
    initializevbox2060628854119();
    initializevbox2060628854121();
    initializevbox2060628854123();
    initializevbox2060628854125();
    initializevbox2060628854127();
    initializevbox2060628854129();
    initializevbox2060628854131();
    initializevbox2060628854133();
    initializevbox2060628854135();
    initializevbox2060628854137();
    initializevbox2060628854139();
    initializevbox2060628854141();
    initializevbox2060628854143();
    initializevbox2060628854145();
    initializevbox2060628854147();
    initializevbox2060628854149();
    initializevbox2060628854151();
    initializevbox2060628854153();
    initializevbox2060628854155();
    initializevbox2060628854157();
    initializevbox2060628854159();
    initializevbox2060628854161();
    initializevbox2060628854163();
    initializevbox2060628854165();
    initializevbox2060628854167();
    initializevbox2060628854169();
    initializevbox2060628854171();
    initializevbox2060628854173();
    initializevbox2060628854175();
    initializevbox2060628854177();
    initializevbox2060628854179();
    initializevbox2060628854181();
    initializevbox2060628854183();
    initializevbox2060628854185();
    initializevbox2060628854187();
    initializevbox2060628854189();
    initializevbox2060628854191();
    initializevbox2060628854193();
    initializevbox2060628854195();
    initializevbox2060628854197();
    initializevbox2060628854199();
    initializevbox2060628854201();
    initializevbox2060628854203();
    initializevbox2060628854205();
    initializevbox2060628854207();
    initializevbox2060628854209();
    initializevbox2060628854211();
    initializevbox2060628854213();
    initializevbox2060628854215();
    initializevbox2060628854217();
    initializevbox2060628854219();
    initializevbox2060628854221();
    initializevbox2060628854223();
    initializevbox2060628854225();
    initializevbox2060628854227();
    initializevbox2060628854229();
    initializevbox2060628854231();
    initializevbox2060628854233();
    initializevbox2060628854235();
    initializevbox2060628854237();
    initializevbox2060628854239();
    initializevbox2060628854241();
    initializevbox2060628854243();
    initializevbox2060628854245();
    initializevbox2060628854247();
    initializevbox2060628854249();
    initializevbox2060628854251();
    initializevbox2060628854253();
    initializevbox2060628854255();
    initializevbox2060628854257();
    initializevbox2060628854259();
    initializevbox2060628854261();
    initializevbox2060628854263();
    initializevbox2060628854265();
    frm3DObjGlobals();
    frmAclmeterOptionsGlobals();
    frmAclMeterReadingsGlobals();
    frmAdvancedWidgetsGlobals();
    frmAniGlobals();
    frmAni2SplitHorizontalInGlobals();
    frmAni2SplitHorizontalOutGlobals();
    frmAni2SplitVerticalInGlobals();
    frmAni2SplitVerticalOutGlobals();
    frmAni4SplitInGlobals();
    frmAni4SplitOutGlobals();
    frmAni4SplitRotateInGlobals();
    frmAni4SplitRotateOutGlobals();
    frmAniAndGlobals();
    frmAnibottomGlobals();
    frmAnibottomlefttopGlobals();
    frmAnibottomtopGlobals();
    frmAnibottomtopstyle1Globals();
    frmAniClothGlobals();
    frmAniCurlGlobals();
    frmAniDoorGlobals();
    frmAniFadeGlobals();
    frmAniFlipGlobals();
    frmAniFlipLeftGlobals();
    frmAniFlipRightGlobals();
    frmAnifromcenterGlobals();
    frmAnifromleftGlobals();
    frmAnifromrightGlobals();
    frmAnileftGlobals();
    frmAniMoveInGlobals();
    frmAniMoveInFromBottomGlobals();
    frmAniMoveInFromTopGlobals();
    frmAniPushGlobals();
    frmAniRevealGlobals();
    frmAnirightGlobals();
    frmAniRotateExchangeGlobals();
    frmAniSPAGlobals();
    frmAniSwitchLeftGlobals();
    frmAniSwitchRightGlobals();
    frmAnitoleftGlobals();
    frmAnitopGlobals();
    frmAnitoprightbottomGlobals();
    frmAnitorightGlobals();
    frmAniWinGlobals();
    frmAniWinPopGlobals();
    frmAniWinRotate3DDualGlobals();
    frmAniWinRotate3DSingleGlobals();
    frmAniWinSlideGlobals();
    frmAniWinSqueezeGlobals();
    frmAPIKeyGlobals();
    frmAppSetReadGlobals();
    frmAppSettingsGlobals();
    frmAppSetWriteGlobals();
    frmAsyncDataAccessGlobals();
    frmAsyncDataDisplayGlobals();
    frmBadgeGlobals();
    frmBasicWidgetsGlobals();
    frmBrowserGlobals();
    frmBrowserOptionsGlobals();
    frmBtnGlobals();
    frmCalGlobals();
    frmCalendarEventsGlobals();
    frmCamAcsModesGlobals();
    frmCameraBasicGlobals();
    frmCameraFrmOverlayGlobals();
    frmCameraOptionsGlobals();
    frmCameraOverlaidGlobals();
    frmCamOrientGlobals();
    frmCBoxGlobals();
    frmChkGlobals();
    frmComplexGlobals();
    frmContactGlobals();
    frmContainerWidgetsGlobals();
    frmCryptoGlobals();
    frmCustomCollapsTabGlobals();
    frmDatagrdGlobals();
    frmDeviceInfoGlobals();
    frmDictViewGlobals();
    frmDummyGlobals();
    frmDvcFeaturesGlobals();
    frmEmailGlobals();
    frmFlexGlobals();
    frmFormGlobals();
    frmFormImgBckGlobals();
    frmFormOptionsGlobals();
    frmGeoCurrentNWatchGlobals();
    frmGesturesGlobals();
    frmHdrFooterGlobals();
    frmHomeGlobals();
    frmIconEditStyleGlobals();
    frmIconsGlobals();
    frmImageGlobals();
    frmImgCropGlobals();
    frmImgFitToDimensionsGlobals();
    frmImgGalGlobals();
    frmImgMaintainAspectRatioGlobals();
    frmImgStripGlobals();
    frmLblGlobals();
    frmLinkGlobals();
    frmLiveTilesGlobals();
    frmLocalStoreGlobals();
    frmLstBoxGlobals();
    frmLstItemsGlobals();
    frmMapGlobals();
    frmNListGlobals();
    frmNLst2Globals();
    frmPhnGlobals();
    frmPickerViewGlobals();
    frmPlatformsGlobals();
    frmPopupGlobals();
    frmPushPullGlobals();
    frmRdoGlobals();
    frmRegisterAccelerometerGlobals();
    frmRichTextGlobals();
    frmRowTemplatesGlobals();
    frmScrollBoxMenuGlobals();
    frmScrollSPAGlobals();
    frmSecHdrWidoutTemplatesGlobals();
    frmSegActionableWidgetsGlobals();
    frmSegBoxesGlobals();
    frmSegCoverFlowViewGlobals();
    frmSegCustomPageIndicatorGlobals();
    frmSegCylinderViewGlobals();
    frmSegDynRowTemplateGlobals();
    frmsegGroupModeGlobals();
    frmSegInvertCylinderViewGlobals();
    frmSegInvertRotaryViewGlobals();
    frmSegLinearViewGlobals();
    frmSegmentMoreFeaturesGlobals();
    frmSegmentOptionsGlobals();
    frmSegMulSelectDataGlobals();
    frmSegOnReachEndGlobals();
    frmSegPageViewGlobals();
    frmSegRotatoryViewGlobals();
    frmSegSearchViewGlobals();
    frmSegSectionsGlobals();
    frmSegSinleSelectGlobals();
    frmSegStackViewGlobals();
    frmSegTableViewGlobals();
    frmSegViewsGlobals();
    frmSliderGlobals();
    frmSwipeGlobals();
    frmSwitchGlobals();
    frmTabCollpasibleGlobals();
    frmTabDefaultGlobals();
    frmTabPageViewGlobals();
    frmTabsGlobals();
    frmTabScreenLevelGlobals();
    frmTbxGlobals();
    frmToggleTabsGlobals();
    frmTtlbarBgColorGlobals();
    frmTtlbarBgImgGlobals();
    frmTtlbarCustomGlobals();
    frmTtlbarDefaultGlobals();
    frmTtlbarOptionsGlobals();
    frmTxtAreaGlobals();
    frmUICategoryGlobals();
    frmURLBasedImageGlobals();
    frmWebSQLGlobals();
    frmWebSQLResultsGlobals();
    popFormAnchorGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        preappinit: ksa2preappinit,
        init: appInit,
        showstartupform: function() {
            frmPlatforms.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
    callAppMenu();
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        eventTypes: []
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};