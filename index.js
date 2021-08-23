function addGlobalStyle(css) {
  var head, style;
  head = document.getElementsByTagName("head")[0];
  if (!head) {
    return;
  }
  style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = css;
  head.appendChild(style);
}
addGlobalStyle(`
     .Mfkwx .wUsz1 {
color: black !important;
     }
    ._7UhW9.xLCgt.MMzan.KV-D4.fDxYl {
    transition: 300ms ease-in-out;

}
body > div._1xMNo.dWSHE > div > div.uo5MA._2ciX.WNrPq > div._01UL2 > div > div > button{
text-shadow: 0 0 0 #000;
}
button.sqdOP.yWX7d.y3zKF{
background: linear-gradient(45deg, rgba(0,255,169,1) 35%, rgba(0,239,255,1) 76%);
-webkit-background-clip: text;
background-clip: text;
color: transparent !important;
text-shadow: 0 0 8px  cyan;
}
a.gmFkV:hover{
color: transparent !important;
letter-spacing: 2px;
}

a.gmFkV{
background: linear-gradient(45deg, rgba(0,255,169,1) 35%, rgba(0,239,255,1) 76%);
-webkit-background-clip: text;
background-clip: text;
color: transparent !important;
text-shadow: 0 0 5px rgba(0,239,255,1);
transition: 200ms ease-in-out;
}
svg:hover{
filter: drop-shadow(0px 0px 8px red) invert(1) !important;

}

time.HsXaJ.Nzb55{
color: turquoise !important;
text-shadow: 0 0 4px turquoise;
}
a.FPmhX.notranslate.yrJyr{
color: cyan !important;
text-shadow: 0 0 3px cyan;
}
.DPiy6.Igw0E.IwRSH.eGOV_._4EzTm:hover ._7UhW9.xLCgt.MMzan.KV-D4.fDxYl{
letter-spacing: 2px;
color: transparent !important;
text-shadow: 0 0 5px #03fcba;
background: linear-gradient(29deg, rgba(0,255,169,1) 35%, rgba(0,239,255,1) 76%);
-webkit-background-clip: text;
background-clip: text;

transform: translate(10px, -3px);
padding: 2px;
padding-right: 10px
}
    .wpHm3.Igw0E.IwRSH.eGOV_._4EzTm.O1flK.fm1AK {
    background: #242526 !important;
}
div . Mfkwx wUsz1 {
	/* Font & Text */
	font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
	font-size: 14px;
	font-style: normal;
	font-variant: normal;
	font-weight: 400;
	letter-spacing: normal;
	line-height: 18px;
	text-decoration: none solid rgb(255, 255, 255);
	text-align: start;
	text-indent: 0px;
	text-transform: none;
	vertical-align: baseline;
	white-space: normal;
	word-spacing: 0px;

	/* Color & Background */
	background-attachment: scroll;
	background-color: #242526 !important;
	background-image: none;
	/* background-position: 0% 0%; */
	background-repeat: repeat;
	color: rgb(255, 255, 255);


}
.leaflet-popup-content-wrapper, .leaflet-popup-tip{


background: #242526 !important;


}
.glyphsSpriteError__outline__24__grey_9{
    filter: invert(1);
}
    h2._7UhW9.fKFbl.yUEEX.KV-D4.fDxYl {
    background: linear-gradient(
45deg
, #00eaf5, #00ff7e);
    -webkit-background-clip: text;
    color: transparent !important;
}
    article > div > div > h2, div {
    color: #04fddb !important;
}
    span._7UhW9.xLCgt.qyrsm.KV-D4.se6yk {
    color: cyan !important;
}
    ._1iHbP{
    background: -webkit-linear-gradient(
305deg
,#00d0ff 0%,#e40031 100%);
    background-image: linear-gradient(
145deg
, rgb(0, 160, 196) 0%, rgb(0, 228, 186) 100%) !important;
    background-position-x: initial !important;
    background-position-y: initial !important;
    background-size: initial !important;
    background-repeat-x: initial !important;
    background-repeat-y: initial !important;
    background-attachment: initial !important;
    background-origin: initial !important;
    background-clip: initial !important;
    background-color: initial !important;
    background: linear-gradient(
145deg
,#00a0c4 0%,#00e4ba 100%);
    background-image: linear-gradient(
145deg
, rgb(0, 160, 196) 0%, rgb(0, 228, 186) 100%) !important;
    background-position-x: initial !important;
    background-position-y: initial !important;
    background-size: initial !important;
    background-repeat-x: initial !important;
    background-repeat-y: initial !important;
    background-attachment: initial !important;
    background-origin: initial !important;
    background-clip: initial !important;
    background-color: initial !important;
    color: #252526 !important;
    color: #252526 !important;
    font-weight: 600 !important;
    max-width: 100% !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
    white-space: nowrap !important;
    }
    .W7myM{
    background: #252526 !important;
    }
    .N9abW::-webkit-scrollbar {
    /* display: none; */    width: 4px;
    }
    .N9abW::-webkit-scrollbar-thumb {
    background: #00d9ff;    width: 2px;
    box-shadow: 9px 0 100px #00d0ff;
    border-radius: 105px;
    }
    .N9abW::-webkit-scrollbar-track {
    background: transparent;
    }
    ::-webkit-scrollbar {
    /* display: none; */
    width: 4px;
    box-shadow: 2px 0 10px #00d0ff;
    }
    ::-webkit-scrollbar-thumb {
    background: #00d9ff;
    width: 2px;

    border-radius: 105px;
    }
    ::-webkit-scrollbar-track {
    background: transparent;
    box-shadow:  0px 0 0.3px #00d0ff;
    }

    @media (min-width: 640px){
.KQA-S, ._1MzIy, ._3MPWk, ._8Rm4L, .zMhqu {
  border-radius: 3px !important;
  border: 1px solid #3f3f40 !important;
}
}

@media (min-width: 640px){
.KQA-S, ._1MzIy, ._3MPWk, ._8Rm4L, .zMhqu {
  border-radius: 3px !important;
  border: 1px solid #3f3f40 !important;
}
}

a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
  color: #e6e6e6 !important;
}
._7GirL,.BY1C7,.zTB1T{
    border: 2px solid #00d0ff !important;
box-shadow: 2px 0 10px #00d0ff;
}
._9BIwZ {
background-color: #272a2a !important;
border: 2px solid #00e8ff !important;
}
.CMoMH{
  border: 1px solid #fff!important;
box-shadow: 0 0 6px #fff
}
textarea{
color: #00d0ff!important;
}
.MMzan{
  color: #00d9ff !important;
}
.se6yk {
  color: #fff !important;
}
.PIoXz{
  color: #00f7ff !important;
}
.vy6Bb:not(.T0kll){
  color: #00b7ff !important;
  font-weight: 400 !important;
}
.T0kll{
  color: #00ff95 !important;
}
.jQgLo {
  color: #ffffff !important;
}
svg{
fill: url(#grad1);

}
.ho19H, .ho19H:active, .ho19H:focus, .ho19H:hover, .ho19H:visited {
  color: #ffffff !important;
  font-size: 12px !important;
  line-height: 14px !important;
}

.gmFkV, .gmFkV:active, .gmFkV:focus, .gmFkV:hover, .gmFkV:visited {
  color: #ffffff !important;
  font-weight: 600 !important;
}

._97aPb {
background-color: #242526 !important;

}
body {
  background-color: #171717!important;
}
._5mToa {
  border-top: 1px solid #6e8290 !important;
  height: 1px !important;
  margin: 0 0 12px !important;
  width: 100% !important;
}


.Ypffh {
  background: 0 0 !important;
  border: 0 !important;
  color: #e6e6e6 !important;
  font-size: inherit !important;
  height: 18px !important;
  max-height: 80px !important;
  outline: 0 !important;
  padding: 0 !important;
  resize: none !important;
}

.XTCLo {
  border: solid 1px #dbdbdb !important;
  border-radius: 3px !important;
  color: #ffffff !important;
  outline: 0 !important;
  padding: 3px 10px 3px 26px !important;
  z-index: 2 !important;
}

.E3X2T {
  min-height: 100% !important;
  overflow: hidden !important;
  background-color: #252d35 !important;
}

.o64aR{
background-color: #18191b
}

._lz6s{
background-color: #242526 !important;
border-bottom: 1px solid #3f3f40 !important;
}

.x3qfX
{ background-color: #242526}

.Di7vw {  background-color: #242526}




.sH9wk {
  border-top: 1px solid #3f3f40 !important;
}

.TlrDj, .TlrDj:visited {
  color: #dbdbdb !important;
}

a, a:visited {
  color: #e6e6e6 !important;
  text-decoration: none !important;
}

.zV_Nj, .zV_Nj:visited {
  font-weight: 600 !important;
  color: #e6e6e6 !important;
}

.eo2As {
  padding: 0 16px !important;
  background-color: #242526 !important;
}

.UE9AK {
  border-bottom: 1px solid #3f3f40 !important;
  background-color: #242526 !important;
}
.nJAzx, .nJAzx:visited {
  color: #e0e0e0 !important;
}
a.O4GlU, a.O4GlU:visited {
  color: #e0e0e0 !important;
}

.JLbVX {
  -webkit-box-align: center !important;
  -webkit-align-items: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
  height: 100% !important;
  padding: 0 20px !important;
  text-align: center !important;
  background-color: #242526 !important;
}
._8A5w5 {
  color: #e6e6e6 !important;
}
a.T-jvg, a.T-jvg:visited {
  color: #262626 !important;
  border-top: solid #3f3f40 0.5px !important;
}

._3Laht, .o64aR,.oYYFH {
  background-color: #18191b !important;
}

.g47SY {
  color: #e6e6e6 !important;
  font-weight: 600 !important;
}
.cqXBL, .cqXBL:visited, .y9v3U {
  color: #f1f1f1 !important;
}

._6oveC {
  -webkit-box-align: stretch !important;
  -webkit-align-items: stretch !important;
  -ms-flex-align: stretch !important;
  align-items: stretch !important;
  background-color: #242526 !important;
}
.yWX7d._8A5w5 {
  color: #fdfdfd !important;
}

.RPhNB {
  display: inline !important;
  color: #fdfdfd !important;
  margin-left: 4px !important;
  margin-right: 4px !important;
}
.gmFkV, .gmFkV:active, .gmFkV:focus, .gmFkV:hover, .gmFkV:visited {
  color: #ffffff !important;
  font-weight: 600 !important;
}

.jQgLo {
  color: #ffffff !important;
}

._3Laht, .o64aR {
  background-color: #18191b !important;
}
._6oveC {
  -webkit-box-align: stretch !important;
  -webkit-align-items: stretch !important;
  -ms-flex-align: stretch !important;
  align-items: stretch !important;
  background-color: #242526 !important;
}

.JyscU {
  width: 100% !important;
  background-color: #242526  !important;
}

.aD2cN::after {
  background-image: none !important;
  background-image: none !important;
  background-image: none !important;

}

.t0fbY {
  background: #242526 !important;
  border: solid 1px #3f3f40 !important;
}

.DXv8P, .DXv8P:visited {
  color: #ffffff !important;
}

._32eiM, ._32eiM:visited {
  color: #939999  !important;
  font-weight: 500 !important;
}

.-fzfL {
  background: 0 0 !important;
  border-color: #dbdbdb !important;
  color: #ffffff !important;

}

.Nd_Rl, .fx7hk {
  border-top: 1px solid #636364 !important;
}

a.T-jvg, a.T-jvg:visited {
  color: #262626 !important;
  border-top: solid #f1f1f1 0.5px !important;
}

.HoLwm {
  color: black !important;
}

.uL8Hv {
  display: block !important;
  color: #dfdfdf !important;
}


._7UhW9.vy6Bb.qyrsm.KV-D4.fDxYl.T0kll{
text-shadow: 0px 0px 15px #00ff95;
padding: 10px;
}
.Igw0E.IwRSH.eGOV_.ybXk5._4EzTm{
   color: #ff9900 !important;
}
time.W5HcT.Nzb55 {
    color: #fff !important;
    padding-right: 10px;
    text-shadow: -5px 0px 5px #00d9ff, 0px 0px 3px #00d9ff, 5px 0px 5px #00d9ff;
    font-style: bold;
}
._3G4x7 {
  color: #69a1e0 !important;
}

._32eiM, ._32eiM:visited {
    color: #999892 !important;
    font-weight: 500 !important;
}



.glyphsSpriteMobile_nav_type_logo,
.glyphsSpriteApp_instagram__outline__24__grey_9,
.oJZym,
.coreSpriteDesktopNavExplore,
.coreSpriteDesktopNavActivity,
.coreSpriteDesktopNavProfile,
.glyphsSpriteHeart__outline__24__grey_9,
.glyphsSpriteComment__outline__24__grey_9,
.glyphsSpriteShare__outline__24__grey_9,
.glyphsSpriteSave__outline__24__grey_9,
.glyphsSpriteMail__outline__24__grey_9,
.glyphsSpriteLink__outline__24__grey_9,
.glyphsSpriteX__outline__24__grey_9,
.felixSpriteProfileChannelNullState,
.coreSpriteTaggedNull,
.glyphsSpriteSave__filled__24__grey_9,
.coreSpriteDropdownArrowGrey9,
.glyphsSpriteMore_horizontal__outline__24__grey_9,
.glyphsSpriteSafari__outline__24__grey_9,
.glyphsSpriteUser__outline__24__grey_9,
.glyphsSpriteSettings__outline__24__grey_9,
.coreSpriteDesktopPhotoGridActive,
.Gzt1P
 {
    filter: invert(100%) hue-rotate(100deg)  !important;
}

.Igw0E.IwRSH.eGOV_._4EzTm.bkEs3.soMvl.JI_ht.DhRcB > ._7UhW9.PIoXz.MMzan._0PwGv.uL8Hv {
    color: #00ffa1 !important;
}
.Igw0E, .Xf6Yq, .eGOV_,._4EzTm > ._7UhW9.PIoXz.MMzan._0PwGv.uL8Hv:not(._5VUwz) {
 color: #cb42f5 !important;

}
._41V_T.Sapc9.Igw0E.IwRSH.eGOV_._4EzTm{
background-color: #00dff6 !important;
}
@media (min-width: 736px){
.NP414 {
  border: 1px solid #3f3f40 !important;
}
}

.NP414, .NP414::before {
  background: #18191b !important;
}

.Qj3-a, .Qj3-a:visited {
  color: #ffffff !important;
}

.YQf7h {
  -webkit-box-align: center !important;
  -webkit-align-items: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
  background: #242526 !important;
  border: 1px solid #3f3f40 !important;
  border-top-color: #3f3f40 !important;
  border-top-style: solid !important;
  border-top-width: 1px !important;
  border-right-color: #3f3f40 !important;
  border-right-style: solid !important;
  border-right-width: 1px !important;
  border-bottom-color: #3f3f40 !important;
  border-bottom-style: solid !important;
  border-bottom-width: 1px !important;
  border-left-color: #3f3f40 !important;
  border-left-style: solid !important;
  border-left-width: 1px !important;
  border-image-source: initial !important;
  border-image-slice: initial !important;
  border-image-width: initial !important;
  border-image-outset: initial !important;
  border-image-repeat: initial !important;
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-flex: 0 !important;
  -webkit-flex: 0 0 auto !important;
  -ms-flex: 0 0 auto !important;
  flex: 0 0 auto !important;
  width: 100% !important;
}

._7cyhW {
  color: #cfcfcf !important;
  text-align: center !important;
  -webkit-box-flex: 1 !important;
  -webkit-flex-grow: 1 !important;
  -ms-flex-positive: 1 !important;
  flex-grow: 1 !important;
}

.HoLwm {
  color: #dfdfdf !important;
}

.pbNvD {
  background-color: #242526 !important;
  border: 1px solid #3f3f40 !important;
  border-top-color: #3f3f40 !important;
  border-top-style: solid !important;
  border-top-width: 1px !important;
  border-right-color: #3f3f40 !important;
  border-right-style: solid !important;
  border-right-width: 1px !important;
  border-bottom-color: #3f3f40 !important;
  border-bottom-style: solid !important;
  border-bottom-width: 1px !important;
  border-left-color: #3f3f40 !important;
  border-left-style: solid !important;
  border-left-width: 1px !important;
  border-image-source: initial !important;
  border-image-slice: initial !important;
  border-image-width: initial !important;
  border-image-outset: initial !important;
  border-image-repeat: initial !important;
}

.aOOlW {
  border-top: 1px solid #3f3f40 !important;
}

.vtWDf {
  background: #242526 !important;
}


.BcJ68 {
    font-weight: 600 !important;
    color: #ffffff !important;
}

.CEGdu {
  display: block !important;
  color: #f3f3f4 !important;
}



.YFq-A {
  color: #d3d3d3 !important;
}

.yrJyr, .yrJyr:visited {
  color: #ffffff !important;
  font-weight: 600 !important;
}

.PUHRj::after {
  border-bottom: 1px solid #3f3f40 !important;
  border-bottom-width: 1px !important;
  border-bottom-style: solid !important;
  border-bottom-color: #3f3f40 !important;

}

.vtWDf {
  background: #242526 !important;
  border: solid 1px #3f3f40 !important;
  border-top-color: #3f3f40 !important;
  border-top-style: solid !important;
  border-top-width: 1px !important;
  border-right-color: #3f3f40 !important;
  border-right-style: solid !important;
  border-right-width: 1px !important;
  border-bottom-color: #3f3f40 !important;
  border-bottom-style: solid !important;
  border-bottom-width: 1px !important;
  border-left-color: #3f3f40 !important;

}

@media (min-width: 736px){
.ltEKP .QBXjJ {
  background-color: #242526 !important;
  border: 1px solid #3f3f40 !important;
  border-bottom-right-radius: 3px !important;
  border-top-right-radius: 3px !important;
}}

.JyscU .UE9AK {
  border-bottom: 1px solid #3f3f40 !important;
}

.BvMHM {
    background-color: #242526 !important;
    border: 1px solid #3f3f40 !important;
  }


  .h-aRd, .h-aRd:active, .h-aRd:hover, .h-aRd:visited {
      color: #e6e6e6 !important;
  }

  .fuQUr:hover {
  background-color: #242526 !important;
  border-left-color: #3f3f40 !important;
}
.fDdiY{
color: #ed4956 !important;
}
.wW1cu {
  border-right: 1px solid #3f3f40 !important;
}

.JLJ-B, .p7vTm {
    background: 0 0 !important;
    border: 1px solid #648298 !important;
    border-radius: 3px !important;
    -webkit-box-sizing: border-box !important;
    box-sizing: border-box !important;
    color: #e6e6e6 !important;
}

.j_2Hd {
  background: 0 0 !important;
  border: 1px solid #5b7386 !important;
  border-radius: 3px !important;
  color: #e6e4e1 !important;
}

.yVvXQ {
  color: #f3f3f3 !important;
  font-weight: 600 !important;
}

.tlZCJ:checked~.mwD2G::before {
  content: " " !important;
  border-bottom: 2px solid #ffffff !important;
  border-left: 2px solid #ffffff !important;
}

.nsKSz {
  font-size: 24px !important;
  color: #ffffff !important;
}

.zVbeI {
  border-bottom-color: #3f3f40 !important;
}

.SZRPf {
  font-size: 16px !important;
  font-weight: 600 !important;
  color: #e6e6e6 !important;
}

.JfBqt {
  border-top-color: #3f3f40 !important;
}

.ufStW, .XAiP-, .ufStW {
  color: #ffffff !important;
}

.bt7LU:not(:last-child) {
  border-bottom: 1px solid #3f3f40 !important;
}


.nsKSz {
    font-size: 24px !important;
    color: #ffffff !important;
}

.SZRPf {
    font-size: 16px !important;
    font-weight: 600 !important;
    color: #e6e6e6 !important;
}

.zVbeI, .JfBqt{
border-color: #3f3f40 !important;

}
.QNFpu {
  color: #ffffff !important;
}
.wVW5W {
  border-bottom: 1px solid #3f3f40 !important;
}

._09ncq, .uzKWK {
  background-color: #18191b !important;
}
.Ouy_P {
  color: #ffffff !important;
}

._o_yh {
  opacity: .7 !important;
}

.jBtI1 {
  color: #3ca1ff !important;
}

.O7gi1, ._0uZi4 {
  text-overflow: ellipsis !important;
  overflow: hidden !important;
  white-space: nowrap !important;
  color: #dbdbdb !important;}

  .SJ1H9 {
      background-color: #242526 !important;
  }

  .uAQYz {
  background-color: #242526 !important;
}
.t3CGe {
  color: #fcfaf9 !important;
}


/* .ltpMr, .glyphsSpriteMail__outline__24__grey_9,
.glyphsSpriteLink__outline__24__grey_9,
.glyphsSpriteX__outline__24__grey_9,
.coreSpriteDesktopNavLogoAndWordmark,
.coreSpriteGlyphBlack,
.coreSpriteTaggedNull,
.coreSpriteDesktopProfileSaveActive,
.coreSpriteDesktopProfileIGTVActive,
.coreSpriteDesktopPhotoGridActive ,
.coreSpriteDesktopProfileTaggedActive,
.glyphsSpriteSettings__outline__24__grey_9,
.coreSpriteDesktopNavExplore,
.coreSpriteDesktopNavActivity,
.coreSpriteDesktopNavProfile,
.glyphsSpriteMore_horizontal__outline__24__grey_9,
.OfoBO,
.glyphsSpriteMore_horizontal__outline__24__grey_9,
.felixSpriteProfileChannelNullState,
.felixSpriteFbSelectedItem,
.coreSpriteProfileCamera,
.coreSpriteNotificationLeftChevron,
.coreSpritePagingChevron,
.coreSpriteLoggedOutWordmark,
.glyphsSpriteCompass__outline__24__grey_9,
.glyphsSpriteHeart__outline__24__grey_9
 {
    filter: invert(1) !important;
} */


 /* .glyphsSpriteHeart__filled__24__red_5{
  filter: invert(100%) !important;
}  */

article{
  background-color: #242526 !important;

}
article > div {
  background-color: #242526  !important;
  border-color: #3f3f40  !important;
  color: #ffffff  !important;
}

article > div > div > h2, div {
  color: #ffffff  !important;
}

._3Laht, .o64aR {
  background-color: #18191b !important;
}


@media (min-width: 876px){
.bR_3v:not(.Fzijm) {
  background: #242526 !important;
  border: 1px solid #3f3f40 !important;
}}



section > main > div > ul
{
background: #242526  !important;

}

section > main > div > ul > li:first
{
background: #242526  !important;
}
.XAtZx{
background: #242526  !important;

}

.notranslate{
color: #ffffff  !important;
}
.BAJFR input{
  color: #9f9f9f  !important;
}

.BAJFR input, .BAJF
R textarea {
  color: #9f9f9f  !important;
}


._4umcQ, .ztp9m{
    filter: invert(100%) !important;
}


.-cx-PRIVATE-ErrorPage__errorContainer__ a, .-cx-PRIVATE-ErrorPage__errorContainer__ a:visited {
  color: #92c5ff !important;
}
.cgig_ {
  color: #ffffff  !important;
}
.zy6NE{
  color: #ffffff  !important;
}

@media (min-width: 736px){
.GBPOY {
  background-color: #242526 !important;
  border: 1px solid #3f3f40 !important;
}}

.YHaCL, .uKzpc {
  background: #242526 !important;
}
.JvDyy {
    background: #383838 !important;
  }
.drKGC {
  background: #242526 !important;
  border: solid 1px #3f3f40 !important;
}

.yCE8d {
  border-bottom: solid 1px #3f3f40 !important;
}
.gr27e {
  background-color: #242526 !important;
}



.DPiy6 {
    background-color: #1b2732 !important;
    border-color: #607786 !important;
}
.b2rUF {
  border: 1px solid #607786 !important;
}
._914pk {
  background: #182f3d;
  border-bottom: solid 1px #435c6c;
}
._6xe7A {
  background: #182f3d;
}
.Ba7W5 {
  background: #091017;
}
._41KYi,.LQtnO{
  background: #253748;
  border: 1px solid #607786;
}
._0T_XJ::before, ._0T_XJ::after  {
    background-image: none !important;
}
/* .IwRSH {
    background: #242526 !important;
} */
button div.IwRSH{
  background: none !important;
}

.tCibT {
    background: #314758 !important;
    border: 1px  solid #5d7b94 !important;
}

.Di7vw, .PZuss {
  background: #242526 !important;
  border: solid 1px #3f3f40 !important;
}
.glyphsSpriteComment__outline__24__grey_9,
.glyphsSpriteShare__outline__24__grey_9,
.glyphsSpriteSave__outline__24__grey_9,
.glyphsSpriteHeart__outline__24__grey_9,
.glyphsSpriteSave__filled__24__grey_9
{
  filter: sepia(1) !important;

}
.glyphsSpriteHeart__filled__24__red_5,
.glyphsSpriteFacebook__outline__24__grey_9,
.glyphsSpriteApp_messenger__outline__24__grey_9,
.glyphsSpriteApp_twitter__outline__24__grey_9
{
  filter: invert(1) !important;
}
span[aria-label="Activity Feed"]{
  filter: invert(1) !important;
}
.eiUFA{
  border-bottom: 1px solid#3f3f40 !important;
}
.XfCBB{
  filter: none !important;
}
/* .rBNOH button{
  filter: invert(1) !important;
} */
button.L3NKy{
  filter: none !important;
}

._41KYi {
  background: #233447 !important;
  border: 1px solid #4e6374 !important;
}

.zGtbP.IPQK5.VideM, ._8UZ6e,.N9abW,.S-mcP,.pV7Qt._6Rvw2,
._8Rm4L,._4TVuL.pVgp4 {
  background: #252526 !important;
  border: 1px solid #3f3f40 !important;
}

svg{
  filter :invert(1) !important;
  transition: 700ms ease-in-out !important;
  transition-property: filter !important;
}

.glyphsSpriteDirect__outline__96,.glyphsSpriteFriend_Follow,
.glyphsSpriteFacebook_circle__outline__24__grey_9,
.glyphsSpriteDirect__outline__24__grey_9{
  filter :invert(1) !important;
}
.oNO81{
  border-right: 1px solid #3f3f40 !important;
}
.-qQT3:hover {
  background-color: #252526 !important;
}
.x3qfX{
  background: #3a3a3a !important;
  border: 1px solid #666667 !important;
}

._41KYi {
  background: #252526!important;
  border: 1px solid #3f3f40!important;
}

.tHaIX.Igw0E,.oYYFH{
  background: #252526 !important;
}
.DPiy6 {
  background-color: #252526!important;
}
/* content selected */
.QOqBd,._6FEQj,._01UL2{
  background: #383838 !important;
}
.X3a-9{
  border: 1px solid #3f3f40 !important;
}
textarea{
  color: #00d0ff !important;
}
.TOh1s{
  background: linear-gradient(to bottom,transparent 0%,rgb(60, 60, 60) 100%) !important;
}
.JyscU.ePUX4 .UE9AK {
  border-left: 1px solid #3f3f40 !important;
}
.W4P49 {
  background-color: #3f3f40 !important;
}

._0T_XJ{
  background: #18191c !important;
}
.HzUuk{
  background: #333333 !important;
}
.inl0k{
  border-bottom: 1px solid #3f3f40 !important;
}
.x5TBw{
  border-top: 1px solid #3f3f40 !important;

}
._1XyCr{
  background: #181a1b!important;
}

._7UhW9.PIoXz.MMzan._0PwGv.uL8Hv{
display: block !important;
  color:#ffd400 !important;
}
.g47SY {
    color: #ff8405 !important;

}
h1.rhpdm {
   background: linear-gradient(
117deg
, #0095ff, #00ffd0);
    -webkit-background-clip: text;
    color: transparent !important;
    text-shadow: 0 0 20px cyan;
}
._7UhW9.vy6Bb.qyrsm.KV-D4.fDxYl.T0kll: hover{
letter-spacing: 3px;
}
.lf6L3:hover ._7UhW9.vy6Bb.qyrsm.KV-D4.fDxYl.T0kll {
    background: linear-gradient(
29deg
, rgba(0,255,169,1) 35%, rgba(0,239,255,1) 76%);
    color: transparent !important;
    -webkit-background-clip: text;
    box-shadow: -3px 0 5px rgb(0 255 169), 3px 0 5px rgb(0 239 255);
}
.lf6L3{transition: 700ms !important}
`);

