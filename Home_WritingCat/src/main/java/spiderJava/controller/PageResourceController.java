package spiderJava.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.FileNotFoundException;

/**
 * @Description: PageResourceController
 * @Author: wx:istarwyh
 * @Date: 2021-03-12 21:07
 * @Version: ing
 */
@Controller
@ResponseBody
public class PageResourceController {
    /**
     * 为什么通过File读不到"../resources/templates/Home_WritingCat_files/tpa-components.20a0bdeb.chunk.min.js"？ todo
     * 以至于这里只能愚蠢地返回全部字符串
     * @return
     * @throws FileNotFoundException
     */
    @GetMapping("/Home_WritingCat_files/tpa-components.20a0bdeb.chunk.min.js")
    public String resource1() throws FileNotFoundException {
        return "(window.webpackJsonp__wix_thunderbolt_app=window.webpackJsonp__wix_thunderbolt_app||[]).push([[3]," +
                "{276:function(e,t,n){\"use strict\";n.r(t);var r=n(3),a=n.n(r),i=n(723),o=n.n(i);t.default=function" +
                "()" +
                "{return a.a.createElement(\"div\",{className:o.a.content},a.a.createElement(\"div\",{className:o.a" +
                ".circlePreloader}))}},316:function(e,t,n){\"use strict\";n.r(t);var r=n(0),a=n(3),i=n.n(a),o=n(466);" +
                "t" +
                ".default=function(e){return i.a.createElement(o.a,Object(r.a)({},e))}},318:function(e,t,n){\"use " +
                "strict\";n.r(t);var r=n(0),a=n(3),i=n.n(a),o=n(466);t.default=function(e){return i.a.createElement(o" +
                ".a,Object(r.a)({},e))}},319:function(e,t,n){\"use strict\";n.r(t);var r=n(0),a=n(3),i=n.n(a),o=n" +
                "(466)" +
                ";t.default=function(e){return i.a.createElement(o.a,Object(r.a)({},e))}},320:function(e,t,n){\"use " +
                "strict\";n.r(t);var r=n(3),a=n.n(r);t.default=function(e){var t=[\"autoplay\",\"camera\"," +
                "\"microphone\",\"geolocation\",\"vr\"].join(\";\"),n=e||{},r=n.id,i=n.src,o=n.title;return a.a" +
                ".createElement(\"div\",{id:r},a.a.createElement(\"iframe\",{style:{display:\"none\"},name:r," +
                "allowFullScreen:!0,allowTransparency:\"true\",frameBorder:\"0\",src:i,title:o,allow:t}))}}," +
                "377:function(e,t,n){\"use strict\";n.r(t),n.d(t,\"TPAUnavailableMessageOverlay\",(function(){return " +
                "l}));var r=n(3),a=n.n(r),i=n(725),o=n.n(i),l=function(e){var t=e.reload,n=e.translate,r=e.width," +
                "i=n?n" +
                "(\"PLATFORM\",\"PLATFORM_Viewer_App_Didn\\u2019t_Load_Header\",\"Widget Didn\\u2019t Load\")" +
                ":\"Widget" +
                " Didn\\u2019t Load\",l=n?n(\"PLATFORM\",\"PLATFORM_Viewer_App_Didn\\u2019t_Load_Sub_Text1\",\"Check " +
                "your internet and refresh this page.\"):\"Check your internet and refresh this page.\",c=n?n" +
                "(\"PLATFORM\",\"PLATFORM_Viewer_App_Didn\\u2019t_Load_Sub_Text2\",\"If that doesn\\u2019t work, " +
                "contact us.\"):\"If that doesn\\u2019t work, contact us.\",s=n?n(\"PLATFORM\"," +
                "\"PLATFORM_Viewer_App_Didn\\u2019t_Load_Sub_Text3\",\"Refresh this page\"):\"Refresh this page\",u=" +
                "(r-(r<224?22:206))/2-17,d=r>=224;return a.a.createElement(\"div\",{className:o.a.content," +
                "style:{paddingLeft:u}},a.a.createElement(\"div\",{className:o.a.iconContainer},a.a.createElement" +
                "(\"svg\",{width:\"22px\",height:\"23px\",viewBox:\"0 0 22 23\"},a.a.createElement(\"title\",null," +
                "\"!\"),a.a.createElement(\"g\",{id:\"Page-1\",stroke:\"none\",strokeWidth:\"1\",fill:\"none\"," +
                "fillRule:\"evenodd\"},a.a.createElement(\"g\",{id:\"Error-Message\",transform:\"translate(-308" +
                ".000000, -690.000000)\",fill:\"#174165\",fillRule:\"nonzero\"},a.a.createElement(\"g\"," +
                "{id:\"Group-3\",transform:\"translate(66.000000, 75.000000)\"},a.a.createElement(\"g\"," +
                "{id:\"Group-Copy\",transform:\"translate(110.000000, 429.000000)\"},a.a.createElement(\"g\"," +
                "{id:\"Group-2\",transform:\"translate(128.000000, 186.000000)\"},a.a.createElement(\"path\",{d:\"M13" +
                ".5652174,6 L16.4347826,6 L16.4347826,10.0908203 L15.9602582,13 L14.1082817,13 L13.5652174,10.0638428" +
                " " +
                "L13.5652174,6 Z M13.5652174,14 L16.4347826,14 L16.4347826,17 L13.5652174,17 L13.5652174,14 Z M14" +
                ".5217391,2 C9.76728781,2 5.91304348,6.02943725 5.91304348,11 L5.91304348,12 C5.91304348,16.9705627 9" +
                ".76728781,21 14.5217391,21 L15.4782609,21 C20.2327122,21 24.0869565,16.9705627 24.0869565,12 L24" +
                ".0869565,11 C24.0869565,6.02943725 20.2327122,2 15.4782609,2 L14.5217391,2 Z M14.5217391,0 L15" +
                ".4782609,0 C21.2892569,0 26,4.92486775 26,11 L26,12 C26,18.0751322 21.2892569,23 15.4782609,23 L14" +
                ".5217391,23 C8.71074307,23 4,18.0751322 4,12 L4,11 C4,4.92486775 8.71074307,0 14.5217391,0 Z\"," +
                "id:\"!\"})))))))),d?a.a.createElement(\"div\",{className:o.a.textContainer},a.a.createElement" +
                "(\"div\",{className:o.a.textTitle},i),a.a.createElement(\"div\",{className:o.a.text},l),a.a" +
                ".createElement(\"div\",{className:o.a.text},c),t?a.a.createElement(\"a\",{className:o.a" +
                ".reloadButton," +
                "onClick:function(){return t()}},s):null):null)};t.default=l},466:function(e,t,n){\"use strict\";var " +
                "r=n(0),a=n(3),i=n.n(a),o=n(722),l=n.n(o),c=n(276),s=n(8),u=n.n(s),d=i.a.lazy((function(){return n.e" +
                "(3).then(n.bind(null,377))})),f={mobile:\"unavailableInMobile\",https:\"unavailableInHttps\"}," +
                "p=\"notInClientSpecMap\",v=\"unresponsive\",m=\"preloader\";function h(e){var t=e" +
                ".isAppInClientSpecMap,n=e.isViewerMode,o=e.sentAppIsAlive,l=e.translate,s=e.width,h=Object(a.useRef)" +
                "(!1),w=Object(r.e)(Object(a.useState)(null),2),O=w[0],b=w[1],g=Object(a.useRef)(0),_=Object(a" +
                ".useRef)" +
                "(0),E=Object(r.e)(Object(a.useState)(!1),2),M=E[0],L=E[1],S=Object(r.e)(Object(a.useState)" +
                "(\"loading\"),2),A=S[0],x=S[1];Object(a.useEffect)((function(){return h.current=!0,I(),n&&b(k()),u.a" +
                ".includes(f,O)||R(),function(){h.current=!1,C(),j()}}),[]),Object(a.useEffect)((function(){o&&(C(),j" +
                "(),x(\"alive\"),O===m&&b(null))}),[o]);var y=function(){I(),R(),L(!1),b(null)},C=function(){_&&" +
                "(clearTimeout(_.current),_.current=0)},j=function(){g&&(clearTimeout(g.current),g.current=0)}," +
                "I=function(){j(),g.current=window.setTimeout((function(){j(),T()}),5e3)},T=function(){h" +
                ".current&&\"alive\"!==A&&(!O&&t||!t&&!n)&&(b(t?m:p),L(!0)),x(\"loading\")},R=function(){C(),_" +
                ".current=window.setTimeout((function(){C(),h.current&&\"alive\"!==A&&t&&(b(v),L(!0))}),2e4)}," +
                "k=function(){if(\"alive\"!==A&&(!O||O!==v))return O;return t?m:p};return " +
                "M||\"alive\"!==A&&O!==m&&O!==v&&O!==f.mobile||L(!0),{isVisible:M,shouldShowIframe:!O||O===m," +
                "overlay:function(){switch(O){case m:return i.a.createElement(c.default,null);case v:return i.a" +
                ".createElement(a.Suspense,{fallback:i.a.createElement(\"div\",null)},i.a.createElement(d,{width:s," +
                "translate:l,reload:y}));case f.https:case f.mobile:case p:return i.a.createElement(a.Suspense," +
                "{fallback:i.a.createElement(\"div\",null)},i.a.createElement(d,{width:s,translate:l}));" +
                "default:return" +
                " null}}()}}var w=[\"autoplay\",\"camera\",\"microphone\",\"geolocation\",\"vr\"].join(\";\")," +
                "O=function(e){var t,n=e||{},o=n.id,c=n.src,s=n.title,d=n.isAppInClientSpecMap,f=n.isViewerMode,p=n" +
                ".isMobileView,v=n.isResponsive,m=n.sentAppIsAlive,O=n.reportIframeStartedLoading,b=n.onMouseEnter," +
                "g=void 0===b?u.a.noop:b,_=n.onMouseLeave,E=void 0===_?u.a.noop:_,M=n.allowScrolling,L=n.translate," +
                "S=Object(r.f)(n,[\"id\",\"src\",\"title\",\"isAppInClientSpecMap\",\"isViewerMode\"," +
                "\"isMobileView\"," +
                "\"isResponsive\",\"sentAppIsAlive\",\"reportIframeStartedLoading\",\"onMouseEnter\"," +
                "\"onMouseLeave\"," +
                "\"allowScrolling\",\"translate\"]),A=Object(a.useRef)(null),x=h({isAppInClientSpecMap:d," +
                "isViewerMode:f,sentAppIsAlive:m,translate:L,width:(null===(t=A.current)||void 0===t?void 0:t" +
                ".clientWidth)||0}),y=x.overlay,C=x.shouldShowIframe,j=x.isVisible,I=function(e,t,n){var " +
                "r={containerOverrides:{},iframeOverrides:{}};if(e&&n.isMobileFullScreenMode)return t?(r" +
                ".containerOverrides={position:\"fixed\",margin:\"0\",top:\"0\",left:\"0\",width:\"100vw\"," +
                "bottom:\"0\"},n.isIOS&&(r.containerOverrides.position=\"relative\",r.containerOverrides" +
                ".height=\"calc" +
                "(100% + var(--wix-ads-top-height))\",r.containerOverrides.top=\"calc(-1 * var(--wix-ads-top-height))" +
                "\",r.iframeOverrides={display:\"block\",position:\"relative\",width:\"100%\",height:\"100%\"," +
                "minHeight:\"100%\",minWidth:\"100%\"})):r.containerOverrides={display:\"block\"," +
                "position:\"absolute\",margin:0,top:\"calc(-1 * var(--wix-ads-height))\",bottom:0,left:0,right:0," +
                "zIndex:2e3,height:\"auto\"},r;if(e&&!1===n.isMobileFullScreenMode&&!t)return r" +
                ".containerOverrides={display:\"none\"},r;if(n.styleOverrides){var a=n.styleOverrides,i=a.width,o=a" +
                ".height;r.containerOverrides={width:i,height:o}}return\"number\"!=typeof n.heightOverride||isNaN(n" +
                ".heightOverride)||(n.heightOverflow?(r.containerOverrides.overflow=\"visible\",r.iframeOverrides" +
                ".height=n.heightOverride,r.iframeOverrides.zIndex=1001):(r.containerOverrides.overflow=\"hidden\",r" +
                ".containerOverrides.height=n.heightOverride)),r}(p,v,S)||{},T=I.containerOverrides,R=I" +
                ".iframeOverrides,k=Object(r.e)(Object(a.useState)(!1),2),F=k[0],N=k[1];Object(a.useEffect)((function" +
                "(){!F&&c&&O&&N(!0)}),[F,c,O]);var V={className:l.a.iframe,style:R,title:s,\"aria-label\":s," +
                "scrolling:M?\"yes\":\"no\"};return F&&(O(),V.key=c,V.src=c),i.a.createElement(\"div\",{ref:A,id:o," +
                "className:function(){if(!p||\"boolean\"!=typeof S.isMobileFullScreenMode){var e=[l.a.root];return " +
                "j||e.push(l.a.hidden),e.join(\" \")}}(),style:T,onMouseEnter:g,onMouseLeave:E},C&&i.a.createElement" +
                "(\"iframe\",Object(r.a)({},V,{allowFullScreen:!0,allowtransparency:\"true\",frameBorder:\"0\"," +
                "allow:w})),y)};t.a=function(e){return e.seoHtmlContent?i.a.createElement(\"div\",{id:e.id," +
                "dangerouslySetInnerHTML:{__html:e.seoHtmlContent}}):i.a.createElement(O,Object(r.a)({},e))}}," +
                "722:function(e,t,n){e.exports={root:\"_3g8uH\",iframe:\"yuKeh\",hidden:\"oMCVo\"}},723:function(e,t," +
                "n){e.exports={content:\"_27cxq\",\"circle-preloader\":\"_2_txh\",circlePreloader:\"_2_txh\"," +
                "\"semi-rotate\":\"SAuK0\",semiRotate:\"SAuK0\",\"inner-rotate\":\"_2ZCEk\",innerRotate:\"_2ZCEk\"," +
                "white:\"_163i9\"}},725:function(e,t,n){e.exports={reloadButton:\"gYpwl\",content:\"_2lW-H\"," +
                "textContainer:\"TXAYC\",textTitle:\"_3pF6C\",text:\"_1HYNg\"}}}]);\n";
    }

