var e=function(e,n){var t=document.createElement("div");t.setAttribute("data-qa","notification"),t.textContent=e,t.className="message ".concat(n),document.body.appendChild(t)};document.addEventListener("contextmenu",function(e){e.preventDefault()}),new Promise(function(e,n){var t=!1,o=function(){t||(t=!0,e("First promise was resolved"),document.removeEventListener("click",o))};document.addEventListener("click",o),setTimeout(function(){t||(t=!0,n(Error("First promise was rejected")),document.removeEventListener("click",o))},3e3)}).then(function(n){e(n,"success")}).catch(function(n){e(n.message,"error")}),new Promise(function(e){document.addEventListener("mousedown",function n(t){0===t.button?(e("Second promise was resolved on left click"),document.removeEventListener("mousedown",n)):2===t.button&&(e("Second promise was resolved on right click"),document.removeEventListener("mousedown",n))})}).then(function(n){e(n,"success")});var n=!1,t=!1;new Promise(function(e){var o=function(c){0===c.button&&(n=!0),2===c.button&&(t=!0),n&&t&&(e("Third promise was resolved"),document.removeEventListener("mousedown",o))};document.addEventListener("mousedown",o)}).then(function(n){e(n,"success")});
//# sourceMappingURL=index.0f4d38e2.js.map
