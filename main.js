//  perangkat desa
const cardJabatan=document.getElementById("pejabat")
  const anggota = [
    { id:'1', jabatan:'Kepala Desa', nama:'Yudi Ardian', foto:'img/yudi.jpg' },
    { id:'2', jabatan:'Sekretaris', nama:'Aryo Saputra', foto:'img/aryo.jpg' },
    { id:'3',  jabatan:'Bendahara', nama:'Andes', foto:'img/andes.jpg' },
    { id:'4',  jabatan:'Kadus I', nama:'M. Munir', foto:'img/munir.jpg' },
    { id:'5',  jabatan:'Kadus II', nama:'Reza Munandar', foto:'img/reza.jpg' },
    { id:'4',  jabatan:'Kadus I', nama:'M. Munir', foto:'img/munir.jpg' },
    { id:'5',  jabatan:'Kadus II', nama:'Reza Munandar', foto:'img/reza.jpg' }
  ];

  let html=""

  anggota.forEach(item =>{
    html+=`<div class="penjabat">
    <div style="width:100%;height:150px;"></div>
    <strong>${item.nama}</strong>
    <p>${item.jabatan}</p>
    </div>
    `
  })
cardJabatan.innerHTML=html
  console.log(cardJabatan)


  const data = [
    {
      title: " Masjid Nurul Iman Desa Perbo",
      desc: "Agamis dan menjaga kerukunan beragama",
      anim: "anim1"
    },
    {
      title: "Balai Desa Perbo",
      desc: "Mupakat untuk kepentingan bersama",
      anim: "anim2"
    },
    {
      title: "Palawija",
      desc: "Perkebunanan Untuk Kesejatraan Warga",
      anim: "anim3"
    },
    {
      title: "persawahan yang luas",
      desc: " Ketahanan Pangan Yang Berkesinambungan",
      anim: "anim4"
    }
  ];

  const slides = document.querySelectorAll(".slide");
const thumbs = document.querySelectorAll(".thumb");
const slogan = document.getElementById("slogan");
const title = slogan.querySelector("h2");
const desc = slogan.querySelector("p");

let i = 0;

function slide(index){
  slides[i].classList.remove("active")
  thumbs[i].classList.remove("active-thumb")
 i=index
  slides[i].classList.add("active")
  thumbs[i].classList.add("active-thumb")
  title.innerText=data[i].title
  desc.innerText=data[i].desc
  slogan.className="text"
  slogan.classList.add(data[i].anim)

}
 setInterval(() =>{
  let next=(i+1)%slides.length
  slide(next)
 },2000)

  thumbs.forEach((item,index) =>{
    item.addEventListener("click",function(){
     
      slide(index)
    })
  })


  const menu=document.getElementById("menu")
  const humberger=document.getElementById("humberger")

  humberger.addEventListener("click", function() {
    menu.classList.toggle("active")
  })
   menu.addEventListener("click", function(e) {
    if(!e.target.classList.contains("humberger")){
      menu.classList.remove("active")
    }
   })
  document.addEventListener("click", function(e) {
  if (!menu.contains(e.target) && !humberger.contains(e.target)) {
    menu.classList.remove("active");
  }
});

        // event gallery
  const galleryData = [
  {
    id: 0,
    foto: "1000014325.jpg",
    desc: "Pemandangan sawah Desa Perbo di pagi hari"
  },
  {
    id: 1,
    foto: "1000014230.jpg",
    desc: "Kegiatan masyarakat saat panen"
  },
  {
    id: 2,
    foto: "1000014228.jpg",
    desc: "Jalan desa yang asri dan sejuk"
  },
  {
    id: 3,
    foto: "1000014232.jpg",
    desc: "Gunung yang mengelilingi desa"
  },
  {
    id: 3,
    foto: "1000014232.jpg",
    desc: "Gunung yang mengelilingi desa"
  },
  {
    id: 3,
    foto: "1000014232.jpg",
    desc: "Gunung yang mengelilingi desa"
  }
];
const galleryContainer = document.querySelector(".gallerycontent");

