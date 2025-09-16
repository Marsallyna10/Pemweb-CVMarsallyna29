    // Data awal untuk reset
    const initialData = {
        name: 'MARSALLYNA',
        address: 'Alamat: Jl. Setia II A No. 51A, RT. 007/004, Jatiwaringin, Kec. Pd. Gede, Kota Bekasi, Jawa Barat',
        phone: 'No Hp : 087834811529',
        email: 'Email : marsallyna@mhs.unj.ac.id',
        linkedin: 'www.linkedin.com/in/marsallyna-508586345',
        linkedinHref: 'https://www.linkedin.com/in/marsallyna-508586345',
        instagram: 'instagram.com/marsallyna.10',
        instagramHref: 'https://www.instagram.com/marsallyna.10?igsh=MW1rY2RldXoxc3JqbA%3D%3D&utm_source=qr',
        profileText: `Seorang mahasiswa yang aktif dalam berorganisasi, berpengalaman dalam mengoordinasikan program kerja divisi, terampil dalam membangun jejaring dengan mitra internal dan eksternal kampus, mampu mengelola acara, dan memastikan setiap program berjalan sesuai target yang ditetapkan, memiliki dedikasi tinggi terhadap organisasi, bertanggung jawab, kritis, berpikiran luas dan terbuka, mampu berkomunikasi dan berhubungan baik dengan dosen, sesama pengurus, dan mahasiswa.`,
        experienceList: `<li>Pergerakan Mahasiswa Islam Indonesia (PMII) Rayon Pemuda Komisariat UNJ</li>`,
        educationList: `
            <li>2011 - 2017 : SD Temiyang 1, Indramayu</li>
            <li>2017 - 2020 : MTs Hidayatul Maarif, Indramayu</li>
            <li>2020 - 2023 : PKBM Al Hikmah, Indramayu</li>`,
        personalSkills: `<li>Komunikasi efektif, berpikiran luas dan terbuka, tanggungjawab, berdedikasi, mampu bekerja bersama tim, mudah bergaul, ceria, menyenangkan, mampu mencari solusi, mampu menganalisa masalah, optimis, peduli dengan sesama</li>`,
        technicalSkills: `<li>Menguasai aplikasi perkantoran (Ms Word, Excel, Powerpoint), LMS Tools, Public Speaking dan Presentasi, Canva, Pemrograman (Dasar Pemrograman, Perulangan, Bahasa C), UI/UX, Miro, Figma, Basis Data, Physical Data Model, Perancangan Konseptual dan Pemodelan Data, Normalisasi, Query.</li>`,
        photoSrc: 'foto.jpg'
    };

    // Fungsi reset data
    function resetData() {
        document.getElementById('name').innerText = initialData.name;
        document.getElementById('address').innerText = initialData.address;
        document.getElementById('phone').innerText = initialData.phone;
        document.getElementById('email').innerText = initialData.email;

        const linkedin = document.getElementById('linkedin');
        linkedin.innerText = initialData.linkedin;
        linkedin.href = initialData.linkedinHref;

        const instagram = document.getElementById('instagram');
        instagram.innerText = initialData.instagram;
        instagram.href = initialData.instagramHref;

        document.getElementById('profile-text').innerText = initialData.profileText;
        document.getElementById('experience-list').innerHTML = initialData.experienceList;
        document.getElementById('education-list').innerHTML = initialData.educationList;
        document.getElementById('personal-skills').innerHTML = initialData.personalSkills;
        document.getElementById('technical-skills').innerHTML = initialData.technicalSkills;

        profilePhoto.src = initialData.photoSrc;

        // Simpan ke localStorage juga
        localStorage.removeItem('cvData');
        localStorage.removeItem('cvPhoto');
    }

    // Fungsi simpan data ke localStorage
    function saveData() {
        const cvData = {
            name: document.getElementById('name').innerText,
            address: document.getElementById('address').innerText,
            phone: document.getElementById('phone').innerText,
            email: document.getElementById('email').innerText,
            linkedin: document.getElementById('linkedin').innerText,
            linkedinHref: document.getElementById('linkedin').href,
            instagram: document.getElementById('instagram').innerText,
            instagramHref: document.getElementById('instagram').href,
            profileText: document.getElementById('profile-text').innerText,
            experienceList: document.getElementById('experience-list').innerHTML,
            educationList: document.getElementById('education-list').innerHTML,
            personalSkills: document.getElementById('personal-skills').innerHTML,
            technicalSkills: document.getElementById('technical-skills').innerHTML,
        };
        localStorage.setItem('cvData', JSON.stringify(cvData));
        alert('Perubahan berhasil disimpan!');
    }

    // Fungsi load data dari localStorage
    function loadData() {
        const savedData = localStorage.getItem('cvData');
        const savedPhoto = localStorage.getItem('cvPhoto');
        if (savedData) {
            const cvData = JSON.parse(savedData);
            document.getElementById('name').innerText = cvData.name;
            document.getElementById('address').innerText = cvData.address;
            document.getElementById('phone').innerText = cvData.phone;
            document.getElementById('email').innerText = cvData.email;

            const linkedin = document.getElementById('linkedin');
            linkedin.innerText = cvData.linkedin;
            linkedin.href = cvData.linkedinHref;

            const instagram = document.getElementById('instagram');
            instagram.innerText = cvData.instagram;
            instagram.href = cvData.instagramHref;

            document.getElementById('profile-text').innerText = cvData.profileText;
            document.getElementById('experience-list').innerHTML = cvData.experienceList;
            document.getElementById('education-list').innerHTML = cvData.educationList;
            document.getElementById('personal-skills').innerHTML = cvData.personalSkills;
            document.getElementById('technical-skills').innerHTML = cvData.technicalSkills;
        }
        if (savedPhoto) {
            profilePhoto.src = savedPhoto;
        }
    }