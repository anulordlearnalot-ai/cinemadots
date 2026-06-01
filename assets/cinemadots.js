(function(){
    var body = document.body;
    var menuBtn = document.getElementById('menuBtn');
    var searchBtn = document.getElementById('searchBtn');
    var menuPanel = document.getElementById('menuPanel');
    var searchPanel = document.getElementById('searchPanel');
    var searchInput = document.getElementById('searchInput');

    function setOpen(panel, btn, open){
      panel.classList.toggle('open', open);
      if(btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      body.classList.toggle('lock', open);
      if(open && panel === searchPanel && searchInput){ setTimeout(function(){ searchInput.focus(); }, 320); }
    }
    function closeAll(){
      setOpen(menuPanel, menuBtn, false);
      setOpen(searchPanel, searchBtn, false);
    }

    menuBtn.addEventListener('click', function(){ var o = !menuPanel.classList.contains('open'); closeAll(); setOpen(menuPanel, menuBtn, o); });
    searchBtn.addEventListener('click', function(){ var o = !searchPanel.classList.contains('open'); closeAll(); setOpen(searchPanel, searchBtn, o); });

    document.querySelectorAll('[data-close]').forEach(function(b){ b.addEventListener('click', closeAll); });
    menuPanel.querySelectorAll('a.mlink').forEach(function(a){ a.addEventListener('click', closeAll); });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeAll(); });

    /* top bar: hide on scroll down, reveal on scroll up */
    var appbar = document.querySelector('.appbar');
    var lastY = window.pageYOffset;
    var ticking = false;
    function onScroll(){
      var y = window.pageYOffset;
      if(menuPanel.classList.contains('open') || searchPanel.classList.contains('open')){ lastY = y; ticking = false; return; }
      if(y > lastY && y > 96){ appbar.classList.add('nav-hidden'); }
      else if(y < lastY){ appbar.classList.remove('nav-hidden'); }
      lastY = y;
      ticking = false;
    }
    window.addEventListener('scroll', function(){
      if(!ticking){ window.requestAnimationFrame(onScroll); ticking = true; }
    }, {passive:true});
  })();