galleryData.forEach(item => {
  const card = document.createElement("div");
  card.className = "gallery-card";
  card.dataset.id = item.id;

  card.innerHTML = `<img src="${item.foto}" alt="foto desa">`;

  galleryContainer.appendChild(card);
});
const cards=document.querySelectorAll(".gallery-card")
cards.forEach(card => {
card.addEventListener('touchstart', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 10px 20px rgba(255,255,255,0.96)';
    });

    card.addEventListener('touchend', () => {
      setTimeout(() => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
      }, 150);
    })
  });
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalDesc = document.getElementById("modalDesc");

galleryContainer.addEventListener("click", function(e) {
  const card = e.target.closest(".gallery-card");

  if (!card) return; // kalau bukan card, stop

  const id = Number(card.dataset.id);
 open(card)
});

function open(card) {
 const data=galleryData.find(p => p.id === Number(card.dataset.id))
const nama=card.querySelector('img')
  modal.style.display="flex"

  

  modalImg.src=nama.src
  modalDesc.textContent=data.desc
  
  
}
const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

cardJabatan.addEventListener("click",function(e){
const tutum=e.target.closest(".penjabat")
openModal(tutum)
})

function openModal(tutum){
  console.log(tutum)
  document.getElementById("usak").textContent=tutum.textContent
  document.getElementById("mandul").style.display="flex"
}

const tutupModal = document.getElementById("tutupModal");

tutupModal.addEventListener("click", () => {
 document.getElementById("mandul").style.display="none"
});
const mandul=document.getElementById("mandul")
mandul.addEventListener("click", (e) => {
  if (e.target === mandul) {
    mandul.style.display = "none";
  }
});
    // tombol SCROLL
 const scrollBtn = document.createElement('button');
  scrollBtn.textContent = '↑ Top';
  scrollBtn.style.position = 'fixed';
  scrollBtn.style.bottom = '20px';
  scrollBtn.style.right = '20px';
  scrollBtn.style.padding = '10px 15px';
  scrollBtn.style.fontSize = '16px';
  scrollBtn.style.display = 'none';
  scrollBtn.style.border = 'none';
  scrollBtn.style.borderRadius = '5px';
  scrollBtn.style.background = '#3498db';
  scrollBtn.style.color = 'white';
  scrollBtn.style.cursor = 'pointer';
  scrollBtn.style.zIndex = '1000';
  document.body.appendChild(scrollBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
    // brand bisa di geser
  const card = document.getElementById('draggableCard');

let offsetX, offsetY;
let isDragging = false;

card.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - card.offsetLeft;
  offsetY = e.clientY - card.offsetTop;

  card.classList.add('active'); // 🔥 ini penting
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  let x = e.clientX - offsetX;
  let y = e.clientY - offsetY;

  const maxX = window.innerWidth - card.offsetWidth;
  const maxY = window.innerHeight - card.offsetHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  card.style.left = e.clientX + 'px';
  card.style.top = e.clientY + 'px';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  // card.classList.remove('active'); // 🔥 ini juga penting
});
card.addEventListener('touchstart', (e) => {
  isDragging = true;
  offsetX = e.touches[0].clientX - card.offsetLeft;
  offsetY = e.touches[0].clientY - card.offsetTop;
});

document.addEventListener('touchmove', (e) => {
  if (!isDragging) return;

  e.preventDefault();

  let x = e.touches[0].clientX - offsetX;
  let y = e.touches[0].clientY - offsetY;

   card.style.left = x + 'px';
  card.style.top = y + 'px';
});

document.addEventListener('touchend', () => {
  isDragging = false;
});
function toggleMenu() {
  const menu = document.getElementById('miniMenu');
  menu.classList.toggle('show');
}
