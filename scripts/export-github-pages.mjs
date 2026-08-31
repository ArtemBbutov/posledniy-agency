import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";

const source = process.argv[2] ?? "http://127.0.0.1:4174/";
const response = source === "--dist"
  ? await (async () => {
      const { default: worker } = await import(new URL("../dist/server/index.js", import.meta.url));
      return worker.fetch(
        new Request("http://localhost/"),
        { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
        { waitUntil() {}, passThroughOnException() {} },
      );
    })()
  : await fetch(source);
if (!response.ok) throw new Error(`Unable to render site: ${response.status}`);

let html = await response.text();
html = html
  .replace(/<script[\s\S]*?<\/script>/g, "")
  .replace(/<link rel="modulepreload"[^>]*>/g, "")
  .replaceAll('href="/assets/', 'href="assets/')
  .replaceAll('href="/hero-room-v2.png"', 'href="public/hero-room-v2.png"')
  .replaceAll('src="/hero-room-v2.png"', 'src="public/hero-room-v2.png"')
  .replaceAll('href="/hero-room-v3.png"', 'href="public/hero-room-v3.png"')
  .replaceAll('src="/hero-room-v3.png"', 'src="public/hero-room-v3.png"')
  .replaceAll('href="/hero-backrooms.png"', 'href="public/hero-backrooms.png"')
  .replaceAll('src="/hero-backrooms.png"', 'src="public/hero-backrooms.png"')
  .replaceAll('href="/hero-backrooms-v2.png"', 'href="public/hero-backrooms-v2.png"')
  .replaceAll('src="/hero-backrooms-v2.png"', 'src="public/hero-backrooms-v2.png"')
  .replaceAll('src="/telegram-workspace-v1.png"', 'src="public/telegram-workspace-v1.png"')
  .replaceAll('src="/editorial-wall-v1.png"', 'src="public/editorial-wall-v1.png"')
  .replaceAll('src="/case-wake-up-backrooms.png"', 'src="public/case-wake-up-backrooms.png"')
  .replaceAll('src="/case-wake-up-empire-backrooms.png"', 'src="public/case-wake-up-empire-backrooms.png"')
  .replaceAll('src="/case-100k-backrooms.png"', 'src="public/case-100k-backrooms.png"')
  .replaceAll('href="/case-wake-up-backrooms.png"', 'href="public/case-wake-up-backrooms.png"')
  .replaceAll('href="/case-wake-up-empire-backrooms.png"', 'href="public/case-wake-up-empire-backrooms.png"')
  .replaceAll('href="/case-100k-backrooms.png"', 'href="public/case-100k-backrooms.png"')
  .replaceAll('href="/telegram-workspace-v1.png"', 'href="public/telegram-workspace-v1.png"')
  .replaceAll('href="/editorial-wall-v1.png"', 'href="public/editorial-wall-v1.png"')
  .replaceAll('content="https://posledniy-agency.s-eanwagner02532.chatgpt.site/hero-backrooms.png"', 'content="https://artembbutov.github.io/posledniy-agency/public/hero-backrooms.png"')
  .replaceAll('href="https://posledniy-agency.s-eanwagner02532.chatgpt.site/favicon.svg"', 'href="public/favicon.svg"')
  .replaceAll('href="https://posledniy-agency.s-eanwagner02532.chatgpt.site/favicon-ahash.svg"', 'href="public/favicon-ahash.svg"')
  .replaceAll('content="https://posledniy-agency.s-eanwagner02532.chatgpt.site/og-telegram.png"', 'content="https://artembbutov.github.io/posledniy-agency/public/og-telegram.png"');

const staticInteractionScript = `<script>
document.documentElement.classList.add('motion-ready');
const revealTargets=[...document.querySelectorAll(['.story-scene header','.scene-notes article','.scene-conclusion','.cases-heading','.case-card','.transformation header > *','.shift-table article','.change-result','.work-story-copy > *','.work-story li','.system-map','.formats-story header > *','.brief-heading > *','.project-brief > *','.brief-level > footer'].join(','))];
revealTargets.forEach((element,index)=>{element.classList.add('reveal-item');element.style.setProperty('--reveal-delay',Math.min(index%4,3)*70+'ms')});
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-revealed');revealObserver.unobserve(entry.target)}}),{threshold:.13,rootMargin:'0px 0px -7%'});
revealTargets.forEach(element=>revealObserver.observe(element));
const appearanceTargets=[...document.querySelectorAll('.format-lines article')];
appearanceTargets.forEach((element,index)=>{element.classList.add('appearance-item');element.style.setProperty('--appearance-delay',Math.min(index%3,2)*70+'ms')});
const appearanceObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){const element=entry.target;const delay=parseInt(element.style.getPropertyValue('--appearance-delay'),10)||0;element.classList.add('is-visible');setTimeout(()=>element.classList.remove('appearance-item'),delay+560);appearanceObserver.unobserve(element)}}),{threshold:.16,rootMargin:'0px 0px -8%'});
appearanceTargets.forEach(element=>appearanceObserver.observe(element));
const caseCarousel=document.querySelector('.case-carousel');
const caseTrack=caseCarousel?.querySelector('.case-track');
const caseSlides=[...(caseCarousel?.querySelectorAll('[data-case-slide]')||[])];
const caseDots=[...(caseCarousel?.querySelectorAll('[data-case-index]')||[])];
const caseCurrent=caseCarousel?.querySelector('[data-case-current]');
let activeCase=0;
const showCase=nextIndex=>{
  if(!caseTrack||caseSlides.length===0)return;
  activeCase=(nextIndex+caseSlides.length)%caseSlides.length;
  caseTrack.style.transform='translate3d(-'+activeCase*100+'%,0,0)';
  caseSlides.forEach((slide,index)=>{const isActive=index===activeCase;slide.dataset.active=String(isActive);slide.toggleAttribute('aria-hidden',!isActive)});
  caseDots.forEach((dot,index)=>dot.toggleAttribute('aria-current',index===activeCase));
  if(caseCurrent)caseCurrent.textContent=String(activeCase+1).padStart(2,'0');
};
caseCarousel?.querySelector('.case-arrow-prev')?.addEventListener('click',()=>showCase(activeCase-1));
caseCarousel?.querySelector('.case-arrow-next')?.addEventListener('click',()=>showCase(activeCase+1));
caseDots.forEach((dot,index)=>dot.addEventListener('click',()=>showCase(index)));
caseCarousel?.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();showCase(activeCase-1)}if(event.key==='ArrowRight'){event.preventDefault();showCase(activeCase+1)}});
[...document.querySelectorAll('.shift-table article,.work-story li')].forEach(element=>{
  element.tabIndex=0;
  const select=()=>{element.parentElement?.querySelectorAll('.is-selected').forEach(item=>item.classList.remove('is-selected'));element.classList.add('is-selected')};
  element.addEventListener('click',select);
  element.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();select()}});
});
const progress=document.querySelector('.scroll-progress');
const sectionLights=[...document.querySelectorAll('.section-atmosphere')];
const nav=document.querySelector('.br-nav nav');
const navHeader=nav?.closest('.br-nav');
const navLiquid=nav?.querySelector('.nav-liquid');
const navLiquidCore=nav?.querySelector('.nav-liquid-core');
const navLinks=[...(nav?.querySelectorAll('a[href^="#"]')||[])];
let activeNavLink=navLinks[0];
let navIsPointed=false;
let displayedNavLink;
let liquidFrame=0;
let liquidX=0;
let liquidTargetX=0;
let liquidVelocity=0;
let liquidLastTime=0;
let liquidPositioned=false;
let navScrollLock;
let navScrollUnlockTimer=0;
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
const scheduleAmbientEvent=()=>{
  if(reduceMotion||sectionLights.length===0)return;
  setTimeout(()=>{
    if(!document.hidden){
      const visibleLights=sectionLights.filter(light=>{const bounds=light.getBoundingClientRect();return bounds.bottom>innerHeight*.12&&bounds.top<innerHeight*.88});
      const target=visibleLights[Math.floor(Math.random()*visibleLights.length)];
      if(!target){scheduleAmbientEvent();return}
      const eventClass=Math.random()<.78?'is-light-failure':'is-light-surge';
      target.classList.remove('is-light-failure','is-light-surge');void target.offsetWidth;target.classList.add(eventClass);
      setTimeout(()=>target.classList.remove(eventClass),eventClass==='is-light-failure'?520:680);
    }
    scheduleAmbientEvent();
  },5200+Math.random()*9200);
};
scheduleAmbientEvent();
const renderLiquid=()=>{
  if(!navLiquid)return;
  navLiquid.style.transform='translate3d('+liquidX+'px,0,0)';
  const stretch=1+Math.min(Math.abs(liquidVelocity)/900,.16);
  if(navLiquidCore)navLiquidCore.style.transform='scale3d('+stretch+','+(1-(stretch-1)*.28)+',1)';
};
const stepLiquid=time=>{
  if(!liquidLastTime)liquidLastTime=time;
  const delta=Math.min((time-liquidLastTime)/1000,.032);
  liquidLastTime=time;
  const acceleration=(liquidTargetX-liquidX)*100-liquidVelocity*10;
  liquidVelocity+=acceleration*delta;
  liquidX+=liquidVelocity*delta;
  renderLiquid();
  if(Math.abs(liquidTargetX-liquidX)<.08&&Math.abs(liquidVelocity)<.08){
    liquidX=liquidTargetX;liquidVelocity=0;liquidLastTime=0;liquidFrame=0;renderLiquid();return;
  }
  liquidFrame=requestAnimationFrame(stepLiquid);
};
const startLiquidSpring=()=>{if(!liquidFrame){liquidLastTime=0;liquidFrame=requestAnimationFrame(stepLiquid)}};
const moveLiquid=link=>{
  if(!navLiquid||!link||displayedNavLink===link)return;
  displayedNavLink=link;
  liquidTargetX=link.offsetLeft-5;
  navLiquid.style.opacity='1';
  navLinks.forEach(item=>item.toggleAttribute('aria-current',item===link));
  if(!liquidPositioned||reduceMotion){liquidX=liquidTargetX;liquidVelocity=0;liquidPositioned=true;renderLiquid()}
  else startLiquidSpring();
};
const updateActiveNav=()=>{
  if(navScrollLock){activeNavLink=navScrollLock;navHeader?.classList.toggle('is-scrolled',scrollY>72);moveLiquid(navScrollLock);return}
  const threshold=innerHeight*.42;
  const visible=navLinks.filter(link=>{const target=document.querySelector(link.hash);return target&&target.getBoundingClientRect().top<=threshold});
  activeNavLink=visible.at(-1)||navLinks[0];
  navHeader?.classList.toggle('is-scrolled',scrollY>72);
  if(!navIsPointed)moveLiquid(activeNavLink);
};
navLinks.forEach(link=>{
  const enter=()=>{navIsPointed=true;moveLiquid(link)};
  link.addEventListener('pointerenter',enter);
  link.addEventListener('focus',enter);
  link.addEventListener('click',event=>{
    const target=document.querySelector(link.hash);
    if(!target)return;
    event.preventDefault();navScrollLock=link;activeNavLink=link;moveLiquid(link);
    target.scrollIntoView({behavior:reduceMotion?'auto':'smooth',block:'start'});
    history.replaceState(null,'',link.hash);
    clearTimeout(navScrollUnlockTimer);
    navScrollUnlockTimer=setTimeout(()=>{navScrollLock=undefined;updateActiveNav()},reduceMotion?80:1400);
  });
});
const resetPointedNav=()=>{navIsPointed=false;moveLiquid(activeNavLink)};
nav?.addEventListener('pointerleave',resetPointedNav);
nav?.addEventListener('focusout',event=>{if(!(event.relatedTarget instanceof Node)||!nav.contains(event.relatedTarget))resetPointedNav()});
addEventListener('scrollend',()=>{if(navScrollLock){clearTimeout(navScrollUnlockTimer);navScrollLock=undefined;updateActiveNav()}});
const updateProgress=()=>{const maximum=document.documentElement.scrollHeight-innerHeight;progress?.style.setProperty('--progress',String(maximum>0?scrollY/maximum:0))};
updateProgress();updateActiveNav();
addEventListener('scroll',updateProgress,{passive:true});addEventListener('scroll',updateActiveNav,{passive:true});
addEventListener('resize',updateProgress);addEventListener('resize',updateActiveNav);
const brief=document.querySelector('.brief-quiz');
if(brief){
  const briefSteps=[...brief.querySelectorAll('.brief-step')];
  const briefAnswers={};
  const briefProgressCopy=brief.querySelector('.brief-progress-copy');
  const briefProgressRail=brief.querySelector('.brief-progress-rail i');
  const briefProgressDots=[...brief.querySelectorAll('.brief-progress-dots i')];
  const briefBack=brief.querySelector('.brief-navigation button');
  const briefNavigation=brief.querySelector('.brief-navigation');
  const briefSuccess=brief.querySelector('.brief-success');
  const briefName=brief.querySelector('.brief-contact-fields > label:first-child input');
  const briefTelegram=brief.querySelector('.brief-telegram-input input');
  const briefFinish=brief.querySelector('.brief-finish');
  let briefCurrent=0;
  let briefTimer=0;
  const cleanTelegram=value=>value.replace(/^\\s*(https?:\\/\\/)?(www\\.)?t\\.me\\//i,'').replace(/[@\\s]/g,'').replace(/[^A-Za-z0-9_]/g,'').slice(0,32);
  const updateBriefContact=()=>{
    if(briefTelegram)briefTelegram.value=cleanTelegram(briefTelegram.value);
    if(briefFinish)briefFinish.disabled=!briefName||!briefTelegram||briefName.value.trim().length<2||briefTelegram.value.length<4;
  };
  const showBrief=next=>{
    clearTimeout(briefTimer);
    briefCurrent=Math.max(0,Math.min(briefSteps.length-1,next));
    briefSteps.forEach((step,index)=>{
      const active=index===briefCurrent;
      step.dataset.active=String(active);
      step.dataset.position=index<briefCurrent?'before':index>briefCurrent?'after':'current';
      step.toggleAttribute('aria-hidden',!active);
      step.querySelectorAll('input,button').forEach(control=>{if(!control.closest('.brief-other')||control.closest('.brief-other')?.dataset.visible==='true')control.tabIndex=active?0:-1});
    });
    if(briefProgressCopy){const label=briefProgressCopy.querySelector('span');const count=briefProgressCopy.querySelector('b');if(label)label.textContent='АНКЕТА / '+String(briefCurrent+1).padStart(2,'0');if(count)count.textContent=briefCurrent+1+' из '+briefSteps.length}
    if(briefProgressRail)briefProgressRail.style.transform='scaleX('+((briefCurrent+1)/briefSteps.length)+')';
    briefProgressDots.forEach((dot,index)=>dot.dataset.done=String(index<=briefCurrent));
    if(briefBack)briefBack.disabled=briefCurrent===0;
    if(briefNavigation){const note=briefNavigation.querySelector('p');if(note)note.textContent=briefCurrent<briefSteps.length-1?'Ответ сохранится автоматически':'Проверьте контакт перед отправкой'}
    if(briefCurrent===briefSteps.length-1)briefName?.focus();
  };
  brief.querySelectorAll('[data-answer]').forEach(button=>button.addEventListener('click',()=>{
    const step=button.closest('.brief-step');
    const stepIndex=briefSteps.indexOf(step);
    const key=button.dataset.key;
    step.querySelectorAll('[data-answer]').forEach(item=>item.setAttribute('aria-pressed','false'));
    button.setAttribute('aria-pressed','true');
    const other=step.querySelector('.brief-other');
    if(button.dataset.other==='true'){
      if(other){other.dataset.visible='true';const input=other.querySelector('input');input.tabIndex=0;input.focus()}
      briefAnswers[key]='';
      return;
    }
    if(other){other.dataset.visible='false';other.querySelectorAll('input,button').forEach(control=>control.tabIndex=-1)}
    briefAnswers[key]=button.dataset.value||button.textContent.trim();
    briefTimer=setTimeout(()=>showBrief(stepIndex+1),180);
  }));
  brief.querySelectorAll('.brief-other').forEach(other=>{
    const input=other.querySelector('input');
    const confirm=other.querySelector('button');
    const step=other.closest('.brief-step');
    const otherAnswer=step.querySelector('[data-other="true"]');
    const validate=()=>{confirm.disabled=input.value.trim().length<2};
    const commit=()=>{if(confirm.disabled)return;briefAnswers[otherAnswer.dataset.key]='Другое: '+input.value.trim();showBrief(briefSteps.indexOf(step)+1)};
    input.addEventListener('input',validate);
    input.addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();commit()}});
    confirm.addEventListener('click',commit);
  });
  briefBack?.addEventListener('click',()=>showBrief(briefCurrent-1));
  briefName?.addEventListener('input',updateBriefContact);
  briefTelegram?.addEventListener('input',updateBriefContact);
  brief.addEventListener('submit',async event=>{
    event.preventDefault();
    updateBriefContact();
    if(briefFinish?.disabled)return;
    const labels={task:'Задача',stage:'Аудитория',niche:'Ниша',product:'Стадия продукта',result:'Главный результат',budget:'Бюджет'};
    const payload={...briefAnswers,name:briefName.value.trim(),telegram:'@'+briefTelegram.value};
    dispatchEvent(new CustomEvent('agency:brief-submit',{detail:payload}));
    const lines=['АНКЕТА ПРОЕКТА / АГЕНТСТВО НАС#ЛИЯ','',...Object.entries(labels).map(([key,label])=>label+': '+(briefAnswers[key]||'—')),'Имя: '+payload.name,'Telegram: '+payload.telegram];
    try{await navigator.clipboard.writeText(lines.join('\\n'))}catch{}
    brief.dataset.complete='true';
    briefSteps.forEach(step=>{step.dataset.active='false';step.setAttribute('aria-hidden','true')});
    if(briefSuccess){briefSuccess.dataset.active='true';briefSuccess.removeAttribute('aria-hidden')}
    if(briefNavigation)briefNavigation.dataset.hidden='true';
  });
  showBrief(0);
}
</script>`;
html = html.replace("</body>", `${staticInteractionScript}</body>`);

await rm("assets", { recursive: true, force: true });
await mkdir("assets", { recursive: true });
await cp("dist/client/assets", "assets", { recursive: true });
for (const file of await readdir("assets")) {
  if (!file.endsWith(".css")) continue;
  const path = `assets/${file}`;
  const css = (await readFile(path, "utf8"))
    .replaceAll("url(/hero-backrooms-v2.png)", "url(../public/hero-backrooms-v2.png)")
    .replaceAll("url(/backrooms-lower-level.png)", "url(../public/backrooms-lower-level.png)")
    .replaceAll("url(/backrooms-junction.png)", "url(../public/backrooms-junction.png)")
    .replaceAll("url(/backrooms-four-routes.png)", "url(../public/backrooms-four-routes.png)");
  await writeFile(path, css, "utf8");
}
html = html.replaceAll(/url\(C:\/Users\/1wrar\/OneDrive\/Desktop\/nasyl agency\/\.vinext\/fonts\/([^/]+)\/([^/]+\.woff2)\)/g, "url(assets/_vinext_fonts/$1/$2)");
await writeFile("index.html", html, "utf8");
