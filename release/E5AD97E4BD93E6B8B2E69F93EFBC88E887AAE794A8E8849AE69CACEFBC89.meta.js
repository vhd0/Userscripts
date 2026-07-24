// ==UserScript==
// @name               字体渲染（自用脚本）
// @name:en            Font Rendering (Customized)
// @version            2026.07.11.2
// @author             F9y4ng
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA3lBMVEUAAAAAAACtra3u7vCfn5/w8PDw8PDa2try8vLj4+MUFBQzMzPy8vLS0tLv7+/r6+s+Pj7Ozs7p6enl5eXy8vLHx8ekpKTy8vJycnKoqKiTk5N1dXXz8/MAAADy8vLx8fG8vLzx8fHHx8dra2u9e8jy8vJLQndYT3d8c4/Jllfhp1NqUoxRR3tcT4Otcr2dmbJybJNwVZHd3OKYaK2ydcGkbbWLYaW7ucnn5+quq8BXSn/Ozde4eMR/eJpjWoSXkq2NiaiBXZ14WZZiT4fW1d7Cwc5qY42HgaO1iVpBOW+iYb/9AAAAJHRSTlMABqX9mQ3v2VIqIxDayrJ2YiDv4mS9hHt5aGFOPTHFwKmZfDkTzajhAAABpUlEQVQ4y62S2VLbQBBFZca2gmSMlxAggazdQxyNRqNdssC7Dfn/H0pLsUSNUq7KA+e1z3Td2zXG23H3hfWH56fn7zDLUzY5afT6O+E7C2Z2TgjXqBIA38OPpxYUAgCkYBed3vVweNlrCe/xKQHCz/F2gEGA07EuDAL+CKGEeI6YHThXtEmvsFoDzDcA2xSftwDuUg/zOeMRxG65ZZFxCRBzbcUdevTYycscc+UAsfXw06swZELSSAiaJb9jkBGEAq+a+TnmDtRIn7psSM/Zj1r4hm7cCGEEEacwiYtf6yOxdEsDtyIOAdarMozY9626owqpWBoQSyeiEedz0g549ipQPZyaJqblwSMpSXvkxcSuhDEruCsKNrK+o1pDw0bhB6PiErMdw+69MdhRutipkJQ1MO2/xu2FeXVzT3WfqaOjPEKVbVfNsWzLssswh4SOnCERcAmJwpuj0ByM+2KJFSvh8xRH2qcZIO69PR5JvQJxamufZvmzhXfsUZd5eJlpvCywqwuzXxozEvR/+dDiSRPGffyHiVZj3D1r0R1ZhkanjfEf/AH7mVW34e3PMgAAAABJRU5ErkJggg==
// @namespace          https://github.com/F9y4ng/GreasyFork-Scripts/
// @homepage           https://f9y4ng.github.io/GreasyFork-Scripts/
// @homepageURL        https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL         https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @match              *://*/*
// @grant              GM_getValue
// @grant              GM.getValue
// @grant              GM_setValue
// @grant              GM.setValue
// @grant              GM_listValues
// @grant              GM.listValues
// @grant              GM_deleteValue
// @grant              GM.deleteValue
// @grant              GM_openInTab
// @grant              GM.openInTab
// @grant              GM_addElement
// @grant              GM_xmlhttpRequest
// @grant              GM.xmlHttpRequest
// @grant              GM_registerMenuCommand
// @grant              GM.registerMenuCommand
// @grant              GM_addValueChangeListener
// @grant              unsafeWindow
// @connect            f9y4ng.github.io
// @compatible         Edge (Compatible Tampermonkey, Violentmonkey)
// @compatible         Chrome (Compatible Tampermonkey, Violentmonkey)
// @compatible         Firefox (Compatible Greasemonkey, Tampermonkey, Violentmonkey)
// @compatible         Opera (Compatible Tampermonkey, Violentmonkey)
// @compatible         Safari (Compatible Tampermonkey, Userscripts)
// @license            GPL-3.0-only
// @copyright          2020-2026, F9y4ng
// @run-at             document-start
// @downloadURL https://raw.githubusercontent.com/vhd0/Userscripts/release/release/E5AD97E4BD93E6B8B2E69F93EFBC88E887AAE794A8E8849AE69CACEFBC89.user.js
// @updateURL https://raw.githubusercontent.com/vhd0/Userscripts/release/release/E5AD97E4BD93E6B8B2E69F93EFBC88E887AAE794A8E8849AE69CACEFBC89.meta.js
// ==/UserScript==
