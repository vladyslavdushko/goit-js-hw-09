import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const s={email:"",message:""},a=document.querySelector("form"),l="feedback-form-state";r();a.addEventListener("input",e=>{e.preventDefault();const t=e.currentTarget.elements;s.email=t.email.value,s.message=t.message.value;let m=JSON.stringify(s);localStorage.setItem(l,m)});function r(){const e=localStorage.getItem(l);if(e){const t=JSON.parse(e);a.elements.email.value=t.email,a.elements.message.value=t.message}}a.addEventListener("submit",e=>{if(e.preventDefault(),Object.keys(s).map(o=>a.elements[o].value).includes(""))return alert("Fill please all fields");console.log(s),localStorage.removeItem(l),a.reset()});
//# sourceMappingURL=commonHelpers2.js.map