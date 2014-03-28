function Controller() {
    function doClick() {
        alert($.label.text);
    }
    function searchTA() {
        Ti.API.info("searchTA");
        var jsonparam = {
            ctl00$ContentPlaceHolder1$TSM1: "ctl00$ContentPlaceHolder1$UpdatePanel2|ctl00$ContentPlaceHolder1$btnSubmit",
            ctl00_ContentPlaceHolder1_TSM1_HiddenField: "/wEPDwUJNzg4NzQxOTgzZGQ3n9ah6+62OZIn2c4Ag5Owbzr/Fg==",
            __EVENTTARGET: "/wEPDwUJNzg4NzQxOTgzZGQ3n9ah6+62OZIn2c4Ag5Owbzr/Fg==",
            __EVENTARGUMENT: "/wEPDwUJNzg4NzQxOTgzZGQ3n9ah6+62OZIn2c4Ag5Owbzr/Fg==",
            __VIEWSTATE: "/wEPDwUJNzg4NzQxOTgzZGQ3n9ah6+62OZIn2c4Ag5Owbzr/Fg==",
            ctl00$userid: "SQASI/TA/13/2579",
            ctl00$screenname: "SQASI/TA/13/2579",
            ctl00$ContentPlaceHolder1$txtSearch1: "SQASI/TA/13/2579",
            ctl00$ContentPlaceHolder1$txtSearch2: "111111111111",
            __ASYNCPOST: true,
            ctl00$ContentPlaceHolder1$btnSubmit: "Search"
        };
        console.log(jsonparam);
        var request = Titanium.Network.createHTTPClient();
        var url = "http://ecomm.sirim.my/SirimEnquiry/search_type_approval.aspx";
        request.open("POST", url);
        request.setRequestHeader("User-Agent", "Mozilla/5.0 (Data)");
        request.send(jsonparam);
        request.onload = function() {
            Ti.API.info("request.onload");
            Ti.API.info(this.status);
            Ti.API.info(this.responseText);
            var cookie = request.getResponseHeader("Set-Cookie");
            Ti.API.info("cookie:" + cookie);
            var someresponseheaders = request.getResponseHeader("Date");
            Ti.API.info("someresponseheaders:" + someresponseheaders);
            var contentlengthheader = request.getResponseHeader("Content-Length");
            Ti.API.info("contentlengthheader:" + contentlengthheader);
            var respdata = request.getResponseData();
            console.log(JSON.stringify(respdata));
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, World",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    searchTA();
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;