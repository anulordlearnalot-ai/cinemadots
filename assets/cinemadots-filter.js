(function(){
  var ARTICLES = [
    {t:"‘Alien: Romulus’: ความผิดหวังครั้งใหญ่ที่สุดของฤดูร้อน", ex:"บทวิจารณ์ที่ยังมองเห็นด้านสว่างในหนังภาคใหม่ของแฟรนไชส์เก่าแก่", cat:"บทวิจารณ์", tags:["Alien: Romulus","หนังไซไฟ"], date:"2569-05-24", img:"https://i.pinimg.com/1200x/1a/b5/bd/1ab5bdfe80a2b6b2d32aa4091ab54346.jpg", chip:"#3a2419"},
    {t:"เมื่อแสงนีออนกลายเป็นภาษา: งานภาพของหนังนัวร์ร่วมสมัย", ex:"ว่าด้วยการจัดแสงที่เปลี่ยนเมืองทั้งเมืองให้กลายเป็นตัวละคร", cat:"เรียงความ", tags:["ฟิล์ม นัวร์"], date:"2569-05-22", img:"https://i.pinimg.com/736x/93/5e/ac/935eac5071b0e5cf77be12b71d27016f.jpg", chip:"#1c2733"},
    {t:"เวลาในหนังของ Hamaguchi: บทสนทนาที่ไม่เคยรีบร้อน", ex:"ทำไมความยาวจึงเป็นเครื่องมือ ไม่ใช่อุปสรรค", cat:"เรียงความ", tags:["Hirokazu Koreeda"], date:"2569-05-20", img:"https://i.pinimg.com/1200x/b6/ea/2f/b6ea2f61fc060c7eda3b8b0c6f2380f2.jpg", chip:"#1c2733"},
    {t:"คานส์ 2026: เก้าเรื่องที่เราเฝ้ารอจากสาย Competition", ex:"ไล่เรียงผู้กำกับและหนังที่จะลงประชันปาล์มทองปีนี้", cat:"เทศกาล Cannes", tags:["Cannes 2026"], date:"2569-05-18", img:"https://i.pinimg.com/1200x/45/30/f7/4530f79dd444ae085f2a1469bc97c1ab.jpg", chip:"#221f2c"},
    {t:"หนังไทยอิสระปี 2569 ที่ควรค่าแก่การตามดูในโรงเล็ก", ex:"เจ็ดเรื่องนอกกระแสที่กำลังหาที่ทางของตัวเอง", cat:"หนังไทย", tags:["หนังไทย"], date:"2569-05-15", img:"https://i.pinimg.com/1200x/96/49/cb/9649cb8d5a90dba5ffe44b415007681a.jpg", chip:"#2a1b2e"},
    {t:"จากหน้ากระดาษสู่จอเงิน: ศิลปะของการตัดทอน", ex:"นักเขียนบทเล่าถึงสิ่งที่ต้องยอมสละเพื่อให้เรื่องอยู่รอด", cat:"เรียงความ", tags:["นิยายดัดแปลง"], date:"2569-05-12", img:"https://i.pinimg.com/1200x/ef/7f/ac/ef7fac69e9043c8f38e20ad830b36296.jpg", chip:"#332218"},
    {t:"คุยกับผู้กำกับภาพ: การมองหาความเงียบในเฟรม", ex:"บทสนทนาว่าด้วยจังหวะ ความว่าง และการรอคอย", cat:"สัมภาษณ์", tags:["ฟิล์ม นัวร์"], date:"2569-05-09", img:"https://i.pinimg.com/1200x/6d/01/4d/6d014d71f52593006ea2a7f1fcf4b00c.jpg", chip:"#1c2733"},
    {t:"ความทรงจำแบบฟิล์ม: ทำไมเรายังคิดถึงเกรนและฝุ่น", ex:"ว่าด้วยเสน่ห์ของสื่อที่ไม่สมบูรณ์แบบในยุคดิจิทัล", cat:"เรียงความ", tags:["หนังไทย"], date:"2569-05-06", img:"https://i.pinimg.com/736x/20/47/3f/20473fd21f57b8c74059cc359d5199b2.jpg", chip:"#3a1a1a"},
    {t:"Park Chan-wook ประธานคณะกรรมการคานส์ 2026", ex:"ผู้กำกับเกาหลีใต้คนแรกที่ได้เป็นประธานคณะกรรมการตัดสิน", cat:"สัมภาษณ์", tags:["Cannes 2026","Park Chan-wook"], date:"2569-05-03", img:"https://i.pinimg.com/736x/03/20/ee/0320ee293d3484ca4c9bdc56f6c100bf.jpg", chip:"#2c2218"},
    {t:"All of a Sudden: ผลงานล่าสุดของ Ryusuke Hamaguchi", ex:"การกลับมาอีกครั้งของผู้กำกับ ‘Drive My Car’ ที่คานส์ปีนี้", cat:"บทวิจารณ์", tags:["Cannes 2026","Hirokazu Koreeda"], date:"2569-04-30", img:"https://i.pinimg.com/1200x/cc/4f/08/cc4f08f8a898ac7b2a45bcac392457d6.jpg", chip:"#1c2733"},
    {t:"‘Alien: Romulus’ กับการออกแบบเสียงที่คารวะต้นฉบับ", ex:"ทำไมความเงียบยังคงเป็นอาวุธที่ทรงพลังที่สุดในจักรวาลนี้", cat:"บทวิจารณ์", tags:["Alien: Romulus","หนังไซไฟ"], date:"2569-04-27", img:"https://i.pinimg.com/736x/99/af/bc/99afbc62b0804c8fddf6d30a47d36a60.jpg", chip:"#2a1b2e"},
    {t:"หนังไทยยุค 2510s ที่หล่อหลอมรสนิยมของคนดู", ex:"บันทึกความเปลี่ยนแปลงของอุตสาหกรรมและผู้ชมในทศวรรษนั้น", cat:"เรียงความ", tags:["หนังไทย"], date:"2569-04-24", img:"https://i.pinimg.com/1200x/69/fb/00/69fb00aee8d399d5404b50610dc4816e.jpg", chip:"#2c2218"}
  ];

  var PAGE_SIZE = 6;
  var state = { q:"", cats:new Set(), tags:new Set(), sort:"new", page:1 };

  var $ = function(s){ return document.querySelector(s); };
  var grid = $("#grid"), empty = $("#empty"), pager = $("#pager"),
      resultCount = $("#resultCount"), toggleCount = $("#toggleCount"),
      qInput = $("#q"), qClear = $("#qClear"), clearAll = $("#clearAll"),
      emptyClear = $("#emptyClear"), sortSel = $("#sort"),
      facetCat = $("#facet-cat"), facetTag = $("#facet-tag"),
      filterToggle = $("#filterToggle"), filterPanel = $("#filterPanel");

  function tally(key){
    var m = {};
    ARTICLES.forEach(function(a){
      var vals = key === "cat" ? [a.cat] : a.tags;
      vals.forEach(function(v){ m[v] = (m[v]||0)+1; });
    });
    return m;
  }

  function renderFacet(container, key, counts){
    Object.keys(counts).sort().forEach(function(name){
      var lbl = document.createElement("label");
      lbl.className = "checkopt";
      lbl.innerHTML = ''
        + '<input type="checkbox" value="'+name+'" />'
        + '<span class="box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="m5 12 5 5 9-11"/></svg></span>'
        + '<span class="name">'+name+'</span>'
        + '<span class="n">'+counts[name]+'</span>';
      lbl.querySelector("input").addEventListener("change", function(e){
        var set = key === "cat" ? state.cats : state.tags;
        if(e.target.checked) set.add(name); else set.delete(name);
        state.page = 1;
        apply();
      });
      container.appendChild(lbl);
    });
  }

  function match(a){
    if(state.cats.size && !state.cats.has(a.cat)) return false;
    if(state.tags.size && !a.tags.some(function(t){ return state.tags.has(t); })) return false;
    if(state.q){
      var q = state.q.toLowerCase();
      var hay = (a.t + " " + a.ex + " " + a.cat + " " + a.tags.join(" ")).toLowerCase();
      if(hay.indexOf(q) < 0) return false;
    }
    return true;
  }

  function sortList(list){
    if(state.sort === "old") return list.sort(function(a,b){ return a.date.localeCompare(b.date); });
    if(state.sort === "az")  return list.sort(function(a,b){ return a.t.localeCompare(b.t,"th"); });
    return list.sort(function(a,b){ return b.date.localeCompare(a.date); });
  }

  function fmtDate(d){
    var months = ["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];
    var p = d.split("-");
    return parseInt(p[2],10) + " " + months[parseInt(p[1],10)-1] + " " + p[0];
  }

  function apply(){
    var list = sortList(ARTICLES.filter(match));
    var total = list.length;
    var pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
    if(state.page > pages) state.page = pages;

    resultCount.innerHTML = "พบ <b>"+total+"</b> บทความ";
    var chipCount = state.cats.size + state.tags.size + (state.q ? 1 : 0);
    toggleCount.textContent = chipCount ? String(chipCount) : "";
    clearAll.classList.toggle("on", chipCount > 0);
    qClear.classList.toggle("on", !!state.q);

    var start = (state.page - 1) * PAGE_SIZE;
    var pageItems = list.slice(start, start + PAGE_SIZE);
    grid.innerHTML = pageItems.map(function(a){
      return ''
        + '<a class="acard" href="CinemaDots Article.html">'
          + '<div class="ph img" style="--chip:'+a.chip+'"><img class="fill" src="'+a.img+'" alt="" loading="lazy" onerror="this.style.display=\'none\'"/><span class="ph-cap">still</span></div>'
          + '<div class="body">'
            + '<span class="kicker">ภาพยนตร์<span class="sep"></span><span class="alt">'+a.cat+'</span></span>'
            + '<h3>'+a.t+'</h3>'
            + '<p>'+a.ex+'</p>'
            + '<div class="metaline"><span class="byline">CinemaDots</span><span class="mdot"></span><span class="date">'+fmtDate(a.date)+'</span></div>'
          + '</div>'
        + '</a>';
    }).join("");

    empty.classList.toggle("on", total === 0);
    grid.style.display = total === 0 ? "none" : "";
    renderPager(pages);
  }

  function renderPager(pages){
    if(pages <= 1){ pager.classList.add("hide"); pager.innerHTML = ""; return; }
    pager.classList.remove("hide");
    var html = '';
    html += '<button class="pg nav" data-p="'+(state.page-1)+'" '+(state.page===1?"disabled":"")+'>ก่อนหน้า</button>';
    for(var i=1; i<=pages; i++){
      html += '<button class="pg'+(i===state.page?" cur":"")+'" data-p="'+i+'">'+i+'</button>';
    }
    html += '<button class="pg nav" data-p="'+(state.page+1)+'" '+(state.page===pages?"disabled":"")+'>ถัดไป</button>';
    pager.innerHTML = html;
    pager.querySelectorAll("button.pg").forEach(function(b){
      b.addEventListener("click", function(){
        var p = parseInt(b.getAttribute("data-p"),10);
        if(p >= 1 && p <= pages){ state.page = p; apply(); window.scrollTo({top:0,behavior:"smooth"}); }
      });
    });
  }

  function clearFilters(){
    state.q = ""; state.cats.clear(); state.tags.clear(); state.page = 1;
    qInput.value = "";
    document.querySelectorAll(".checkopt input").forEach(function(i){ i.checked = false; });
    apply();
  }

  qInput.addEventListener("input", function(){ state.q = qInput.value.trim(); state.page = 1; apply(); });
  qClear.addEventListener("click", function(){ qInput.value = ""; state.q = ""; state.page = 1; apply(); qInput.focus(); });
  sortSel.addEventListener("change", function(){ state.sort = sortSel.value; apply(); });
  clearAll.addEventListener("click", clearFilters);
  emptyClear.addEventListener("click", clearFilters);
  filterToggle.addEventListener("click", function(){
    var open = filterPanel.classList.toggle("open");
    filterToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  renderFacet(facetCat, "cat", tally("cat"));
  renderFacet(facetTag, "tag", tally("tag"));
  apply();
})();