    @GetMapping("/Home_WritingCat_files/FreemiumBannerDesktop.6165b4f9.chunk.min.js")
    public String resource2() {
        return "((\"undefined\"!=typeof self?self:this).webpackJsonp_thunderbolt_elements=(\"undefined\"!=typeof " +
                "self?self:this).webpackJsonp_thunderbolt_elements||[]).push([[165],{1166:function(e,t,a){e" +
                ".exports={\"freemium-banner\":\"rzEUj\",freemiumBanner:\"rzEUj\",hidden:\"_1casH\"," +
                "visible:\"_30eOL\",rtl:\"vlRF5\",ltr:\"_19PuQ\",desktop:\"_1LfNQ\",\"desktop-top\":\"_2nmDd\"," +
                "desktopTop:\"_2nmDd\",overlay:\"_2DM65\",contents:\"_3lMYe\",text:\"_3AwDM\"," +
                "\"wix-logo\":\"_2j3s-\",wixLogo:\"_2j3s-\",dot:\"_1GzGJ\",com:\"_2n9se\",button:\"_1xCDj\"}}," +
                "604:function(e,t,a){\"use strict\";a.r(t);var l=a(3),n=a(643),s=a.n(n),r=a(177),o=a(855),i=a(647)," +
                "c=a(778),d=a(1166),m=a.n(d);t.default=function(e){var t=e.id,a=void 0===t?\"WIX_ADS\":t,n=e" +
                ".translate,d=e.useOverlay,u=void 0!==d&&d,f=e.direction,p=e.href,_=void 0===p?\"\":p,v=e.classNames," +
                "E=void 0===v?[\"ltr\"]:v,b=s.a.apply(void 0,Object(l.f)(E.map((function(e){return m.a[e]})),[m.a" +
                ".desktopTop])),x=(n(\"Wix_Ads\",\"Wix_Ads_2_top_banner\",\"This site was designed with the {Wix} " +
                "website builder. Create your website today.\")||\"\").split(\"{Wix}\"),h=x[0],w=x[1],N=n" +
                "(\"Wix_Ads\",\"Wix_Ads_2_top_banner_CTA\",\"Start Now\");return r.createElement(\"div\",{id:a," +
                "className:m.a.desktop+\" \"+m.a.freemiumBanner},u?r.createElement(\"div\",{\"data-testid\":c.a" +
                ".overlay,className:b}):r.createElement(i.a,{className:b,href:_,target:\"_blank\",rel:\"nofollow\"},r" +
                ".createElement(\"span\",{className:m.a.contents},r.createElement(\"span\",{className:m.a.text},h,r" +
                ".createElement(\"div\",{style:{direction:\"ltr\",display:\"inline-flex\"}},r.createElement(\"div\"," +
                "null,r.createElement(o.b,{rootClass:m.a.wixLogo,dotClass:m.a.dot})),r.createElement(\"div\"," +
                "{className:m.a.com},\".com\")),w),r.createElement(\"span\",{className:m.a.button+\" \"+m.a[f]},N))))" +
                "}},778:function(e,t,a){\"use strict\";a.d(t,\"a\",(function(){return l}));var " +
                "l={overlay:\"bannerOverlay\"}},855:function(e,t,a){\"use strict\";a.d(t,\"a\",(function(){return n})" +
                "),a.d(t,\"b\",(function(){return s}));var l=a(177),n=function(e){var t=e.className;return l" +
                ".createElement(\"svg\",{className:t,viewBox:\"0 0 177.32 142.49\"},l.createElement(\"defs\",null,l" +
                ".createElement(\"style\",null,\".cls-1{fill:none;stroke:#9d288c;stroke-miterlimit:10;" +
                "stroke-width:13px}\")),l.createElement(\"title\",null,\"Artboard 1\"),l.createElement(\"path\"," +
                "{className:\"cls-1\",d:\"M28.66 65.5V104s0 14.5 13 14.5h94.5s12.5-.5 12.5-13.5V65.5\"}),l" +
                ".createElement(\"path\",{className:\"cls-1\",d:\"M90.11 89.76v-75m-23 50.5l22 24.5 24-24\"}))}," +
                "s=function(e){var t=e.rootClass,a=e.dotClass;return l.createElement(\"svg\",{className:t,viewBox:\"0" +
                " 0 28 10.89\",\"aria-label\":\"wix\"},l.createElement(\"path\",{d:\"M16.02.2c-.55.3-.76.78-.76 2" +
                ".14a2.17 2.17 0 0 1 .7-.42 3 3 0 0 0 .7-.4A1.62 1.62 0 0 0 17.22 0a3 3 0 0 0-1.18.2z\",className:a})" +
                ",l.createElement(\"path\",{d:\"M12.77.52a2.12 2.12 0 0 0-.58 1l-1.5 5.8-1.3-4.75a4.06 4.06 0 0 0-" +
                ".7-1.55 2.08 2.08 0 0 0-2.9 0 4.06 4.06 0 0 0-.7 1.55L3.9 7.32l-1.5-5.8a2.12 2.12 0 0 0-.6-1A2.6 2.6" +
                " 0 0 0 0 .02l2.9 10.83a3.53 3.53 0 0 0 1.42-.17c.62-.33.92-.57 1.3-2 .33-1.33 1.26-5.2 1.35-5.47a.5" +
                ".5 0 0 1 .34-.4.5.5 0 0 1 .4.5c.1.3 1 4.2 1.4 5.5.4 1.5.7 1.7 1.3 2a3.53 3.53 0 0 0 1.4.2l2.8-11a2.6" +
                " 2.6 0 0 0-1.82.53zm4.43 1.26a1.76 1.76 0 0 1-.58.5c-.26.16-.52.26-.8.4a.82.82 0 0 0-.57.82v7.36a2" +
                ".47 2.47 0 0 0 1.2-.15c.6-.3.75-.6.75-2V1.8zm7.16 3.68L28 .06a3.22 3.22 0 0 0-2.3.42 8.67 8.67 0 0 " +
                "0-1 1.24l-1.34 1.93a.3.3 0 0 1-.57 0l-1.4-1.93a8.67 8.67 0 0 0-1-1.24 3.22 3.22 0 0 0-2.3-.43l3.6 5" +
                ".4-3.7 5.4a3.54 3.54 0 0 0 2.32-.48 7.22 7.22 0 0 0 1-1.16l1.33-1.9a.3.3 0 0 1 .57 0l1.37 2a8.2 8.2 " +
                "0 0 0 1 1.2 3.47 3.47 0 0 0 2.33.5z\"}))}}}]);\n";
    }

