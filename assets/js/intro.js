/* Intro ligera sin vídeo externo. Respeta movimiento reducido y se ejecuta una vez por sesión. */
(() => {
 const intro=document.getElementById('cinemaIntro');
 const skip=document.getElementById('skipIntro');
 const count=document.getElementById('introLitres');
 if(!intro) return;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 let seen=false;
 try {seen=sessionStorage.getItem('trb_luxury_intro_seen')==='1'}catch(_){}
 if(reduced || seen) return;
 intro.hidden=false;
 document.body.style.overflow='hidden';
 let raf=0, finished=false;
 const start=performance.now();
 function finish(){if(finished)return;finished=true;cancelAnimationFrame(raf);intro.classList.add('is-leaving');document.body.style.overflow='';try{sessionStorage.setItem('trb_luxury_intro_seen','1')}catch(_){}setTimeout(()=>{intro.hidden=true},540)}
 skip.addEventListener('click',finish);
 function frame(t){const elapsed=Math.min((t-start)/1000,6);const litres=Math.max(0,Math.min(1,(elapsed-1.1)/3.8))*35.0;count.textContent=litres.toFixed(1).replace('.',',')+' L';if(elapsed>=6){finish();return}raf=requestAnimationFrame(frame)}
 raf=requestAnimationFrame(frame);
})();
