(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('gnav');
  if(btn&&nav){
    btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');btn.textContent=o?'閉じる':'メニュー';});
    nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.textContent='メニュー';}});
  }
  var form=document.getElementById('trial-form');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      if(!form.reportValidity())return;
      document.getElementById('form-wrap').classList.add('form-done');
      var t=document.getElementById('thanks');t.classList.add('show');
      t.scrollIntoView({behavior:'smooth',block:'center'});
    });
  }
})();
