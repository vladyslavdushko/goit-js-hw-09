(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const i={email:"",message:""},o=document.querySelector("form"),c="feedback-form-state";m();o.addEventListener("input",s=>{s.preventDefault();const r=s.currentTarget.elements;i.email=r.email.value,i.message=r.message.value;let a=JSON.stringify(i);localStorage.setItem(c,a)});function m(){const s=localStorage.getItem(c);if(s){const r=JSON.parse(s);o.elements.email.value=r.email,o.elements.message.value=r.message}}o.addEventListener("submit",()=>{localStorage.removeItem(c)});
//# sourceMappingURL=commonHelpers3.js.map