// =================
// =    Options    =
// =================
const attachLink = true; // add link into the button elements
const postFilenameTemplate = "%id%-%datetime%-%medianame%.%ext%";
const storyFilenameTemplate = postFilenameTemplate;

// ==================

function yyyymmdd(date) {
  // ref: https://stackoverflow.com/questions/3066586/get-string-in-yyyymmdd-format-from-js-date-object?page=1&tab=votes#tab-top
  var mm = date.getMonth() + 1; // getMonth() is zero-based
  var dd = date.getDate();

  return [
    date.getFullYear(),
    (mm > 9 ? "" : "0") + mm,
    (dd > 9 ? "" : "0") + dd,
  ].join("");
}

var svgDownloadBtn = `<svg  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="24" width="24"
	 viewBox="0 0 477.867 477.867"  xml:space="preserve">
	<g>
		<path d="M443.733,307.2c-9.426,0-17.067,7.641-17.067,17.067v102.4c0,9.426-7.641,17.067-17.067,17.067H68.267
			c-9.426,0-17.067-7.641-17.067-17.067v-102.4c0-9.426-7.641-17.067-17.067-17.067s-17.067,7.641-17.067,17.067v102.4
			c0,28.277,22.923,51.2,51.2,51.2H409.6c28.277,0,51.2-22.923,51.2-51.2v-102.4C460.8,314.841,453.159,307.2,443.733,307.2z"/>
	</g>
	<g>
		<path d="M335.947,295.134c-6.614-6.387-17.099-6.387-23.712,0L256,351.334V17.067C256,7.641,248.359,0,238.933,0
			s-17.067,7.641-17.067,17.067v334.268l-56.201-56.201c-6.78-6.548-17.584-6.36-24.132,0.419c-6.388,6.614-6.388,17.099,0,23.713
			l85.333,85.333c6.657,6.673,17.463,6.687,24.136,0.031c0.01-0.01,0.02-0.02,0.031-0.031l85.333-85.333
			C342.915,312.486,342.727,301.682,335.947,295.134z"/>
	</g>
</svg>`;

