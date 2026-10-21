/* Native disclosure keeps the product links usable without hover or a mouse. */
(()=>{'use strict';const header=document.querySelector('.global-header');if(!header)return;const disclosure=header.querySelector('.global-visions'),summary=disclosure.querySelector('summary'),links=header.querySelector('.global-links'),menu=header.querySelector('.global-menu');
const close=()=>{disclosure.open=false};
document.addEventListener('click',e=>{if(!disclosure.contains(e.target))close();if(!header.contains(e.target)&&links.classList.contains('open')){links.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
disclosure.addEventListener('focusout',()=>{setTimeout(()=>{if(!disclosure.contains(document.activeElement))close()},0)});
header.addEventListener('click',e=>{if(e.target.closest('a'))close()});
document.addEventListener('keydown',e=>{if(e.key!=='Escape')return;if(disclosure.open){e.preventDefault();e.stopImmediatePropagation();close();summary.focus()}else if(links.classList.contains('open')){e.preventDefault();links.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus()}},true);
const syncLanguage=()=>{const en=document.documentElement.lang==='en';header.querySelector('[data-main-navigation]').setAttribute('aria-label',en?'Main navigation':'Hauptnavigation');menu.setAttribute('aria-label',en?'Open or close navigation':'Navigation öffnen oder schließen');document.querySelector('.global-subnav')?.setAttribute('aria-label',en?'On this page':'Auf dieser Seite')};new MutationObserver(syncLanguage).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});syncLanguage();
})();
