// ==UserScript==
// @name Youtube Tools All in one local download mp3 mp4 HIGT QUALITY return dislikes and more
// @name:en Youtube Tools All in one local download mp3 mp4.
// @homepage     https://github.com/DeveloperMDCM/
// @version      2.4.3.2
// @author       DeveloperMDCM
// @match        *://www.youtube.com/*
// @exclude      *://music.youtube.com/*
// @exclude      *://*.music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_info
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @run-at       document-end
// @grant        GM_registerMenuCommand
// @require      https://cdn.jsdelivr.net/npm/izitoast@1.4.0/dist/js/iziToast.min.js
// @compatible chrome
// @compatible firefox
// @compatible opera
// @compatible safari
// @compatible edge
// @license MIT
// @namespace https://github.com/DeveloperMDCM/
// @keywords youtube, tools, download, mp3, mp4, hi-quality, return, dislikes, audio free, download mp3, download mp4, audio mp3, audio mp4, audio download, audio, free download, free audio, download audio, download free, hi quality, high quality, best quality, best audio quality, best free audio quality, best free quality, best audio free quality, best audio free, best free audio, best free
// @downloadURL https://raw.githubusercontent.com/vhd0/Userscripts/release/release/Youtube20Tools20All20in20one20local20download20mp320mp420HIGT20QUALITY20return20dislikes20and20more.user.js
// @updateURL https://raw.githubusercontent.com/vhd0/Userscripts/release/release/Youtube20Tools20All20in20one20local20download20mp320mp420HIGT20QUALITY20return20dislikes20and20more.meta.js
// ==/UserScript==
(function(){"use strict";let W=document.location.href;const p=t=>document.querySelector(t),i=t=>document.getElementById(t),$=t=>document.querySelectorAll(t),te=(t,e)=>document.createElement(t),S=(t,e)=>document.documentElement.style.setProperty(t,e),qt=t=>document.body.appendChild(t),Ke="https://returnyoutubedislikeapi.com/Votes?videoId=",Rt="https://translate.googleapis.com/translate_a/t";let ve="#252525",ye="#ffffff",ke="#ff0000";const Ve="https://greasyfork.org/es/scripts/460680-youtube-tools-all-in-one-local-download-mp3-mp4-higt-quality-return-dislikes-and-more",Oo="https://p.savenow.to/ajax/download.php?copyright=0&allow_extended_duration=1&",Ut="dfcb6d76f2f6a9894gjkege8a4ab232222",Ft=["https://p.savenow.to","https://p.lbserver.xyz"],Wt="https://dubs.io/wp-json/tools/v1/download-video",Gt="https://dubs.io/wp-json/tools/v1/status-video",Ye={af:"Afrikaans",sq:"Albanian",am:"Amharic",ar:"Arabic",hy:"Armenian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",bg:"Bulgarian",ca:"Catalan",ceb:"Cebuano","zh-CN":"Chinese (Simplified)","zh-TW":"Chinese (Traditional)",co:"Corsican",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",eo:"Esperanto",et:"Estonian",fi:"Finnish",fr:"French",fy:"Frisian",gl:"Galician",ka:"Georgian",de:"German",el:"Greek",gu:"Gujarati",ht:"Haitian Creole",ha:"Hausa",haw:"Hawaiian",iw:"Hebrew",hi:"Hindi",hmn:"Hmong",hu:"Hungarian",is:"Icelandic",ig:"Igbo",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",jw:"Javanese",kn:"Kannada",kk:"Kazakh",km:"Khmer",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",lo:"Lao",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"Macedonian",mg:"Malagasy",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mn:"Mongolian",my:"Myanmar (Burmese)",ne:"Nepali",no:"Norwegian",ny:"Nyanja (Chichewa)",ps:"Pashto",fa:"Persian",pl:"Polish",pt:"Portuguese",pa:"Punjabi",ro:"Romanian",ru:"Russian",sm:"Samoan",gd:"Scots Gaelic",sr:"Serbian",st:"Sesotho",sn:"Shona",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",so:"Somali",es:"Spanish",su:"Sundanese",sw:"Swahili",sv:"Swedish",tl:"Tagalog (Filipino)",tg:"Tajik",ta:"Tamil",te:"Telugu",th:"Thai",tr:"Turkish",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",cy:"Welsh",xh:"Xhosa",yi:"Yiddish",yo:"Yoruba",zu:"Zulu"};let ee=null,Je="dinamica",G=null,ue=null,_e=null,Oe=null,_=null,w=null,q=null,J=0,Qe=null,Q=[],Xe=!1;const Kt=.05,Ze=240,oe=Ze/90,He="wave_visualizer_processed",f={dynamicStyleEl:null,dynamicCssLast:"",settingsLoaded:!1,bookmarkClickHandlerInitialized:!1,bookmarksPanelOpen:!1,continueWatching:{enabled:!1,map:null,flushT:null,boundVideo:null,boundVideoId:null,lastSaveAt:0,lastSavedTime:-1,lastKnownVideoId:null,navHandlerInitialized:!1,panelOpen:!1,clickHandlerInitialized:!1,pagehideHandlerInitialized:!1,handlers:null},shortsChannelName:{enabled:!1,observer:null,io:null,scanT:null,cache:new Map,inflight:new Map,fetchChain:Promise.resolve()},dislikesCache:{videoId:null,dislikes:null,ts:0},downloadClickHandlerInitialized:!1,shortsObserver:null,statsObserver:null,statsIntervalId:null,lockupCachedStatsObserver:null,lockupCachedStatsObserveTarget:null,lockupCachedStatsIntervalId:null,updateShortsViewsButton:function(){},updateShortsRatingButton:function(){}};function Yt(t=""){if(!f.dynamicStyleEl){const e=document.createElement("style");e.id="yt-tools-mdcm-dynamic-style",document.head.appendChild(e),f.dynamicStyleEl=e}f.dynamicCssLast!==t&&(f.dynamicCssLast=t,f.dynamicStyleEl.textContent=t)}const je=(()=>{let t=null;return()=>{f.settingsLoaded&&(clearTimeout(t),t=setTimeout(()=>{try{pt()}catch(e){console.error("applySettings error:",e)}},120))}})();function ne(){const t=i("wave-visualizer-canvas");t&&(t.style.opacity="0",q&&(q.style.opacity="0"))}function Ae(){const t=i("wave-visualizer-canvas");G&&G.state==="suspended"&&G.resume(),t&&(t.style.opacity="1",q&&(q.style.opacity="1"))}function H(t="info",e="",o=""){const n={success:"Success",error:"Error",info:"Information",warning:"Warning"};iziToast[t]({title:o||n[t]||"Notification",message:e,position:"bottomLeft"})}async function Jt(t,e){const o=window.location.href;if(e.dataset.downloading==="true")return;try{e.__ytDownloadPoll&&(clearInterval(e.__ytDownloadPoll),e.__ytDownloadPoll=null)}catch{}const n=e.querySelector(".download-btn"),a=e.querySelector(".retry-btn"),c=e.querySelector(".progress-retry-btn"),r=e.querySelector(".download-again-btn"),d=e.querySelector(".progress-container"),l=e.querySelector(".progress-fill"),v=e.querySelector(".progress-text"),m=e.querySelector(".download-text");e.dataset.downloading="true",e.dataset.urlOpened="false",e.dataset.lastDownloadUrl="",n.style.display="none",a.style.display="none",c.style.display="block",r&&(r.style.display="none"),d.style.display="flex",l.style.width="0%",v.textContent="0%";const h=async(M,C=2e4)=>{const P=new AbortController,F=setTimeout(()=>P.abort(),C);try{const I=await fetch(M,{signal:P.signal});if(!I.ok)throw new Error(`HTTP ${I.status}`);return await I.json()}finally{clearTimeout(F)}},k=()=>{a.style.display="block",d.style.display="none",c.style.display="none",r&&(r.style.display="none"),e.dataset.downloading="false",e.dataset.urlOpened="false",e.dataset.lastDownloadUrl=""},L=M=>{if(!M){k();return}if(e.dataset.lastDownloadUrl=String(M),e.dataset.urlOpened!=="true"){e.dataset.urlOpened="true",e.classList.add("completed"),e.classList.remove("video","audio"),m.textContent="Download Complete!",l.style.width="100%",v.textContent="100%",c.style.display="none",r&&(r.style.display="flex"),e.dataset.downloading="false";try{window.open(M)}catch(C){console.warn("Could not open download URL:",C)}}},A=M=>{e.__ytDownloadPoll=setInterval(async()=>{try{const C=await h(M,15e3),P=Math.min((Number(C.progress)||0)/10,100);l.style.width=`${P}%`,v.textContent=`${Math.round(P)}%`,Number(C.progress)>=1e3&&C.download_url&&(clearInterval(e.__ytDownloadPoll),e.__ytDownloadPoll=null,L(C.download_url))}catch(C){console.error("Error in progress:",C),clearInterval(e.__ytDownloadPoll),e.__ytDownloadPoll=null,k()}},3e3)},N=async M=>{const C=new URL("/ajax/download.php",M);C.searchParams.set("copyright","0"),C.searchParams.set("allow_extended_duration","1"),C.searchParams.set("format",String(t)),C.searchParams.set("url",o),C.searchParams.set("api",Ut);const P=await h(C.toString(),25e3);if(!P?.success||!P?.progress_url)throw new Error("SaveNow provider did not return success/progress_url");return P},O=async()=>{const M=tt();if(!M)throw new Error("Missing videoId");const C=new URL(Wt);C.searchParams.set("id",M),C.searchParams.set("format",String(t));const P=await h(C.toString(),25e3);if(!P?.success||!P?.progressId)throw new Error("Dubs provider did not return success/progressId");const F=new URL(Gt);F.searchParams.set("id",P.progressId),e.__ytDownloadPoll=setInterval(async()=>{try{const I=await h(F.toString(),2e4),z=Number(I?.progress)||0,de=Math.min(z/10,100);l.style.width=`${de}%`,v.textContent=`${Math.round(de)}%`,I?.finished&&I?.downloadUrl&&(clearInterval(e.__ytDownloadPoll),e.__ytDownloadPoll=null,L(I.downloadUrl))}catch(I){console.error("\u274C Error polling dubs status:",I),clearInterval(e.__ytDownloadPoll),e.__ytDownloadPoll=null,k()}},3e3)};try{let M=null,C=null;for(const P of Ft)try{M=await N(P);break}catch(F){C=F}if(M?.success&&M?.progress_url){A(M.progress_url);return}console.warn("SaveNow providers failed, falling back to dubs.io",C),await O()}catch(M){k(),console.error("\u274C Error starting download:",M)}}const Qt=1e3,ae={USAGE:"YT_TOTAL_USAGE",VIDEO:"YT_VIDEO_TIME",SHORTS:"YT_SHORTS_TIME"};let De=GM_getValue(ae.USAGE,0),Pe=GM_getValue(ae.VIDEO,0),Ie=GM_getValue(ae.SHORTS,0),ft=Date.now(),we=null,et=null;GM_setValue(ae.USAGE,De),GM_setValue(ae.VIDEO,Pe),GM_setValue(ae.SHORTS,Ie);function pe(t,e){const o=[{value:1,symbol:""},{value:1e3,symbol:" K"},{value:1e6,symbol:" M"}],n=/\.0+$|(\.[0-9]*[1-9])0+$/,a=o.slice().reverse().find(c=>t>=c.value);return a?(t/a.value).toFixed(e).replace(n,"$1")+a.symbol:"0"}function tt(){return new URLSearchParams(window.location.search).get("v")}const R={BOOKMARKS:"ytBookmarksMDCM",CONTINUE_WATCHING:"ytContinueWatchingMDCM",SHORTS_CHANNEL_CACHE:"ytShortsChannelCacheMDCM",LIKES_DISLIKES_CACHE:"ytLikesDislikesCacheMDCM",VERSION_CHECK_LAST:"ytVersionCheckLastMDCM"},Xt="https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.meta.js",Zt=1440*60*1e3,eo=576*60*60*1e3,to=10080*60*1e3,gt=500;function oo(t){try{const o=xe(R.SHORTS_CHANNEL_CACHE,{})?.[t];return!o||typeof o.channelName!="string"||Date.now()-(Number(o.ts)||0)>eo?null:o.channelName}catch{return null}}function vt(t,e){if(!(!t||typeof e!="string"))try{const o=xe(R.SHORTS_CHANNEL_CACHE,{});o[t]={channelName:e,ts:Date.now()};const n=Object.entries(o).sort((c,r)=>(Number(r[1]?.ts)||0)-(Number(c[1]?.ts)||0)),a=Object.fromEntries(n.slice(0,gt));he(R.SHORTS_CHANNEL_CACHE,a)}catch{}}function me(t){try{const o=xe(R.LIKES_DISLIKES_CACHE,{})?.[t];if(!o||Date.now()-(Number(o.ts)||0)>to)return null;const a=Number(o.dislikes),c=Number(o.likes),r=Number(o.viewCount),d=Number(o.rating);return{likes:Number.isFinite(c)?c:null,dislikes:Number.isFinite(a)?a:null,viewCount:Number.isFinite(r)?r:null,rating:Number.isFinite(d)&&d>=0&&d<=5?d:null}}catch{return null}}function ot(t,e,o,n,a){if(t)try{const c=xe(R.LIKES_DISLIKES_CACHE,{});c[t]={likes:e??null,dislikes:o??null,viewCount:n??null,rating:a??null,ts:Date.now()};const r=Object.entries(c).sort((l,v)=>(Number(v[1]?.ts)||0)-(Number(l[1]?.ts)||0)),d=Object.fromEntries(r.slice(0,Math.min(gt,300)));he(R.LIKES_DISLIKES_CACHE,d)}catch{}}function U(){try{return location.pathname.startsWith("/shorts/")?location.pathname.split("/").filter(Boolean)[1]||null:location.href.includes("youtube.com/watch")?tt():null}catch{return null}}function xe(t,e){try{const o=GM_getValue(t,"");return o?JSON.parse(o):e}catch{return e}}function he(t,e){try{GM_setValue(t,JSON.stringify(e))}catch(o){console.error("writeJsonGM error:",o)}}function no(t,e){if(!t||!e)return!1;const o=r=>String(r).trim().split(".").map(d=>parseInt(d,10)||0),n=o(t),a=o(e),c=Math.max(n.length,a.length);for(let r=0;r<c;r++){const d=n[r]||0,l=a[r]||0;if(d>l)return!0;if(d<l)return!1}return!1}async function ao(){try{const t=GM_getValue(R.VERSION_CHECK_LAST,0);if(Date.now()-t<Zt)return;GM_setValue(R.VERSION_CHECK_LAST,Date.now());const e=await fetch(Xt,{cache:"no-store"});if(!e.ok)return;const n=(await e.text()).match(/@version\s+([\d.]+)/);if(!n)return;const a=n[1].trim(),c=typeof GM_info<"u"&&GM_info.script&&GM_info.script.version?String(GM_info.script.version).trim():"";if(!c||!no(a,c))return;const r="https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.user.js";iziToast.show({title:"New Update",message:"A new version YoutubeTools is available.",buttons:[["<button>View Now</button>",function(d,l){window.open(r,"_blank"),d.hide({transitionOut:"fadeOut"},l,"button")},!0]]})}catch{}}function Ce(t){const e=Math.max(0,Math.floor(Number(t)||0)),o=Math.floor(e/3600),n=Math.floor(e%3600/60),a=e%60;return o>0?`${o}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`:`${n}:${String(a).padStart(2,"0")}`}function qe(){return document.querySelector("#movie_player video.video-stream.html5-main-video")||document.querySelector("ytd-player video.video-stream.html5-main-video")||document.querySelector("video.video-stream.html5-main-video")||document.querySelector("video")}function io(){try{const t=p("ytd-watch-metadata h1 yt-formatted-string")?.textContent?.trim()||p("h1.ytd-watch-metadata yt-formatted-string")?.textContent?.trim()||"",e=p("#owner ytd-channel-name a, ytd-video-owner-renderer ytd-channel-name a, #text-container.ytd-channel-name a")?.textContent?.trim()||p('#owner a[href^="/@"], #owner a[href^="/channel/"]')?.textContent?.trim()||"",o=(t||document.title||"").replace(/\s*-\s*YouTube\s*$/i,"").trim(),n=(e||"").trim(),r=((typeof unsafeWindow<"u"&&unsafeWindow?unsafeWindow:window)?.ytInitialPlayerResponse||window.ytInitialPlayerResponse)?.videoDetails||null,d=(o||r?.title||document.title||"").replace(/\s*-\s*YouTube\s*$/i,"").trim(),l=(n||r?.author||"").trim(),v=r?.thumbnail?.thumbnails,m=Array.isArray(v)&&v[v.length-1]?.url||"";return{title:d,author:l,thumb:m}}catch{return{title:"",author:"",thumb:""}}}function Ne(){const t=f.continueWatching;return t.map||(t.map=xe(R.CONTINUE_WATCHING,{})),(typeof t.map!="object"||!t.map)&&(t.map={}),t.map}function nt(t,e=200){try{const o=Object.entries(t||{}).filter(([,c])=>c&&typeof c=="object");o.sort((c,r)=>(Number(r[1].updatedAt)||0)-(Number(c[1].updatedAt)||0));const n=o.slice(0,e),a={};for(const[c,r]of n)a[c]=r;return a}catch{return t||{}}}function yt(){const t=f.continueWatching;clearTimeout(t.flushT),t.flushT=setTimeout(()=>{try{if(!t.map)return;t.map=nt(t.map,200),he(R.CONTINUE_WATCHING,t.map)}catch{}},800)}function Re(t){if(!t)return;const e=f.continueWatching,o=Ne();o&&Object.prototype.hasOwnProperty.call(o,t)&&(delete o[t],e.map=o,yt())}function at(t,e,o){if(!t)return;const n=f.continueWatching,a=Ne(),c=Math.max(0,Math.floor(Number(e)||0)),r=Math.max(0,Math.floor(Number(o)||0)),d=a[t]&&typeof a[t]=="object"?a[t]:{},l=io();a[t]={t:c,d:r,updatedAt:Date.now(),title:l.title||d.title||"",author:l.author||d.author||"",thumb:l.thumb||d.thumb||""},n.map=a,yt()}function ro(t){if(!t)return null;const o=Ne()?.[t],n=Number(o?.t);return Number.isFinite(n)?n:null}function K(){if(!!!f.continueWatching.enabled||!fe())return;const o=U();if(!o)return;const n=qe(),a=ro(o),c=Number(n?.duration),r=Number.isFinite(c)&&c>0;if(!(!a||a<5)&&r&&a>=c-5){Re(o);return}}function Se(){const t=f.continueWatching,e=i("yt-cw-history-toggle"),o=i("yt-continue-watching-panel");if(!e||!o)return;if(!!!t.enabled||!fe()){e.style.display="none",o.style.display="none";return}e.style.display="inline-flex",o.style.display=t.panelOpen?"block":"none"}function so(t){const e=String(t||"");return typeof CSS<"u"&&CSS.escape?CSS.escape(e):e.replace(/["\\]/g,"\\$&")}function it(t){try{const e=f.continueWatching;if(!e.enabled||!e.panelOpen||!fe())return!1;const o=i("yt-continue-watching-panel");if(!o)return!1;const n=so(t),a=o.querySelector(`.yt-cw-item[data-video-id="${n}"]`);if(!a)return!1;const c=Ne()?.[t],r=Number(c?.t);if(!Number.isFinite(r))return!1;const d=a.querySelector(".yt-cw-meta");if(!d)return!1;const l=String(c?.author||"").trim();return d.textContent=`${Ce(r)}${l?` \u2022 ${l}`:""}`,!0}catch{return!1}}function Ho(t,e){const o=Number(e),n=`/watch?v=${encodeURIComponent(t)}${Number.isFinite(o)?`&t=${Math.max(0,Math.floor(o))}s`:""}`;try{const a=document.createElement("a");a.href=n,a.target="_self",a.rel="noopener",a.style.display="none",document.body.appendChild(a),a.click(),a.remove();return}catch{}location.href=n}function ie(){const t=i("yt-continue-watching-panel");if(!t)return;const e=f.continueWatching;if(!e.enabled||!e.panelOpen||!fe()){t.style.display="none";return}const o=nt(Ne(),200);e.map=o;const n=U(),a=Object.entries(o).map(([l,v])=>({videoId:l,...v})).filter(l=>l.videoId&&Number.isFinite(Number(l.t))&&Number(l.t)>=5).sort((l,v)=>(Number(v.updatedAt)||0)-(Number(l.updatedAt)||0)).slice(0,25);t.replaceChildren();const c=document.createElement("div");c.className="yt-cw-header";const r=document.createElement("div");r.className="yt-cw-header-title",r.textContent="Continue watching";const d=document.createElement("button");if(d.type="button",d.className="yt-cw-clear",d.textContent="Clear",d.dataset.cwAction="clearAll",c.appendChild(r),c.appendChild(d),t.appendChild(c),!a.length){const l=document.createElement("div");l.className="yt-cw-empty",l.textContent="No history yet. Watch a bit, then reopen any video.",t.appendChild(l);return}for(const l of a){const v=document.createElement("div");v.className="yt-cw-item",v.dataset.videoId=l.videoId;const m=document.createElement("div");m.className="yt-cw-thumb-wrap";const h=document.createElement("img");h.className="yt-cw-thumb",h.loading="lazy",h.decoding="async",h.alt="";const k=(l.thumb||"").trim()||`https://i.ytimg.com/vi/${encodeURIComponent(l.videoId)}/hqdefault.jpg`;h.src=k,m.appendChild(h);const L=document.createElement("div");L.className="yt-cw-info";const A=document.createElement("div");A.className="yt-cw-title";const N=(l.title||"").trim();A.textContent=N||l.videoId;const O=document.createElement("div");O.className="yt-cw-meta";const M=(l.author||"").trim();O.textContent=`${Ce(l.t)}${M?` \u2022 ${M}`:""}`,L.appendChild(A),L.appendChild(O);const C=document.createElement("div");C.className="yt-cw-actions";const P=Math.max(0,Math.floor(Number(l.t)||0));let F=null;if(n&&n===l.videoId){const z=document.createElement("button");z.type="button",z.className="yt-cw-go",z.textContent="Resume",z.dataset.cwAction="seek",z.dataset.t=String(P),F=z}else{const z=document.createElement("a");z.className="yt-simple-endpoint yt-cw-go",z.textContent="Resume",z.href=`/watch?v=${encodeURIComponent(l.videoId)}&t=${P}s`,z.target="_self",z.rel="noopener",F=z}const I=document.createElement("button");I.type="button",I.className="yt-cw-del",I.textContent="\u2715",I.title="Delete",I.dataset.cwAction="del",I.dataset.videoId=l.videoId,C.appendChild(F),C.appendChild(I),v.appendChild(m),v.appendChild(L),v.appendChild(C),t.appendChild(v)}}function lo(t){const e=f.continueWatching;if(e.enabled=!!t,!e.navHandlerInitialized){e.navHandlerInitialized=!0;const r=()=>{try{const d=U();e.lastKnownVideoId!==d?(e.lastKnownVideoId=d,e.lastSaveAt=0,e.lastSavedTime=-1,e.boundVideoId=d,K(),Se(),e.panelOpen&&ie()):(K(),Se(),e.panelOpen&&ie())}catch{}};window.addEventListener("yt-navigate-finish",r,!0),window.addEventListener("popstate",r,!0),window.addEventListener("hashchange",r,!0)}e.clickHandlerInitialized||(e.clickHandlerInitialized=!0,document.addEventListener("click",r=>{const d=r.target;if(!(d instanceof Element))return;const l=d.closest("#yt-cw-history-toggle"),v=d.closest("[data-cw-action]");if(l){r.preventDefault(),r.stopPropagation(),e.panelOpen=!e.panelOpen,Se(),e.panelOpen&&ie();return}if(v){const m=v.getAttribute("data-cw-action");if(!m)return;if(r.preventDefault(),r.stopPropagation(),m==="clearAll"){e.map={},he(R.CONTINUE_WATCHING,{}),ie(),K();try{H("success","History cleared")}catch{}return}if(m==="del"){const h=v.getAttribute("data-video-id")||"";h&&Re(h),ie(),K();return}if(m==="seek"){const h=Number(v.getAttribute("data-t")),k=qe();if(!k||!Number.isFinite(h))return;k.currentTime=Math.max(0,h),k.play?.().catch(()=>{});try{H("success",`Resume: ${Ce(h)}`)}catch{}K();return}}},!0)),e.pagehideHandlerInitialized||(e.pagehideHandlerInitialized=!0,window.addEventListener("pagehide",()=>{try{if(!e.enabled||!fe())return;const r=U(),d=qe();if(!r||!d)return;const l=Number(d.currentTime),v=Number(d.duration);Number.isFinite(l)&&l>=5&&at(r,l,v),e.flushT&&(clearTimeout(e.flushT),e.flushT=null),e.map&&he(R.CONTINUE_WATCHING,nt(e.map,200))}catch{}},{capture:!0}));const o=i("yt-cw-history-toggle"),n=i("yt-continue-watching-panel");if(o&&!e.enabled&&(o.style.display="none"),n&&!e.enabled&&(n.style.display="none"),!e.enabled||!fe()){try{e.boundVideo&&e.handlers&&(e.boundVideo.removeEventListener("timeupdate",e.handlers.timeupdate),e.boundVideo.removeEventListener("pause",e.handlers.pause),e.boundVideo.removeEventListener("ended",e.handlers.ended),e.boundVideo.removeEventListener("loadedmetadata",e.handlers.loadedmetadata),e.boundVideo.removeEventListener("seeked",e.handlers.seeked))}catch{}e.boundVideo=null,e.boundVideoId=null,e.handlers=null,K(),Se();return}const a=qe(),c=U();if(!a||!c){K(),Se();return}if(e.boundVideoId!==c&&(e.boundVideoId=c,e.lastSaveAt=0,e.lastSavedTime=-1),e.boundVideo&&e.boundVideo!==a&&e.handlers){try{e.boundVideo.removeEventListener("timeupdate",e.handlers.timeupdate),e.boundVideo.removeEventListener("pause",e.handlers.pause),e.boundVideo.removeEventListener("ended",e.handlers.ended),e.boundVideo.removeEventListener("loadedmetadata",e.handlers.loadedmetadata),e.boundVideo.removeEventListener("seeked",e.handlers.seeked)}catch{}e.boundVideo=null,e.boundVideoId=null,e.handlers=null}e.boundVideo=a,e.boundVideoId=c,e.handlers||(e.handlers={timeupdate:()=>{try{if(!e.enabled)return;const r=U();if(!r)return;const d=Date.now();if(d-e.lastSaveAt<5e3||a.paused)return;const l=Number(a.currentTime),v=Number(a.duration);if(!Number.isFinite(l)||Math.abs(l-e.lastSavedTime)<2||(e.lastSaveAt=d,e.lastSavedTime=l,l<5))return;at(r,l,v),K(),e.panelOpen&&(it(r)||ie())}catch{}},pause:()=>{try{if(!e.enabled)return;const r=U();if(!r)return;const d=Number(a.currentTime),l=Number(a.duration);if(!Number.isFinite(d))return;d<5?Re(r):at(r,d,l),K(),e.panelOpen&&(it(r)||ie())}catch{}},ended:()=>{try{const r=U();r&&Re(r),K(),e.panelOpen&&ie()}catch{}},loadedmetadata:()=>{K(),e.panelOpen&&ie()},seeked:()=>{K();const r=U();e.panelOpen&&r&&it(r)}},a.addEventListener("timeupdate",e.handlers.timeupdate,{passive:!0}),a.addEventListener("pause",e.handlers.pause,{passive:!0}),a.addEventListener("ended",e.handlers.ended,{passive:!0}),a.addEventListener("loadedmetadata",e.handlers.loadedmetadata,{passive:!0}),a.addEventListener("seeked",e.handlers.seeked,{passive:!0})),K(),Se()}function co(t){if(f.shortsChannelName.enabled=!!t,document.documentElement.dataset.mdcmShortsChannelName=t?"1":"0",!t){try{f.shortsChannelName.observer?.disconnect?.()}catch{}try{f.shortsChannelName.io?.disconnect?.()}catch{}f.shortsChannelName.observer=null,f.shortsChannelName.io=null,clearTimeout(f.shortsChannelName.scanT),f.shortsChannelName.scanT=null;return}const e=f.shortsChannelName,o=m=>(m.querySelector('a[href^="/shorts/"]')?.getAttribute("href")||"").match(/\/shorts\/([^/?]+)/)?.[1]||null,n=m=>m.querySelector(".ShortsLockupViewModelHostOutsideMetadataSubhead, .shortsLockupViewModelHostOutsideMetadataSubhead, .ShortsLockupViewModelHostMetadataSubhead, .shortsLockupViewModelHostMetadataSubhead"),a=m=>{const h=m?.parentElement;if(!h)return null;let k=h.querySelector(".yt-tools-shorts-channel-name");return k||(k=document.createElement("div"),k.className="yt-tools-shorts-channel-name",k.textContent="",h.insertBefore(k,m)),k},c=m=>{const h=m.querySelector('a[href^="/@"], a[href^="/channel/"]');return(h?.textContent||h?.getAttribute("title")||"").trim()||null},r=m=>(e.fetchChain=e.fetchChain.then(async()=>{if(e.cache.has(m))return e.cache.get(m);let h=null;try{h=await fetch(`/watch?v=${m}`,{method:"GET",credentials:"same-origin",cache:"force-cache"})}catch{return""}if(!h?.ok)return"";const k=await h.text(),L=k.indexOf('itemprop="author"');if(L<0)return"";const A=k.lastIndexOf("<span",L),N=k.indexOf("</span>",L);if(A<0||N<0)return"";const O=k.slice(A,N+7);return(new DOMParser().parseFromString(O,"text/html").querySelector('link[itemprop="name"]')?.getAttribute("content")||"").trim()}),e.fetchChain),d=(m,h)=>{const k=e.cache.get(m);if(k)return Promise.resolve(k);const L=oo(m);if(L)return e.cache.set(m,L),Promise.resolve(L);const A=c(h);if(A)return e.cache.set(m,A),vt(m,A),Promise.resolve(A);const N=e.inflight.get(m);if(N)return N;const O=r(m).then(M=>{const C=(M||"").trim();return C&&(e.cache.set(m,C),vt(m,C)),C}).finally(()=>{e.inflight.delete(m)});return e.inflight.set(m,O),O},l=m=>{if(!(m instanceof Element)||m.dataset.ytToolsShortsChannelProcessed==="1")return;const h=n(m);if(!h)return;const k=o(m);if(!k)return;m.dataset.ytToolsShortsChannelProcessed="1",m.dataset.ytToolsShortsVideoId=k;const L=a(h);L&&(L.textContent="",e.io?.observe(m))};e.io||(e.io=new IntersectionObserver(m=>{for(const h of m){if(!h.isIntersecting)continue;const k=h.target,L=k?.dataset?.ytToolsShortsVideoId,N=n(k)?.parentElement?.querySelector?.(".yt-tools-shorts-channel-name");if(!L||!N){e.io.unobserve(k);continue}d(L,k).then(O=>{O&&(N.textContent=O)}).finally(()=>{e.io.unobserve(k)})}},{threshold:.15}));const v=()=>{clearTimeout(e.scanT),e.scanT=setTimeout(()=>{document.querySelectorAll("ytm-shorts-lockup-view-model, ytm-shorts-lockup-view-model-v2").forEach(l)},120)};e.observer||(e.observer=new MutationObserver(v),e.observer.observe(document.body,{childList:!0,subtree:!0})),v()}function uo(t){const e=t.querySelector('a[href*="watch?v="]');if(e){const n=(e.getAttribute("href")||"").match(/[?&]v=([^&]+)/);if(n)return n[1]}const o=t.querySelector('[class*="content-id-"]');if(o){const n=o.className.match(/content-id-([A-Za-z0-9_-]+)/);if(n)return n[1]}return null}function ze(t,e){const o=document.createElement("div");o.innerHTML=t.trim();const n=o.firstElementChild;return n?(n.setAttribute("width",String(e||14)),n.setAttribute("height",String(e||14)),n.style.display="inline-block",n.style.verticalAlign="middle",n.style.marginRight="2px",n):null}const po='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" /></svg>',kt='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-thumb-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg>',wt='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-thumb-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" /></svg>';function Me(){window.location.href.includes("youtube.com")&&document.querySelectorAll("yt-lockup-view-model").forEach(t=>{if(t.hasAttribute("data-yt-tools-lockup-stats"))return;const e=uo(t);if(!e)return;const o=me(e);if(!o)return;const n=o.rating!=null,a=o.likes!=null,c=o.dislikes!=null;if(!n&&!a&&!c)return;const r=t.querySelector("yt-content-metadata-view-model");if(!r)return;const d=document.createElement("div");d.className="yt-content-metadata-view-model__metadata-row",d.setAttribute("data-yt-tools-lockup-stats-row","1");const l=document.createElement("span");l.className="yt-core-attributed-string yt-content-metadata-view-model__metadata-text yt-core-attributed-string--white-space-pre-wrap yt-core-attributed-string--link-inherit-color",l.setAttribute("dir","auto"),l.setAttribute("role","text");const v=()=>document.createTextNode(" \xB7 ");if(n){const m=ze(po,14);m&&l.appendChild(m),l.appendChild(document.createTextNode(" "+o.rating.toFixed(1))),(a||c)&&l.appendChild(v())}if(a){const m=ze(kt,14);m&&l.appendChild(m),l.appendChild(document.createTextNode(" "+pe(o.likes,0))),c&&l.appendChild(v())}if(c){const m=ze(wt,14);m&&l.appendChild(m),l.appendChild(document.createTextNode(" "+pe(o.dislikes,0)))}d.appendChild(l),r.appendChild(d),t.setAttribute("data-yt-tools-lockup-stats",e)})}function mo(t){if(t.dataset.ytToolsShortsVideoId)return t.dataset.ytToolsShortsVideoId;var e=t.querySelector('a[href^="/shorts/"]');if(!e)return null;var o=(e.getAttribute("href")||"").match(/\/shorts\/([^/?]+)/);return o?o[1]:null}function Le(){window.location.href.includes("youtube.com")&&document.querySelectorAll("ytm-shorts-lockup-view-model").forEach(function(t){if(!t.hasAttribute("data-yt-tools-shorts-stats")){var e=mo(t);if(e){var o=me(e);if(o){var n=o.likes!=null,a=o.dislikes!=null;if(!(!n&&!a)){var c=t.querySelector(".ShortsLockupViewModelHostOutsideMetadataSubhead,.shortsLockupViewModelHostOutsideMetadataSubhead,.ShortsLockupViewModelHostMetadataSubhead,.shortsLockupViewModelHostMetadataSubhead");if(!(!c||!c.parentElement)){var r=document.createElement("span");r.className="yt-core-attributed-string yt-content-metadata-view-model__metadata-text yt-core-attributed-string--white-space-pre-wrap yt-core-attributed-string--link-inherit-color yt-tools-shorts-stats-row",r.setAttribute("dir","auto"),r.setAttribute("role","text"),r.setAttribute("style","color: #aaa !important;");var d=function(){return document.createTextNode(" \xB7 ")};if(n){var l=ze(kt,12);l&&(l.style.setProperty("color","#aaa","important"),r.appendChild(l)),r.appendChild(document.createTextNode(" "+pe(o.likes,0))),a&&r.appendChild(d())}if(a){var v=ze(wt,12);v&&(v.style.setProperty("color","#aaa","important"),r.appendChild(v)),r.appendChild(document.createTextNode(" "+pe(o.dislikes,0)))}var m=document.createElement("div");m.className="yt-tools-shorts-stats-wrap",m.setAttribute("style","color: #aaa !important;"),m.appendChild(r),c.parentElement.appendChild(m),t.setAttribute("data-yt-tools-shorts-stats",e)}}}}}})}function rt(t){var e=null,o=!1,n=new MutationObserver(function(){o||(o=!0,clearTimeout(e),e=setTimeout(function(){o=!1,window.location.href.includes("youtube.com")&&(Me(),Le(),[500,1100,2e3].forEach(function(a){setTimeout(function(){window.location.href.includes("youtube.com")&&(Me(),Le())},a)}))},280))});return n.observe(t,{childList:!0,subtree:!0}),n}function ho(){if(window.location.href.includes("youtube.com/watch")){var t=document.getElementById("secondary")||document.querySelector("ytd-watch-next-secondary-results-renderer");if(!(!t||!t.parentNode)&&f.lockupCachedStatsObserveTarget!==t){var e=f.lockupCachedStatsObserver;e&&(e.disconnect(),f.lockupCachedStatsObserver=rt(t),f.lockupCachedStatsObserveTarget=t)}}}function bo(){var t=document.querySelectorAll("yt-lockup-view-model:not([data-yt-tools-lockup-stats])").length>0,e=document.querySelectorAll("ytm-shorts-lockup-view-model:not([data-yt-tools-shorts-stats])").length>0;return t||e}function fo(){window.location.href.includes("youtube.com")&&document.visibilityState==="visible"&&bo()&&(Me(),Le())}function go(){if(window.location.href.includes("youtube.com")){Me(),Le();var t=document.getElementById("secondary")||document.querySelector("ytd-watch-next-secondary-results-renderer"),e=t&&t.parentNode?t:document.body;if(f.lockupCachedStatsObserver){e!==f.lockupCachedStatsObserveTarget&&(f.lockupCachedStatsObserver.disconnect(),f.lockupCachedStatsObserver=rt(e),f.lockupCachedStatsObserveTarget=e);return}f.lockupCachedStatsObserver=rt(e),f.lockupCachedStatsObserveTarget=e,f.lockupCachedStatsIntervalId||(f.lockupCachedStatsIntervalId=setInterval(fo,1800))}}function st(t){const e=xe(R.BOOKMARKS,{}),o=Array.isArray(e[t])?e[t]:[];return{all:e,list:o}}function vo(t,e,o){const{all:n,list:a}=st(t),c=Math.max(0,Math.floor(Number(e)||0)),r=a.some(v=>v&&v.t===c),d={t:c,label:(o||Ce(c)).trim(),createdAt:Date.now()},l=r?a.map(v=>v.t===c?d:v):[...a,d];l.sort((v,m)=>v.t-m.t),n[t]=l,he(R.BOOKMARKS,n)}function yo(t,e){const{all:o,list:n}=st(t),a=Math.max(0,Math.floor(Number(e)||0));o[t]=n.filter(c=>c&&c.t!==a),he(R.BOOKMARKS,o)}function Ue(t){const e=i("yt-bookmarks-panel");if(!e)return;const{list:o}=st(t);if(!o.length){e.innerHTML='<div class="yt-bm-empty">No bookmarks yet. Click \u2605 to save one.</div>';return}e.innerHTML=o.map(n=>{const a=Ce(n.t),c=(n.label||a).replace(/</g,"&lt;").replace(/>/g,"&gt;");return`
          <div class="yt-bm-item">
            <button type="button" class="yt-bm-go" data-action="go" data-t="${n.t}" title="Go to ${a}">${a}</button>
            <div class="yt-bm-label" title="${c}">${c}</div>
            <button type="button" class="yt-bm-del" data-action="del" data-t="${n.t}" title="Delete">\u2715</button>
          </div>
        `}).join("")}function ko(t){const e=i("yt-bookmark-add"),o=i("yt-bookmark-toggle"),n=i("yt-bookmarks-panel");if(!e||!o||!n)return;const a=!!t?.bookmarks;if(e.style.display=a?"inline-flex":"none",o.style.display=a?"inline-flex":"none",n.style.display=a&&f.bookmarksPanelOpen?"block":"none",!a)return;const c=U();c&&(Ue(c),!f.bookmarkClickHandlerInitialized&&(f.bookmarkClickHandlerInitialized=!0,document.addEventListener("click",r=>{const d=r.target;if(!(d instanceof Element))return;const l=d.closest("#yt-bookmark-add"),v=d.closest("#yt-bookmark-toggle"),m=d.closest("[data-action][data-t]");if(l){r.preventDefault(),r.stopPropagation();const h=p("video"),k=U();if(!h||!k)return;const L=Math.floor(h.currentTime||0),A=Ce(L),N=prompt("Bookmark name (optional):",A)||A;vo(k,L,N),f.bookmarksPanelOpen=!0,n.style.display="block",Ue(k),H("success",`Bookmark saved at ${A}`);return}if(v){r.preventDefault(),r.stopPropagation(),f.bookmarksPanelOpen=!f.bookmarksPanelOpen,n.style.display=f.bookmarksPanelOpen?"block":"none";const h=U();h&&f.bookmarksPanelOpen&&Ue(h);return}if(m){r.preventDefault(),r.stopPropagation();const h=m.getAttribute("data-action"),k=Number(m.getAttribute("data-t")),L=p("video"),A=U();if(!L||!A)return;h==="go"?(L.currentTime=Math.max(0,k||0),L.play?.().catch(()=>{})):h==="del"&&(yo(A,k),Ue(A))}})))}function wo(t){if(!t)return null;const e=String(t).trim().toLowerCase();if(!e)return null;let o=1,n=e.replace(/\s+/g,"");if(n.includes("mil")?(o=1e3,n=n.replace("mil","")):n.includes("k")?(o=1e3,n=n.replace("k","")):n.includes("m")&&(o=1e6,n=n.replace("m","")),n=n.replace(/[^\d.,]/g,""),!n)return null;const a=n.lastIndexOf("."),c=n.lastIndexOf(",");let r=n;if(a!==-1&&c!==-1){const l=Math.max(a,c),v=n.slice(0,l).replace(/[.,]/g,""),m=n.slice(l+1);r=`${v}.${m}`}else r=n.replace(",",".");const d=Number.parseFloat(r);return Number.isFinite(d)?Math.round(d*o):null}async function xo(){const t=U();if(!t)return null;const e=Date.now();if(f.dislikesCache.videoId===t&&f.dislikesCache.dislikes!=null&&e-f.dislikesCache.ts<600*1e3)return f.dislikesCache.dislikes;const o=me(t);if(o&&o.dislikes!=null)return f.dislikesCache={videoId:t,dislikes:o.dislikes,ts:e},o.dislikes;try{const a=await(await fetch(`${Ke}${t}`)).json(),c=Number(a?.dislikes),r=Number(a?.viewCount),d=Number(a?.rating);if(Number.isFinite(c)){f.dislikesCache={videoId:t,dislikes:c,ts:e};const l=lt();return ot(t,l??void 0,c,Number.isFinite(r)?r:void 0,Number.isFinite(d)&&d>=0&&d<=5?d:void 0),c}}catch{}return null}function lt(){const t=p("#top-level-buttons-computed like-button-view-model button-view-model button")||p("#top-level-buttons-computed like-button-view-model button")||p("#top-level-buttons-computed ytd-toggle-button-renderer:nth-child(1)")||p("segmented-like-dislike-button-view-model like-button-view-model");if(!t)return null;const e=[t.querySelector?.(".yt-spec-button-shape-next__button-text-content")?.textContent,t.textContent,t.getAttribute?.("aria-label")].filter(Boolean);for(const o of e){const n=wo(o);if(n!=null)return n}return null}function Co(t,e){const o=i("button_copy_description"),n=p("#top-level-buttons-computed")||p("ytd-watch-metadata #top-level-buttons-computed");if(!n&&!o)return;let a=i("yt-like-dislike-bar-mdcm");if(!a)a=document.createElement("div"),a.id="yt-like-dislike-bar-mdcm",a.innerHTML='<div class="like"></div><div class="dislike"></div>',o?o.insertAdjacentElement("beforebegin",a):n.appendChild(a);else if(o&&a.previousElementSibling!==o)try{o.insertAdjacentElement("beforebegin",a)}catch{}if(!Number.isFinite(t)||!Number.isFinite(e)||t+e<=0){a.style.display="none";return}const c=t+e,r=Math.max(0,Math.min(100,t/c*100)),d=100-r;a.style.display="block";const l=a.querySelector(".like"),v=a.querySelector(".dislike");l.style.width=`${r}%`,v.style.width=`${d}%`,a.title=`Likes: ${t.toLocaleString()} | Dislikes: ${e.toLocaleString()}`}async function So(t){if(!t?.likeDislikeBar){const a=i("yt-like-dislike-bar-mdcm");a&&(a.style.display="none");return}if(!window.location.href.includes("youtube.com/watch"))return;const e=U();if(!e)return;const o=await xo();let n=lt();if(n==null){const a=me(e);a?.likes!=null&&(n=a.likes)}o==null||n==null||Co(n,o)}function xt(t,e=4){if(!t?.likeDislikeBar)return;let o=0;const n=async()=>{o+=1,await So(t);const a=i("yt-like-dislike-bar-mdcm");a&&a.style.display!=="none"||o<e&&setTimeout(n,800)};setTimeout(n,300)}async function Ct(){if(W=document.location.href,p("#below > ytd-watch-metadata > div")!=null&&document.location.href.split("?v=")[0].includes("youtube.com/watch")){W=tt();let e=null;const o=me(W);if(o&&o.dislikes!=null)e=o.dislikes;else{const n=`${Ke}${W}`;try{const c=await(await fetch(n)).json();if(e=Number(c?.dislikes),Number.isFinite(e)){const r=lt(),d=Number(c?.viewCount),l=Number(c?.rating);ot(W,r??void 0,e,Number.isFinite(d)?d:void 0,Number.isFinite(l)&&l>=0&&l<=5?l:void 0)}}catch(a){console.log(a)}}if(e!=null){const n=p("#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > dislike-button-view-model > toggle-button-view-model > button-view-model > button");n!==void 0&&(n.style="width: 90px",n.innerHTML=`
              <svg class="svg-dislike-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" /></svg>
              ${pe(e,0)}`),f.dislikesCache={videoId:W,dislikes:e,ts:Date.now()};try{const a=JSON.parse(GM_getValue("ytSettingsMDCM","{}"));xt(a,5)}catch{}}}}async function St(){W=document.location.href;const t=$("#button-bar > reel-action-bar-view-model > dislike-button-view-model > toggle-button-view-model > button-view-model > label > div > span");if(t!=null&&document.location.href.split("/")[3]==="shorts"){W=document.location.href.split("/")[4];let e=null,o=null,n=null;const a=me(W);if(a&&a.dislikes!=null)e=a.dislikes,o=a.viewCount??null,n=a.rating??null;else{const c=`${Ke}${W}`;try{const d=await(await fetch(c)).json();e=Number(d?.dislikes),o=Number(d?.viewCount),n=Number(d?.rating),Number.isFinite(e)&&ot(W,void 0,e,Number.isFinite(o)?o:void 0,Number.isFinite(n)&&n>=0&&n<=5?n:void 0)}catch(r){console.log(r)}}if(e!=null)for(let c=0;c<t.length;c++)t[c].textContent=`${pe(e,0)}`;f.updateShortsViewsButton&&f.updateShortsViewsButton(W,o),f.updateShortsRatingButton&&f.updateShortsRatingButton(W,n)}}let ct,Mt=!1;setInterval(()=>{const t=p(".svg-dislike-ico"),e=window.location.href;ct!==void 0&&e!==ct&&!t&&Mt&&setTimeout(async()=>{await Ct(),await St()},2e3),ct=e},1e3);let be=null;try{const t=typeof unsafeWindow<"u"?unsafeWindow.trustedTypes:window.trustedTypes;if(t&&(be=t.defaultPolicy,!be))try{be=t.createPolicy("default",{createHTML:e=>e})}catch{be=t.defaultPolicy||null}}catch{be=null}GM_addStyle(`
       @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
      @import url("https://cdn.jsdelivr.net/npm/izitoast@1.4.0/dist/css/iziToast.min.css");
      :root {
              --primary-custom: #ff0000 !important;
              --bg-dark-custom: #1a1a1a !important;
              --bg-card-custom: #252525 !important;
              --text-custom: #ffffff !important;
              --text-custom-secondary: #9e9e9e !important;
              --accent-custom: #ff4444 !important;
          }
        body .container-mdcm {
              font-family: "Inter", -apple-system, sans-serif;
              color: var(--yt-enhance-menu-text, --text-custom);
        }
        #toggle-button:hover {
          background-color: rgba(255,255,255,0.1);
          border-radius: 50%;
          opacity: 1 !important;
          }
        .container-mdcm {
            width: 420px;
            max-width: 420px;
            background-color: var(--yt-enhance-menu-bg, #252525);
            border-radius: 16px 16px 0 0;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            flex-direction: column;
            max-height: 80vh;
            overflow-y: auto;
            overflow-x: hidden;
            height: auto;
        }

        #shareDropdown {
        display: none;
        position: absolute;
        top: 50px;
        right: 100px;
        background-color: var(--yt-enhance-menu-bg, #252525);
        border-radius: 6px;
        padding: 10px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
        z-index: 11;
        }
        #shareDropdown a {
        color: var(--text-custom);
        text-decoration: none;
        line-height: 2;
        font-size: 14px;
        }
        #shareDropdown a:hover {
        color: var(--primary-custom);
        }
        .header-mdcm {
            padding: 12px 16px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            position: sticky;
            top: 0;
            background-color: var(--yt-enhance-menu-bg, #252525);
            border-radius: 16px 16px 0 0;
            z-index: 10;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-mdcm h1 {
            font-size: 16px;
            margin: 0;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
        }


        .header-mdcm i {
         color: var(--primary-custom)
        }


        .icons-mdcm {
            display: flex;
            gap: 4px;
        }
        .icons-mdcm i {
          color: var(--yh-enhance-menu-accent, var(--text-custom));
        }


        .icon-btn-mdcm {
            background: rgba(255,255,255,0.1);
            border: none;
            color: var(--text-custom);
            width: 28px;
            height: 28px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s;
        }

        .icon-btn-mdcm:hover {
            background: rgba(255,255,255,0.2);
            transform: translateY(-2px);
        }

        .icon-btn-mdcm i {
         color: var(--text-custom);
         outline: none;
         text-decoration: none;
        }

        .tabs-mdcm {
            padding: 10px 12px;
            margin: 10px 0;
            position: sticky;
            top: 50px;
            background-color: var(--yt-enhance-menu-bg, #252525);
            z-index: 10;
            display: flex;
            gap: 8px;
            -ms-overflow-style: none;
            padding-bottom: 8px;
        }



        .tabs-mdcm::-webkit-scrollbar {
            height: 0px;
            background-color: transparent;
        }

        .tabs-mdcm:hover::-webkit-scrollbar {
            height: 6px;
        }

        .tabs-mdcm::-webkit-scrollbar-thumb {
            background-color: rgba(255, 0, 0, 0.5);
            border-radius: 3px;
        }

        .tabs-mdcm::-webkit-scrollbar-track {
            background-color: transparent;
        }

        .tab-mdcm {
            padding: 6px 10px;
            border: none;
            background: rgba(255,255,255,0.05);
            cursor: pointer;
            font-size: 12px;
            color: var(--text-custom-secondary);
            border-radius: 6px;
            transition: all 0.3s;
            flex: 1;
            display: flex;
            align-items: center;
            gap: 6px;
            flex-shrink: 0;
            justify-content: center;
            white-space: nowrap;
        }

        .tab-mdcm svg {
            width: 14px;
            height: 14px;
            fill: currentColor;
        }

        .tab-mdcm.active {
            background: var(--yt-enhance-menu-accent, --primary-custom) !important;
            color: var(--text-custom);
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(255,0,0,0.2);
        }

        .tab-mdcm:hover:not(.active) {
            background: rgba(255,255,255,0.1);
            transform: translateY(-1px);
        }

        .options-mdcm {
            flex: 1;
            overflow-y: auto;
            padding: 0 16px 0;
            scrollbar-width: thin;
            scrollbar-color: var(--primary-custom) var(--bg-dark-custom);
            max-height: 300px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 8px;
        }

        .options-settings-mdcm {
            flex: 1;
            overflow-y: auto;
            padding: 0 16px 0;
            scrollbar-width: thin;
            scrollbar-color: var(--primary-custom) var(--bg-dark-custom);
            max-height: 300px;
            display: grid;
            gap: 8px;
        }

         .card-items-end {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 175px;
        }

         .radio-mdcm {
            width: 14px;
            height: 14px;
            accent-color: var(--primary-custom);
        }

        .color-picker-mdcm {
            width: 50px;
            height: 24px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s;
        }

        .color-picker-mdcm:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        .options-mdcm::-webkit-scrollbar, .options-settings-mdcm::-webkit-scrollbar {
            width: 6px;
        }

        .options-mdcm::-webkit-scrollbar-track, .options-settings-mdcm::-webkit-scrollbar-track {
            background: var(--bg-dark-custom);
            border-radius: 3px;
        }

        .options-mdcm::-webkit-scrollbar-thumb, .options-settings-mdcm::-webkit-scrollbar-thumb {
            background: var(--primary-custom);
            border-radius: 3px;
        }

        .options-mdcm::-webkit-scrollbar-thumb:hover, .options-settings-mdcm::-webkit-scrollbar-thumb:hover {
            background: var(--accent-custom);
        }

        .options-mdcm::after, .options-settings-mdcm::after {
            content: '';
            display: block;
        }

        .option-mdcm {
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
            margin-bottom: 0;
            padding: 5px;
            background: rgba(255,255,255,0.05);
            border-radius: 6px;
            transition: all 0.3s;
            border: 1px solid rgba(255,255,255,0.05);
            color: var(--yt-)
            gap: 6px;
        }

        .option-mdcm:hover {
            background: rgba(255,255,255,0.08);
            border-color: rgba(255,255,255,0.1);
        }
        .option-settings-mdcm {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0;
          padding: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          transition: all 0.3s;
          border: 1px solid rgba(255, 255, 255, 0.05);
          gap: 6px;
        }

        .option-settings-mdcm:hover {
            background: rgba(255,255,255,0.08);
            border-color: rgba(255,255,255,0.1);
        }
            .tab-content {
            display: none;
        }
            .tab-content.active {
                display: block;
                margin-bottom: 10px;
            }

        .checkbox-mdcm {
            width: 14px;
            height: 14px;
            accent-color: var(--yt-enhance-menu-accent, --primary-custom) !important;
        }

        label {
            font-size: 12px;
            color: var(--text-custom);
        }

        .slider-container-mdcm {
            background: rgba(255,255,255,0.05);
            padding: 10px;
            border-radius: 6px;
        }

        .slider-mdcm {
            width: 100%;
            height: 3px;
            accent-color: var(--yt-enhance-menu-accent, --primary-custom) !important;
            margin: 10px 0;
        }

        .reset-btn-mdcm {
            padding: 5px 10px;
            border: 1px solid rgba(255,255,255,0.2);
            background: rgba(255,255,255,0.1);
            color: var(--text-custom);
            border-radius: 4px;
            cursor: pointer;
            font-size: 11px;
            transition: all 0.3s;
        }

        .reset-btn-mdcm:hover {
            background: rgba(255,255,255,0.2);
        }

        .quality-selector-mdcm select {
            position: relative;
            padding: 3px;
            outline: none;
            border-radius: 4px;
            border: 1px solid rgba(255,255,255,0.2);
            background: var(--yt-enhance-menu-accent, --primary-custom) !important;
            color: var(--text-custom);
            width: fit-content;
            appearance: none;
            cursor: pointer;
            font-size: 11px;
        }


        .quality-selector-mdcm {
            background: rgba(255,255,255,0.05);
            padding: 10px;
            border-radius: 6px;
        }

        .select-wrapper-mdcm {
          position: relative;
          display: inline-block;
        }

        .select-wrapper-mdcm select {
          -webkit-appearance: auto;
          -moz-appearance: auto;
        }

        .actions-mdcm {
            position: sticky;
            top: 0;
            padding: 12px 16px;
            backdrop-filter: blur(15px);
            background-color: var(--yt-enhance-menu-bg, #252525);
            display: flex;
            gap: 6px;
            width: 390px;
            border-radius: 0 0 16px 16px;
            justify-content: space-between;
            align-items: center;
        }

        .action-buttons-mdcm {
            display: flex;
            gap: 6px;
        }

        .action-btn-mdcm {
            flex: 1;
            padding: 8px;
            border: none;
            border-radius: 6px;
            background: var(--primary-custom);
            color: var(--text-custom);
            cursor: pointer;
            font-size: 12px;
            font-weight: 500;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            box-shadow: 0 4px 12px rgba(255,0,0,0.2);
        }

        .action-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(255,0,0,0.3);
        }

        textarea.textarea-mdcm {
            width: 100%;
            height: 50px;
            margin-top: 10px;
            margin-bottom: 12px;
            padding: 8px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 6px;
            color: var(--text-custom);
            font-size: 11px;
            resize: none;
            transition: all 0.3s;
        }

        textarea.textarea-mdcm:focus {
            outline: none;
            border-color: var(--primary-custom);
            background: rgba(255,255,255,0.08);
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .container-mdcm {
            animation: fadeIn 0.3s ease-out;
        }

        .developer-mdcm {
            font-size: 10px;
            color: var(--text-custom-secondary);
        }

        .developer-mdcm a {
            color: var(--primary-custom);
            text-decoration: none;
        }

        /* Styles for the import/export area */
        #importExportArea {
            display: none;
            padding: 16px;
            margin: 0px;
            background-color: var(--yt-enhance-menu-bg, #252525);
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        #importExportArea.active {
            display: block;
            margin-top: 10px;
        }

        /* Style the textarea */
        #importExportArea textarea {
            width: 370px;
            height: 20px;
            margin-bottom: 10px;
            padding: 8px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 6px;
            background-color: rgba(255, 255, 255, 0.05);
            color: var(--text-custom);
            font-size: 12px;
            resize: vertical;
        }

        /* Style the buttons */
        #importExportArea .action-buttons-mdcm  {
            display: flex;
            justify-content: space-between;
            gap: 10px;
        }

        #importExportArea .action-btn-mdcm {
            flex: 1;
            padding: 10px 16px;
            border: none;
            border-radius: 6px;
            background-color: var(--primary-custom);
            color: var(--text-custom);
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        #importExportArea .action-btn-mdcm:hover {
            background-color: var(--accent-custom);
        }

      #yt-stats {
      position: fixed;
      top: 60px;
      right: 20px;
      background: #1a1a1a;
      color: white;
      padding: 15px;
      border-radius: 10px;
      width: 320px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      font-family: Arial, sans-serif;
      display: none;
      }
  #yt-stats-toggle {
      font-size: 12px;
      color: #fff;
      padding: 12px 20px;
      border-radius: 5px;
      cursor: pointer;
  }
  .stat-row {
      margin: 15px 0;
  }
  .progress {
      height: 6px;
      overflow: hidden;
      background: #333;
      border-radius: 3px;
      margin: 8px 0;
  }
  .progress-bar {
      height: 100%;
      transition: width 0.3s;
  }
  .total-bar { background: #44aaff !important; }
  .video-bar { background: #00ff88 !important; }
  .shorts-bar { background: #ff4444 !important; }
  #cinematics {
    position: absolute !important;
    width: 90vw !important;
    height: 100vh ;
  }
    #cinematics div {
        position: fixed;
      inset: 0px;
      pointer-events: none;
      transform: scale(1.5, 2);
  }
      #cinematics > div > div > canvas:nth-child(1), #cinematics > div > div > canvas:nth-child(2) {
   position: absolute !important;
    width: 90vw !important;
    height: 100vh ;
      }

    // .html5-video-player.unstarted-mode {
    //  background-image: url('https://avatars.githubusercontent.com/u/54366580?v=4');
    // background-repeat: no-repeat;
    // background-position: 50% 50%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // }

        #yt-enhancement-panel {
            position: fixed;
            top: 60px;
            right: 20px;
            z-index: 9999;
        }

        .color-picker {
            width: 100%;
            margin: 0;
            padding: 0;
            border: none;
            background: none;
        }
        .slider {
            width: 100%;
        }
         #toggle-panel {
            z-index: 10000;
            color: white;
            padding: 5px;
            border: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            transition: all 0.5s ease;
            width: 43px;
            border-radius: 100px;
        }

        #icon-menu-settings {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        padding: 7px;
        font-size: 20px;
        color: var(--yt-spec-icon-inactive);
        cursor: pointer;
        user-select: none;
        filter: drop-shadow(2px 4px 6px black);
        }

        .theme-option {
            margin-bottom: 15px;
        }
        .theme-option label {
            display: flex;
            align-items: center;
        }
       .theme-option {
    position: relative;
    width: auto;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
}