var svgNewtabBtn = `<svg  id="Capa_1" viewBox="0 0 482.239 482.239" xmlns="http://www.w3.org/2000/svg" height="24" width="24">
    <path d="m465.016 0h-344.456c-9.52 0-17.223 7.703-17.223 17.223v86.114h-86.114c-9.52 0-17.223 7.703-17.223 17.223v344.456c0 9.52 7.703 17.223 17.223 17.223h344.456c9.52 0 17.223-7.703 17.223-17.223v-86.114h86.114c9.52 0 17.223-7.703 17.223-17.223v-344.456c0-9.52-7.703-17.223-17.223-17.223zm-120.56 447.793h-310.01v-310.01h310.011v310.01zm103.337-103.337h-68.891v-223.896c0-9.52-7.703-17.223-17.223-17.223h-223.896v-68.891h310.011v310.01z"/>
</svg>`;

document.addEventListener("keydown", keyDownHandler);

function keyDownHandler(event) {
  if (window.location.href === "https://www.instagram.com/") return;

  if (event.altKey && event.key === "k") {
    let buttons = document.getElementsByClassName("download-btn");
    if (buttons.length > 0) {
      let mockEvent = { currentTarget: buttons[buttons.length - 1] };
      if (attachLink) onMouseInHandler(mockEvent);
      onClickHandler(mockEvent);
    }
  }
  if (event.altKey && event.key === "i") {
    let buttons = document.getElementsByClassName("newtab-btn");
    if (buttons.length > 0) {
      let mockEvent = { currentTarget: buttons[buttons.length - 1] };
      if (attachLink) onMouseInHandler(mockEvent);
      onClickHandler(mockEvent);
    }
  }

  if (event.altKey && event.key === "l") {
    // right arrow
    let buttons = document.getElementsByClassName("coreSpriteRightChevron");
    if (buttons.length > 0) {
      buttons[0].click();
    }
  }

  if (event.altKey && event.key === "j") {
    // left arrow
    let buttons = document.getElementsByClassName("coreSpriteLeftChevron");
    if (buttons.length > 0) {
      buttons[0].click();
    }
  }
}

