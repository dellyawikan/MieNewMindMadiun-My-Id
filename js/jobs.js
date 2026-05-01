/* ============================================
   JOB POSITIONS DATA - jobs.js
   ============================================
   
   Struktur data untuk posisi yang tersedia di Mie Newmind
   Terdapat terjemahan Indonesia (id) dan English (en)
   
   Setiap job memiliki:
   - id: unique identifier
   - title: nama posisi (Indonesia & English)
   - description: deskripsi singkat
   - type: tipe pekerjaan (Full Time, Part Time, etc)
   - mainRole: peran utama (PERAN UTAMA / MAIN ROLE)
   - qualifications: array kualifikasi (KUALIFIKASI / QUALIFICATIONS)
   
   ============================================ */

const jobPositions = {
  id: [
    {
      id: 1,
      number: 1,
      title: 'HRD (Human Resource Development)',
      description: 'Mengolah rekrutmen, pengembangan SDM, serta administrasi kinerja karyawan.',
      type: 'fullTime',
      mainRole: 'Mengelola rekrutmen, pengembangan SDM, serta administrasi kinerja karyawan.',
      qualifications: [
        'Pria/Wanita, minimal S1',
        'Berpengalaman di bidang F&B',
        'Memiliki kemampuan training, leadership, dan komunikasi yang baik',
        'Disiplin serta bersedia mobile antar outlet'
      ]
    },
    {
      id: 2,
      number: 2,
      title: 'Manager',
      description: 'Mengelola operasional outlet, mengawasi tim, dan mewujudkan target bisnis tercapai.',
      type: 'fullTime',
      mainRole: 'Mengelola operasional outlet, mengawasi tim, dan mewujudkan target bisnis tercapai.',
      qualifications: [
        'Pria/Wanita, minimal D3',
        'Berpengalaman di F&B minimal 2-3 tahun',
        'Memiliki kemampuan leadership dan komunikasi yang baik',
        'Disiplin serta bersedia mobile antar outlet'
      ]
    },
    {
      id: 3,
      number: 3,
      title: 'Supervisor (SPV)',
      description: 'Mengelola operasional harian outlet, memastikan SOP terjalan, dan memantau performa tim.',
      type: 'fullTime',
      mainRole: 'Mengelola operasional harian outlet, memastikan SOP terjalan, dan memantau performa tim.',
      qualifications: [
        'Pria/Wanita, minimal SMA',
        'Berpengalaman di restoran/kafe minimal 1-2 tahun',
        'Memiliki kemampuan leadership dan komunikasi',
        'Disiplin serta bersedia mobile antar outlet'
      ]
    },
    {
      id: 4,
      number: 4,
      title: 'Store Leader',
      description: 'Memimpin tim outlet, menjaga kualitas layanan, dan mendukung pencapaian target operasional.',
      type: 'fullTime',
      mainRole: 'Memimpin tim outlet, menjaga kualitas layanan, dan mendukung pencapaian target operasional.',
      qualifications: [
        'Pria/Wanita, minimal SMA/SMK',
        'Berpengalaman di F&B minimal 1 tahun',
        'Memiliki kemampuan leadership dan komunikasi yang baik',
        'Bersedia bekerja shift dan mobile antar outlet'
      ]
    },
    {
      id: 5,
      number: 5,
      title: 'Trainer F&B',
      description: 'Melatih tim operasional, menyusun materi training, dan menjaga standar pelatihan outlet.',
      type: 'fullTime',
      mainRole: 'Melatih tim operasional, menyusun materi training, dan menjaga standar pelatihan outlet.',
      qualifications: [
        'Pria/Wanita, minimal S1',
        'Berpengalaman di bidang F&B',
        'Memiliki kemampuan training, leadership, dan komunikasi yang baik',
        'Disiplin serta bersedia mobile antar outlet'
      ]
    }
  ],
  en: [
    {
      id: 1,
      number: 1,
      title: 'HRD (Human Resource Development)',
      description: 'Handle recruitment, human resource development, and employee performance administration.',
      type: 'fullTime',
      mainRole: 'Handle recruitment, human resource development, and employee performance administration.',
      qualifications: [
        'Male/Female, minimum Bachelor\'s degree',
        'Experience in F&B field',
        'Has training abilities, leadership, and good communication skills',
        'Disciplined and willing to move between outlets'
      ]
    },
    {
      id: 2,
      number: 2,
      title: 'Manager',
      description: 'Manage outlet operations, supervise team, and ensure business targets are achieved.',
      type: 'fullTime',
      mainRole: 'Manage outlet operations, supervise team, and ensure business targets are achieved.',
      qualifications: [
        'Male/Female, minimum Diploma',
        'F&B experience minimum 2-3 years',
        'Have leadership and good communication skills',
        'Disciplined and willing to move between outlets'
      ]
    },
    {
      id: 3,
      number: 3,
      title: 'Supervisor (SPV)',
      description: 'Manage daily outlet operations, ensure SOP implementation, and monitor team performance.',
      type: 'fullTime',
      mainRole: 'Manage daily outlet operations, ensure SOP implementation, and monitor team performance.',
      qualifications: [
        'Male/Female, minimum High School',
        'Restaurant/cafe experience minimum 1-2 years',
        'Have leadership and good communication skills',
        'Disciplined and willing to move between outlets'
      ]
    },
    {
      id: 4,
      number: 4,
      title: 'Store Leader',
      description: 'Lead outlet team, maintain service quality, and support achievement of operational targets.',
      type: 'fullTime',
      mainRole: 'Lead outlet team, maintain service quality, and support achievement of operational targets.',
      qualifications: [
        'Male/Female, minimum High School/Vocational',
        'F&B experience minimum 1 year',
        'Have leadership and good communication skills',
        'Willing to work shifts and move between outlets'
      ]
    },
    {
      id: 5,
      number: 5,
      title: 'Trainer F&B',
      description: 'Train operational team, prepare training materials, and maintain outlet training standards.',
      type: 'fullTime',
      mainRole: 'Train operational team, prepare training materials, and maintain outlet training standards.',
      qualifications: [
        'Male/Female, minimum Bachelor\'s degree',
        'Experience in F&B field',
        'Has training abilities, leadership, and good communication skills',
        'Disciplined and willing to move between outlets'
      ]
    }
  ]
};