.theme-preview {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    border: 1px solid #000;
    z-index: 1;
}

.theme-option input[type="radio"] {
    position: relative;
    z-index: 2;
    margin-right: 10px;
    cursor: pointer;
}

.theme-name {
    position: relative;
    z-index: 2;
    font-size: 15px;
    color: #fff;
}

.theme-option label {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    z-index: 2;
}

  .buttons-tranlate, .select-traductor {
        background: #000;
        font-size: 10px;
        border: none;
        color: #fbf4f4 !important;
        padding: 3px 0;
        margin-left: 10px;
        width: 70px;
        border-radius: 10px;
        }
        .buttons-tranlate:hover {
        cursor: pointer;
        background-color: #6b6b6b;
        }
         button.botones_div {
         margin: 0;
         padding: 0;
         }
         button.botones_div:hover {
         cursor: pointer;
         color: #6b6b6b !important;
         }

        .tab-button:hover {
          background-color: #ec3203 !important;
          color: #ffffff !important;
          cursor: pointer;
        }

        .traductor-container {
            display: inline-block;
            align-items: center;
            gap: 8px;
            margin-top: 4px;
          }

        #eyes {
      opacity: 0;
      position: absolute;
      height: 24px;
      left: 0;
      width: 24px;
    }

    /* width */
    ::-webkit-scrollbar {
      width: 4px;
      height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ##d5d5d5;

    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #000;

    }

    .color-boxes {
      display: flex;
      gap: 8px;
    }
    .color-box {
      width: 20px;
      height: 20px;
      border: 1px solid rgb(221 221 221 / 60%);
      border-radius: 4px;
      cursor: pointer;
    }
    .color-box.selected {
      border: 2px solid var(--primary-custom);
      filter: drop-shadow(0px 1px 6px red);
    }

    .containerButtons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    .containerButtons > button:hover {
      cursor: pointer;
    }

        /* Download Container Styles */
        .download-container {
          width: 50%;
          padding: 12px;
          border-radius: 8px;
          margin-top: 8px;
          transition: all 0.3s ease;
        }

        .download-container.video {
          background: linear-gradient(135deg, #ff4444, #cc0000);
          color: white;
        }

        .download-container.audio {
          background: linear-gradient(135deg, #00cc44, #009933);
          color: white;
        }

        .download-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .download-text {
          font-weight: 600;
          font-size: 14px;
        }

        .download-quality {
          font-size: 12px;
          opacity: 0.9;
        }

        .progress-container {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .progress-bar {
          flex: 1;
          height: 6px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 3px;
          width: 0%;
          transition: width 0.3s ease;
        }

        .progress-text {
          font-size: 12px;
          font-weight: 500;
          min-width: 30px;
        }

        .download-footer {
          font-size: 10px;
          opacity: 0.7;
          text-align: center;
        }
        .download-footer a {
          text-decoration: none;
          color: #fff;
        }

        .download-container.completed {
          color: #fff;
          background: linear-gradient(135deg, #00cc44, #009933) !important;
        }

        .download-container.completed .download-text {
          font-weight: 700;
        }

      /* Bookmarks panel (under video buttons) */
      .yt-bookmarks-panel {
        margin-top: 10px;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 10px;
        padding: 8px;
      }
      .yt-bm-empty {
        font-size: 12px;
        color: var(--text-custom-secondary);
      }
      .yt-bm-item {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 8px;
        align-items: center;
        padding: 6px;
        border-radius: 8px;
      }
      .yt-bm-item:hover {
        background: rgba(255,255,255,0.06);
      }
      .yt-bm-go {
        border: none;
        border-radius: 6px;
        padding: 4px 8px;
        background: rgba(34,197,94,0.2);
        color: #fff;
        cursor: pointer;
        font-size: 12px;
        white-space: nowrap;
      }
      .yt-bm-label {
        font-size: 12px;
        color: var(--text-custom);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .yt-bm-del {
        border: none;
        border-radius: 6px;
        padding: 4px 8px;
        background: rgba(239,68,68,0.2);
        color: #fff;
        cursor: pointer;
        font-size: 12px;
      }

      /* Continue watching panel (under video buttons) */
      .yt-continue-watching-panel {
        margin-top: 10px;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 10px;
        padding: 8px;
      }
      .yt-cw-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 8px;
      }
      .yt-cw-header-title {
        font-size: 12px;
        font-weight: 600;
        color: var(--text-custom, #fff);
      }
      .yt-cw-clear {
        border: none;
        border-radius: 6px;
        padding: 4px 8px;
        background: rgba(239,68,68,0.18);
        color: #fff;
        cursor: pointer;
        font-size: 12px;
      }
      .yt-cw-empty {
        font-size: 12px;
        color: var(--text-custom-secondary, #aaa);
      }
      .yt-cw-item {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 10px;
        align-items: center;
        padding: 8px;
        border-radius: 10px;
      }
      .yt-cw-item:hover {
        background: rgba(255,255,255,0.06);
      }
      .yt-cw-thumb-wrap {
        width: 72px;
        height: 40px;
        border-radius: 8px;
        overflow: hidden;
        background: rgba(255,255,255,0.08);
        flex: none;
      }
      .yt-cw-thumb {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .yt-cw-title {
        font-size: 12px;
        font-weight: 600;
        color: var(--text-custom, #fff);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 520px;
      }
      .yt-cw-meta {
        font-size: 12px;
        color: var(--text-custom-secondary, #aaa);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .yt-cw-actions {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .yt-cw-go {
        border: none;
        border-radius: 6px;
        padding: 4px 8px;
        background: rgba(34,197,94,0.2);
        color: #fff;
        cursor: pointer;
        font-size: 12px;
        white-space: nowrap;
      }
      .yt-cw-del {
        border: none;
        border-radius: 6px;
        padding: 4px 8px;
        background: rgba(239,68,68,0.2);
        color: #fff;
        cursor: pointer;
        font-size: 12px;
      }

      /* Shorts channel name label (Home/feed Shorts lockups) */
      html:not([data-mdcm-shorts-channel-name="1"]) .yt-tools-shorts-channel-name {
        display: none !important;
      }
      .yt-tools-shorts-channel-name {
        font-size: 12px;
        line-height: 1.2;
        color: var(--yt-spec-text-secondary, #aaa);
        margin-bottom: 2px;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .yt-tools-shorts-stats-wrap {
        margin-top: 4px;
        font-size: 11px;
        line-height: 1.2;
        color: var(--yt-spec-text-secondary, #aaa);
      }
      .yt-tools-shorts-stats-wrap .yt-tools-shorts-stats-row {
        display: inline-flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 2px;
      }

      /* Like vs dislike bar (under likes/dislikes) */
      #yt-like-dislike-bar-mdcm {
        height: 6px;
        border-radius: 999px;
        overflow: hidden;
        margin-top: 6px;
        background: rgba(255,255,255,0.12);
        max-width: 305px;
      }
      #yt-like-dislike-bar-mdcm .like {
        height: 100%;
        background: #22c55e;
        float: left;
      }
      #yt-like-dislike-bar-mdcm .dislike {
        height: 100%;
        background: #ef4444;
        float: left;
      }

        .progress-retry-btn {
          position: absolute;
          top: 116px;
          right: 50%;
          width: 24px;
          height: 24px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          transition: all 0.3s ease;
        }

        .progress-retry-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .download-again-btn {
          position: absolute;
          top: 116px;
          left: 50%;
          width: 24px;
          height: 24px;
          border: none;
          border-radius: 50%;
          background: rgba(34, 197, 94, 0.35);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          transition: all 0.3s ease;
        }

        .download-again-btn:hover {
          background: rgba(34, 197, 94, 0.5);
          transform: scale(1.1);
        }

        .download-container {
          position: relative;
        }

        .download-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
        }

        .download-btn {
          flex: 1;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          font-weight: 600;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: white;
        }

        .download-btn.video-btn {
          background: linear-gradient(135deg, #ff6666, #ff4444);
        }

        .download-btn.audio-btn {
          background: linear-gradient(135deg, #00dd55, #00cc44);
        }

        .download-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        .download-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .retry-btn {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          font-weight: 600;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #ffaa00, #ff8800);
          color: white;
        }

        .retry-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }

      body {
      padding: 0;
      margin: 0;
      overflow-y: scroll;
      overflow-x: hidden;
      }
      .style-scope.ytd-comments {
      overflow-y: auto;
      overflow-x: hidden;
      height: auto;
      }
      ytd-comment-view-model[is-reply] #author-thumbnail.ytd-comment-view-model yt-img-shadow.ytd-comment-view-model, ytd-comment-view-model[is-creator-reply] #author-thumbnail.ytd-comment-view-model yt-img-shadow.ytd-comment-view-model {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
        img.yt-img-shadow {
        border-radius: 50% !important;
        }
        #author-thumbnail.ytd-comment-view-model yt-img-shadow.ytd-comment-view-model {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: visible;
        }
      ytd-item-section-renderer.ytd-watch-next-secondary-results-renderer {
        --ytd-item-section-item-margin: 8px;
        overflow-y: auto;
        overflow-x: hidden;
        height: auto;
      }
      .right-section.ytcp-header {
      display: flex;
      flex: 1;
      align-items: center;
      gap: 45px;
      justify-content: end;
    }
      #meta.ytd-playlist-panel-video-renderer {
    min-width: 0;
    padding: 0 8px;
    display: flexbox;
    display: flex;
    flex-direction: column-reverse;
    flex: 1;
    flex-basis: 0.000000001px;
}

    .containerall {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding-bottom: 30px;
      max-width: 800px;
      margin: auto;
    }
    }
    .container .botoncalidades {
      margin: 3px 2px;
      width: 24.6%;
    }

    .botoncalidades:first-child {
      background-color: #0af;
    }

    .botoncalidades:last-child {
      background-color: red;
      width: 100px;
    }

    .selectcalidades,
    .botoncalidades,
    .selectcalidadesaudio {
      width: 50%;
      height: 27.8px;
      background-color: #fff;
      color: #000;
      font-size: 25px;
      text-align: center;
      border: 1px solid black;
      border-radius: 10px;
      border: none;
      font-size: 20px;
      margin: 2px 2px;
    }

    .botoncalidades {
      width: 70px;
      height: 30px;
      background-color: rgb(4, 156, 22);
      border: 0px solid #000;
      color: #fff;
      font-size: 20px;
      border-radius: 10px;
      margin: 2px 2px;
    }

    .botoncalidades:hover,
    .bntcontainer:hover {
      cursor: pointer;
    }

   .ocultarframe,
    .ocultarframeaudio {
      display: none;
    }
      .checked_updates {
      cursor: pointer;
      }

      #export-config, #import-config {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background-color: var(--yt-enhance-menu-accent, --primary-custom) !important;;
        color: #ffffff;
        border: none;
        padding: 5px;
      }
        #export-config:hover, #import-config:hover {
          background-color: #ff0000;
          color: #ffffff;
          cursor: pointer;
        }

        .yt-image-avatar-download {
          position: absolute;
          bottom: -10px;
          right: -14px;
          border: none;
          z-index: 1000;
          background: transparent;
          filter: drop-shadow(1px 0 6px red);
          color: var(--ytcp-text-primary);
          cursor: pointer;
        }

        .custom-classic-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255,255,255,0.1);
          border-radius: 50%;
          border: none;
          width: 48px;
          height: 48px;
          color: var(--yt-spec-icon-inactive);
          font-size: 24px;
          margin: 0px 8px;
          cursor: pointer;
        }
        .custom-classic-btn:hover {
          background-color: rgba(255,255,255,0.2);
        }
        .background-image-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        margin: 10px 0;
      }

      .background-image-preview {
        width: 160px;
        height: 90px;
        border-radius: 10px;
        background-size: cover;
        background-position: center;
        border: 2px solid #444;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: box-shadow 0.2s;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        overflow: hidden;
      }

      .background-image-preview:hover .background-image-overlay {
        opacity: 1;
      }

      .background-image-overlay {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
        background: rgba(0,0,0,0.35);
        font-size: 18px;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      .background-image-preview:hover .background-image-overlay,
      .background-image-preview:focus .background-image-overlay {
        opacity: 1;
      }

      .background-image-overlay i {
        font-size: 28px;
        margin-bottom: 4px;
      }

      .background-image-text {
        font-size: 13px;
        font-weight: 500;
        text-shadow: 0 1px 4px #000;
      }

      .remove-background-image {
        position: absolute;
        top: 6px;
        right: 6px;
        background: #e74c3c;
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 26px;
        height: 26px;
        font-size: 18px;
        cursor: pointer;
        z-index: 2;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 0;
        line-height: 1;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        transition: background 0.2s;
      }
      .remove-background-image:hover {
        background: #c0392b;
      }
      .background-image-preview.has-image .remove-background-image {
        display: flex;
      }

      ytd-feed-filter-chip-bar-renderer[not-sticky] #chips-wrapper.ytd-feed-filter-chip-bar-renderer {
        padding: 10px;
      }
      .text-description-download {
        font-size: 12px;
        text-align: center;
        margin-top: 10px;
        }
    `);const Lt=`
    <main>
    <div class="container">
    <form>
      <div class="containerButtons">
      
  <button title="Image video" class="botones_div" type="button" id="imagen">

  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-down" width="24"
    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M15 8h.01"></path>
    <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5"></path>
    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4"></path>
    <path d="M14 14l1 -1c.653 -.629 1.413 -.815 2.13 -.559"></path>
    <path d="M19 16v6"></path>
    <path d="M22 19l-3 3l-3 -3"></path>
  </svg>
</button>
  
      
  <button title="Buffer video" type="button" class="buffer_video botones_div">
 <svg width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-align-box-right-stretch"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 17h2" /><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M11 12h6" /><path d="M13 7h4" /></svg>
</button>
  
      
  <div style="position:relative; ">
  <button title="Filter eyes" class="botones_div" type="button">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brightness-half"
      width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
      fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 9a3 3 0 0 0 0 6v-6z"></path>
      <path
        d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5z">
      </path>
    </svg>
    <input id="eyes" list="presetColors" type="color" value="#ffffff">
  <datalist id="presetColors">
    <option value="#000000" />
    <option value="#fbff00" />
    <option value="#ff0000" />
    <option value="#00ff00" />
    <option value="#0000ff" />
  </datalist>
  <div id="ojosprotect"
  style="position: fixed; pointer-events: none; width: 100%; height: 100%; left: 0px; top: 0px; opacity: 0.2; z-index: 10; display: block;">
  </div>
</div>
</button>
  
      
  <button title="reset" class="botones_div" type="button" id="reset_button">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-power" width="24"
    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M7 6a7.75 7.75 0 1 0 10 0"></path>
    <path d="M12 4l0 8"></path>
  </svg>
</button>
  
      
  <button title="Repeat video" class="botones_div" type="button" id="repeatvideo">

  <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat" width="24"
    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
    <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
  </svg>
</button>
  
      
  <button title="Add bookmark" type="button" id="yt-bookmark-add" class="botones_div">
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M7 4h10a2 2 0 0 1 2 2v14l-7 -4l-7 4v-14a2 2 0 0 1 2 -2z" />
      <path d="M12 7v6" />
      <path d="M9 10h6" />
    </svg>
  </button>
  
      
  <button title="Show bookmarks" type="button" id="yt-bookmark-toggle" class="botones_div">
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M9 6h11" />
      <path d="M9 12h11" />
      <path d="M9 18h11" />
      <path d="M5 6h.01" />
      <path d="M5 12h.01" />
      <path d="M5 18h.01" />
    </svg>
  </button>
  
      
  <button title="History" type="button" id="yt-cw-history-toggle" class="botones_div" style="display:none;">
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 8v4l3 3" />
      <path d="M3 12a9 9 0 1 0 3 -6.7" />
      <path d="M3 4v4h4" />
    </svg>
  </button>
  
      
  <button title="MP4" type="button" class="btn1 botones_div">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download"
    width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
    <path d="M12 17v-6"></path>
    <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>
  </svg>
</button>
<button title="MP3" type="button" class="btn2 botones_div">

  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-music" width="24"
    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
    <path d="M11 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    <path d="M12 16l0 -5l2 1"></path>
  </svg>
</button>
<button title="Close" type="button" class="btn3 botones_div">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="24"
  height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
  stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
  <path d="M10 10l4 4m0 -4l-4 4"></path>
</svg>
</button>
  
      

  <button title="External Download" type="button" class="external_link botones_div">

  <svg class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
      <path d="M11 13l9 -9"></path>
      <path d="M15 4h5v5"></path>
   </svg>
</button>

  
      

  <button title="view External no cookie" type="button" class="view_external_link botones_div">

  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 16m0 1a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1z" /><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6" /><path d="M12 8h4v4" /><path d="M16 8l-5 5" /></svg>
</button>

  
      
  <button title="Picture to picture" type="button" class="video_picture_to_picture botones_div">

  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1z" /></svg>
</button>

  
      
  <button title="Screenshot video" type="button" class="screenshot_video botones_div">
  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01" /><path d="M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" /><path d="M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644" /><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /></svg>
</button>

  
      
  <button title="Check new updates" type="button" class="checked_updates botones_div">
  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></svg>
</button>
  
      </div>
      <div id="yt-bookmarks-panel" class="yt-bookmarks-panel" style="display:none;"></div>
      <div id="yt-continue-watching-panel" class="yt-continue-watching-panel" style="display:none;"></div>
      <div>
      </div>
    </form>

    </div>
    <div class="content_collapsible_colors" style="margin-top: 10px">

    <form class="formulariodescarga ocultarframe" action="">
    <div class="containerall">
    <select class="selectcalidades ocultarframe" required>
      <option selected disabled>Calidad del video / Quality video</option>
      <option value="144">144p Mp4</option>
      <option value="240">240p Mp4</option>
      <option value="360">360p Mp4</option>
      <option value="480">480p Mp4</option>
      <option value="720">720p HD Mp4 Default</option>
      <option value="1080">1080p FULL HD Mp4</option>
      <option value="4k">2160p 4K WEBM</option>
      <option value="8k">4320p 8K WEBM</option>
      </select>
      <div id="descargando" class="download-container ocultarframe">
        <button class="progress-retry-btn" title="Retry" style="display: none;">
        <i class="fa-solid fa-rotate-right"></i>
        </button>
        <button class="download-again-btn" title="Download again" style="display: none;">
        <i class="fa-solid fa-download"></i>
        </button>
        <div class="download-info">
          <span class="download-text">Download Video And Please Wait...</span>
          <span class="download-quality"></span>
        </div>
        <div class="download-actions">
          <button class="download-btn video-btn">Download</button>
          <button class="retry-btn" style="display: none;">Retry</button>
        </div>
        <div class="progress-container" style="display: none;">
          <div class="progress-bar">
            <div class="progress-fill"></div>
          </div>
          <span class="progress-text">0%</span>
        </div>
        <div class="download-footer">
          <a href="https://github.com/DeveloperMDCM/" target="_blank"> <i class="fa-brands fa-github"></i> by: DeveloperMDCM</a>
        </div>
        <h1 class="text-description-download">
          <span >Enable pop-ups on YouTube to download audio or video</span>
        </h1>
      </div>
    </div>
    </form>
    <form class="formulariodescargaaudio ocultarframe" action="">
    <div class="containerall">
    <select class="selectcalidadesaudio ocultarframeaudio" required>
      <option selected disabled>Calidad del Audio / Quality Audio</option>
      <option value="flac">Audio FLAC UHQ</option>
      <option value="wav">Audio WAV UHQ</option>
      <option value="webm">Audio WEBM UHQ</option>
      <option value="mp3">Audio MP3 Default</option>
      <option value="m4a">Audio M4A</option>
      <option value="aac">Audio AAC</option>
      <option value="opus">Audio OPUS</option>
      <option value="ogg">Audio OGG</option>
      </select>
      <div id="descargandomp3" class="download-container ocultarframeaudio">
        <button class="progress-retry-btn" title="Retry" style="display: none;">
        <i class="fa-solid fa-rotate-right"></i>
        </button>
        <button class="download-again-btn" title="Download again" style="display: none;">
        <i class="fa-solid fa-download"></i>
        </button>
        <div class="download-info">
          <span class="download-text">Download Audio And Please Wait...</span>
          <span class="download-quality"></span>
        </div>
        <div class="download-actions">
          <button class="download-btn audio-btn">Download</button>
          <button class="retry-btn" style="display: none;">Retry</button>
        </div>
        <div class="progress-container" style="display: none;">
          <div class="progress-bar">
            <div class="progress-fill"></div>
          </div>
          <span class="progress-text">0%</span>
        </div>
         <div class="download-footer">
          <a href="https://github.com/DeveloperMDCM/" target="_blank"><i class="fa-brands fa-github"></i> by: DeveloperMDCM</a>
        </div>
         <h1 class="text-description-download">
          <span >Enable pop-ups on YouTube to download audio or video</span>
        </h1>
      </div>
    </div>
    </form>
      </main>
  `,Tt=[{name:"Default / Reload",gradient:"",textColor:"",raised:"",btnTranslate:"",CurrentProgressVideo:"",videoDuration:"",colorIcons:"",textLogo:"",primaryColor:"",secondaryColor:""},{name:"Midnight Blue",gradient:"linear-gradient(135deg, #1e3a8a, #3b82f6)",textColor:"#ffffff",raised:"#f00",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Forest Green",gradient:"linear-gradient(135deg, #14532d, #22c55e)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Sunset Orange",gradient:"linear-gradient(135deg, #7c2d12, #f97316)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Royal Purple",gradient:"linear-gradient(135deg, #4c1d95, #8b5cf6)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Cherry Blossom",gradient:"linear-gradient(135deg, #a9005c, #fc008f)",textColor:"#ffffff",raised:"#fc008f",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Red Dark",gradient:"linear-gradient(135deg, #790909, #f70131)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Raind ",gradient:"linear-gradient(90deg, #3f5efb 0%, #fc466b) 100%",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Neon",gradient:"linear-gradient(273deg, #ee49fd 0%, #6175ff 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Azure",gradient:"linear-gradient(273deg, #0172af 0%, #74febd 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Butterfly",gradient:"linear-gradient(273deg, #ff4060 0%, #fff16a 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Colombia",gradient:"linear-gradient(174deg, #fbf63f  0%, #0000bb 45%, #ff0000 99%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"}],ce=te("div");ce.id="yt-enhancement-panel";const Mo=Tt.map((t,e)=>`
        <label >
          <div class="theme-option">
          <div class="theme-preview" style="background: ${t.gradient};"></div>
          <input type="radio" name="theme" value="${e}" ${e===0?"checked":""}>
              <span style="${t.name==="Default / Reload Page"?"color: red; ":""}" class="theme-name">${t.name}</span>
              </div>
        </label>
    `).join(""),Lo=Object.entries(Ye).map(([t,e])=>`<option value="${t}" ${t===Ye?"selected":""}>${e}</option>`).join("");function To(){const t=document.cookie.split("; ").find(c=>c.startsWith("PREF="));if(!t)return"light";const e=t.substring(5),n=new URLSearchParams(e).get("f6");return["400","4000000","40000400","40000000"].includes(n)?"dark":"light"}let dt=To();const Et=`
   <div class="container-mdcm">
    <div class="header-mdcm">
      <h1> <i class="fa-brands fa-youtube"></i> YouTube Tools</h1>
      <div class="icons-mdcm">
        <a href="https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.user.js"
          target="_blank">
          <button class="icon-btn-mdcm">
            <i class="fa-solid fa-arrows-rotate"></i>
          </button>
        </a>
        <a href="https://github.com/DeveloperMDCM" target="_blank">
          <button class="icon-btn-mdcm">
            <i class="fa-brands fa-github"></i>
          </button>
        </a>
        <button class="icon-btn-mdcm" id="shareBtn-mdcm">
          <i class="fa-solid fa-share-alt"></i>
        </button>
        <button class="icon-btn-mdcm" id="importExportBtn">
          <i class="fa-solid fa-file-import"></i>
        </button>
        <button id="menu-settings-icon" class="icon-btn-mdcm tab-mdcm" data-tab="menu-settings">
          <i class="fa-solid fa-gear"></i>
        </button>
        <button class="icon-btn-mdcm close_menu_settings">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>

    <div class="tabs-mdcm">
      <button class="tab-mdcm active" data-tab="general">
        <i class="fa-solid fa-shield-halved"></i>
        General
      </button>
      <button class="tab-mdcm" data-tab="themes">
        <i class="fa-solid fa-palette"></i>
        Themes
      </button>
      <button class="tab-mdcm" data-tab="stats">
        <i class="fa-solid fa-square-poll-vertical"></i>
        Stats
      </button>
      <button class="tab-mdcm" data-tab="headers">
        <i class="fa-regular fa-newspaper"></i>
        Header
      </button>
    </div>


    <div id="general" class="tab-content active">

      <div class="options-mdcm">
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="hide-comments-toggle"> Hide Comments
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="hide-sidebar-toggle"> Hide Sidebar
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="autoplay-toggle"> Disable Autoplay
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="subtitles-toggle"> Disable Subtitles
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" checked id="dislikes-toggle"> Show Dislikes
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="like-dislike-bar-toggle"> Like vs Dislike bar
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="bookmarks-toggle"> Bookmarks (timestamps)
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="continue-watching-toggle"> Continue watching
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="shorts-channel-name-toggle"> Shorts: show channel name
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="themes-toggle"> Active Themes
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="translation-toggle"> Translate comments
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="avatars-toggle"> Download avatars
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="reverse-mode-toggle"> Reverse mode
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="cinematic-lighting-toggle"> Cinematic Mode
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" checked id="wave-visualizer-toggle"> Wave visualizer Beta
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="sync-cinematic-toggle"> Sync Ambient Mode YT
          </div>
        </label>
        <div class="quality-selector-mdcm" style="grid-column: span 2;">
          <div class="select-wrapper-mdcm">
            <label>Effect wave visualizer:
              <select class="tab-button-active" id="select-wave-visualizer-select">
                <option value="linea">Line smooth</option>
                <option value="barras">Vertical bars</option>
                <option value="curva">Curved</option>
                <option value="picos">Smooth peaks</option>
                <option value="solida">Solid wave</option>
                <option value="dinamica">Dynamic wave</option>
                <option value="montana">Smooth mountain</option>
              </select>
            </label>
          </div>
        </div>
        <div class="quality-selector-mdcm" style="grid-column: span 2;">
          <div class="select-wrapper-mdcm">
            <label>Default video player quality:
              <select class="tab-button-active" id="select-video-qualitys-select">
                <option value="user">User Default</option>
                <option value="">Auto</option>
                <option value="144">144</option>
                <option value="240">240</option>
                <option value="360">360</option>
                <option value="480">480</option>
                <option value="720">720</option>
                <option value="1080">1080</option>
                <option value="1440">1440</option>
                <option value="2160">2160</option>
              </select>
            </label>
          </div>
        </div>
        <div class="quality-selector-mdcm" style="grid-column: span 2;">
          <div class="select-wrapper-mdcm">
            <label>Language for translate comments:
              <select class="tab-button-active" id="select-languages-comments-select">
              ${Lo}
              </select>
            </label>
          </div>
        </div>
        <div class="slider-container-mdcm" style="grid-column: span 2;">
          <label>Video Player Size: <span id="player-size-value">100</span>%</label>
          <input type="range" id="player-size-slider" class="slider-mdcm" min="50" max="150" value="100">
          <button class="reset-btn-mdcm" id="reset-player-size">Reset video size</button>
        </div>
      </div>
    </div>

    <div id="themes" class="tab-content">
     <div id="background-image-container" class="background-image-container">
     <h4>Background Image</h4>
  <input type="file" id="background_image" accept="image/png, image/jpeg" style="display:none;" />
  <div id="background-image-preview" class="background-image-preview">
    <span class="background-image-overlay">
      <i class="fa fa-camera"></i>
      <span class="background-image-text">Select image</span>
    </span>
    <button id="remove-background-image" class="remove-background-image" title="Quitar fondo">&times;</button>
  </div>
</div>
      <div class="themes-hidden">
        <div class="options-mdcm" style="margin-bottom: 10px;">
          <div>
            <h4>Choose a Theme</h4>
            <p>Disable Mode Cinematic on General</p>
            ${dt==="dark"?"":'<p style="color: red; margin: 10px 0;font-size: 11px;">Activate dark mode to use this option</p>'}
          </div>
        </div>
        <div class="options-mdcm">
          <label>
            <div class="theme-option option-mdcm">
              <input type="radio" class="radio-mdcm" name="theme" value="custom" checked>
              <span class="theme-name">Custom</span>
            </div>
          </label>
          <label>
            <div class="theme-option option-mdcm theme-selected-normal">
              <input type="radio" class="radio-mdcm" name="theme" value="normal">
              <span class="theme-name">Selected Themes</span>
            </div>
          </label>
        </div>
        <div class="themes-options">
          <div class="options-mdcm">
            ${Mo}
          </div>
        </div>
        <div class="theme-custom-options">
          <div class="options-mdcm">
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Progressbar Video:</label>
                <input type="color" id="progressbar-color-picker" class="color-picker-mdcm" value="#ff0000">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Background Color:</label>
                <input type="color" id="bg-color-picker" class="color-picker-mdcm" value="#000000">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Primary Color:</label>
                <input type="color" id="primary-color-picker" class="color-picker-mdcm" value="#ffffff">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Secondary Color:</label>
                <input type="color" id="secondary-color-picker" class="color-picker-mdcm" value="#ffffff">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Header Color:</label>
                <input type="color" id="header-color-picker" class="color-picker-mdcm" value="#000000">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Icons Color:</label>
                <input type="color" id="icons-color-picker" class="color-picker-mdcm" value="#ffffff">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Menu Color:</label>
                <input type="color" id="menu-color-picker" class="color-picker-mdcm" value="#000000">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Line Color Preview:</label>
                <input type="color" id="line-color-picker" class="color-picker-mdcm" value="#ff0000">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Time Color Preview:</label>
                <input type="color" id="time-color-picker" class="color-picker-mdcm" value="#ffffff">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="stats" class="tab-content">
      <div id="yt-stats-toggle">
        <div class="stat-row">
          <div>Foreground Time</div>
          <div class="progress">
            <div class="progress-bar total-bar" id="usage-bar"></div>
          </div>
          <div id="total-time">0h 0m 0s</div>
        </div>
        <div class="stat-row">
          <div>Video Time</div>
          <div class="progress">
            <div class="progress-bar video-bar" id="video-bar"></div>
          </div>
          <div id="video-time">0h 0m 0s</div>
        </div>
        <div class="stat-row">
          <div>Shorts Time</div>
          <div class="progress">
            <div class="progress-bar shorts-bar" id="shorts-bar"></div>
          </div>
          <div id="shorts-time">0h 0m 0s</div>
        </div>
      </div>
    </div>

    <div id="headers" class="tab-content">
      <div class="options-mdcm">
        <label>Available in next update</label>
      </div>
    </div>


    <div id="menu-settings" class="tab-content">
      <div class="options-mdcm">
        <h4 style="margin: 10px 0">Menu Appearance</h4>
      </div>
      <div class="options-settings-mdcm">
        <div class="option-settings-mdcm">
          <label>Backgrounds:</label>
          <div class="color-boxes" id="bg-color-options">
            <div class="color-box" data-type="bg" data-value="#252525" style="background-color: #252525;"></div>
            <div class="color-box" data-type="bg" data-value="#1e1e1e" style="background-color: #1e1e1e;"></div>
            <div class="color-box" data-type="bg" data-value="#3a3a3a" style="background-color: #3a3a3a;"></div>
            <div class="color-box" data-type="bg" data-value="#4a4a4a" style="background-color: #4a4a4a;"></div>
            <div class="color-box" data-type="bg" data-value="#000000" style="background-color: #000000;"></div>
            <div class="color-box" data-type="bg" data-value="#00000000" style="background-color: #00000000;"></div>
            <div class="color-box" data-type="bg" data-value="#2d2d2d" style="background-color: #2d2d2d;"></div>
            <div class="color-box" data-type="bg" data-value="#444" style="background-color: #444;"></div>
          </div>
        </div>

        <div class="option-settings-mdcm">
          <label>Accent Colors:</label>
          <div class="color-boxes" id="bg-accent-color-options">
            <div class="color-box" data-type="accent" data-value="#ff0000" style="background-color: #ff0000;"></div>
            <div class="color-box" data-type="accent" data-value="#000000" style="background-color: #000000;"></div>
            <div class="color-box" data-type="accent" data-value="#009c37 " style="background-color: #009c37 ;"></div>
            <div class="color-box" data-type="accent" data-value="#0c02a0 " style="background-color: #0c02a0 ;"></div>
          </div>
        </div>

        <div class="option-settings-mdcm">
          <label>Titles Colors:</label>
          <div class="color-boxes" id="text-color-options">
            <div class="color-box" data-type="color" data-value="#ffffff" style="background-color: #ffffff;"></div>
            <div class="color-box" data-type="color" data-value="#cccccc" style="background-color: #cccccc;"></div>
            <div class="color-box" data-type="color" data-value="#b3b3b3" style="background-color: #b3b3b3;"></div>
            <div class="color-box" data-type="color" data-value="#00ffff" style="background-color: #00ffff;"></div>
            <div class="color-box" data-type="color" data-value="#00ff00" style="background-color: #00ff00;"></div>
            <div class="color-box" data-type="color" data-value="#ffff00" style="background-color: #ffff00;"></div>
            <div class="color-box" data-type="color" data-value="#ffcc00" style="background-color: #ffcc00;"></div>
            <div class="color-box" data-type="color" data-value="#ff66cc" style="background-color: #ff66cc;"></div>
          </div>
        </div>
      </div>
    </div>

    <div id="importExportArea">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <h3>Import / Export Settings</h3>
        <button class="icon-btn-mdcm" id="closeImportExportBtn">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <textarea id="config-data" placeholder="Paste configuration here to import"></textarea>
      <div class="action-buttons-mdcm">
        <button id="export-config" class="action-btn-mdcm">Export</button>
        <button id="import-config" class="action-btn-mdcm">Import</button>
      </div>
    </div>

    <div id="shareDropdown">
      <a href="https://www.facebook.com/sharer/sharer.php?u=${Ve}" target="_blank" data-network="facebook"
        class="share-link"><i class="fa-brands fa-facebook"></i> Facebook</a><br>
      <a href="https://twitter.com/intent/tweet?url=${Ve}" target="_blank" data-network="twitter"
        class="share-link"><i class="fa-brands fa-twitter"></i> Twitter</a><br>
      <a href="https://api.whatsapp.com/send?text=${Ve}" target="_blank" data-network="whatsapp"
        class="share-link"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a><br>
      <a href="https://www.linkedin.com/sharing/share-offsite/?url=${Ve}" target="_blank"
        data-network="linkedin" class="share-link"><i class="fa-brands fa-linkedin"></i> LinkedIn</a><br>
    </div>


  </div>
  <div class="actions-mdcm">
    <div class="developer-mdcm">
      Developed by <a href="https://github.com/DeveloperMDCM" target="_blank"> <i class="fa-brands fa-github"></i> DeveloperMDCM</a>
    </div>
    <span style="color: #fff" ;>v2.4.3.2</span>
  </div>
  `,Eo=be?.createHTML?be.createHTML(`${Et}`):`${Et}`;ce.innerHTML=Eo,qt(ce);function _t(){const t=p("ytd-topbar-menu-button-renderer");if(!t||i("icon-menu-settings"))return;const e=te("div");e.id="toggle-button";const o=te("i");o.id="icon-menu-settings",o.classList.add("fa-solid","fa-gear"),e.appendChild(o),t.parentElement.insertBefore(e,t);let n=!1;e.addEventListener("click",()=>{n=!n,ce.style.display=ce.style.display==="none"?"block":"none"})}_t();let At=!1;p(".close_menu_settings").addEventListener("click",()=>{At=!At,ce.style.display=ce.style.display==="none"?"block":"none"});const Dt=$(".tab-mdcm"),_o=$(".tab-content");Dt.forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-tab");Dt.forEach(o=>o.classList.remove("active")),_o.forEach(o=>o.classList.remove("active")),t.classList.add("active"),i(e).classList.add("active")})});function $e(){const t={theme:p('input[name="theme"]:checked').value,bgColorPicker:i("bg-color-picker").value,progressbarColorPicker:i("progressbar-color-picker").value,primaryColorPicker:i("primary-color-picker").value,secondaryColorPicker:i("secondary-color-picker").value,headerColorPicker:i("header-color-picker").value,iconsColorPicker:i("icons-color-picker").value,menuColorPicker:i("menu-color-picker").value,lineColorPicker:i("line-color-picker").value,timeColorPicker:i("time-color-picker").value,dislikes:i("dislikes-toggle").checked,likeDislikeBar:i("like-dislike-bar-toggle").checked,bookmarks:i("bookmarks-toggle").checked,continueWatching:i("continue-watching-toggle").checked,shortsChannelName:i("shorts-channel-name-toggle").checked,themes:i("themes-toggle").checked,translation:i("translation-toggle").checked,avatars:i("avatars-toggle").checked,reverseMode:i("reverse-mode-toggle").checked,waveVisualizer:i("wave-visualizer-toggle").checked,waveVisualizerSelected:i("select-wave-visualizer-select").value,hideComments:i("hide-comments-toggle").checked,hideSidebar:i("hide-sidebar-toggle").checked,disableAutoplay:i("autoplay-toggle").checked,cinematicLighting:i("cinematic-lighting-toggle").checked,syncCinematic:i("sync-cinematic-toggle").checked,disableSubtitles:i("subtitles-toggle").checked,playerSize:i("player-size-slider").value,selectVideoQuality:i("select-video-qualitys-select").value,languagesComments:i("select-languages-comments-select").value,menu_developermdcm:{bg:ve,color:ye,accent:ke}};GM_setValue("ytSettingsMDCM",JSON.stringify(t))}function Ao(){const t=JSON.parse(GM_getValue("ytSettingsMDCM","{}"));f.settingsLoaded=!0,t.theme&&(p(`input[name="theme"][value="${t.theme}"]`).checked=!0),t.menu_developermdcm=t.menu_developermdcm||{bg:"#252525",color:"#ffffff",accent:"#ff0000"},i("bg-color-picker").value=t.bgColorPicker||"#000000",i("progressbar-color-picker").value=t.progressbarColorPicker||"#ff0000",i("primary-color-picker").value=t.primaryColorPicker||"#ffffff",i("secondary-color-picker").value=t.secondaryColorPicker||"#ffffff",i("header-color-picker").value=t.headerColorPicker||"#000",i("icons-color-picker").value=t.iconsColorPicker||"#ffffff",i("menu-color-picker").value=t.menuColorPicker||"#000",i("line-color-picker").value=t.lineColorPicker||"#ff0000",i("time-color-picker").value=t.timeColorPicker||"#ffffff",i("dislikes-toggle").checked=t.dislikes||!1,i("like-dislike-bar-toggle").checked=t.likeDislikeBar||!1,i("bookmarks-toggle").checked=t.bookmarks||!1,i("continue-watching-toggle").checked=t.continueWatching||!1,i("shorts-channel-name-toggle").checked=t.shortsChannelName||!1,i("themes-toggle").checked=t.themes||!1,i("translation-toggle").checked=t.translation||!1,i("avatars-toggle").checked=t.avatars||!1,i("reverse-mode-toggle").checked=t.reverseMode||!1,i("wave-visualizer-toggle").checked=t.waveVisualizer||!1,i("select-wave-visualizer-select").value=t.waveVisualizerSelected||"dinamica",i("hide-comments-toggle").checked=t.hideComments||!1,i("hide-sidebar-toggle").checked=t.hideSidebar||!1,i("autoplay-toggle").checked=t.disableAutoplay||!1,i("cinematic-lighting-toggle").checked=t.cinematicLighting||!1,i("sync-cinematic-toggle").checked=t.syncCinematic||!1,i("subtitles-toggle").checked=t.disableSubtitles||!1,i("player-size-slider").value=t.playerSize||100,i("select-video-qualitys-select").value=t.selectVideoQuality||"user",i("select-languages-comments-select").value=t.languagesComments||"en",ve=t.menu_developermdcm.bg,ye=t.menu_developermdcm.color,ke=t.menu_developermdcm.accent,$("#bg-color-options .color-box").forEach(e=>{e.classList.toggle("selected",e.dataset.value===ve)}),$("#text-color-options .color-box").forEach(e=>{e.classList.toggle("selected",e.dataset.value===ye)}),$("#bg-accent-color-options .color-box").forEach(e=>{e.classList.toggle("selected",e.dataset.value===ke)}),S("--yt-enhance-menu-bg",ve),S("--yt-enhance-menu-text",ye),S("--yt-enhance-menu-accent",ke),ut(),setTimeout(()=>{pt(),t.dislikes&&(Ct(),St(),Mt=!0),window.location.href.includes("youtube.com/watch?v=")&&Do()},500)}async function Do(){return new Promise(t=>{const e=()=>{const o=p("video"),n=i("cinematics");if(!o||!n||isNaN(o.duration)||o.duration===0){setTimeout(e,500);return}if(!JSON.parse(GM_getValue("ytSettingsMDCM","{}")).syncCinematic){const d=i("cinematic-lighting-toggle");d&&n&&(n.style.display=d.checked?"block":"none"),t(!1);return}const c=o.currentTime,r=()=>{if(o.currentTime>=c+1){const d=It(),l=i("cinematic-lighting-toggle");l&&l.checked!==d&&(l.checked=d,$e()),t(d)}else setTimeout(r,300)};r()};e()})}$(".color-box").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.type,o=t.dataset.value;e==="bg"?(ve=o,S("--yt-enhance-menu-bg",o),$("#bg-color-options .color-box").forEach(n=>{n.classList.remove("selected")}),t.classList.add("selected")):e==="color"?(ye=o,S("--yt-enhance-menu-text",o),$("#text-color-options .color-box").forEach(n=>{n.classList.remove("selected")}),t.classList.add("selected")):e==="accent"&&(ke=o,S("--yt-enhance-menu-accent",o),$("#bg-accent-color-options .color-box").forEach(n=>{n.classList.remove("selected")}),t.classList.add("selected")),$e()})});function ut(){i("player-size-value").textContent=i("player-size-slider").value}i("reset-player-size").addEventListener("click",()=>{i("player-size-slider").value=100,ut(),pt()});function Pt(){const t=i("shareBtn-mdcm"),e=i("importExportBtn"),o=i("closeImportExportBtn");t&&!t.dataset.initialized&&(t.dataset.initialized="true",t.addEventListener("click",function(n){n.stopPropagation();const a=i("shareDropdown");a&&(a.style.display=a.style.display==="block"?"none":"block")})),e&&!e.dataset.initialized&&(e.dataset.initialized="true",e.addEventListener("click",function(){const n=i("importExportArea");n&&n.classList.toggle("active")})),o&&!o.dataset.initialized&&(o.dataset.initialized="true",o.addEventListener("click",function(){const n=i("importExportArea");n&&n.classList.remove("active")}))}function fe(){return window.location.href.includes("youtube.com/watch?v=")}function It(){const t=document.getElementById("cinematics");if(!t)return!1;const e=t.innerHTML.trim()!=="",o=t.querySelector("canvas")!==null,n=t.children.length>0,a=t.querySelector('div[style*="position: fixed"]')!==null;return e||o||n||a}function Fe(){const t=p(".ytp-button.ytp-settings-button");if(!t){console.log("Settings button not found");return}t.click();const e=new MutationObserver(o=>{const n=$(".ytp-menuitem");for(let a of n){const c=a.textContent?.toLowerCase(),r=a.querySelector(".ytp-menuitem-icon svg path");if(c&&(c.includes("cinematic")||c.includes("lighting")||c.includes("cinema"))){console.log("Found cinematic lighting option:",c),a.click(),setTimeout(()=>{p(".ytp-settings-menu")&&document.body.click()},100),e.disconnect();return}if(r&&(r.getAttribute("d")?.includes("M21 7v10H3V7")||r.getAttribute("d")?.includes("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"))){console.log("Found cinematic lighting option by SVG path"),a.click(),setTimeout(()=>{p(".ytp-settings-menu")&&document.body.click()},100),e.disconnect();return}}});e.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}),setTimeout(()=>{e.disconnect(),p(".ytp-settings-menu")&&document.body.click()},5e3)}function pt(){const t=p(".formulariodescarga"),e=p(".formulariodescargaaudio");t!=null&&(t.classList.add("ocultarframe"),e.classList.add("ocultarframe"));const o={theme:p('input[name="theme"]:checked').value,bgColorPicker:i("bg-color-picker").value,progressbarColorPicker:i("progressbar-color-picker").value,primaryColorPicker:i("primary-color-picker").value,secondaryColorPicker:i("secondary-color-picker").value,headerColorPicker:i("header-color-picker").value,iconsColorPicker:i("icons-color-picker").value,menuColorPicker:i("menu-color-picker").value,lineColorPicker:i("line-color-picker").value,timeColorPicker:i("time-color-picker").value,dislikes:i("dislikes-toggle").checked,likeDislikeBar:i("like-dislike-bar-toggle").checked,bookmarks:i("bookmarks-toggle").checked,continueWatching:i("continue-watching-toggle").checked,shortsChannelName:i("shorts-channel-name-toggle").checked,themes:i("themes-toggle").checked,translation:i("translation-toggle").checked,avatars:i("avatars-toggle").checked,reverseMode:i("reverse-mode-toggle").checked,waveVisualizer:i("wave-visualizer-toggle").checked,waveVisualizerSelected:i("select-wave-visualizer-select").value,hideComments:i("hide-comments-toggle").checked,hideSidebar:i("hide-sidebar-toggle").checked,disableAutoplay:i("autoplay-toggle").checked,cinematicLighting:i("cinematic-lighting-toggle").checked,syncCinematic:i("sync-cinematic-toggle").checked,disableSubtitles:i("subtitles-toggle").checked,playerSize:i("player-size-slider").value,selectVideoQuality:i("select-video-qualitys-select").value,languagesComments:i("select-languages-comments-select").value,menu_developermdcm:{bg:ve,color:ye,accent:ke}};S("--yt-enhance-menu-bg",o.menu_developermdcm.bg),S("--yt-enhance-menu-text",o.menu_developermdcm.color),S("--yt-enhance-menu-accent",o.menu_developermdcm.accent),mt(),Pt();const n=i("comments");n&&(n.style.display=o.hideComments?"none":"block");const a=p(".themes-hidden");a&&(a.style.display=o.themes?"block":"none");const c=p("#secondary > #secondary-inner");if(c){c.classList.add("side-moi");const s=p(".side-moi");s.style.display=o.hideSidebar?"none":"block"}const r=p(".ytp-autonav-toggle-button");if(r){const s=r.getAttribute("aria-checked")==="true";(o.disableAutoplay&&s||!o.disableAutoplay&&!s)&&r.click()}const d=p(".ytp-subtitles-button");if(d){const s=d.getAttribute("aria-pressed")==="true";(o.disableSubtitles&&s||!o.disableSubtitles&&!s)&&d.click()}fe()&&setTimeout(()=>{const s=It();if(o.syncCinematic)(o.cinematicLighting&&!s||!o.cinematicLighting&&s)&&Fe();else{const u=i("cinematics");u&&(u.style.display=o.cinematicLighting?"block":"none")}},1e3);const l=p("video");l&&(l.style.transform=`scale(${o.playerSize/100})`);const v=p("div#movie_player");let m=localStorage.getItem("yt-player-quality");if(v!=null&&o.selectVideoQuality!=="user")if(m){let s=JSON.parse(m);s.data=JSON.stringify({quality:o.selectVideoQuality,previousQuality:240}),localStorage.setItem("yt-player-quality",JSON.stringify(s))}else{let s={data:JSON.stringify({quality:720,previousQuality:240}),expiration:Date.now()+31536e6,creation:Date.now()};localStorage.setItem("yt-player-quality",JSON.stringify(s))}const h=Tt[o.theme],k=p('input[name="theme"][value="custom"]').checked,L=p('input[name="theme"][value="normal"]').checked,A=p(".theme-custom-options"),N=p(".theme-selected-normal");let O="";const M=s=>{s&&(O+=`
${s}
`)};k!=null&&(N.style.display="flex",A.style.display="flex",p(".themes-options").style.display="none"),L&&(p('input[name="theme"][value="custom"]').checked=!1);function C(){if(o.themes)if(dt==="dark"&&!k){if(p(".themes-options").style.display="block",N.style.display="none",A.style.display="none",o.theme==="0"){M(`
              .botones_div {
               background-color: transparent;
               border: none;
               color: #ccc !important;
               user-select: none;
             }
               `);return}S("--yt-spec-base-background",h.gradient),S("--yt-spec-text-primary",h.textColor),S("--yt-spec-text-secondary",h.textColor),S("--yt-spec-menu-background",h.gradient),S("--yt-spec-icon-inactive",h.textColor),S("--yt-spec-brand-icon-inactive",h.textColor),S("--yt-spec-brand-icon-active",h.gradient),S("--yt-spec-static-brand-red",h.gradient),S("--yt-spec-raised-background",h.raised),S("--yt-spec-static-brand-red",h.CurrentProgressVideo),S("--yt-spec-static-brand-white",h.textColor),S("--ytd-searchbox-background",h.gradient),S("--ytd-searchbox-text-color",h.textColor),S("--ytcp-text-primary",o.textColor),M(`
              .botones_div {
              background-color: transparent;
              border: none;
              color: #999999;
              user-select: none;
            }
              .ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox {
              background:  ${h.gradient} !important;
              }
            #background.ytd-masthead { background: ${h.gradient}  !important; }
            .ytp-swatch-background-color {
            background: ${h.gradient} !important;
          }
          #shorts-container, #page-manager.ytd-app {
            background: ${h.gradient.replace(/(#[0-9a-fA-F]{6})/g,"$136")};
          }
            ytd-engagement-panel-title-header-renderer[shorts-panel] #header.ytd-engagement-panel-title-header-renderer {
            background: ${h.gradient}  !important;}
            .buttons-tranlate {
            background: ${h.btnTranslate} !important;
            }
            .badge-shape-wiz--thumbnail-default {
            color: ${h.videoDuration} !important;
            background: ${h.gradient} !important;
            }
            #logo-icon {
            color:  ${h.textLogo} !important;
          }
          .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
            color:  ${h.iconsColor} !important;
          }
          .ytd-topbar-menu-button-renderer #button.ytd-topbar-menu-button-renderer {
            color:  ${h.iconsColor} !important;
          }
          .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon {
            color:  ${h.iconsColor} !important;
          }
          .ytp-svg-fill {
            fill:  ${h.iconsColor} !important;
          }
          #ytp-id-30,#ytp-id-17,#ytp-id-19,#ytp-id-20{
            fill:  ${h.iconsColor} !important;
          }


            `)}else dt==="dark"&&k?(S("--yt-spec-base-background",o.bgColorPicker),S("--yt-spec-text-primary",o.primaryColorPicker),S("--yt-spec-text-secondary",o.secondaryColorPicker),S("--yt-spec-menu-background",o.menuColorPicker),S("--yt-spec-icon-inactive",o.iconsColorPicker),S("--yt-spec-brand-icon-inactive",o.primaryColorPicker),S("--yt-spec-brand-icon-active",o.primaryColorPicker),S("--yt-spec-raised-background",o.headerColorPicker),S("--yt-spec-static-brand-red",o.lineColorPicker),S("--yt-spec-static-brand-white",o.timeColorPicker),S("--ytd-searchbox-background",o.primaryColorPicker),S("--ytd-searchbox-text-color",o.secondaryColorPicker),S("--ytcp-text-primary",o.primaryColorPicker),M(`
            .html5-video-player {
                color: ${o.primaryColorPicker} !important;
              }
                .ytProgressBarLineProgressBarPlayed {
                background: linear-gradient(to right, ${o.progressbarColorPicker} 80%, ${o.progressbarColorPicker} 100%);

                }
              .ytp-menuitem .ytp-menuitem-icon svg path{
                fill: ${o.iconsColorPicker} !important;
                }
                .ytThumbnailOverlayProgressBarHostWatchedProgressBarSegment {
                  background: linear-gradient(to right, ${o.lineColorPicker} 80%, ${o.lineColorPicker} 100%) !important;
                }
                .yt-badge-shape--thumbnail-default {
                  color: ${o.timeColorPicker} !important;
                }
                a svg > path, .ytp-button svg path  {
                  fill: ${o.iconsColorPicker} !important;
              }
                svg.path{
                 fill: ${o.iconsColorPicker} !important;
                }

              svg {
                color: ${o.iconsColorPicker} !important;
                }
              .ytp-volume-slider-handle:before, .ytp-volume-slider-handle, .ytp-tooltip.ytp-preview:not(.ytp-text-detail) {
                background-color: ${o.iconsColorPicker} !important;
              }
                .ytp-autonav-toggle-button[aria-checked=true] {
                  background-color: ${o.iconsColorPicker} !important;
                }
                  .tp-yt-iron-icon {
                   fill: ${o.iconsColorPicker} !important;
                  }

             .botones_div {
            background-color: transparent;
            border: none;
            color: ${o.iconsColorPicker} !important;
            user-select: none;
          }
              #container.ytd-searchbox {
              color: red !important;
              }
            .ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox {
            background:  ${o.primaryColorPicker} !important;
            }
            .yt-spec-icon-shape {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
              color: ${o.iconsColorPicker} !important;
          }
            .ytp-time-current, .ytp-time-separator, .ytp-time-duration {
              color: ${o.iconsColorPicker} !important;
            }
            #background.ytd-masthead { background: ${o.headerColorPicker}  !important; }
            .ytp-swatch-background-color {
            background: ${o.progressbarColorPicker} !important;
          }
        #shorts-container, #page-manager.ytd-app {
            background: ${o.bgColorPicker}36;
            }
            ytd-engagement-panel-title-header-renderer[shorts-panel] #header.ytd-engagement-panel-title-header-renderer {
            background: ${o.bgColorPicker}  !important;}

            .badge-shape-wiz--thumbnail-default {
            color: ${o.timeColorPicker} !important;
             background: ${o.secondaryColor} !important;
            }
             #logo-icon {
             color:  ${o.primaryColorPicker} !important;
          }
          .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
            color:  ${o.iconsColorPicker} !important;
          }
          .ytd-topbar-menu-button-renderer #button.ytd-topbar-menu-button-renderer {
            color:  ${o.iconsColorPicker} !important;
          }
          .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon {
            color:  ${o.iconsColorPicker} !important;
          }
          .ytp-svg-fill {
            fill:  ${o.iconsColorPicker} !important;
          }
          #ytp-id-30,#ytp-id-17,#ytp-id-19,#ytp-id-20{
            fill:  ${o.iconsColorPicker} !important;
          }
            `)):M(`
            .botones_div {
             background-color: transparent;
             border: none;
             color: #000 !important;
             user-select: none;
           }
             `);else M(`
          .botones_div {
           background-color: transparent;
           border: none;
           color: #ccc !important;
           user-select: none;
         }
           `)}M(`
      #columns.style-scope.ytd-watch-flexy {
        flex-direction: ${o.reverseMode?"row-reverse":"row"} !important;
        padding-left: ${o.reverseMode?"20px":"0"} !important;
        }
        #secondary.style-scope.ytd-watch-flexy {display: ${o.hideSidebar?"none":"block"} !important;}


        #icon-menu-settings {
         color: ${o.iconsColorPicker} !important;
        }


      `),C(),Yt(O),ko(o),lo(o.continueWatching),xt(o,5),co(o.shortsChannelName),go();function P(){if(!o.waveVisualizer){Ge(!0);return}const s=p("video"),u=p(".ytp-miniplayer-ui");(s&&document.location.href.includes("watch")||u)&&(s!==ee||!Xe?(Ge(!0),Vo(s)):q&&s.paused===!1&&Ae())}P();function F(){if(!window.location.href.includes("youtube.com/watch")||p("#button_copy_description"))return;const s=p("#bottom-row.style-scope.ytd-watch-metadata");if(!s)return;s.insertAdjacentHTML("beforebegin",`
        <div id="button_copy_description" style="display: flex; justify-content: end; align-items: center;margin-top: 10px;" >
          <button id="copy-description" title="Copy description" class="botones_div" type="button" style="cursor: pointer;">
            <i style="font-size: 20px;" class="fa-solid fa-copy"></i>
          </button>
        </div>
      `),i("copy-description").addEventListener("click",()=>{const y=[...$('script[type="application/ld+json"]')];for(let x of y)try{const D=JSON.parse(x.innerText);if(D["@type"]==="VideoObject"){const B=`\u{1F4C5} Date published: ${D.uploadDate||"No disponible"}