var checkExistTimer = setInterval(function () {
  let sharePostSelector = "article section span button";
  let menuSeletor = "header button > span";
  let storySeletor = "header button > span";
  let profileSelector = "header section svg circle";

  // check story
  if (document.getElementsByClassName("custom-btn").length === 0) {
    if (document.querySelector(menuSeletor)) {
      addCustomBtn(document.querySelector(storySeletor), "white", append2Post);
    }
  }

  // check post
  let articleList = document.querySelectorAll("article");
  for (let i = 0; i < articleList.length; i++) {
    if (
      articleList[i].querySelector(sharePostSelector) &&
      articleList[i].getElementsByClassName("custom-btn").length === 0
    ) {
      addCustomBtn(
        articleList[i].querySelector(sharePostSelector),
        "black",
        append2Post
      );
    }
  }

  // check profile
  if (document.getElementsByClassName("custom-btn").length === 0) {
    if (document.querySelector(profileSelector)) {
      addCustomBtn(
        document.querySelector(profileSelector),
        "black",
        append2Header
      );
    }
  }
}, 500);

function append2Header(node, btn) {
  node.parentNode.parentNode.parentNode.appendChild(
    btn,
    node.parentNode.parentNode
  );
}

function append2Post(node, btn) {
  node.parentNode.parentNode.appendChild(btn);
}

