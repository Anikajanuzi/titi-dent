const patientPhotos=['506192347_1310840214378270_1385050623061250901_n.jpg','506049956_1310840397711585_2201709056301928685_n.jpg'];
const prostheticPhotos=['515436765_24084099451185732_2143361786512991283_n.jpg','515066224_24072763202319357_7784336383380253127_n.jpg','515064814_24072763412319336_7798065385464728227_n.jpg','515011872_24084099437852400_6031775098715043690_n.jpg','514596246_24072763262319351_3397088257742919044_n.jpg','514590250_24072763382319339_1073515911050579349_n.jpg','514421540_24072763325652678_3893144257101992521_n.jpg','514227964_24072763405652670_8900928254337638619_n.jpg'];
const productKeys=['silicone.webp','silicone-vita.jpg','acrylic.jpg','acrylic-vita.jpg','reline.jpg','repair.jpg','zirconia.jpg','metal-porcelain.jpg','implant.jpg','vizil.png','retainer.jpg','bruxism.jpg'];
const productPrices=['110\u20ac','130\u20ac','50\u20ac','70\u20ac','20\u20ac','10\u20ac','35\u20ac','15\u20ac','70\u20ac','250\u20ac','15\u20ac','15\u20ac'];
const pageFiles=['index.html','laboratory.html','patients.html','prosthetics.html','pricing.html','contact.html'];
const icons=['\u25ce','\u25c8','\u25d0','\u25cd','\u25c7','\u25d2','\u25c9'];
const t={
 sq:{nav:['Ballina','Laboratori','Pacient\u00ebt','Protetika','\u00c7mimet','Kontakt'],hero:['Teknik dentar \u00b7 Q\u00eb nga 2010','Laborator Dentar Premium','Art dentar i avancuar, i formuar nga preciziteti, p\u00ebrvoja dhe kujdesi p\u00ebr p\u00ebrfundimin e p\u00ebrsosur.','Zbuloni laboratorin','Shiko sh\u00ebrbimet','Na kontaktoni'],history:['Laboratori yn\u00eb','P\u00ebrvoj\u00eb q\u00eb i jep \u00e7do buz\u00ebqeshjeje besim.','TITI DENT u themelua n\u00eb vitin 2010 nga Astrit Januzi. Q\u00eb nga hapja, laboratori \u00ebsht\u00eb zhvilluar gradualisht n\u00eb nj\u00eb laborator profesional, ku teknologjia moderne bashkohet me mjesht\u00ebrin\u00eb e dor\u00ebs.', ['Themeluar nga Astrit Januzi','Rritje dhe zhvillim i vazhduesh\u00ebm','Trajnime nd\u00ebrkomb\u00ebtare dhe sistemet Vertex','Laborator modern me fokus n\u00eb precizitet']],services:['Krijuar me kujdes','Sh\u00ebrbimet e laboratorit',['Proteza silikoni','Proteza akrilati','Kurora zirkoni','Kurora metal-porcelani','Protetik\u00eb mbi implante','Retainer\u00eb','Zgjidhje p\u00ebr bruksiz\u00ebm'],'\u00c7do rast trajtohet si unik: zgjedhim materiale cil\u00ebsore, kontrollojm\u00eb p\u00ebrshtatjen dhe p\u00ebrfundojm\u00eb me nj\u00eb estetik\u00eb natyrale.'],patients:['Besim i v\u00ebrtet\u00eb','Pacient\u00eb t\u00eb lumtur, rezultate t\u00eb bukura','Nj\u00eb buz\u00ebqeshje e mir\u00ebfillt\u00eb fillon me pun\u00eb t\u00eb sakt\u00eb n\u00eb laborator. Restaurimet tona synojn\u00eb ndjesi natyrale, p\u00ebrshtatje t\u00eb sigurt dhe besim t\u00eb p\u00ebrditsh\u00ebm.', ['Pun\u00eb e kujdesshme dhe rezultat i shk\u00eblqyer.','Cil\u00ebsia, p\u00ebrshtatja dhe v\u00ebmendja ndaj detajeve i tejkaluan pritshm\u00ebrit\u00eb e mia.','P\u00ebrvov\u00eb profesionaliz\u00ebm dhe nj\u00eb rezultat q\u00eb ndihet plot\u00ebsisht natyral.']],prosthetics:['Portofol laboratori','Galeria e protetik\u00ebs','Nga restaurimet e thjeshta deri te zgjidhjet komplekse mbi implante, \u00e7do punim kontrollohet me kujdes p\u00ebr funksion, forc\u00eb dhe bukuri.', ['Proteza precize','Sisteme kurorash','Restaurime t\u00eb personalizuara']],pricing:['Protetika jon\u00eb dentare','Precizitet \u2022 Pasion \u2022 P\u00ebrsosm\u00ebri',['Proteza e silikonit','Proteza e silikonit me dh\u00ebmb VITA','Proteza e akrilatit','Proteza e akrilatit me dh\u00ebmb VITA','Ribazimi','Reparatur\u00eb','Kurora nga zirkoni','Kuror\u00eb metal porcelani','Protez\u00eb mbi implante','Protez\u00eb vizil me 2 attachmente','Retainer','Bruksiz\u00ebm'],['Proteza','Proteza','Proteza','Proteza','Kujdes dhe riparim','Kujdes dhe riparim','Sistem kurorash','Sistem kurorash','Zgjidhje implanti','Zgjidhje implanti','Kujdes dhe riparim','Kujdes dhe riparim']],contact:['Le t\u00eb lidhemi','Niseni me nj\u00eb bised\u00eb.','P\u00ebr pyetje laboratorike, informacion p\u00ebr bashk\u00ebpunim ose konsult\u00eb t\u00eb personalizuar, kontaktoni ekipin e TITI DENT.', ['Vendndodhja','Kosov\u00eb'],['Telefoni','+383 (0)49 350 724'],['Email','titident02@gmail.com'],['Informacion biznesi','Laborator dentar profesional']],feedback:['Ndani p\u00ebrvoj\u00ebn tuaj','Vler\u00ebsimi juaj na ndihmon t\u00eb p\u00ebrsosim \u00e7do detaj.','Emri','Email','Mesazhi','D\u00ebrgo vler\u00ebsimin'],footer:'Teknologji dhe mjesht\u00ebri dentare premium, t\u00eb krijuara me precizitet, pasion dhe p\u00ebrsosm\u00ebri.'},
 en:{nav:['Home','Laboratory','Patients','Prosthetics','Pricing','Contact'],hero:['Dental technician \u00b7 Since 2010','Premium Dental Laboratory','Advanced dental artistry shaped by precision, experience and a relentless eye for the perfect finish.','Discover laboratory','View services','Contact us'],history:['Our laboratory','Experience that gives every smile confidence.','TITI DENT was founded in 2010 by Astrit Januzi. Since opening, the laboratory has grown into a professional dental laboratory where modern technology and meticulous craftsmanship work side by side.', ['Founded by Astrit Januzi','Continuous growth and development','International training and Vertex systems','Modern laboratory focused on precision']],services:['Crafted with care','Laboratory services',['Silicone dentures','Acrylic dentures','Zirconia crowns','Metal porcelain crowns','Implant prosthetics','Retainers','Bruxism solutions'],'Every case is treated as individual: we select quality materials, check the fit and finish each restoration with natural aesthetics in mind.'],patients:['Real confidence','Happy Patients, Beautiful Results','A genuine smile begins with precise laboratory work. Our restorations are made to feel natural, fit securely and inspire everyday confidence.', ['Careful work and an excellent result.','The quality, fit and attention to detail exceeded my expectations.','A professional experience with a result that feels completely natural.']],prosthetics:['Laboratory portfolio','Prosthetics Gallery','From refined single restorations to complex implant solutions, every piece is carefully checked for function, strength and beauty.', ['Precision dentures','Crown systems','Custom restorations']],pricing:['Our Dental Prosthetics','Precision \u2022 Passion \u2022 Perfection',['Silicone denture','Silicone denture with VITA teeth','Acrylic denture','Acrylic denture with VITA teeth','Relining','Repair','Zirconia crown','Metal porcelain crown','Implant-supported prosthesis','Vizil prosthesis with 2 attachments','Retainer','Bruxism guard'],['Dentures','Dentures','Dentures','Dentures','Care & repair','Care & repair','Crown system','Crown system','Implant solution','Implant solution','Care & repair','Care & repair']],contact:['Let\u2019s connect','Begin with a conversation.','For laboratory enquiries, collaboration information or a tailored consultation, contact the TITI DENT team.', ['Location','Kosovo'],['Phone','+383 (0)49 350 724'],['Email','titident02@gmail.com'],['Business information','Professional dental laboratory']],feedback:['Share your experience','Your feedback helps us refine every detail.','Name','Email','Message','Send feedback'],footer:'Premium dental technology and craftsmanship, created with precision, passion and perfection.'}
};
let lang=localStorage.getItem('titi-language')||'sq'; let rating=5; const page=document.querySelector('main').dataset.page;
function loader(){let e=document.querySelector('#tooth-loader');if(!e){e=document.createElement('div');e.id='tooth-loader';e.innerHTML='<div class="loader-tooth">\u{1F9B7}</div><p> TITI DENT </p>';document.body.append(e)}e.classList.add('show');setTimeout(()=>e.classList.remove('show'),550)}
function section(x,extra=''){return `<section class="section ${extra}"><div class="section-head reveal"><p class="eyebrow">${x[0]}</p><h2>${x[1]}</h2><p>${x[2]||''}</p></div>`}
function header(d){document.querySelector('#site-header').innerHTML=`<header class="nav"><a class="brand" href="index.html"><img src="assets/logo.jpeg" alt="TITI DENT logo"></a><button class="menu" id="menu" aria-label="Open navigation">\u2630</button><nav id="nav-links">${d.nav.map((x,i)=>`<a class="${pageFiles[i].startsWith(page)?'active':''}" href="${pageFiles[i]}">${x}</a>`).join('')}</nav><div class="language"><button class="${lang==='sq'?'active':''}" data-lang="sq">AL</button><span>|</span><button class="${lang==='en'?'active':''}" data-lang="en">EN</button></div></header>`;document.querySelector('#menu').onclick=()=>document.querySelector('#nav-links').classList.toggle('open');document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{loader();setTimeout(()=>{lang=b.dataset.lang;localStorage.setItem('titi-language',lang);render()},160)})}
function footer(d){document.querySelector('#site-footer').innerHTML=`<footer><img src="assets/logo.jpeg" alt="TITI DENT logo"><div><strong>TITI DENT</strong><p>${d.footer}</p></div><div><a href="tel:+38349350724">+383 (0)49 350 724</a><br><a href="mailto:titident02@gmail.com">titident02@gmail.com</a><div class="social"><a href="https://www.facebook.com/labtitident" target="_blank" rel="noreferrer" aria-label="Facebook">f</a></div></div></footer>`}
function services(d){return `${section(d.services,'muted')}<div class="service-grid">${d.services[2].map((x,i)=>`<article class="service reveal"><div class="icon">${icons[i]}</div><h3>${x}</h3><p>${d.services[3]}</p></article>`).join('')}</div></section>`}
function pricing(d){return `${section(['TITI DENT',d.pricing[0],d.pricing[1]],'muted')}<div class="price-grid">${d.pricing[2].map((x,i)=>`<article class="price reveal"><img src="assets/prices/${productKeys[i]}" onerror="this.onerror=null;this.src='assets/prices/premium-prosthetics.png'" alt="${x}"><div class="price-copy"><span>${d.pricing[3][i]}</span><h3>${x}</h3><strong>${productPrices[i]}</strong></div></article>`).join('')}</div></section>`}
function prosthetics(d){return `${section(d.prosthetics)}<div class="portfolio">${prostheticPhotos.map((x,i)=>`<article class="reveal"><img src="assets/prosthetics/${x}" onerror="this.onerror=null;this.src='assets/logo.jpeg'" alt="TITI DENT dental prosthetic"><p>${d.prosthetics[3][i%3]}</p></article>`).join('')}</div></section>`}
function render(){let d=t[lang],html='';document.documentElement.lang=lang;header(d);footer(d);if(page==='home')html=`<section class="hero grid"><div class="hero-copy reveal"><p class="eyebrow">${d.hero[0]}</p><h1>TITI <em>DENT</em></h1><h2>${d.hero[1]}</h2><p class="lead">${d.hero[2]}</p><div class="actions"><a class="button primary" href="laboratory.html">${d.hero[3]}</a><a class="button" href="prosthetics.html">${d.hero[4]}</a><a class="button" href="contact.html">${d.hero[5]}</a></div></div><div class="hero-logo reveal"><img src="assets/logo.jpeg" alt="TITI DENT"></div></section>${services(d)}`;if(page==='laboratory')html=`${section(d.history)}<div class="timeline">${d.history[3].map((x,i)=>`<article class="reveal"><strong>${i?'0'+(i+1):'2010'}</strong><p>${x}</p></article>`).join('')}</div></section>${services(d)}`;if(page==='patients')html=`${section(d.patients,'full')}<div class="film-viewport"><div class="film">${[...patientPhotos,...patientPhotos,...patientPhotos,...patientPhotos].map(x=>`<img src="assets/patients/${x}" onerror="this.onerror=null;this.src='assets/logo.jpeg'" alt="TITI DENT patient result">`).join('')}</div></div><div class="testimonial-grid">${d.patients[3].map(x=>`<article class="testimonial reveal">\u201c${x}\u201d<b>\u2014 TITI DENT</b></article>`).join('')}</div></section>`;if(page==='prosthetics')html=prosthetics(d);if(page==='pricing')html=pricing(d);if(page==='contact')html=contact(d);document.querySelector('main').innerHTML=html;bind()}
document.head.insertAdjacentHTML('beforeend','<style>#tooth-loader{position:fixed;inset:0;z-index:100;display:grid;place-content:center;text-align:center;background:#0f1115;opacity:0;visibility:hidden;transition:opacity .25s,visibility .25s}#tooth-loader.show{opacity:1;visibility:visible}.loader-tooth{font-size:76px;line-height:1;color:#43d8f9;filter:drop-shadow(0 0 18px #43d8f9);animation:toothSpin .7s ease-in-out infinite alternate}#tooth-loader p{font-size:11px;letter-spacing:.35em;color:#dfe7ee;margin-top:20px}@keyframes toothSpin{to{transform:rotate(12deg) scale(1.12);filter:drop-shadow(0 0 32px #43d8f9)}}.rating button{border:0;background:transparent;color:#ffffff44;font-size:23px;cursor:pointer;padding:0}.rating button.selected{color:#43d8f9}.nav nav a.active{color:#43d8f9}.contact-card a{color:#43d8f9;text-decoration:none}</style>');
t.sq.feedbackError='Nuk mund ta d\u00ebrgonim mesazhin. Ju lutemi provoni p\u00ebrs\u00ebri.';
t.en.feedbackError='We could not send your message. Please try again.';
document.head.insertAdjacentHTML('beforeend','<style>.feedback-notice{margin:0;color:#ffb4b4;font-size:13px}.button:disabled{opacity:.65;cursor:wait}</style>');
function render(){let d=t[lang],html='';document.documentElement.lang=lang;header(d);footer(d);if(page==='home')html=`<section class="hero grid"><div class="hero-copy reveal"><p class="eyebrow">${d.hero[0]}</p><h1>TITI <em>DENT</em></h1><h2>${d.hero[1]}</h2><p class="lead">${d.hero[2]}</p><div class="actions"><a class="button primary" href="laboratory.html">${d.hero[3]}</a><a class="button" href="prosthetics.html">${d.hero[4]}</a><a class="button" href="contact.html">${d.hero[5]}</a></div></div><div class="hero-logo reveal"><img src="assets/logo.jpeg" alt="TITI DENT"></div></section>${services(d)}`;if(page==='laboratory')html=`${section(d.history)}<div class="timeline">${d.history[3].map((x,i)=>`<article class="reveal"><strong>${i?'0'+(i+1):'2010'}</strong><p>${x}</p></article>`).join('')}</div></section>${services(d)}`;if(page==='patients')html=`${section(d.patients,'full')}<div class="film-viewport"><div class="film">${[...patientPhotos,...patientPhotos,...patientPhotos,...patientPhotos].map(x=>`<img src="assets/patients/${x}" onerror="this.onerror=null;this.src='assets/logo.jpeg'" alt="TITI DENT patient result">`).join('')}</div></div><div class="testimonial-grid">${d.patients[3].map(x=>`<article class="testimonial reveal">\u201c${x}\u201d<b>\u2014 TITI DENT</b></article>`).join('')}</div></section>`;if(page==='prosthetics')html=prosthetics(d);if(page==='pricing')html=pricing(d);if(page==='contact')html=contact(d);document.querySelector('main').innerHTML=html;bind()}
/* Contact page without feedback form */
function contact(d){
  const cards=d.contact.slice(3);
  const symbols=['\u2316','\u260e','\u2709','\u25f7'];
  return `${section(d.contact)}<div class="contact-grid">${cards.map((item,index)=>`<article class="contact-card reveal"><div class="icon">${symbols[index]}</div><p>${item[0]}</p><small>${item[1]}</small></article>`).join('')}</div></section>`;
}