Author: ${D.author||"No disponible"}
\u{1F3AC} Name video: ${D.name||"No disponible"}
\u{1F5BC}\uFE0F Thumbnail: ${Array.isArray(D.thumbnailUrl)?D.thumbnailUrl.join(", "):D.thumbnailUrl||"No disponible"}
\u{1F4DD} Description: ${D.description||"No disponible"}


\u{1F3AD} Category: ${D.genre||"No disponible"}
`;navigator.clipboard.writeText(B)}}catch{H("error","Error parsing JSON-LD")}finally{H("success","Description copied")}})}F();async function I(){const s=$("#content-text");if(p(".buttons-tranlate"))return;const u=Ye,y=i("select-languages-comments-select").value;for(let B=0;B<s.length;B++){const V=Object.entries(u).map(([le,Y])=>`<option value="${le}" ${le===y?"selected":""}>${Y}</option>`).join(""),Be=`
          <div class="traductor-container" data-index="${B}">
          <button class="buttons-tranlate" id="btn${B}"> Translate <i class="fa-solid fa-language"></i></button>
          <select class="select-traductor" id="select${B}">
           ${V}
          </select>
          </div>
        `;s[B].insertAdjacentHTML("afterend",Be)}const x=$(".buttons-tranlate"),D=$(".select-traductor");x.forEach((B,V)=>{B.addEventListener("click",()=>{const le=`?client=dict-chrome-ex&sl=auto&tl=${D[V].value}&q=`+s[V].textContent;fetch(Rt+le).then(Y=>Y.json()).then(Y=>{s[V].textContent=Y[0][0],x[V].textContent="Translated"}).catch(Y=>{console.error("Error en la traducci\xF3n:",Y)})})})}function z(s){$(s).forEach(u=>u.remove())}function de(){$("#author-thumbnail-button #img.style-scope.yt-img-shadow").length>0&&o.avatars&&(z(".yt-image-avatar-download"),We());const u=p("#content-text"),y=p("ytd-item-section-renderer[static-comments-header] #contents");o.translation&&(u!==void 0||y!==void 0)&&(z(".buttons-tranlate"),z(".select-traductor"),I())}window.onscroll=()=>{de()};const Te=p(".anchored-panel.style-scope.ytd-shorts #contents.style-scope.ytd-item-section-renderer.style-scope.ytd-item-section-renderer");Te&&new IntersectionObserver(u=>{u.forEach(y=>{y.isIntersecting&&Te.addEventListener("scroll",()=>{de()})})},{threshold:.1}).observe(Te);function We(){$("#author-thumbnail-button #img.style-scope.yt-img-shadow").forEach(u=>{if(u.parentElement.querySelector(".yt-image-avatar-download"))return;const y=te("button");y.innerHTML='<i class="fa fa-download"></i>',y.classList.add("yt-image-avatar-download"),y.onclick=async function(){try{const x=u.src.split("=")[0],B=await(await fetch(x)).blob(),V=URL.createObjectURL(B),le=u.closest("ytd-comment-thread-renderer, ytd-comment-renderer")?.querySelector("#author-text");let Y=le?le.textContent.trim():"avatar";Y=Y.replace(/[\/\\:*?"<>|]/g,"");const Ee=te("a");Ee.href=V,Ee.download=`${Y}_avatar.jpg`||"avatar.jpg",document.body.appendChild(Ee),Ee.click(),document.body.removeChild(Ee),URL.revokeObjectURL(V)}catch(x){console.error("Error al descargar la imagen:",x)}},u.parentElement.style.position="relative",u.parentElement.appendChild(y)})}const g=()=>{const u=`https://www.youtube.com/watch?v=${window.location.pathname.split("/").pop()}`;window.open(u,"_blank"),p("video.video-stream.html5-main-video").pause()};function b(s,u){const y=p("reel-action-bar-view-model");if(!y)return;const x=y.querySelector("[data-yt-tools-shorts-views]");if(!x)return;const D=x.querySelector('.yt-spec-button-shape-with-label__label span, [role="text"]');D&&(D.textContent=Number.isFinite(u)&&u>=0?pe(u,0):"\u2014")}function T(s,u){const y=p("reel-action-bar-view-model");if(!y)return;const x=y.querySelector("[data-yt-tools-shorts-rating]");if(!x)return;const D=x.querySelector('.yt-spec-button-shape-with-label__label span, [role="text"]');D&&(D.textContent=Number.isFinite(u)&&u>=0&&u<=5?u.toFixed(1):"\u2014")}function E(s){const u=document.createElement("div");u.className="button-view-model ytSpecButtonViewModelHost",s.dataAttr&&u.setAttribute(s.dataAttr,"1"),u.innerHTML=`
        <label class="yt-spec-button-shape-with-label">
          <button type="button" class="yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-l yt-spec-button-shape-next--icon-button yt-spec-button-shape-next--enable-backdrop-filter-experiment yt-spec-button-shape-next--enable-drop-shadow-experiment" title="${s.title||""}" aria-label="${s.ariaLabel||""}">
            <div class="yt-spec-button-shape-next__icon" aria-hidden="true">
              <span class="yt-icon-shape ytSpecIconShapeHost">${s.iconSvg||""}</span>
            </div>
          </button>
          <div class="yt-spec-button-shape-with-label__label" aria-hidden="false">
            <span class="yt-core-attributed-string yt-core-attributed-string--white-space-pre-wrap yt-core-attributed-string--text-alignment-center yt-core-attributed-string--word-wrapping" role="text">${s.labelText||""}</span>
          </div>
        </label>
      `;const y=u.querySelector("button");return s.onclick&&y.addEventListener("click",s.onclick),u}const j='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>',X='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-tv"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" /><path d="M16 3l-4 4l-4 -4" /></svg>',Z='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';function ge(){const s=document.location.pathname.startsWith("/shorts"),u=p("reel-action-bar-view-model");if(!s||!u){document.querySelectorAll("[data-yt-tools-shorts-classic], [data-yt-tools-shorts-views], [data-yt-tools-shorts-rating]").forEach(V=>V.remove());return}if(u.querySelector("[data-yt-tools-shorts-classic]"))return;const y=E({dataAttr:"data-yt-tools-shorts-classic",title:"Classic mode",ariaLabel:"Classic mode",iconSvg:X,labelText:"Cl\xE1sico",onclick:g}),x=E({dataAttr:"data-yt-tools-shorts-views",title:"Vistas",ariaLabel:"Vistas",iconSvg:j,labelText:"\u2014",onclick:function(){}}),D=E({dataAttr:"data-yt-tools-shorts-rating",title:"Rating (likes/dislikes)",ariaLabel:"Rating",iconSvg:Z,labelText:"\u2014",onclick:function(){}});u.insertBefore(D,u.firstChild),u.insertBefore(x,u.firstChild),u.insertBefore(y,u.firstChild);const B=document.location.pathname.split("/").filter(Boolean)[1];if(B){const V=me(B);V&&V.viewCount!=null&&b(B,V.viewCount),V&&V.rating!=null&&T(B,V.rating)}f.updateShortsViewsButton=b,f.updateShortsRatingButton=T}const Ot=()=>{ge()},Io=()=>{if(f.shortsObserver)return;const s=new MutationObserver(()=>{Ot(),_t()});s.observe(document.body,{childList:!0,subtree:!0}),f.shortsObserver=s};if(f.shortsObserver||(Ot(),Io()),p("body")!=null){const s=p("ytd-item-section-renderer[static-comments-header] #contents");s!=null&&o.theme!=="custom"&&(y=>new IntersectionObserver(D=>{if(D[0].isIntersecting)s.style.background=`${h.gradient??""}`;else return}).observe(p(`${y}`)))("ytd-item-section-renderer[static-comments-header] #contents")}function bt(s){if(isNaN(s))return"0h 0m 0s";s=Math.floor(s);const u=Math.floor(s/3600),y=Math.floor(s%3600/60),x=s%60;return`${u}h ${y}m ${x}s`}function Ht(){i("total-time").textContent=bt(De),i("video-time").textContent=bt(Pe),i("shorts-time").textContent=bt(Ie);const s=86400;i("usage-bar").style.width=`${De/s*100}%`,i("video-bar").style.width=`${Pe/s*100}%`,i("shorts-bar").style.width=`${Ie/s*100}%`}function No(s){if(/\/shorts\//.test(window.location.pathname))return"shorts";let u=s;for(;(u=u.parentElement)!==null;)if(u.classList.contains("shorts-container")||u.classList.contains("reel-video")||u.tagName==="YTD-REEL-VIDEO-RENDERER")return"shorts";return s.closest("ytd-watch-flexy")||s.closest("#primary-inner")||s.closest("ytd-thumbnail")||s.closest("ytd-rich-item-renderer")?"video":null}function zo(){const s=$("video");for(const u of s)if(!u.paused&&!u.ended&&u.readyState>2)return u;return null}function Ge(s=!1){if(s&&Oe&&(cancelAnimationFrame(Oe),Oe=null),ee&&(ee.removeEventListener("play",Ae),ee.removeEventListener("pause",ne),ee.removeEventListener("ended",ne)),s){if(_&&_.parentNode&&(_.parentNode.removeChild(_),_=null,w=null),q&&q.parentNode&&(q.parentNode.removeChild(q),q=null),_e){try{_e.disconnect()}catch{}_e=null}if(G){try{G.close()}catch{}G=null}ee&&ee[He]&&delete ee[He],ee=null,Xe=!1}else _&&(_.style.opacity="0"),q&&(q.style.opacity="0")}function $o(){if(_)return;const s=document.body;_=document.createElement("canvas"),_.id="wave-visualizer-canvas",_.width=window.innerWidth,_.height=Ze,_.style.position="fixed",_.style.left="0",_.style.top="0",_.style.width="100%",_.style.pointerEvents="none",_.style.backgroundColor="transparent",_.style.zIndex="10000",_.style.opacity="0",_.style.transition="opacity 0.3s",s.appendChild(_),w=_.getContext("2d")}function Bo(){if(q)return;q=te("div"),q.id="wave-visualizer-control";const s=i("select-wave-visualizer-select");Je=o.waveVisualizerSelected,s.addEventListener("change",u=>{Je=u.target.value,s.value=u.target.value,$e()})}function Vo(s){if(!s||s[He])return;if(s[He]=!0,Ge(!1),ee=s,$o(),Bo(),G){try{G.close()}catch{}G=null}const u=window.AudioContext||window.webkitAudioContext;G=new u,ue=G.createAnalyser(),ue.fftSize=2048,ue.smoothingTimeConstant=.85,J=ue.fftSize,Qe=new Uint8Array(J),Q=new Array(J).fill(128);try{_e=G.createMediaElementSource(s),_e.connect(ue),ue.connect(G.destination)}catch(x){H("error","MediaElementSource or error:",x),Ge(!0);return}s.removeEventListener("play",Ae),s.removeEventListener("pause",ne),s.removeEventListener("ended",ne),s.addEventListener("play",Ae),s.addEventListener("pause",ne),s.addEventListener("ended",ne);const y=()=>{_&&(_.width=window.innerWidth,_.height=Ze)};window.removeEventListener("resize",y),window.addEventListener("resize",y),jt(),Xe=!0}function jt(){if(Oe=requestAnimationFrame(jt),parseFloat(_.style.opacity)<=0)return;ue.getByteTimeDomainData(Qe);for(let u=0;u<J;u++)Q[u]+=Kt*(Qe[u]-Q[u]);w.clearRect(0,0,_.width,_.height);let s=_.width/J;switch(Je){case"linea":{w.lineWidth=2,w.strokeStyle="lime",w.beginPath();let u=0;for(let y=0;y<J;y++){let x=Math.max(0,Q[y]-128)*oe;y===0?w.moveTo(u,x):w.lineTo(u,x),u+=s}w.stroke();break}case"barras":{let u=0;for(let y=0;y<J;y+=5){let x=Math.max(0,Q[y]-128)*oe;w.fillStyle="cyan",w.fillRect(u,0,s*4,x),u+=s*5}break}case"curva":{w.lineWidth=2,w.strokeStyle="yellow",w.beginPath(),w.moveTo(0,Math.max(0,Q[0]-128)*oe);for(let u=0;u<J-1;u++){let y=u*s,x=(u+1)*s,D=Math.max(0,Q[u]-128)*oe,B=Math.max(0,Q[u+1]-128)*oe,V=y+s/3,Be=D,le=x-s/3,Y=B;w.bezierCurveTo(V,Be,le,Y,x,B)}w.stroke();break}case"picos":{w.fillStyle="magenta";let u=0;for(let y=0;y<J;y+=5){let x=Math.max(0,Q[y]-128)*oe;w.beginPath(),w.arc(u,x,2,0,Math.PI*2),w.fill(),u+=s*5}break}case"solida":{w.beginPath();let u=0;w.moveTo(0,0);for(let y=0;y<J;y++){let x=Math.max(0,Q[y]-128)*oe;w.lineTo(u,x),u+=s}w.lineTo(_.width,0),w.closePath(),w.fillStyle="rgba(0,255,0,0.3)",w.fill();break}case"dinamica":{let u=w.createLinearGradient(0,0,_.width,0);u.addColorStop(0,"red"),u.addColorStop(.5,"purple"),u.addColorStop(1,"blue"),w.lineWidth=3,w.strokeStyle=u,w.beginPath();let y=0;for(let x=0;x<J;x++){let D=Math.max(0,Q[x]-128)*oe;x===0?w.moveTo(y,D):w.lineTo(y,D),y+=s}w.stroke();break}case"montana":{w.beginPath();let u=0;w.moveTo(0,0);for(let y=0;y<J;y++){let x=(Q[y]-128)*oe*.8;w.lineTo(u,x),u+=s}w.lineTo(_.width,0),w.closePath(),w.fillStyle="rgba(128,128,255,0.4)",w.fill();break}default:break}}if(!f.statsObserver){const s=new MutationObserver(()=>{const u=zo();u!==we&&(we=u,we&&(et=No(we)))});s.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),f.statsObserver=s}P(),f.statsIntervalId||(f.statsIntervalId=setInterval(()=>{const s=Date.now(),u=(s-ft)/1e3;document.visibilityState==="visible"&&(De+=u),we&&!we.paused&&(et==="video"?Pe+=u:et==="shorts"&&(Ie+=u)),ft=s,GM_setValue(ae.USAGE,De),GM_setValue(ae.VIDEO,Pe),GM_setValue(ae.SHORTS,Ie),Ht()},Qt)),Ht(),f.settingsLoaded&&$e()}let Nt=!0;function mt(){const t=p(".style-scope .ytd-watch-metadata"),e=p("#contents");t!=null&&Nt&&(Nt=!1,(t.offsetWidth||t.offsetHeight||t.getClientRects().length||e!=null)&&t.insertAdjacentHTML("beforebegin",Lt));const o=p(".formulariodescarga"),n=p(".formulariodescargaaudio"),a=p(".btn1"),c=p(".btn2"),r=p(".btn3"),d=p(".selectcalidades"),l=p(".selectcalidadesaudio");[o,n].forEach(g=>{g&&g.dataset.ytToolsPreventDefault!=="1"&&(g.addEventListener("click",b=>b.preventDefault()),g.dataset.ytToolsPreventDefault="1")}),d&&d.dataset.ytToolsBound!=="1"&&(d.dataset.ytToolsBound="1",d.addEventListener("change",g=>{const b=g.target.value;if(!b)return;const T=i("descargando"),E=T.querySelector(".download-text"),j=T.querySelector(".download-quality"),X=T.querySelector(".download-btn"),Z=T.querySelector(".retry-btn"),ge=T.querySelector(".progress-container");T.classList.add("video"),T.classList.remove("ocultarframe"),E.textContent=`Download ${b.toUpperCase()} And Please Wait...`,j.textContent=`${b}p`,X.style.display="block",Z.style.display="none",ge.style.display="none",T.dataset.quality=b,T.dataset.type="video"})),l&&l.dataset.ytToolsBound!=="1"&&(l.dataset.ytToolsBound="1",l.addEventListener("change",g=>{const b=g.target.value;if(!b)return;const T=i("descargandomp3"),E=T.querySelector(".download-text"),j=T.querySelector(".download-quality"),X=T.querySelector(".download-btn"),Z=T.querySelector(".retry-btn"),ge=T.querySelector(".progress-container");T.classList.add("audio"),T.classList.remove("ocultarframeaudio"),E.textContent=`Download ${b.toUpperCase()} And Please Wait...`,j.textContent=b.toUpperCase(),X.style.display="block",Z.style.display="none",ge.style.display="none",T.dataset.quality=b,T.dataset.type="audio"})),r&&r.dataset.ytToolsBound!=="1"&&(r.dataset.ytToolsBound="1",r.addEventListener("click",()=>{d?.classList.add("ocultarframe"),l?.classList.add("ocultarframeaudio");const g=i("descargando"),b=i("descargandomp3");g&&(g.classList.add("ocultarframe"),g.classList.remove("video","audio","completed"),g.removeAttribute("data-quality"),g.removeAttribute("data-type"),g.removeAttribute("data-downloading"),g.removeAttribute("data-url-opened"),g.removeAttribute("data-last-download-url"),g.querySelector?.(".download-again-btn")?.style&&(g.querySelector(".download-again-btn").style.display="none")),b&&(b.classList.add("ocultarframeaudio"),b.classList.remove("video","audio","completed"),b.removeAttribute("data-quality"),b.removeAttribute("data-type"),b.removeAttribute("data-downloading"),b.removeAttribute("data-url-opened"),b.removeAttribute("data-last-download-url"),b.querySelector?.(".download-again-btn")?.style&&(b.querySelector(".download-again-btn").style.display="none")),o?.classList.add("ocultarframe"),n?.classList.add("ocultarframe"),o?.reset(),n?.reset()})),f.downloadClickHandlerInitialized||(f.downloadClickHandlerInitialized=!0,document.addEventListener("click",g=>{const b=g.target;if(!(b instanceof Element))return;const T=b.closest(".download-btn")||b.closest(".retry-btn")||b.closest(".progress-retry-btn")||b.closest(".download-again-btn");if(!T)return;const E=T.closest(".download-container");if(!E)return;const j=E.dataset.quality,X=E.dataset.type;if(T.classList.contains("download-again-btn")){const Z=E.dataset.lastDownloadUrl;Z&&window.open(Z);return}!j||!X||(T.classList.contains("progress-retry-btn")&&(E.dataset.downloading="false",E.dataset.urlOpened="false",E.dataset.lastDownloadUrl="",E.querySelector?.(".download-again-btn")?.style&&(E.querySelector(".download-again-btn").style.display="none")),Jt(j,E))})),a&&a.dataset.ytToolsBound!=="1"&&(a.dataset.ytToolsBound="1",a.addEventListener("click",()=>{d?.classList.remove("ocultarframe"),l?.classList.add("ocultarframeaudio");const g=i("descargando"),b=i("descargandomp3");g&&(g.classList.add("ocultarframe"),g.classList.remove("video","audio","completed"),g.removeAttribute("data-quality"),g.removeAttribute("data-type"),g.removeAttribute("data-downloading"),g.removeAttribute("data-url-opened")),b&&(b.classList.add("ocultarframeaudio"),b.classList.remove("video","audio","completed"),b.removeAttribute("data-quality"),b.removeAttribute("data-type"),b.removeAttribute("data-downloading"),b.removeAttribute("data-url-opened")),o?.classList.remove("ocultarframe"),o.style.display="",n?.classList.add("ocultarframe"),o?.reset(),n?.reset()})),c&&c.dataset.ytToolsBound!=="1"&&(c.dataset.ytToolsBound="1",c.addEventListener("click",()=>{l?.classList.remove("ocultarframeaudio"),d?.classList.add("ocultarframe");const g=i("descargando"),b=i("descargandomp3");g&&(g.classList.add("ocultarframe"),g.classList.remove("video","audio","completed"),g.removeAttribute("data-quality"),g.removeAttribute("data-type"),g.removeAttribute("data-downloading"),g.removeAttribute("data-url-opened")),b&&(b.classList.add("ocultarframeaudio"),b.classList.remove("video","audio","completed"),b.removeAttribute("data-quality"),b.removeAttribute("data-type"),b.removeAttribute("data-downloading"),b.removeAttribute("data-url-opened")),n?.classList.remove("ocultarframe"),n.style.display="",o?.classList.add("ocultarframe"),n?.reset(),o?.reset()}));const v=p("#imagen"),m=p("#eyes");function h(){const g=p(".buffer_video");g&&(g.dataset.listenerAdded||(g.addEventListener("click",()=>{const b=p("video.video-stream.html5-main-video");if(!b){console.log("No se encontr\xF3 el video en la p\xE1gina.");return}const T=new MouseEvent("contextmenu",{bubbles:!0,cancelable:!0});b.dispatchEvent(T),setTimeout(()=>{const E=p("body > div.ytp-popup.ytp-contextmenu > div > div > div:nth-child(7)");E?E.click():console.log("Opci\xF3n no encontrada, intenta aumentar el tiempo de espera.")},1e3)}),g.dataset.listenerAdded="true"))}h();let k=0;const L=p("#repeatvideo"),A=p(".icon-tabler-repeat"),N=p("#movie_player > div.html5-video-container > video");L!=null&&(L.onclick=()=>{if(p("#cinematics > div")!=null||N!=null)switch(k+=1,k){case 1:document.querySelector("#movie_player > div.html5-video-container > video")?.setAttribute("loop","true"),A.innerHTML=`  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 12v-3c0 -1.336 .873 -2.468 2.08 -2.856m3.92 -.144h10m-3 -3l3 3l-3 3"></path>
                    <path d="M20 12v3a3 3 0 0 1 -.133 .886m-1.99 1.984a3 3 0 0 1 -.877 .13h-13m3 3l-3 -3l3 -3"></path>
                    <path d="M3 3l18 18"></path>
                 </svg> `;break;case 2:k=0,document.querySelector("#movie_player > div.html5-video-container > video")?.removeAttribute("loop"),A.innerHTML=` <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat" width="24"
                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
                    <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
                  </svg>`;break}});const O=p("#cinematics > div");O!=null&&(O.style="position: fixed; inset: 0px; pointer-events: none; transform: scale(1.5, 2)");const M=p("#reset_button");M?.addEventListener("click",function(){localStorage.getItem("colores")!=null&&(localStorage.removeItem("colores"),p("#ojosprotect").style.backgroundColor="transparent",setTimeout(()=>{location.reload()},400))}),v!=null&&(v.onclick=()=>{if(p("#cinematics > div")!=null||N!=null){let b=new URLSearchParams(window.location.search).get("v");const T=`https://i.ytimg.com/vi/${b}/maxresdefault.jpg`;fetch(T).then(E=>{if(!E.ok)throw new Error(`HTTP error! Status: ${E.status}`);return E.blob()}).then(E=>{if(E.size/1024>=20){window.open(`https://i.ytimg.com/vi/${b}/maxresdefault.jpg`,"popUpWindow","height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes");const X=URL.createObjectURL(E),Z=te("a");Z.href=X;const ge=p("h1.style-scope.ytd-watch-metadata").innerText;Z.download=`${ge}_maxresdefault.jpg`,Z.click(),URL.revokeObjectURL(X)}else console.log("La imagen no excede los 20 KB. No se descargar\xE1.")}).catch(E=>{alert("No found image"),console.error("Error al obtener la imagen:",E)})}});const C=i("background_image"),P=p("ytd-app"),F=localStorage.getItem("backgroundImage");F&&(P.style=`
        background-size: cover;
        background-position: center;
        background-attachment: fixed;

        background-image: url(${F}) !important`),C.addEventListener("change",g=>{const b=g.target.files[0];if(b){const T=new FileReader;T.onload=function(E){const j=E.target.result;localStorage.setItem("backgroundImage",j),P.style.backgroundImage=`url(${j})`},T.readAsDataURL(b)}});const I=p(".external_link");I!=null&&(I.onclick=()=>{const g=new URLSearchParams(window.location.search);let b;b=g.get("v"),window.open(`https://ssyoutube.com/watch?v=${b}&t=2s`,"popUpWindow","height=800,width=1000,left=50%,top=100,resizable=no,scrollbars=yes,toolbar=no,menubar=yes,location=no,directories=yes, status=no")});const z=p(".view_external_link");z!=null&&(z.onclick=()=>{p("video").click();const g=new URLSearchParams(window.location.search);let b;b=g.get("v"),window.open(`https://www.youtube.com/embed/${b}?rel=0&controls=2&color=white&iv_load_policy=3&showinfo=0&modestbranding=1&autoplay=1`)});const de=p(".video_picture_to_picture");de!=null&&(de.onclick=()=>{const g=p("video");"pictureInPictureEnabled"in document?document.pictureInPictureElement||g.requestPictureInPicture().then(()=>{}).catch(b=>{console.error("Error al activar el modo Picture-in-Picture:",b)}):alert("Picture-in-Picture not supported")},m?.addEventListener("input",function(){(p("#cinematics > div")!=null||N!=null)&&(p("#ojosprotect").style.backgroundColor=m.value)}),clearInterval(mt));const Te=p(".checked_updates");Te!=null&&(Te.onclick=()=>{window.open("https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.user.js")});const We=p(".screenshot_video");if(We!=null)We.onclick=()=>{const g=p("video"),b=te("canvas");b.width=g.videoWidth,b.height=g.videoHeight,b.getContext("2d").drawImage(g,0,0,b.width,b.height);const E=b.toDataURL("image/png"),j=te("a");j.href=E;const X=p("h1.style-scope.ytd-watch-metadata").innerText;j.download=`${g.currentTime.toFixed(0)}s_${X}.png`,j.click()};else{const g=p(".containerButtons");g!=null&&(g.innerHTML="")}clearInterval(mt)}console.log("Script en ejecuci\xF3n by: DeveloperMDCM"),console.log(`%cYoutube Tools Extension NEW UI
