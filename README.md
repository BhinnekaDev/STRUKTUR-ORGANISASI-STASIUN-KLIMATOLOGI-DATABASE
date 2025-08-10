
---

# 🏢 Struktur Organisasi Stasiun Klimatologi - Bhinneka Developer

**Backend API untuk pengelolaan struktur organisasi Stasiun Klimatologi**
Dibangun modular dan scalable menggunakan **NestJS** dan **Supabase**.

> Backend ini menyediakan data dan layanan API untuk mendukung manajemen, dokumentasi, dan publikasi struktur organisasi Stasiun Klimatologi.

[![GitHub Repo](https://img.shields.io/badge/github-BhinnekaDev-blue?logo=github\&style=flat-square)](https://github.com/BhinnekaDev/STRUKTUR-ORGANISASI-STASIUN-KLIMATOLOGI-DATABASE)
[![Stars](https://img.shields.io/github/stars/BhinnekaDev/STRUKTUR-ORGANISASI-STASIUN-KLIMATOLOGI-DATABASE?style=flat-square)](https://github.com/BhinnekaDev/STRUKTUR-ORGANISASI-STASIUN-KLIMATOLOGI-DATABASE/stargazers)
[![Forks](https://img.shields.io/github/forks/BhinnekaDev/STRUKTUR-ORGANISASI-STASIUN-KLIMATOLOGI-DATABASE?style=flat-square)](https://github.com/BhinnekaDev/STRUKTUR-ORGANISASI-STASIUN-KLIMATOLOGI-DATABASE/network/members)
[![Last Commit](https://img.shields.io/github/last-commit/BhinnekaDev/STRUKTUR-ORGANISASI-STASIUN-KLIMATOLOGI-DATABASE?style=flat-square)](https://github.com/BhinnekaDev/STRUKTUR-ORGANISASI-STASIUN-KLIMATOLOGI-DATABASE/commits/main)

![Platform](https://img.shields.io/badge/platform-API-blue?style=flat-square)
![NestJS](https://img.shields.io/badge/NestJS-9-red?logo=nestjs\&style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6?logo=typescript\&logoColor=white\&style=flat-square)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3FCF8E?logo=supabase\&style=flat-square)

---

## 🚀 Fitur Utama

| **Modul**                    | **Deskripsi dan Fungsi Utama**                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------ |
| **Autentikasi Pengguna**     | Sistem register & login aman menggunakan Supabase Auth (JWT).                        |
| **Swagger API Docs**         | Dokumentasi API interaktif tersedia otomatis di `/api`.                              |
| **Struktur Modular**         | Arsitektur modular NestJS yang mudah dikembangkan dan di-maintain.                   |
| **CRUD Struktur Organisasi** | Fitur Create, Read, Update, Delete untuk data jabatan, pegawai, dan unit organisasi. |

---

## ⚙️ Teknologi

| Layer       | Stack                                           | Keterangan Singkat                                    |
| ----------- | ----------------------------------------------- | ----------------------------------------------------- |
| **Backend** | NestJS, TypeScript, Supabase (PostgreSQL, Auth) | Framework modern dan database realtime yang powerful. |
| **Deploy**  | Docker-ready, Railway, Portainer (opsional)     | Mempermudah deployment dan monitoring layanan.        |

---

## 📦 Instalasi

```bash
# Clone repo
git clone https://github.com/BhinnekaDev/STRUKTUR-ORGANISASI-STASIUN-KLIMATOLOGI-DATABASE.git
cd STRUKTUR-ORGANISASI-STASIUN-KLIMATOLOGI-DATABASE

# Install dependencies
npm install
```

Buat file `.env` di root project dengan konfigurasi:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

> 🔐 Ambil data dari Supabase Project Settings.

Jalankan server:

```bash
npm run start
```

Akses:

* API: [http://localhost:3000](http://localhost:3000)
* Dokumentasi Swagger: [http://localhost:3000/api](http://localhost:3000/api)

---

## 🗂️ Struktur Proyek & Keterangan Modul

```
src/
├── aktivitas/             # Mencatat aktivitas sistem dan pengguna
├── auth/                  # Autentikasi pengguna dengan Supabase dan JWT
├── jabatan/               # CRUD data jabatan di struktur organisasi
├── petugas/               # CRUD data pet8gas
├── struktur/              # CRUD data unit organisasi / divisi
├── utils/                 # Fungsi utilitas bersama
├── main.ts                # Entry point aplikasi backend
└── app.module.ts          # Root module aplikasi
```

---

## 🧪 Script Penting

| Perintah            | Keterangan                       |
| ------------------- | -------------------------------- |
| `npm run start`     | Jalankan server mode production  |
| `npm run start:dev` | Jalankan server mode development |
| `npm run build`     | Build project ke folder `/dist`  |
| `npm run lint`      | Periksa dan perbaiki format kode |
| `npm run test`      | Jalankan unit testing            |
| `npm run test:e2e`  | Jalankan end-to-end testing      |

---

## 🤝 Kontribusi

1. Fork repo ini
2. Buat branch fitur/bugfix baru
3. Gunakan commit yang jelas dan deskriptif
4. Jalankan `npm run lint` sebelum submit pull request

---

## 📜 Lisensi

MIT © 2025 Bhinneka Developer

---

Dikelola oleh Bhinneka Developer – 2025

---
