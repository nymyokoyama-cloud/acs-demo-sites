const btn=document.querySelector('.menu-btn'),nav=document.getElementById('gnav');
if(btn)btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
const tabs=document.querySelectorAll('.cat-tabs button');
tabs.forEach(b=>b.addEventListener('click',()=>{
  tabs.forEach(x=>x.setAttribute('aria-pressed','false'));b.setAttribute('aria-pressed','true');
  const c=b.dataset.cat;
  document.querySelectorAll('.cards .card').forEach(card=>{card.hidden=!(c==='all'||card.dataset.cat===c)});
}));
const f=document.querySelector('.search');
if(f)f.addEventListener('submit',e=>{e.preventDefault();const q=f.querySelector('input').value.trim();
  document.querySelectorAll('.cards .card').forEach(card=>{card.hidden=q&&!card.innerText.includes(q)});});
