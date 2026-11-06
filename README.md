# Website CV & Portfolio Digital – Ikbal Abi Pamungkas

Website Curriculum Vitae (CV) dan Portfolio profesional yang dibangun menggunakan **React**, **Vite**, dan **Tailwind CSS**. Dirancang dengan gaya modern, minimalis, elegan, dan fully responsive untuk kebutuhan melamar program magang (PKL) maupun peluang karier di bidang IT dan Jaringan Komputer.

---

## 🌟 Fitur Utama

- **Hero Section Elegan**: Dilengkapi foto profil asli berseragam resmi, status live *"Available for Internship"*, tombol unduh CV PDF instan, dan tombol kontak langsung.
- **About Me**: Profil diri mendalam, 5 domain minat & eksplorasi (Teknologi Informasi, Jaringan Komputer, Web Development, AI, Desain Digital), serta tujuan karier profesional.
- **Timeline Pendidikan**: Menampilkan riwayat pendidikan dari SD (2015–2021), SMP (2021–2024), hingga SMK TI Garuda Nusantara jurusan TKJ (2024–Sekarang) dengan status aktif.
- **Skills & Competencies**:
  - *Technical Skills* dengan visual progress bar & badges: Computer Networking, Network Configuration, Hardware & Software Troubleshooting, Web Development.
  - *Soft Skills Cards*: Communication, Teamwork, dan Willingness to Learn.
- **Pengalaman & Kesiapan Kerja**: Rekam jejak praktikum laboratorium kejuruan, keikutsertaan OSIS Seksi Bidang 5, serta kartu kesiapan penempatan Praktik Kerja Lapangan (PKL).
- **Showcase Proyek & Lab**: Galeri proyek kejuruan (Desain LAN Kampus via Packet Tracer, Konfigurasi Hotspot MikroTik, Perakitan PC Dual-Boot, dsb.) lengkap dengan modal detail arsitektur dan link GitHub.
- **Kontak Terintegrasi**: Email (`kazenakair@gmail.com`), WhatsApp (`085147633210`), Instagram (`@andrw_gves`), GitHub (`horisagi`), tombol salin cepat, dan formulir pengiriman pesan otomatis ke WhatsApp.
- **Dark Mode & Light Mode**: Transisi warna halus dengan penyimpanan preferensi di `localStorage`.
- **Fitur Download CV PDF**: Generator PDF berstandar profesional menggunakan `jsPDF` yang siap diunduh sekali klik (`CV_Ikbal_Abi_Pamungkas_TKJ.pdf`) plus fitur preview & print.
- **Mobile Responsive**: Hamburger menu slide-over yang mulus dan nyaman diakses di smartphone maupun tablet.

---

## 🚀 Cara Menjalankan Website Secara Lokal

### Cara Cepat (Windows):
Cukup klik dua kali (double click) file:
`JALANKAN_WEBSITE.bat` (di dalam folder ini atau file `D:\JALANKAN_WEBSITE_IKBAL.bat`). Browser Anda akan otomatis terbuka di `http://localhost:3000`.

### Menggunakan Terminal / Command Prompt:
1. Masuk ke folder proyek:
   ```bash
   cd d:\ikbal-portfolio
   ```
2. Jalankan server lokal:
   ```bash
   npm run dev
   ```
3. Buka browser pada alamat:
   ```
   http://localhost:3000
   ```

---

## 🛠️ Perintah Build & Produksi

- Build file produksi:
  ```bash
  npm run build
  ```
- Preview build produksi:
  ```bash
  npm run preview
  ```

---

## 📁 Struktur Direktori

```
d:/ikbal-portfolio/
├── public/
│   ├── favicon.svg
│   └── profile.jpg
├── src/
│   ├── assets/
│   │   └── profile.jpg
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── CvModal.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── utils/
│   │   └── generatePdf.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── JALANKAN_WEBSITE.bat
```