%cRun %c(v2.4.3.2)
By: DeveloperMDCM.`,"color: #F00; font-size: 24px; font-family: sans-serif;","font-size: 14px; font-family: monospace;","color: #00aaff; font-size: 16px; font-family: sans-serif;"),localStorage.getItem("notification-developerMDCM")||(H("info","Youtube Tools by: DeveloperMDCM :)"),localStorage.setItem("notification-developerMDCM",!0)),$("input").forEach(t=>{t.addEventListener("change",je),t.type==="range"&&t.addEventListener("change",()=>{ut(),je()})});function ht(t){const e=i(t);e&&e.dataset.ytToolsBound!=="1"&&(e.dataset.ytToolsBound="1",e.addEventListener("change",()=>{try{$e()}catch(o){console.error("saveSettings error:",o)}je()}))}ht("select-video-qualitys-select"),ht("select-languages-comments-select"),ht("select-wave-visualizer-select"),i("export-config").addEventListener("click",()=>{const t=GM_getValue("ytSettingsMDCM","{}");i("config-data").value=t;const e=t;try{JSON.parse(e),GM_setValue("ytSettingsMDCM",e),setTimeout(()=>{H("success","Configuration export successfully!")},1e3)}catch{H("error","Invalid configuration data. Please check and try again.")}}),i("import-config").addEventListener("click",()=>{const t=i("config-data").value;try{JSON.parse(t),GM_setValue("ytSettingsMDCM",t),setTimeout(()=>{H("success","Configuration imported successfully!"),window.location.reload()},1e3),window.location.reload()}catch{H("error","Invalid configuration data. Please check and try again.")}}),ce.style.display="none";function Po(t,e){const o=setInterval(()=>{p(t)&&(clearInterval(o),e())},100)}i("wave-visualizer-toggle").addEventListener("change",()=>{p("#wave-visualizer-toggle").checked?H("success","Wave visualizer enabled"):(ne(),H("success","Wave visualizer disabled realod page"),setTimeout(()=>{window.location.reload()},1e3))});const zt=i("cinematic-lighting-toggle");zt&&zt.addEventListener("change",()=>{const t=p("#cinematic-lighting-toggle"),e=p("#sync-cinematic-toggle"),o=i("cinematics");t.checked?H("success","Cinematic mode enabled"):H("success","Cinematic mode disabled"),e.checked?setTimeout(()=>{Fe()},300):o&&(o.style.display=t.checked?"block":"none")});const $t=i("sync-cinematic-toggle");$t&&$t.addEventListener("change",()=>{const t=p("#sync-cinematic-toggle"),e=p("#cinematic-lighting-toggle"),o=i("cinematics");t.checked?(H("success","Sync with YouTube enabled"),e.checked&&setTimeout(()=>{Fe()},500)):(H("success","Sync with YouTube disabled"),o&&(o.style.display=e.checked?"block":"none"))}),Po("ytd-topbar-menu-button-renderer",()=>{Ao(),Pt(),setTimeout(ao,3e3)}),document.addEventListener("fullscreenchange",()=>{document.fullscreenElement!==null?ne():Ae()}),document.addEventListener("yt-navigate-finish",()=>{document.location.href.includes("watch")||ne(),je(),document.location.href.includes("youtube.com")&&(document.location.href.includes("youtube.com/watch")?[300,600,1200,2200,3500].forEach(t=>setTimeout(()=>{Me(),Le(),ho()},t)):[300,700,1500,2800].forEach(t=>setTimeout(()=>{Me(),Le()},t)))}),GM_registerMenuCommand("Update Script by: DeveloperMDCM",function(){window.open("https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.user.js","_blank")});const Bt=i("background_image"),re=i("background-image-preview"),se=i("remove-background-image"),Vt=localStorage.getItem("backgroundImage");Vt?(re.style.backgroundImage=`url(${Vt})`,re.classList.add("has-image"),se.style.display="flex"):(re.style.backgroundImage="",re.classList.remove("has-image"),se.style.display="none"),re.addEventListener("click",t=>{t.target!==se&&Bt.click()}),Bt.addEventListener("change",t=>{const e=t.target.files[0];if(!e)return;const o=new FileReader;o.onload=function(n){const a=n.target.result;re.style.backgroundImage=`url(${a})`,re.classList.add("has-image"),localStorage.setItem("backgroundImage",a),se.style.display="flex"},o.readAsDataURL(e)}),se&&se.dataset.ytToolsBound!=="1"&&(se.dataset.ytToolsBound="1",se.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation(),t.isTrusted!==!1&&(re.style.backgroundImage="",re.classList.remove("has-image"),localStorage.removeItem("backgroundImage"),se.style.display="none")}))})();