    @GetMapping("/Home_WritingCat_files/bootstrap-components-responsive.3a450ac6.chunk.min.js")
    public String resource3() {
        return "((\"undefined\" != typeof self ? self : this).webpackJsonp_thunderbolt_elements = (\"undefined\" != " +
                "typeof self ? self : this).webpackJsonp_thunderbolt_elements || []).push([[2], {\n" +
                "    1118: function (e, t, n) {\n" +
                "        e.exports = {\n" +
                "            root: \"_2Kt7m\",\n" +
                "            TextOnlyMenuButtonNSkin: \"_2TFvc\",\n" +
                "            textOnlyMenuButtonNSkin: \"_2TFvc\",\n" +
                "            linkElement: \"_25Cim\",\n" +
                "            wrapper: \"_3zfdd\",\n" +
                "            label: \"_3YCIf\"\n" +
                "        }\n" +
                "    }, 1119: function (e, t, n) {\n" +
                "        e.exports = {\n" +
                "            wrapper: \"_2cbNh\",\n" +
                "            navContainer: \"zmzdJ\",\n" +
                "            itemsContainerWrapper: \"_1lx0g\",\n" +
                "            itemsContainer: \"_3ryjj\",\n" +
                "            menuItem: \"_3vxeZ\",\n" +
                "            dropdownButton: \"_1Xzw5\",\n" +
                "            dropWrapper: \"GQcif\",\n" +
                "            moreContainer: \"_3u_t0\",\n" +
                "            showMore: \"_322RQ\",\n" +
                "            moreButton: \"_2LjR0\",\n" +
                "            utility: \"_1QReQ\",\n" +
                "            TextOnlyMenuButtonSkin: \"_13c26\",\n" +
                "            textOnlyMenuButtonSkin: \"_13c26\"\n" +
                "        }\n" +
                "    }, 1511: function (e, t, n) {\n" +
                "        e.exports = {link: \"_1QJUd\", root: \"_1sXY0\", label: \"FZdzR\"}\n" +
                "    }, 178: function (e, t, n) {\n" +
                "        \"use strict\";\n" +
                "        n.r(t);\n" +
                "        var r = n(3), a = n(177), o = n.n(a), i = n(643), s = n.n(i), l = " +
                "\"responsive-container-overflow\",\n" +
                "            u = \"responsive-container-content\", c = function (e) {\n" +
                "                var t = e.children, n = e.className;\n" +
                "                return o.a.createElement(\"div\", {className: n, \"data-testid\": l}, t)\n" +
                "            };\n" +
                "        t.default = function (e) {\n" +
                "            var t = e.containerLayoutClassName, n = e.overlowWrapperClassName, i = e.hasOverflow,\n" +
                "                l = e.shouldOmitWrapperLayers, d = e.children, m = e.role, p = e.extraRootClass,\n" +
                "                v = void 0 === p ? \"\" : p;\n" +
                "            return Object(a.useCallback)((function (e) {\n" +
                "                return !l && i ? o.a.createElement(c, {className: s()(n, v)}, e) : e\n" +
                "            }), [v, i, n, l])(l ? o.a.createElement(o.a.Fragment, null, d()) : o.a.createElement" +
                "(\"div\", Object(r.a)({\n" +
                "                className: i ? t : s()(t, v),\n" +
                "                \"data-testid\": u\n" +
                "            }, m ? {role: m} : {}), d()))\n" +
                "        }\n" +
                "    }, 1808: function (e, t, n) {\n" +
                "        e.exports = {root: \"zqO8Q\", bg: \"_1eDCt\"}\n" +
                "    }, 1811: function (e, t, n) {\n" +
                "        e.exports = {root: \"_1w0tU\", \"responsive-root\": \"_2IqWW\", responsiveRoot: " +
                "\"_2IqWW\"}\n" +
                "    }, 183: function (e, t, n) {\n" +
                "        \"use strict\";\n" +
                "        n.r(t);\n" +
                "        var r = n(3), a = n(177), o = n(643), i = n.n(o), s = n(178), l = \"section-container\", u =" +
                " n(713),\n" +
                "            c = function (e) {\n" +
                "                return a.createElement(u.a, Object(r.a)({}, e))\n" +
                "            }, d = n(972), m = n.n(d);\n" +
                "        t.default = function (e) {\n" +
                "            var t, n = e.id, o = e.skin, u = void 0 === o ? \"RectangleArea\" : o, d = e.className," +
                "\n" +
                "                p = void 0 === d ? m.a[u] : d, v = e.containerRootClassName, f = void 0 === v ? \"\"" +
                " : v,\n" +
                "                h = e.containerProps, b = e.children, g = e.tagName, k = e.background, _ = e" +
                ".getPlaceholder,\n" +
                "                y = g || \"section\", w = h.shouldOmitWrapperLayers,\n" +
                "                N = i()(p, f, ((t = {})[m.a.shouldOmitWrapperLayers] = w, t));\n" +
                "            return a.createElement(y, {\n" +
                "                id: n,\n" +
                "                className: N,\n" +
                "                \"data-testid\": l\n" +
                "            }, k && a.createElement(c, Object(r.a)({}, k, {getPlaceholder: _})), a.createElement(s" +
                ".default, Object(r.a)({}, h), b))\n" +
                "        }\n" +
                "    }, 268: function (e, t, n) {\n" +
                "        \"use strict\";\n" +
                "        n.r(t);\n" +
                "        var r = n(3), a = n(177), o = n(663), i = n(918), s = n(1119), l = n.n(s);\n" +
                "        t.default = function (e) {\n" +
                "            return a.createElement(o.a, Object(r.a)({}, e, {styles: l.a, Button: i.a}))\n" +
                "        }\n" +
                "    }, 396: function (e, t, n) {\n" +
                "        \"use strict\";\n" +
                "        n.r(t);\n" +
                "        var r = n(3), a = n(177), o = n(183);\n" +
                "        t.default = function (e) {\n" +
                "            return a.createElement(o.default, Object(r.a)({}, e))\n" +
                "        }\n" +
                "    }, 397: function (e, t, n) {\n" +
                "        \"use strict\";\n" +
                "        n.r(t);\n" +
                "        var r = n(3), a = n(177), o = n(643), i = n.n(o), s = n(183), l = n(715), u = n(972), c = n" +
                ".n(u);\n" +
                "        t.default = function (e) {\n" +
                "            var t, n = a.useState(!1), o = n[0], u = n[1];\n" +
                "            Object(l.a)((function (e) {\n" +
                "                -1 * e.currPos.y >= 2 ? o || u(!0) : o && u(!1)\n" +
                "            }), [o], {disabled: \"RectangleAreaAfterScroll\" !== e.skin});\n" +
                "            var d = a.useState(\"\"), m = d[0], p = d[1];\n" +
                "            return Object(l.a)(function (e, t) {\n" +
                "                var n = 0, r = \"DOWN\";\n" +
                "                return function (a) {\n" +
                "                    var o = a.prevPos, i = -1 * a.currPos.y, s = -1 * o.y;\n" +
                "                    i >= s ? (\"UP\" === r && (n = s, r = \"DOWN\"), i - n > function (e) {\n" +
                "                        switch (e) {\n" +
                "                            case\"move\":\n" +
                "                                return 400;\n" +
                "                            case\"fade\":\n" +
                "                            default:\n" +
                "                                return 200\n" +
                "                        }\n" +
                "                    }(e) && t(\"scrolled-down\")) : (\"DOWN\" === r && (n = s, r = \"UP\"), (n - i >" +
                " 100 || i <= 10) && t(\"scrolled-up\"))\n" +
                "                }\n" +
                "            }(e.animate, p), [], {\n" +
                "                waitFor: 45,\n" +
                "                disabled: \"none\" === e.animate\n" +
                "            }), a.createElement(s.default, Object(r.a)({}, e, {className: i()((t = {}, t[c.a[e" +
                ".skin]] = !0, t[c.a.scrolled] = o, t[c.a.animate] = \"none\" !== e.animate, t[c.a.move] = " +
                "\"scrolled-down\" === m && \"move\" === e.animate, t[c.a.fade] = \"scrolled-down\" === m && \"fade\"" +
                " === e.animate, t[c.a.scrollUp] = \"scrolled-up\" === m, t))}))\n" +
                "        }\n" +
                "    }, 399: function (e, t, n) {\n" +
                "        \"use strict\";\n" +
                "        n.r(t);\n" +
                "        var r = n(3), a = n(177), o = n(183);\n" +
                "        t.default = function (e) {\n" +
                "            var t = e.tagName || \"div\";\n" +
                "            return a.createElement(o.default, Object(r.a)({}, e, {tagName: t}))\n" +
                "        }\n" +
                "    }, 430: function (e, t, n) {\n" +
                "        \"use strict\";\n" +
                "        n.r(t);\n" +
                "        var r = n(3), a = n(177), o = n(652), i = n(669), s = n(1511), l = n.n(s), u = a.forwardRef(" +
                "(function (e, t) {\n" +
                "            return a.createElement(i.a, Object(r.a)({}, e, {skinsStyle: l.a, ref: t}))\n" +
                "        }));\n" +
                "        t.default = a.forwardRef((function (e, t) {\n" +
                "            return a.createElement(o.a, Object(r.a)({}, e, {skin: u, ref: t}))\n" +
                "        }))\n" +
                "    }, 541: function (e, t, n) {\n" +
                "        \"use strict\";\n" +
                "        n.r(t);\n" +
                "        var r = n(177), a = n.n(r), o = n(1808), i = n.n(o);\n" +
                "        t.default = function (e) {\n" +
                "            var t = e.id, n = e.pageDidMount, r = e.onClick, o = e.onDblClick, s = e.children, l = e" +
                ".onMouseEnter,\n" +
                "                u = e.onMouseLeave;\n" +
                "            return a.a.createElement(\"div\", {\n" +
                "                id: t,\n" +
                "                className: i.a.root,\n" +
                "                ref: n,\n" +
                "                onClick: r,\n" +
                "                onDoubleClick: o,\n" +
                "                onMouseEnter: l,\n" +
                "                onMouseLeave: u\n" +
                "            }, a.a.createElement(\"div\", {className: i.a.bg}), a.a.createElement(\"div\", null, s()" +
                "))\n" +
                "        }\n" +
                "    }, 544: function (e, t, n) {\n" +
                "        \"use strict\";\n" +
                "        n.r(t);\n" +
                "        var r = n(177), a = n(1811), o = n.n(a);\n" +
                "        t.default = function (e) {\n" +
                "            var t = e.id, n = e.rootClassName, a = void 0 === n ? \"root\" : n, i = e.children;\n" +
                "            return r.createElement(\"div\", {id: t, className: o.a[a]}, i())\n" +
                "        }\n" +
                "    }, 663: function (e, t, n) {\n" +
                "        \"use strict\";\n" +
                "        var r = n(3), a = n(177), o = n(643), i = n.n(o),\n" +
                "            s = new Set([\"PointerMenuButtonHorizontalMenuAdaptationSkin\", " +
                "\"PointerMenuButtonSkin\", \"VerticalRibbonsMenuButtonSkin\", \"RibbonsMenuButtonSkin\"]),\n" +
                "            l = \"data-dropdown-shown\", u = function (e, t, n, a) {\n" +
                "                void 0 === e && (e = []), void 0 === t && (t = \"\"), void 0 === n && (n = {}), void" +
                " 0 === a && (a = \"\");\n" +
                "                var o = function (e, t) {\n" +
                "                    var n = t.compId || t.dataId, r = new Set;\n" +
                "                    return n && (r = new Set(e.filter((function (e) {\n" +
                "                        return function (e, t) {\n" +
                "                            return e.link && (e.link.anchorCompId && e.link.anchorCompId === t" +
                ".compId || e.link.anchorDataId && e.link.anchorDataId === t.dataId)\n" +
                "                        }(e, t)\n" +
                "                    })))), r\n" +
                "                }(e, n), i = function (e, t) {\n" +
                "                    return e.filter((function (e) {\n" +
                "                        return e.link && e.link.linkPopupId && e.link.linkPopupId === t\n" +
                "                    }))\n" +
                "                }(e, a), s = new Set(Object(r.f)(Array.from(o), Array.from(i))), l = s.size > 0;\n" +
                "                return e.forEach((function (e) {\n" +
                "                    var r = e.items && e.items.length ? u(e.items, t, n) : new Set;\n" +
                "                    (function (e, t, n) {\n" +
                "                        return !n && !function (e) {\n" +
                "                            return e.link && (e.link.anchorDataId || e.link.anchorCompId)\n" +
                "                        }(e) && e.link && e.link.href === t\n" +
                "                    }(e, t, l) || e.link && Object.keys(e.link).length > 0 && r.size > 0) && s.add" +
                "(e), r.forEach((function (e) {\n" +
                "                        return s.add(e)\n" +
                "                    }))\n" +
                "                })), s\n" +
                "            };\n" +
                "        var c = function (e) {\n" +
                "            var t = a.useMemo((function () {\n" +
                "                return u(e.items, e.currentPrimaryPageHref, e.activeAnchor, e.currentPopupId)\n" +
                "            }), [e.items, e.currentPrimaryPageHref, e.activeAnchor, e.currentPopupId]), n = function" +
                " (e, t) {\n" +
                "                var n = e.Button, o = {\n" +
                "                    onMouseEnter: e.onItemMouseEnter,\n" +
                "                    onMouseLeave: e.onItemMouseLeave,\n" +
                "                    onClick: e.onItemClick,\n" +
                "                    textAlign: e.alignText,\n" +
                "                    isTouchDevice: e.isTouchDevice\n" +
                "                }, i = Object(r.a)(Object(r.a)({}, o), t);\n" +
                "                return a.createElement(n, Object(r.a)({}, i))\n" +
                "            };\n" +
                "\n" +
                "            function o(e, t, n, r, a, o) {\n" +
                "                return e === t - 1 ? 1 === t ? \"dropLonely\" : n ? \"bottom\" : o || \"right\" === " +
                "a ? r ? \"left\" : \"right\" : \"center\" : 0 === e ? n ? \"top\" : o || \"left\" === a ? r ? " +
                "\"right\" : \"left\" : \"center\" : n ? \"dropCenter\" : \"center\"\n" +
                "            }\n" +
                "\n" +
                "            var c = function (e, t) {\n" +
                "                for (var n = e, r = 0; t[n] && r < 100;) n += t[n]++, r++;\n" +
                "                return t[n] = (t[n] || 0) + 1, n\n" +
                "            }, d = function (e, r) {\n" +
                "                var a = r.items, i = void 0 === a ? [] : a, s = r.className, l = r.dropdown, u = r" +
                ".rtl,\n" +
                "                    d = r.buttonAlign, m = r.stretch, p = r.renderSEOSubItems, v = {};\n" +
                "                return i.map((function (r, a) {\n" +
                "                    var f, h, b = (l ? \"moreContainer\" : \"\") + a, g = {\n" +
                "                        isContainer: l,\n" +
                "                        isSelected: t.has(r),\n" +
                "                        positionInList: r.positionInList || o(a, i.length, l, u, d, m),\n" +
                "                        id: w(b),\n" +
                "                        index: a,\n" +
                "                        refInParent: b,\n" +
                "                        isDropDownButton: l,\n" +
                "                        \"aria-haspopup\": r.hasPopup || (null !== (h = null === (f = null == r ? " +
                "void 0 : r.items) || void 0 === f ? void 0 : f.length) && void 0 !== h ? h : 0) > 0,\n" +
                "                        tagName: \"li\",\n" +
                "                        direction: u ? \"rtl\" : \"ltr\",\n" +
                "                        parentId: r.parent,\n" +
                "                        dataId: r.id,\n" +
                "                        label: r.label,\n" +
                "                        link: r.link,\n" +
                "                        className: s,\n" +
                "                        key: c(r.label, v),\n" +
                "                        subItems: p ? r.items : void 0\n" +
                "                    };\n" +
                "                    return n(e, g)\n" +
                "                }))\n" +
                "            };\n" +
                "\n" +
                "            function m(e) {\n" +
                "                var t = e.styles, r = e.items, a = e.rtl, o = e.stretchButtonsToMenuWidth, i = e" +
                ".alignButtons,\n" +
                "                    s = e.renderSEOSubItems, l = d(e, {\n" +
                "                        items: r,\n" +
                "                        className: t.menuItem,\n" +
                "                        rtl: a,\n" +
                "                        buttonAlign: i,\n" +
                "                        stretch: o,\n" +
                "                        renderSEOSubItems: s\n" +
                "                    }), u = function (e) {\n" +
                "                        var t = e.rtl, r = e.styles, a = e.stretchButtonsToMenuWidth, o = e" +
                ".alignButtons,\n" +
                "                            i = e.moreButtonLabel, s = e.onItemMouseEnter, l = e.onItemMouseLeave, u" +
                " = e.onSubMenuKeyDown,\n" +
                "                            c = t ? \"left\" : \"right\";\n" +
                "                        a || \"right\" === o || (c = \"center\");\n" +
                "                        var d = {\n" +
                "                            label: i || \"\",\n" +
                "                            isSelected: !1,\n" +
                "                            positionInList: c,\n" +
                "                            id: w(\"__more__\"),\n" +
                "                            index: \"__more__\",\n" +
                "                            refInParent: \"__more__\",\n" +
                "                            key: \"__more__\",\n" +
                "                            onFocus: s,\n" +
                "                            onBlur: l,\n" +
                "                            \"aria-haspopup\": !0,\n" +
                "                            tagName: \"li\",\n" +
                "                            onKeyDown: u,\n" +
                "                            isDropDownButton: !1,\n" +
                "                            className: r.moreButton,\n" +
                "                            isMoreButton: !0\n" +
                "                        };\n" +
                "                        return n(e, d)\n" +
                "                    }(e);\n" +
                "                return u && l.push(u), l\n" +
                "            }\n" +
                "\n" +
                "            function p(e) {\n" +
                "                var t = e.items, n = e.rtl, a = e.alignButtons, o = e.stretchButtonsToMenuWidth, i =" +
                " e.hover,\n" +
                "                    s = e.styles, l = null, u = [];\n" +
                "                if (t && i) {\n" +
                "                    var c = parseInt(i, 10);\n" +
                "                    Number.isInteger(c) && t[c] ? l = t[c].items : \"__more__\" === i && (l = " +
                "function (e) {\n" +
                "                        return e.reduce((function (e, t) {\n" +
                "                            var n = [];\n" +
                "                            return t.items && (n = t.items.map((function (e) {\n" +
                "                                return Object(r.a)(Object(r.a)({}, e), {parent: t.id})\n" +
                "                            }))), Object(r.f)(e, [t], n)\n" +
                "                        }), [])\n" +
                "                    }(t))\n" +
                "                }\n" +
                "                return l && (u = d(e, {\n" +
                "                    items: l,\n" +
                "                    className: s.dropdownButton,\n" +
                "                    dropdown: !0,\n" +
                "                    rtl: n,\n" +
                "                    buttonAlign: a,\n" +
                "                    stretch: o\n" +
                "                })), u\n" +
                "            }\n" +
                "\n" +
                "            var v, f, h, b, g, k, _, y, w = function (t) {\n" +
                "                return \"\" + e.id + t\n" +
                "            };\n" +
                "            return f = (v = e).translate, h = v.styles, b = function (e) {\n" +
                "                var t = e.styles, n = e.skin, r = e.alignButtons, o = e.marginAllChildren, s = e" +
                ".onMenuKeyDown,\n" +
                "                    l = m(e), u = w(\"itemsContainer\"), c = a.createElement(\"ul\", {\n" +
                "                        className: i()(t.itemsContainer, t[\"\" + r]),\n" +
                "                        id: u,\n" +
                "                        style: {textAlign: r},\n" +
                "                        \"data-marginallchildren\": o,\n" +
                "                        onKeyDown: s\n" +
                "                    }, l);\n" +
                "                if (function () {\n" +
                "                    switch (n) {\n" +
                "                        case\"IndentedMenuButtonSkin\":\n" +
                "                        case\"ShinyMenuIIButtonSkin\":\n" +
                "                        case\"SloppyBorderMenuButtonSkin\":\n" +
                "                            return !0;\n" +
                "                        default:\n" +
                "                            return !1\n" +
                "                    }\n" +
                "                }()) {\n" +
                "                    var d = w(\"wrapper\");\n" +
                "                    c = a.createElement(\"div\", {className: i()(t.itemsContainerWrapper), id: d}, " +
                "c)\n" +
                "                }\n" +
                "                return c\n" +
                "            }(v), g = function (e) {\n" +
                "                var t = e.skin, n = e.styles, r = null;\n" +
                "                return s.has(t) && (r = a.createElement(\"div\", {className: n.utility})), r\n" +
                "            }(v), k = function (e) {\n" +
                "                var t, n, o, s = e.alignButtons, u = e.onSubMenuKeyDown, c = e.hover, d = e.styles, " +
                "m = p(e),\n" +
                "                    v = w(\"moreContainer\"), f = w(\"dropWrapper\"),\n" +
                "                    h = (null !== (o = null == m ? void 0 : m.length) && void 0 !== o ? o : 0) > 0," +
                "\n" +
                "                    b = i()(d.dropWrapper, ((t = {})[d.showMore] = h, t)), g = h, k = function (e) " +
                "{\n" +
                "                        var t = e.hover, n = e.hoverListPosition;\n" +
                "                        return t ? n : null\n" +
                "                    }(e);\n" +
                "                return a.createElement(\"div\", Object(r.a)({\n" +
                "                    className: b,\n" +
                "                    id: f,\n" +
                "                    \"data-drophposition\": k,\n" +
                "                    \"data-dropalign\": s\n" +
                "                }, ((n = {})[l] = g, n)), a.createElement(\"ul\", {\n" +
                "                    className: d.moreContainer,\n" +
                "                    \"data-hover\": c,\n" +
                "                    id: v,\n" +
                "                    onKeyDown: u\n" +
                "                }, m))\n" +
                "            }(v), _ = f(\"ariaLabels\", \"dropDownMenu_AriaLabel_TopLevel_SiteNavigation\", " +
                "\"Site\"), y = w(\"navContainer\"), a.createElement(\"nav\", {\n" +
                "                className: i()(h.navContainer),\n" +
                "                id: y,\n" +
                "                \"aria-label\": _,\n" +
                "                onMouseEnter: v.onMouseEnter,\n" +
                "                onMouseLeave: v.onMouseLeave\n" +
                "            }, g, b, k)\n" +
                "        }, d = {hover: null, hoverListPosition: null}, m = function (e) {\n" +
                "            var t, n, o, s, l, u, m, p, v = a.useState(d), f = v[0], h = v[1], b = a.useRef(), g = " +
                "function (n) {\n" +
                "                var r, a = f.hover, o = e.id, i = n.currentTarget, s = i.getAttribute" +
                "(\"data-listposition\"),\n" +
                "                    l = i.getAttribute(\"data-index\") || \"-1\", u = parseInt(l, 10);\n" +
                "                clearTimeout(t), (null === (r = null == i ? void 0 : i.parentNode) || void 0 === r ?" +
                " void 0 : r.id) !== o + \"moreContainer\" && (Number.isInteger(u) && -1 !== u || l.startsWith" +
                "(\"__\")) && l !== a && h({\n" +
                "                    hover: l,\n" +
                "                    hoverListPosition: s\n" +
                "                })\n" +
                "            }, k = function () {\n" +
                "                t = setTimeout((function () {\n" +
                "                    h({hover: null, hoverListPosition: null})\n" +
                "                }), 1e3)\n" +
                "            }, _ = function (t) {\n" +
                "                var n = f.hover, r = e.items, a = t.currentTarget, o = a.getAttribute" +
                "(\"data-index\") || \"-1\",\n" +
                "                    i = \"true\" === a.getAttribute(\"data-dropdown\"), s = parseInt(o, 10), l = r ?" +
                " r[s] : null,\n" +
                "                    u = \"__more__\" === o || l && l.items;\n" +
                "                i ? k() : n ? (k(), u && n !== o && (t.preventDefault(), t.stopPropagation(), g(t)))" +
                " : u && (g(t), t.preventDefault(), t.stopPropagation())\n" +
                "            }, y = function (t, n) {\n" +
                "                var r;\n" +
                "                if (void 0 === n && (n = !1), b.current) {\n" +
                "                    for (var a = e.id, o = b.current.querySelector(\"#\" + a + \"itemsContainer > " +
                "li:nth-child(\" + (t + 1) + \")\"); o && \"true\" === o.getAttribute(\"aria-hidden\");) o = n ? o" +
                ".previousSibling : o.nextSibling;\n" +
                "                    if (o) {\n" +
                "                        var i = null === (r = o.childNodes) || void 0 === r ? void 0 : r[0];\n" +
                "                        if (i) return i.focus(), !0\n" +
                "                    }\n" +
                "                }\n" +
                "                return !1\n" +
                "            }, w = function (t) {\n" +
                "                var n = f.hover, r = e.items, a = t.key, o = t.shiftKey;\n" +
                "                if (\"Tab\" === a && null !== n) {\n" +
                "                    var i = n ? parseInt(n, 10) : -1, s = !1;\n" +
                "                    if (!o && r) {\n" +
                "                        var l = r[i];\n" +
                "                        l && l.items && (s = !0, function (t) {\n" +
                "                            var n = e.id;\n" +
                "                            if (b.current) {\n" +
                "                                var r = b.current.querySelector(\"#\" + n + \"moreContainer " +
                "li:nth-child(\" + (t + 1) + \") a\");\n" +
                "                                r && r.focus()\n" +
                "                            }\n" +
                "                        }(0))\n" +
                "                    }\n" +
                "                    s && (t.stopPropagation(), t.preventDefault())\n" +
                "                }\n" +
                "            }, N = function (t) {\n" +
                "                var n, r, a = f.hover, o = e.items, i = t.shiftKey, s = t.key, l = t.target, u = l;" +
                "\n" +
                "                if (l !== t.currentTarget && \"li\" !== l.tagName.toLowerCase() && (u = l.closest" +
                "(\"li\")), u) {\n" +
                "                    var c = u.getAttribute(\"data-index\") || \"\", d = !1;\n" +
                "                    if (a && \"Tab\" === s) {\n" +
                "                        var m = (n = -1, r = parseInt(a, 10), Number.isNaN(r) ? n : r), p = parseInt" +
                "(c, 10);\n" +
                "                        if (m >= 0) if (i) 0 === p && (d = y(m, i)); else if (o && o[m]) {\n" +
                "                            var v = o[m];\n" +
                "                            v && v.items && v.items.length === p + 1 && (d = y(m + 1))\n" +
                "                        }\n" +
                "                    }\n" +
                "                    d && (t.stopPropagation(), t.preventDefault())\n" +
                "                }\n" +
                "            };\n" +
                "            return o = f, s = (n = e).id, l = n.skin, u = n.rtl, m = n.styles, p = Object(r.a)({\n" +
                "                id: s,\n" +
                "                class: i()(m[l], m.wrapper, \"hidden-during-prewarmup\"),\n" +
                "                ref: b,\n" +
                "                dir: u ? \"rtl\" : \"ltr\"\n" +
                "            }, function (e, t) {\n" +
                "                var n = t.hover, r = t.hoverListPosition, a = e.stretchButtonsToMenuWidth, o = e" +
                ".sameWidthButtons,\n" +
                "                    i = e.skinExports, s = e.alignButtons, l = e.items;\n" +
                "                return {\n" +
                "                    \"data-stretch-buttons-to-menu-width\": a,\n" +
                "                    \"data-same-width-buttons\": o,\n" +
                "                    \"data-num-items\": null == l ? void 0 : l.length,\n" +
                "                    \"data-menuborder-y\": i.menuBorderY,\n" +
                "                    \"data-menubtn-border\": i.menuBtnBorder,\n" +
                "                    \"data-ribbon-els\": i.ribbonEls,\n" +
                "                    \"data-label-pad\": i.labelPad,\n" +
                "                    \"data-ribbon-extra\": i.ribbonExtra,\n" +
                "                    \"data-drophposition\": r,\n" +
                "                    \"data-dropalign\": s,\n" +
                "                    \"data-hovered-item\": n\n" +
                "                }\n" +
                "            }(n, o)), a.createElement(\"wix-dropdown-menu\", Object(r.a)({}, p), a.createElement(c, " +
                "Object(r.a)({}, n, o, {\n" +
                "                onItemMouseEnter: g,\n" +
                "                onItemMouseLeave: k,\n" +
                "                onItemClick: _,\n" +
                "                onMenuKeyDown: w,\n" +
                "                onSubMenuKeyDown: N\n" +
                "            })))\n" +
                "        };\n" +
                "        m.defaultProps = {alignButtons: \"center\"};\n" +
                "        t.a = m\n" +
                "    }, 670: function (e, t, n) {\n" +
                "        \"use strict\";\n" +
                "        var r = n(3), a = n(177), o = n(678);\n" +
                "        t.a = function (e) {\n" +
                "            var t = e.label, n = e.direction, i = void 0 === n ? \"ltr\" : n, s = e.positionInList, " +
                "l = e.parentId,\n" +
                "                u = e.dataId, c = e.isContainer, d = e.isSelected, m = e.isHovered, p = e.link, v = " +
                "e.tagName,\n" +
                "                f = void 0 === v ? \"div\" : v, h = e.id, b = e.className, g = e.onClick, k = e" +
                ".onMouseEnter,\n" +
                "                _ = e.onMouseLeave, y = e.index, w = e.children, N = e.isDropDownButton, E = e" +
                ".isTouchDevice,\n" +
                "                I = e.subItems, M = {\n" +
                "                    \"data-direction\": i,\n" +
                "                    \"data-listposition\": s,\n" +
                "                    \"data-parent-id\": l,\n" +
                "                    \"data-data-id\": u,\n" +
                "                    \"data-state\": [c ? \"drop\" : \"menu\", d && \"selected\", m && \"over\", p &&" +
                " (p.hasOwnProperty(\"href\") || p.hasOwnProperty(\"target\") || p.hasOwnProperty(\"rel\") || p" +
                ".hasOwnProperty(\"linkPopupId\")) ? \"link\" : \"header\"].join(\" \"),\n" +
                "                    \"data-index\": y,\n" +
                "                    \"data-dropdown\": N\n" +
                "                }, O = function (e) {\n" +
                "                    return e ? e.trim() : \"\\xa0\"\n" +
                "                }, S = I && I.length ? a.createElement(\"ul\", {\n" +
                "                    \"aria-hidden\": !0,\n" +
                "                    style: {display: \"none\"}\n" +
                "                }, I.map((function (e, t) {\n" +
                "                    return a.createElement(\"li\", {key: e.id || t}, a.createElement(o.a, {\n" +
                "                        wrapperProps: {ariaHasPopup: e.hasPopup},\n" +
                "                        link: e.link,\n" +
                "                        tabIndex: -1\n" +
                "                    }, O(e.label)))\n" +
                "                }))) : null;\n" +
                "            return a.createElement(f, Object(r.a)({id: h}, M, {\n" +
                "                className: b,\n" +
                "                onClick: E ? g : void 0,\n" +
                "                onMouseEnter: E ? void 0 : k,\n" +
                "                onMouseLeave: E ? void 0 : _,\n" +
                "                onFocus: E ? void 0 : k,\n" +
                "                onBlur: E ? void 0 : _\n" +
                "            }), w(O(t)), S)\n" +
                "        }\n" +
                "    }, 671: function (e, t, n) {\n" +
                "        \"use strict\";\n" +
                "        n.d(t, \"a\", (function () {\n" +
                "            return s\n" +
                "        }));\n" +
                "        var r = n(177), a = n.n(r), o = n(643), i = n.n(o), s = function (e) {\n" +
                "            var t = e.dir, n = e.textAlign, r = e.className, o = e.children, i = e.tagName, s = void" +
                " 0 === i ? \"p\" : i,\n" +
                "                l = e.id;\n" +
                "            return a.a.createElement(s, {className: r, style: {textAlign: n}, dir: t, id: l + " +
                "\"label\"}, o)\n" +
                "        };\n" +
                "        t.b = function (e) {\n" +
                "            var t = e.wrapperProps, n = t.dir, r = t.textAlign, o = t.id, l = e.classNames, u = e" +
                ".children;\n" +
                "            return a.a.createElement(\"div\", {className: i()(l.bg), style: {textAlign: r}}, a.a" +
                ".createElement(s, {\n" +
                "                dir: n,\n" +
                "                textAlign: r,\n" +
                "                className: l.label,\n" +
                "                id: o\n" +
                "            }, u))\n" +
                "        }\n" +
                "    }, 678: function (e, t, n) {\n" +
                "        \"use strict\";\n" +
                "        var r = n(3), a = n(177), o = n.n(a), i = n(647);\n" +
                "        t.a = function (e) {\n" +
                "            var t = e.wrapperProps, n = t.ariaHasPopup, a = t.isMoreButton, s = e.className, l = e" +
                ".children, u = e.link,\n" +
                "                c = e.tabIndex;\n" +
                "            return o.a.createElement(i.a, Object(r.a)({}, u, {\n" +
                "                \"aria-haspopup\": !!n,\n" +
                "                tabIndex: c || (!a && u && u.href ? void 0 : 0),\n" +
                "                className: s\n" +
                "            }), l)\n" +
                "        }\n" +
                "    }, 733: function (e, t, n) {\n" +
                "        \"use strict\";\n" +
                "        var r = n(3), a = n(177), o = n(643), i = n.n(o), s = n(678), l = n(671), u = n(670);\n" +
                "        t.a = function (e) {\n" +
                "            var t = e.id, n = e.isDropDownButton, o = e[\"aria-haspopup\"], c = e.isMoreButton, d = " +
                "e.dir,\n" +
                "                m = e.textAlign, p = e.positionInList, v = e.link, f = e.skinsStyle, h = e.skin;\n" +
                "            return a.createElement(u.a, Object(r.a)({}, e, {className: i()(e.className, f[h])}), " +
                "(function (e) {\n" +
                "                return a.createElement(s.a, {\n" +
                "                    wrapperProps: {positionInList: p, ariaHasPopup: n && o, isMoreButton: c},\n" +
                "                    link: v,\n" +
                "                    className: f.linkElement\n" +
                "                }, a.createElement(\"div\", {className: f.wrapper}, a.createElement(l.b, {\n" +
                "                    wrapperProps: {\n" +
                "                        dir: d,\n" +
                "                        textAlign: m,\n" +
                "                        id: t\n" +
                "                    }, classNames: {bg: f.bg, label: f.label}\n" +
                "                }, e)))\n" +
                "            }))\n" +
                "        }\n" +
                "    }, 918: function (e, t, n) {\n" +
                "        \"use strict\";\n" +
                "        var r = n(3), a = n(177), o = n(733), i = n(1118), s = n.n(i);\n" +
                "        t.a = function (e) {\n" +
                "            return a.createElement(o.a, Object(r.a)({}, e, {skinsStyle: s.a, skin: " +
                "\"TextOnlyMenuButtonNSkin\"}))\n" +
                "        }\n" +
                "    }, 972: function (e, t, n) {\n" +
                "        e.exports = {\n" +
                "            animate: \"_1PaSB\",\n" +
                "            move: \"_2cMyi\",\n" +
                "            fade: \"_152Fn\",\n" +
                "            scrollUp: \"_36x3w\",\n" +
                "            RectangleArea: \"_1TXG4\",\n" +
                "            rectangleArea: \"_1TXG4\",\n" +
                "            RectangleAreaAfterScroll: \"_1-eZL\",\n" +
                "            rectangleAreaAfterScroll: \"_1-eZL\",\n" +
                "            scrolled: \"_2dFWB\",\n" +
                "            ResponsiveContainerRefSkin: \"_3Lt7V\",\n" +
                "            responsiveContainerRefSkin: \"_3Lt7V\",\n" +
                "            shouldOmitWrapperLayers: \"_2Hxyq\"\n" +
                "        }\n" +
                "    }\n" +
                "}]);";
    }

    @GetMapping("/Home_WritingCat_files/PopupPage.75e68f0e.chunk.min.css")
    public String resource4(){
        return "._1vtcb {\n" +
                "    min-width: var(--site-width);\n" +
                "    position: relative;\n" +
                "    pointer-events: none;\n" +
                "    min-height: 100vh;\n" +
                "    height: auto;\n" +
                "    display: grid\n" +
                "}\n" +
                "\n" +
                ".yAjQq {\n" +
                "    pointer-events: auto\n" +
                "}\n" +
                "\n" +
                ".QSByv {\n" +
                "    position: relative;\n" +
                "    width: 100%;\n" +
                "    height: auto;\n" +
                "    margin-top: 0;\n" +
                "    z-index: 50;\n" +
                "    display: grid;\n" +
                "    grid-template-columns:1fr;\n" +
                "    grid-template-rows:minmax(100vh, 1fr);\n" +
                "    pointer-events: none\n" +
                "}";
    }
}
