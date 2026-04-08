function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── SCROLL ANIMATION ──────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.card').forEach(c => observer.observe(c));

// ── DROPDOWN ──────────────────────────────────────────────
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.closest('.timeline-item').classList.toggle('open');
  });
});


// ── DARK MODE ──────────────────────────────────────────────
const html = document.getElementById('html');
const darkToggle = document.getElementById('darkToggle');
let isDark = localStorage.getItem('dark') === 'true';

function applyDark() {
  html.classList.toggle('dark', isDark);
  darkToggle.innerHTML = isDark
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
}
darkToggle.addEventListener('click', () => {
  isDark = !isDark;
  localStorage.setItem('dark', isDark);
  applyDark();
});
applyDark();

// ── LANGUAGE TOGGLE ────────────────────────────────────────
let isEn = false;

const content = {
  id: {
    'role': 'Sistem Informasi · Vibe Coding',
    'bio': 'Sangat semangat untuk belajar Software Engineering dan terus berkembang di dunia teknologi.',
    'skills-title': 'Keahlian',
    'exp-title': 'Pengalaman Kerja',
    'exp1-date': 'Sep 2019 – Jul 2025',
    'exp1-role': 'Warehouse System Specialist',
    'exp1-desc': '<li>Mengontrol stok aktual vs stok sistem</li><li>Pemeliharaan dan pembaruan sistem stok secara berkala</li><li>Memperbarui sistem sesuai kebutuhan performa perusahaan</li><li>Mengontrol penerimaan barang dan transfer stok ke setiap produksi</li>',
    'exp2-date': 'Jan 2019 – Agu 2019',
    'exp2-role': 'Administrator',
    'exp2-desc': '<li>Menangani pemeliharaan sistem jaringan</li><li>Memperbaiki masalah hardware dan software</li><li>Memastikan seluruh operasional IT berjalan lancar setiap hari</li>',
    'proj-title': 'Project',
    'proj1-name': 'Testing Implementasi Sistem Data Karyawan',
    'proj1-desc': 'Tugas kelompok — pengujian dan implementasi sistem manajemen data karyawan.',
    'contact-title': 'Kontak',
    'edu-title': 'Pendidikan',
    'edu-name': 'Universitas Insan Pembangunan Indonesia',
    'edu-major': 'Fakultas Ilmu Komputer · Sistem Informasi',
    'edu-gpa': 'IPK 3.32 / 4.00',
  },
  en: {
    'role': 'Information Systems · Vibe Coding',
    'bio': 'Highly enthusiastic about learning Software Engineering and continuously growing in the tech industry.',
    'skills-title': 'Skills',
    'exp-title': 'Work Experience',
    'exp1-date': 'Sep 2019 – Jul 2025',
    'exp1-role': 'Warehouse System Specialist',
    'exp1-desc': '<li>Controlled actual stock vs system stock</li><li>Quarterly system stock maintenance and updates</li><li>Updated system based on company performance needs</li><li>Controlled goods receiving and stock transfers to each production unit</li>',
    'exp2-date': 'Jan 2019 – Aug 2019',
    'exp2-role': 'Administrator',
    'exp2-desc': '<li>Handled network system maintenance</li><li>Fixed hardware and software issues</li><li>Ensured all IT operations ran smoothly every day</li>',
    'proj-title': 'Projects',
    'proj1-name': 'Employee Data System Testing & Implementation',
    'proj1-desc': 'Group project — testing and implementation of an employee data management system.',
    'contact-title': 'Contact',
    'edu-title': 'Education',
    'edu-name': 'Universitas Insan Pembangunan Indonesia',
    'edu-major': 'Faculty of Computer Science · Information Systems',
    'edu-gpa': 'GPA 3.32 / 4.00',
  }
};

document.getElementById('langToggle').addEventListener('click', () => {
  isEn = !isEn;
  const lang = isEn ? 'en' : 'id';
  for (const [id, val] of Object.entries(content[lang])) {
    const el = document.querySelector(`[data-id="${id}"]`);
    if (el) el.innerHTML = val;
  }
});
