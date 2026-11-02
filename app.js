document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const emptyLabels={all:'아직 남긴 기록이 없어요.',made:'아직 남긴 프로젝트가 없어요.',study:'아직 남긴 공부 기록이 없어요.',thought:'아직 남긴 생각이 없어요.',taste:'아직 남긴 취향이 없어요.',daily:'아직 남긴 일상이 없어요.'};
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 const category=button.dataset.filter;
 document.querySelectorAll('[data-filter]').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});
 let visible=0;
 document.querySelectorAll('[data-category]').forEach(entry=>{entry.hidden=category!=='all'&&entry.dataset.category!==category;if(!entry.hidden)visible++;});
 document.getElementById('entry-count').textContent=String(visible).padStart(2,'0');
 const empty=document.getElementById('empty-entries');empty.textContent=emptyLabels[category]||emptyLabels.all;empty.hidden=visible>0;
}));
