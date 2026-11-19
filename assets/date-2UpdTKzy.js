function r(t){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function o(t){return r(new Date(t))}function i(t){const[e,a,n]=t.split("-").map(Number);return new Date(e,a-1,n)}export{o as i,i as p,r as t};
//# sourceMappingURL=date-2UpdTKzy.js.map
