//  perangkat desa
document.addEventListener("DOMContentLoaded", function () {
  google.charts.load('current', {packages:["orgchart"]});
  google.charts.setOnLoadCallback(drawChart);
});

function createNode(jabatan, nama, foto) {
  return `
    <div style="text-align:center; padding:10px;">
      <img src="${foto}" style="width:50px;height:60px;border-radius:50%;object-fit:cover;"><br>
      <strong>${jabatan}</strong><br>
      ${nama}
    </div>
  `;
}

function drawChart() {
  var dataChart = new google.visualization.DataTable();
  dataChart.addColumn('string', 'Name');
  dataChart.addColumn('string', 'Manager');
  dataChart.addColumn('string', 'ToolTip');

  // ✅ DATA (tinggal tambah di sini saja)
  const anggota = [
    { id:'Kepala Desa', parent:'', jabatan:'Kepala Desa', nama:'Yudi Ardian', foto:'img/yudi.jpg' },
    { id:'Sekretaris', parent:'Kepala Desa', jabatan:'Sekretaris', nama:'Aryo Saputra', foto:'img/aryo.jpg' },
    { id:'Bendahara', parent:'Kepala Desa', jabatan:'Bendahara', nama:'Andes', foto:'img/andes.jpg' },
    { id:'Kadus I', parent:'Kepala Desa', jabatan:'Kadus I', nama:'M. Munir', foto:'img/munir.jpg' },
    { id:'Kadus II', parent:'Kepala Desa', jabatan:'Kadus II', nama:'Reza Munandar', foto:'img/reza.jpg' },
  ];

  // 🔁 Loop otomatis
  const rows = anggota.map(item => [
    {
      v: item.id,
      f: createNode(item.jabatan, item.nama, item.foto)
    },
    item.parent,
    item.jabatan
  ]);

  dataChart.addRows(rows);

  var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
  chart.draw(dataChart, {allowHtml:true});
}


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

let current = 0;

// fungsi tampilkan slide
function showSlide(index) {
  slides.forEach(img => img.classList.remove("active"));
  thumbs.forEach(t => t.classList.remove("active-thumb"));

  slides[index].classList.add("active");
  thumbs[index].classList.add("active-thumb");

  // ganti teks
  title.innerText = data[index].title;
  desc.innerText = data[index].desc;

  // reset animasi
  slogan.className = "text";
  setInterval(() => slogan.classList.add(data[index].anim), 2000);

  current = index;
}

// auto slide
setInterval(() => {
  let next = (current + 1) % slides.length;
  showSlide(next);
}, 5000);

// klik thumbnail
thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    showSlide(index);
  });
});

// tampil pertama
showSlide(0);

  

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
    foto: "https://picsum.photos/id/1011/400/300",
    desc: "Pemandangan sawah Desa Perbo di pagi hari"
  },
  {
    id: 1,
    foto: "https://picsum.photos/id/1012/400/300",
    desc: "Kegiatan masyarakat saat panen"
  },
  {
    id: 2,
    foto: "https://picsum.photos/id/1013/400/300",
    desc: "Jalan desa yang asri dan sejuk"
  },
  {
    id: 3,
    foto: "https://picsum.photos/id/1014/400/300",
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
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalDesc = document.getElementById("modalDesc");

galleryContainer.addEventListener("click", function(e) {
  const card = e.target.closest(".gallery-card");

  if (!card) return; // kalau bukan card, stop

  const id = card.dataset.id;
  const data = galleryData[id];

  modal.style.display = "flex";
  modalImg.src = data.foto;
  modalDesc.textContent = data.desc;
});
const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
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

  card.style.left = x + 'px';
  card.style.top = y + 'px';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  card.classList.remove('active'); // 🔥 ini juga penting
});
card.addEventListener('touchstart', (e) => {
  isDragging = true;
  offsetX = e.touches[0].clientX - card.offsetLeft;
  offsetY = e.touches[0].clientY - card.offsetTop;
});

document.addEventListener('touchmove', (e) => {
  if (!isDragging) return;

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