function addCustomBtn(node, iconColor, appendNode) {
  // add download button and set onclick handler
  // add newtab button
  let newtabBtn = createCustomBtn(
    svgNewtabBtn,
    iconColor,
    "newtab-btn",
    "16px"
  );
  appendNode(node, newtabBtn);

  // add download button
  let downloadBtn = createCustomBtn(
    svgDownloadBtn,
    iconColor,
    "download-btn",
    "14px"
  );
  appendNode(node, downloadBtn);
}

function createCustomBtn(svg, iconColor, className, marginLeft) {
  let newBtn = document.createElement("a");
  newBtn.innerHTML = svg.replace("%color", iconColor);
  newBtn.setAttribute("class", "custom-btn " + className);
  newBtn.setAttribute("target", "_blank");
  newBtn.setAttribute(
    "style",
    "cursor: pointer;margin-left: " + marginLeft + ";margin-top: 8px;"
  );
  newBtn.onclick = onClickHandler;
  if (attachLink) newBtn.onmouseenter = onMouseInHandler;
  if (className.includes("newtab")) {
    newBtn.setAttribute("title", "Open in new tab");
  } else {
    newBtn.setAttribute("title", "Download");
  }
  return newBtn;
}

function onClickHandler(e) {
  // handle button click
  let target = e.currentTarget;
  e.stopPropagation();
  e.preventDefault();
  if (window.location.pathname.includes("stories")) {
    storyOnClicked(target);
  } else if (
    document.querySelector("header") &&
    document.querySelector("header").contains(target)
  ) {
    profileOnClicked(target);
  } else {
    postOnClicked(target);
  }
}

