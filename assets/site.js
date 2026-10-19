(()=>{'use strict';
const params=new URLSearchParams(location.search);let lang=params.get('lang')==='en'?'en':'de';
function apply(){document.documentElement.lang=lang;document.querySelectorAll('[data-en]').forEach(el=>{if(!el.dataset.deOriginal)el.dataset.deOriginal=el.innerHTML;el.innerHTML=lang==='en'?el.dataset.en:el.dataset.deOriginal});document.querySelectorAll('[data-en-placeholder]').forEach(el=>{if(!el.dataset.dePlaceholder)el.dataset.dePlaceholder=el.getAttribute('placeholder')||'';el.setAttribute('placeholder',lang==='en'?el.dataset.enPlaceholder:el.dataset.dePlaceholder)});document.querySelectorAll('[data-language]').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.language===lang)));document.querySelectorAll('a[href]').forEach(a=>{const orig=a.dataset.hrefOriginal||(a.dataset.hrefOriginal=a.getAttribute('href'));if(!orig||orig.startsWith('#')||orig.startsWith('http:')||orig.startsWith('https:')||orig.startsWith('mailto:'))return;try{const url=new URL(orig,location.href);if(lang==='en')url.searchParams.set('lang','en');else url.searchParams.delete('lang');a.href=url.pathname.split('/').pop()+url.search+url.hash}catch(e){}});document.dispatchEvent(new CustomEvent('joliben:language',{detail:{lang}}));}
document.querySelectorAll('[data-language]').forEach(btn=>btn.addEventListener('click',()=>{lang=btn.dataset.language;const u=new URL(location.href);if(lang==='en')u.searchParams.set('lang','en');else u.searchParams.delete('lang');try{history.replaceState({},'',u)}catch(e){}apply()}));
const themeBtn=document.querySelector('[data-theme]');let dark=false;themeBtn?.addEventListener('click',()=>{dark=!dark;document.body.classList.toggle('dark',dark);themeBtn.setAttribute('aria-label',dark?'Light mode':'Dark mode')});
const menu=document.querySelector('[data-menu]'),nav=document.querySelector('#mainNav');menu?.addEventListener('click',()=>{const v=nav?.classList.toggle('open');menu.setAttribute('aria-expanded',String(!!v))});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
const roadmapFilters=document.querySelectorAll('[data-roadmap-filter]');const roadmapLanes=document.querySelectorAll('[data-roadmap-phase]');
roadmapFilters.forEach(btn=>btn.addEventListener('click',()=>{const phase=btn.dataset.roadmapFilter;
 roadmapFilters.forEach(b=>{const chosen=b===btn;b.classList.toggle('active',chosen);b.setAttribute('aria-pressed',String(chosen))});
 roadmapLanes.forEach(lane=>{lane.hidden=phase!=='alle'&&lane.dataset.roadmapPhase!==phase});
 document.getElementById('roadmapLanes')?.classList.toggle('is-filtered',phase!=='alle');
}));
if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}
const heroLoop=document.querySelector('[data-hero-loop]');
if(heroLoop && 'IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
 const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){const p=heroLoop.play();p?.catch(()=>{});}else{heroLoop.pause()}}),{threshold:0.08});
 io.observe(heroLoop);
}
const film=document.getElementById('jolibenFilm'),filmPlay=document.querySelector('[data-film-play]');
filmPlay?.addEventListener('click',()=>{filmPlay.hidden=true;const playback=film?.play();playback?.catch(()=>{filmPlay.hidden=false})});
film?.addEventListener('play',()=>{if(filmPlay)filmPlay.hidden=true});
film?.addEventListener('ended',()=>{if(filmPlay)filmPlay.hidden=false});
apply();window.JOLIBEN={language:()=>lang,translate:(de,en)=>lang==='en'?en:de};
})();