/* Navigation and reveal effects only â€” no feedback submission behavior */
function bind(){
  document.querySelectorAll('a[href$=".html"]').forEach(link=>link.addEventListener('click',event=>{
    if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||link.target==='_blank') return;
    const href=link.getAttribute('href');
    if(!href||href.startsWith('#')||href===location.pathname.split('/').pop()) return;
    event.preventDefault();
    loader();
    setTimeout(()=>{ location.href=href; },360);
  }));
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
}
/* Refined, compact footer */
function footer(d){
  document.querySelector('#site-footer').innerHTML=`
    <footer class="site-footer">
      <img src="assets/logo.jpeg" alt="TITI DENT logo">
      <div class="footer-copy">
        <strong>TITI DENT</strong>
        <p>${d.footer}</p>
      </div>
      <div class="footer-meta">
        <a href="tel:+38349350724">+383 (0)49 350 724</a>
        <a href="mailto:titident02@gmail.com">titident02@gmail.com</a>
        <div class="social"><a href="https://www.facebook.com/labtitident" target="_blank" rel="noreferrer" aria-label="Facebook">f</a></div>
      </div>
    </footer>`;
}
/* Distinct, researched service descriptions */
t.sq.services[3]=[
  'Proteza fleksibël, pa metal, e projektuar të përshtatet rehat me konturet e gojës. Zgjidhja përfundimtare përcaktohet gjithmonë sipas rastit klinik.',
  'Bazë dentare prej akrilati e punuar sipas masës për proteza të plota ose të pjesshme. Materiali lejon rregullime dhe riparime kur nevojiten.',
  'Kurorë pa metal nga zirkoni, një qeramikë me rezistencë të lartë. Përpunimi preciz synon forcë të besueshme dhe një pamje të rafinuar.',
  'Strukturë metalike e veshur me porcelan dentar, që bashkon mbështetjen e brendshme me estetikën e sipërfaqes së dhëmbit.',
  'Kurora, ura ose proteza të projektuara për t’u lidhur me implante dentare. Çdo punim krijohet sipas planit të mjekut dhe anatomisë së pacientit.',
  'Aparat i personalizuar që ndihmon në ruajtjen e pozicionit të dhëmbëve pas trajtimit ortodontik dhe në kufizimin e rikthimit të tyre.',
  'Mbrojtëse okluzale e punuar sipas masës, që krijon një shtresë mbrojtëse ndërmjet dhëmbëve gjatë shtrëngimit ose kërcitjes natën.'
];
t.en.services[3]=[
  'A flexible, metal-free removable denture designed to sit comfortably around the contours of the mouth. The final option is always selected for the individual clinical case.',
  'A custom acrylic base for complete or partial dentures. This material can allow adjustments and repairs when they are needed.',
  'A metal-free zirconia crown made from a high-strength ceramic. Precise finishing supports dependable strength with a refined appearance.',
  'A metal substructure veneered with dental porcelain, combining internal support with the aesthetics of a tooth-coloured surface.',
  'Crowns, bridges or dentures designed to connect with dental implants. Each restoration is made around the clinician’s plan and the patient’s anatomy.',
  'A custom appliance that helps maintain tooth position after orthodontic treatment and reduces the tendency for teeth to move back.',
  'A custom occlusal guard that forms a protective layer between the teeth during night-time clenching or grinding.'
];
function services(d){
  return `${section(d.services,'muted')}<div class="service-grid">${d.services[2].map((name,index)=>`<article class="service reveal"><div class="icon">${icons[index]}</div><h3>${name}</h3><p>${d.services[3][index]}</p></article>`).join('')}</div></section>`;
}
/* Professional training page */
pageFiles.splice(2,0,'trainings.html');
t.sq.nav.splice(2,0,'Trajnime');
t.en.nav.splice(2,0,'Trainings');
t.sq.trainings=['Zhvillim profesional','Trajnime dhe edukim i vazhdueshëm','Që nga themelimi i TITI DENT, Astrit Januzi ka investuar vazhdimisht në trajnime profesionale për të zgjeruar njohuritë dhe për të përsosur punën laboratorike. Kjo përvojë e vazhdueshme ndihmon që çdo rast të trajtohet me kujdes, metodë dhe vëmendje ndaj detajeve.',['Trajnim profesional','Mësim i vazhdueshëm']];
t.en.trainings=['Professional development','Training and continuing education','Since founding TITI DENT, Astrit Januzi has continued to invest in professional training to deepen knowledge and refine laboratory work. This commitment to learning supports a careful, methodical and detail-focused approach to every case.',['Professional training','Continuous learning']];
const trainingPhotos=['training-1.jpg','training-2.jpg'];
function trainings(d){
  return `${section(d.trainings)}<div class="training-grid">${trainingPhotos.map((photo,index)=>`<article class="training-card reveal"><img src="assets/trainings/${photo}" alt="TITI DENT professional training"><div><span>${String(index+1).padStart(2,'0')}</span><h3>${d.trainings[3][index]}</h3></div></article>`).join('')}</div></section>`;
}
function render(){
  const d=t[lang]; let html='';
  document.documentElement.lang=lang; header(d); footer(d);
  if(page==='home') html=`<section class="hero grid"><div class="hero-copy reveal"><p class="eyebrow">${d.hero[0]}</p><h1>TITI <em>DENT</em></h1><h2>${d.hero[1]}</h2><p class="lead">${d.hero[2]}</p><div class="actions"><a class="button primary" href="laboratory.html">${d.hero[3]}</a><a class="button" href="prosthetics.html">${d.hero[4]}</a><a class="button" href="contact.html">${d.hero[5]}</a></div></div><div class="hero-logo reveal"><img src="assets/logo.jpeg" alt="TITI DENT"></div></section>${services(d)}`;
  if(page==='laboratory') html=`${section(d.history)}<div class="timeline">${d.history[3].map((item,index)=>`<article class="reveal"><strong>${index?'0'+(index+1):'2010'}</strong><p>${item}</p></article>`).join('')}</div></section>${services(d)}`;
  if(page==='trainings') html=trainings(d);
  if(page==='patients') html=`${section(d.patients,'full')}<div class="film-viewport"><div class="film">${[...patientPhotos,...patientPhotos,...patientPhotos,...patientPhotos].map(photo=>`<img src="assets/patients/${photo}" onerror="this.onerror=null;this.src='assets/logo.jpeg'" alt="TITI DENT patient result">`).join('')}</div></div><div class="testimonial-grid">${d.patients[3].map(item=>`<article class="testimonial reveal">\u201c${item}\u201d<b>\u2014 TITI DENT</b></article>`).join('')}</div></section>`;
  if(page==='prosthetics') html=prosthetics(d);
  if(page==='pricing') html=pricing(d);
  if(page==='contact') html=contact(d);
  document.querySelector('main').innerHTML=html; bind();
}
/* Training imagery moved into the Prosthetics portfolio */
const trainingNavIndex=pageFiles.indexOf('trainings.html');
if(trainingNavIndex!==-1){
  pageFiles.splice(trainingNavIndex,1);
  t.sq.nav.splice(trainingNavIndex,1);
  t.en.nav.splice(trainingNavIndex,1);
}
t.sq.trainingHighlight=['Rritje përmes mësimit','Trajnim që forcon çdo detaj','Zhvillimi profesional është pjesë e kulturës së TITI DENT. Çdo trajnim pasuron njohuritë, rafinon metodën e punës dhe ndihmon që çdo restaurim të trajtohet me të njëjtin përkushtim ndaj precizitetit.',['Edukimi i vazhdueshëm','Përvojë profesionale']];
t.en.trainingHighlight=['Growth through learning','Training that strengthens every detail','Professional development is part of the TITI DENT culture. Every training experience deepens knowledge, refines the working method and supports the same commitment to precision in every restoration.',['Continuing education','Professional experience']];
function prosthetics(d){
  return `${section(d.prosthetics)}<div class="portfolio">${prostheticPhotos.map((photo,index)=>`<article class="reveal"><img src="assets/prosthetics/${photo}" onerror="this.onerror=null;this.src='assets/logo.jpeg'" alt="TITI DENT dental prosthetic"><p>${d.prosthetics[3][index%3]}</p></article>`).join('')}</div></section>${section(d.trainingHighlight,'muted')}<div class="training-grid">${trainingPhotos.map((photo,index)=>`<article class="training-card reveal"><img src="assets/trainings/${photo}" alt="TITI DENT professional training"><div><span>${String(index+1).padStart(2,'0')}</span><h3>${d.trainingHighlight[3][index]}</h3></div></article>`).join('')}</div></section>`;
}
function render(){
  const d=t[lang]; let html='';
  document.documentElement.lang=lang; header(d); footer(d);
  if(page==='home') html=`<section class="hero grid"><div class="hero-copy reveal"><p class="eyebrow">${d.hero[0]}</p><h1>TITI <em>DENT</em></h1><h2>${d.hero[1]}</h2><p class="lead">${d.hero[2]}</p><div class="actions"><a class="button primary" href="laboratory.html">${d.hero[3]}</a><a class="button" href="prosthetics.html">${d.hero[4]}</a><a class="button" href="contact.html">${d.hero[5]}</a></div></div><div class="hero-logo reveal"><img src="assets/logo.jpeg" alt="TITI DENT"></div></section>${services(d)}`;
  if(page==='laboratory') html=`${section(d.history)}<div class="timeline">${d.history[3].map((item,index)=>`<article class="reveal"><strong>${index?'0'+(index+1):'2010'}</strong><p>${item}</p></article>`).join('')}</div></section>${services(d)}`;
  if(page==='patients') html=`${section(d.patients,'full')}<div class="film-viewport"><div class="film">${[...patientPhotos,...patientPhotos,...patientPhotos,...patientPhotos].map(photo=>`<img src="assets/patients/${photo}" onerror="this.onerror=null;this.src='assets/logo.jpeg'" alt="TITI DENT patient result">`).join('')}</div></div><div class="testimonial-grid">${d.patients[3].map(item=>`<article class="testimonial reveal">\u201c${item}\u201d<b>\u2014 TITI DENT</b></article>`).join('')}</div></section>`;
  if(page==='prosthetics') html=prosthetics(d);
  if(page==='pricing') html=pricing(d);
  if(page==='contact') html=contact(d);
  document.querySelector('main').innerHTML=html; bind();
}

/* Render only after every page definition and translation is ready */
render();