function onMouseInHandler(e) {
  let target = e.currentTarget;
  if (!attachLink) return;
  if (window.location.pathname.includes("stories")) {
    storyOnMouseIn(target);
  } else if (
    document.querySelector("header") &&
    document.querySelector("header").contains(target)
  ) {
    profileOnMouseIn(target);
  } else {
    postOnMouseIn(target);
  }
}

function profileOnMouseIn(target) {
  let url = profileGetUrl(target);
  target.setAttribute("href", url);
}

function profileOnClicked(target) {
  // extract profile picture url and download or open it
  let url = profileGetUrl(target);
  let filename = ".png";

  if (url.length > 0) {
    // check url
    if (target.getAttribute("class").includes("download-btn")) {
      // generate filename
      let posterName = document.querySelector("header h2").textContent;
      filename = posterName + filename;
      downloadResource(url, filename);
    } else {
      // open url in new tab
      openResource(url);
    }
  }
}

function profileGetUrl(target) {
  let img = document.querySelector("header img");
  let url = img.getAttribute("src");
  return url;
}

async function postOnMouseIn(target) {
  let articleNode = postGetArticleNode(target);
  let url = await postGetUrl(target, articleNode);
  target.setAttribute("href", url);
}

async function postOnClicked(target) {
  // extract url from target post and download or open it
  let articleNode = postGetArticleNode(target);
  let url = await postGetUrl(target, articleNode);

  // ==============================
  // = download or open media url =
  // ==============================
  if (url.length > 0) {
    // check url
    if (target.getAttribute("class").includes("download-btn")) {
      let mediaName = url.split("?")[0].split("\\").pop().split("/").pop();
      let ext = mediaName.substr(mediaName.lastIndexOf(".") + 1);
      mediaName = mediaName.substring(0, mediaName.lastIndexOf(".") + 1);
      let datetime = new Date(
        articleNode.querySelector("time").getAttribute("datetime")
      );
      datetime =
        yyyymmdd(datetime) +
        "_" +
        datetime.toTimeString().split(" ")[0].replace(/:/g, "");
      let posterName = articleNode
        .querySelector("header a")
        .getAttribute("href")
        .replace(/\//g, "");

      let filename = filenameFormat(
        postFilenameTemplate,
        posterName,
        datetime,
        mediaName,
        ext
      );
      downloadResource(url, filename);
    } else {
      // open url in new tab
      openResource(url);
    }
  }
}

function postGetArticleNode(target) {
  let articleNode = target;
  while (articleNode && articleNode.tagName !== "ARTICLE") {
    articleNode = articleNode.parentNode;
  }
  return articleNode;
}

async function postGetUrl(target, articleNode) {
  // meta[property="og:video"]
  let list = articleNode.querySelectorAll("li[style][class]");
  let url = "";
  if (list.length === 0) {
    // single img or video
    if (articleNode.querySelector("article  div > video")) {
      let videoElem = articleNode.querySelector("article  div > video");
      url = videoElem.getAttribute("src");
      if (videoElem.hasAttribute("videoURL")) {
        url = videoElem.getAttribute("videoURL");
      } else if (url === null || url.includes("blob")) {
        url = await fetchVideoURL(articleNode, videoElem);
      }
    } else if (articleNode.querySelector("article  div[role] div > img")) {
      url = articleNode
        .querySelector("article  div[role] div > img")
        .getAttribute("src");
    } else {
      console.log("Err: not find media at handle post single");
    }
  } else {
    // multiple imgs or videos
    let idx = 0;
    // check current index
    if (!articleNode.querySelector(".coreSpriteLeftChevron")) {
      idx = 0;
    } else if (!articleNode.querySelector(".coreSpriteRightChevron")) {
      idx = list.length - 1;
    } else idx = 1;

    let node = list[idx];
    if (node.querySelector("video")) {
      let videoElem = node.querySelector("video");
      url = videoElem.getAttribute("src");
      if (videoElem.hasAttribute("videoURL")) {
        url = videoElem.getAttribute("videoURL");
      } else if (url === null || url.includes("blob")) {
        url = await fetchVideoURL(articleNode, videoElem);
      }
    } else if (node.querySelector("img")) {
      url = node.querySelector("img").getAttribute("src");
    }
  }
  return url;
}

async function fetchVideoURL(articleNode, videoElem) {
  let poster = videoElem.getAttribute("poster");
  let timeNodes = articleNode.querySelectorAll("time");
  let posterUrl = timeNodes[timeNodes.length - 1].parentNode.href;
  let posterPattern = /\/([^\/?]*)\?/;
  let posterMatch = poster.match(posterPattern);
  let postFileName = posterMatch[1];
  let pattern = new RegExp(`${postFileName}.*?video_url":("[^"]*")`, "s");
  let resp = await fetch(posterUrl);
  let content = await resp.text();
  let match = content.match(pattern);
  let videoUrl = JSON.parse(match[1]);
  videoElem.setAttribute("videoURL", videoUrl);
  return videoUrl;
}

function storyOnMouseIn(target) {
  let sectionNode = storyGetSectionNode(target);
  let url = storyGetUrl(target, sectionNode);
  target.setAttribute("href", url);
}

function storyOnClicked(target) {
  // extract url from target story and download or open it
  let sectionNode = storyGetSectionNode(target);
  let url = storyGetUrl(target, sectionNode);

  // ==============================
  // = download or open media url =
  // ==============================
  if (target.getAttribute("class").includes("download-btn")) {
    let mediaName = url.split("?")[0].split("\\").pop().split("/").pop();
    let ext = mediaName.substr(mediaName.lastIndexOf(".") + 1);
    mediaName = mediaName.substring(0, mediaName.lastIndexOf(".") + 1);
    let datetime = new Date(
      sectionNode.querySelector("time").getAttribute("datetime")
    );
    datetime =
      yyyymmdd(datetime) +
      "_" +
      datetime.toTimeString().split(" ")[0].replace(/:/g, "");
    let posterName = sectionNode
      .querySelector("header a")
      .getAttribute("href")
      .replace(/\//g, "");

    let filename = filenameFormat(
      storyFilenameTemplate,
      posterName,
      datetime,
      mediaName,
      ext
    );
    downloadResource(url, filename);
  } else {
    // open url in new tab
    openResource(url);
  }
}

function storyGetSectionNode(target) {
  let sectionNode = target;
  while (sectionNode && sectionNode.tagName !== "SECTION") {
    sectionNode = sectionNode.parentNode;
  }
  return sectionNode;
}

function storyGetUrl(target, sectionNode) {
  let url = "";
  if (sectionNode.querySelector("video > source")) {
    url = sectionNode.querySelector("video > source").getAttribute("src");
  } else if (sectionNode.querySelector('img[decoding="sync"]')) {
    let img = sectionNode.querySelector('img[decoding="sync"]');
    url = img.srcset.split(/ \d+w/g)[0].trim(); // extract first src from srcset attr. of img
    if (url.length > 0) {
      return url;
    }
    url = sectionNode.querySelector('img[decoding="sync"]').getAttribute("src");
  }
  return url;
}

function filenameFormat(template, id, datetime, medianame, ext) {
  let filename = template;
  filename = filename.replaceAll("%id%", id);
  filename = filename.replaceAll("%datetime%", datetime);
  filename = filename.replaceAll("%medianame%", medianame);
  filename = filename.replaceAll("%ext%", ext);
  return filename;
}

function openResource(url) {
  // open url in new tab
  var a = document.createElement("a");
  a.href = url;
  a.setAttribute("target", "_blank");
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function forceDownload(blob, filename) {
  // ref: https://stackoverflow.com/questions/49474775/chrome-65-blocks-cross-origin-a-download-client-side-workaround-to-force-down
  var a = document.createElement("a");
  a.download = filename;
  a.href = blob;
  // For Firefox https://stackoverflow.com/a/32226068
  document.body.appendChild(a);
  a.click();
  a.remove();
}

// Current blob size limit is around 500MB for browsers
function downloadResource(url, filename) {
  // ref: https://stackoverflow.com/questions/49474775/chrome-65-blocks-cross-origin-a-download-client-side-workaround-to-force-down
  if (!filename) filename = url.split("\\").pop().split("/").pop();
  fetch(url, {
    headers: new Headers({
      Origin: location.origin,
    }),
    mode: "cors",
  })
    .then((response) => response.blob())
    .then((blob) => {
      let blobUrl = window.URL.createObjectURL(blob);
      forceDownload(blobUrl, filename);
    })
    .catch((e) => console.error(e));
}

let checkExist = () => {
  let myInterval = setInterval(() => {
    if (
      document.querySelector("img._6q-tv") == null ||
      document.querySelector("img._6q-tv") == undefined
    ) {
      console.log("Does not exist");
    } else {
      console.log("Exists exiting loop");
      clearInterval(myInterval);
      console.log(
        "src of Profile Picture = ",
        document.querySelector("img._6q-tv").src
      );
    }
  }, 100);
};
checkExist();

let checkExist2 = () => {
  let myInterval2 = setInterval(() => {
    if (
      document.querySelector("svg") == null ||
      document.querySelector("svg") == undefined
    ) {
      console.log("Svg Does not exist");
    } else {
      console.log("Svg Exists exiting loop");

      setInterval(() => {
        if (document.querySelector("svg").innerHTML.includes("linear")) {
        } else {
          document.querySelectorAll("svg").forEach(
            (el) =>
              (el.innerHTML += `<defs>
    <linearGradient id="grad1" x1="60%" y1="0%" x2="100%" y2="30%" >
      <stop offset="10%" style="stop-color:#ff150a;stop-opacity:1"></stop>
      <stop offset="120%" style="stop-color:#ff0081;stop-opacity:1"></stop>
    </linearGradient>
  </defs>`)
          );
        }
      }, 1);
      clearInterval(myInterval2);
    }
  }, 100);
};
checkExist2();
