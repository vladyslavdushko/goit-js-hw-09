import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const s={email:"",message:""},a=document.querySelector("form"),m="feedback-form-state";r();a.addEventListener("input",e=>{e.preventDefault();const t=e.currentTarget.elements;s.email=t.email.value,s.message=t.message.value;let o=JSON.stringify(s);localStorage.setItem(m,o)});function r(){const e=localStorage.getItem(m);if(e){const t=JSON.parse(e);a.elements.email.value=t.email,a.elements.message.value=t.message}}a.addEventListener("submit",()=>{localStorage.removeItem(m)});
//# sourceMappingURL=commonHelpers2.js.map
