document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 0.5. FULL-SCREEN DKV ANIMATED PRELOADER (EXACTLY 3 SECONDS DURATION)
    // ==========================================
    const preloader = document.getElementById("preloader");
    const preloaderProgress = document.getElementById("preloaderProgress");
    const preloaderPercent = document.getElementById("preloaderPercent");

    if (preloader) {
        const durationMs = 3000; // 3 Detik
        const startTime = Date.now();

        const progressInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(Math.floor((elapsed / durationMs) * 100), 100);

            if (preloaderProgress) {
                preloaderProgress.style.width = `${progress}%`;
            }
            if (preloaderPercent) {
                preloaderPercent.textContent = `${progress}%`;
            }

            if (progress >= 100) {
                clearInterval(progressInterval);
                setTimeout(() => {
                    preloader.classList.add("loaded");
                }, 300);
            }
        }, 50);
    }

    // ==========================================
    // 0. INITIALIZE DEFAULT STORAGE DATASETS IF EMPTY
    // ==========================================
    if (!localStorage.getItem("dkv_slides")) {
        const defaultSlides = [
            { id: 1, title: "DKV STUDIO 01", subtitle: "SMKN 1 CIAMIS", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", active: true },
            { id: 2, title: "CREATIVE LAB 02", subtitle: "DESIGN & ANIMATION", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80", active: true },
            { id: 3, title: "CINEMA & FILM 03", subtitle: "PRODUCTION HOUSE", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80", active: true }
        ];
        localStorage.setItem("dkv_slides", JSON.stringify(defaultSlides));
    }

    if (!localStorage.getItem("dkv_philosophy_photos")) {
        const defaultPhPhotos = {
            D: [
                { id: 101, url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80", caption: "Proses Perancangan Layout Vector" },
                { id: 102, url: "https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=600&q=80", caption: "Eksperimen Tipografi Grid" }
            ],
            K: [
                { id: 201, url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80", caption: "Presentasi Karya & Feedback Client" },
                { id: 202, url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80", caption: "Brainstorming Strategi Kampanye Visual" }
            ],
            V: [
                { id: 301, url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80", caption: "Pencahayaan Studio Fotografi Produk" },
                { id: 302, url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80", caption: "Rendering Asset Visual 3D Motion" }
            ]
        };
        localStorage.setItem("dkv_philosophy_photos", JSON.stringify(defaultPhPhotos));
    }

    if (!localStorage.getItem("dkv_portfolios")) {
        const defaultPortfolios = [
            { id: 1, title: "Poster Brutalisme Neon", category: "design", author: "Rafka Febriano", desc: "Eksperimen komposisi tipografi dengan aksen neon cyberpunk.", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80", curated: true },
            { id: 2, title: "Urban Lighting Portrait", category: "photo", author: "Nabila Putri", desc: "Teknik pencahayaan High-Key & Low-Key menggunakan studio kit DKV.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", curated: true },
            { id: 3, title: "Cinematic Short Movie", category: "video", author: "Tim Sinematografi Angkatan 2", desc: "Dokumenter karya siswa Angkatan 2 dengan color grading teal-purple.", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80", curated: true },
            { id: 4, title: "Identitas Visual TEFA DKV", category: "design", author: "Ahmad Rizky", desc: "Rebranding lengkap Teaching Factory DKV SMKN 1 Ciamis.", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80", curated: true },
            { id: 5, title: "Stage & Event Macro", category: "photo", author: "Siti Rahma", desc: "Dokumentasi pameran karya tahunan DKV Expo.", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80", curated: true },
            { id: 6, title: "3D Motion Bumper Intro", category: "anim3d", author: "Dandi Pratama", desc: "Motion graphics bumper intro untuk saluran YouTube DKV.", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80", curated: true },
            { id: 7, title: "Packaging Desain Kopi Lokal", category: "design", author: "Desi Fitriani", desc: "Perancangan kemasan eco-friendly dengan seni ilustrasi khas Sunda.", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80", curated: false },
            { id: 8, title: "3D Character Modeling Cyber", category: "anim3d", author: "Bagas Satria", desc: "Modeling karakter sci-fi bertema masa depan.", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80", curated: false }
        ];
        localStorage.setItem("dkv_portfolios", JSON.stringify(defaultPortfolios));
    }

    if (!localStorage.getItem("dkv_angkatan")) {
        const defaultAngkatan = [
            { id: 1, name: "Pioneer Generation", badge: "ANGKATAN 1", count: 36, desc: "Generasi perintis yang meletakkan fondasi kreativitas dan semangat eksplorasi awal DKV SMKN 1 Ciamis.", status: "Alumni" },
            { id: 2, name: "Evolution Generation", badge: "ANGKATAN 2", count: 72, desc: "Generasi yang mengembangkan variasi media digital, sinematografi, dan ekspansi branding multimedia.", status: "Alumni" },
            { id: 3, name: "Cyber Cybernetic", badge: "ANGKATAN 3", count: 72, desc: "Generasi terkini yang mengadopsi teknologi digital interaktif, animasi 3D, dan desain UI/UX terdepan.", status: "Aktif" }
        ];
        localStorage.setItem("dkv_angkatan", JSON.stringify(defaultAngkatan));
    }

    // ==========================================
    // 1. ANIMATED CANVAS PARTICLES (NEON VIOLET)
    // ==========================================
    const canvas = document.getElementById("particleCanvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        window.addEventListener("resize", () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const particles = [];
        const particleCount = Math.min(Math.floor(width / 18), 65);

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2.5 + 0.5;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.alpha = Math.random() * 0.6 + 0.2;
                this.color = Math.random() > 0.5 ? "168, 85, 247" : "217, 70, 239";
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
                ctx.shadowBlur = 12;
                ctx.shadowColor = `rgba(${this.color}, 0.8)`;
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);

            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 130) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 - dist / 1300})`;
                        ctx.lineWidth = 0.6;
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }

            particles.forEach((p) => {
                p.update();
                p.draw();
            });

            requestAnimationFrame(animateParticles);
        }

        animateParticles();
    }

    // ==========================================
    // 2. CURSOR AURA TRAIL FX
    // ==========================================
    const cursorAura = document.getElementById("cursorAura");
    if (cursorAura) {
        window.addEventListener("mousemove", (e) => {
            cursorAura.style.left = `${e.clientX}px`;
            cursorAura.style.top = `${e.clientY}px`;
        });
    }

    // ==========================================
    // 3. NAVBAR MOBILE TOGGLE & SCROLL FX
    // ==========================================
    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");
    const navbar = document.getElementById("navbar");

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach((link) => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
            });
        });
    }

    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }

    // ==========================================
    // 4. INTERSECTION OBSERVER (SCROLL ANIMATION)
    // ==========================================
    const sections = document.querySelectorAll(".section");
    if (sections.length > 0) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.12 }
        );

        sections.forEach((sec) => observer.observe(sec));
    }

    // ==========================================
    // 5. 3D TILT EFFECT FOR GLASS CARDS
    // ==========================================
    const tiltCards = document.querySelectorAll(".tilt-card");
    tiltCards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
        });
    });

    // ==========================================
    // 6. HERO SECTION DYNAMIC CREATIVE LAB SLIDER
    // ==========================================
    const heroSliderTrack = document.getElementById("heroSliderTrack");
    const heroSliderDots = document.getElementById("heroSliderDots");
    const heroPrevBtn = document.getElementById("heroSlidePrev");
    const heroNextBtn = document.getElementById("heroSlideNext");

    if (heroSliderTrack) {
        const slides = JSON.parse(localStorage.getItem("dkv_slides") || "[]").filter(s => s.active !== false);
        let currentSlideIdx = 0;
        let slideTimer = null;

        function renderHeroSlides() {
            if (slides.length === 0) {
                heroSliderTrack.innerHTML = `<div class="hero-slide" style="background: rgba(22,10,38,0.9); justify-content:center; align-items:center;">
                    <h3 style="font-size:24px; font-weight:800; color:#c084fc;">CREATIVE LAB DKV</h3>
                </div>`;
                return;
            }

            heroSliderTrack.innerHTML = slides.map(slide => `
                <div class="hero-slide" style="background-image: url('${slide.image}');">
                    <div class="hero-slide-overlay"></div>
                    <div class="hero-slide-content">
                        <div class="hero-card-badge">${slide.subtitle || 'CREATIVE LAB'}</div>
                        <div>
                            <div class="hero-card-title" style="font-size: 28px;">${slide.title}</div>
                            <p class="hero-card-sub" style="margin-top: 5px;">SMKN 1 CIAMIS</p>
                        </div>
                    </div>
                </div>
            `).join("");

            if (heroSliderDots) {
                heroSliderDots.innerHTML = slides.map((_, i) => `
                    <div class="hero-dot ${i === 0 ? 'active' : ''}" onclick="goToHeroSlide(${i})"></div>
                `).join("");
            }
        }

        window.goToHeroSlide = function (idx) {
            currentSlideIdx = (idx + slides.length) % slides.length;
            heroSliderTrack.style.transform = `translateX(-${currentSlideIdx * 100}%)`;

            if (heroSliderDots) {
                const dots = heroSliderDots.querySelectorAll(".hero-dot");
                dots.forEach((d, i) => {
                    d.classList.toggle("active", i === currentSlideIdx);
                });
            }
        };

        function startAutoSlide() {
            stopAutoSlide();
            slideTimer = setInterval(() => {
                goToHeroSlide(currentSlideIdx + 1);
            }, 4500);
        }

        function stopAutoSlide() {
            if (slideTimer) clearInterval(slideTimer);
        }

        if (heroPrevBtn) heroPrevBtn.addEventListener("click", () => { goToHeroSlide(currentSlideIdx - 1); startAutoSlide(); });
        if (heroNextBtn) heroNextBtn.addEventListener("click", () => { goToHeroSlide(currentSlideIdx + 1); startAutoSlide(); });

        renderHeroSlides();
        startAutoSlide();
    }

    // ==========================================
    // 7. FILOSOFI LOGO FULL FRAME MULTI-IMAGE CAROUSEL
    // ==========================================
    const phCards = document.querySelectorAll(".philosophy-card");
    const logoBigText = document.getElementById("logoBigText");
    const logoTagline = document.getElementById("logoTagline");
    const phCaptionText = document.getElementById("phCaptionText");
    const phCarouselTrack = document.getElementById("phCarouselTrack");
    const phPrevBtn = document.getElementById("phCarouselPrev");
    const phNextBtn = document.getElementById("phCarouselNext");

    let currentPhLetter = 'D';
    let currentPhPhotoIdx = 0;

    function renderPhPhotoCarousel(letter) {
        if (!phCarouselTrack) return;
        const phData = JSON.parse(localStorage.getItem("dkv_philosophy_photos") || "{}");
        const photos = phData[letter] || [];

        currentPhPhotoIdx = 0;

        if (photos.length === 0) {
            phCarouselTrack.innerHTML = `<div class="ph-carousel-slide" style="background: rgba(22,10,38,0.9); display:flex; align-items:center; justify-content:center;">
                <span style="font-size:12px; color:#a198b5;">Belum ada foto pendukung</span>
            </div>`;
            if (phCaptionText) phCaptionText.textContent = "Galeri Foto Kosong";
            return;
        }

        phCarouselTrack.innerHTML = photos.map(ph => `
            <div class="ph-carousel-slide" style="background-image: url('${ph.url}');"></div>
        `).join("");

        phCarouselTrack.style.transform = `translateX(0%)`;
        if (phCaptionText && photos[0]) {
            phCaptionText.textContent = `${photos[0].caption}`;
        }
    }

    function movePhCarousel(step) {
        if (!phCarouselTrack) return;
        const phData = JSON.parse(localStorage.getItem("dkv_philosophy_photos") || "{}");
        const photos = phData[currentPhLetter] || [];
        if (photos.length === 0) return;

        currentPhPhotoIdx = (currentPhPhotoIdx + step + photos.length) % photos.length;
        phCarouselTrack.style.transform = `translateX(-${currentPhPhotoIdx * 100}%)`;
        if (phCaptionText && photos[currentPhPhotoIdx]) {
            phCaptionText.textContent = `${photos[currentPhPhotoIdx].caption}`;
        }
    }

    if (phPrevBtn) phPrevBtn.addEventListener("click", () => movePhCarousel(-1));
    if (phNextBtn) phNextBtn.addEventListener("click", () => movePhCarousel(1));

    phCards.forEach((card) => {
        card.addEventListener("click", () => {
            phCards.forEach((c) => c.classList.remove("active"));
            card.classList.add("active");

            const letter = card.dataset.letter;
            const title = card.dataset.title;

            currentPhLetter = letter;
            if (logoBigText) logoBigText.textContent = letter;
            if (logoTagline) logoTagline.textContent = title;

            if (logoBigText) {
                logoBigText.style.transform = "scale(1.2)";
                setTimeout(() => {
                    logoBigText.style.transform = "scale(1)";
                }, 200);
            }

            renderPhPhotoCarousel(letter);
        });
    });

    // Initial load for philosophy letter 'D'
    renderPhPhotoCarousel('D');

    // ==========================================
    // 7.5. HOMEPAGE GENERASI ANGKATAN RENDERER
    // ==========================================
    const homepageAngkatanGrid = document.getElementById("homepageAngkatanGrid");
    if (homepageAngkatanGrid) {
        const angkatanList = JSON.parse(localStorage.getItem("dkv_angkatan") || "[]");
        if (angkatanList.length > 0) {
            homepageAngkatanGrid.innerHTML = angkatanList.map(item => `
                <div class="gen-card glass-panel tilt-card ${item.status === 'Aktif' ? 'highlight-card' : ''}">
                    <div class="gen-badge ${item.status === 'Aktif' ? 'active-badge' : ''}">${item.badge} ${item.status === 'Aktif' ? '(AKTIF)' : ''}</div>
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                    <div class="gen-footer">
                        <span class="gen-count">${item.count} Siswa</span>
                        <a href="galeri-karya.html" class="gen-link">Lihat Karya &rarr;</a>
                    </div>
                </div>
            `).join("");
        }
    }

    // ==========================================
    // 8. HOMEPAGE CURATED PORTFOLIO (MAX 6 CARDS)
    // ==========================================
    const homepageGrid = document.getElementById("homepagePortfolioGrid");
    const filterBtns = document.querySelectorAll(".filter-btn");

    if (homepageGrid) {
        const portfolios = JSON.parse(localStorage.getItem("dkv_portfolios") || "[]");
        // Get curated items (max 6)
        let curatedPortfolios = portfolios.filter(p => p.curated).slice(0, 6);
        if (curatedPortfolios.length === 0) {
            curatedPortfolios = portfolios.slice(0, 6);
        }

        function renderHomepagePortfolios(filter = "all") {
            const filtered = curatedPortfolios.filter(item => filter === "all" || item.category === filter);

            homepageGrid.innerHTML = filtered.map(item => `
                <div class="portfolio-item tilt-card" data-category="${item.category}" data-title="${item.title}" data-desc="${item.desc}">
                    <div class="portfolio-thumb" style="background-image: url('${item.image}'); background-size: cover; background-position: center; height: 260px;">
                        <div class="thumb-overlay">
                            <span class="cat-tag">${getCatLabel(item.category)}</span>
                            <h4>${item.title}</h4>
                            <p>Oleh: ${item.author} — Klik untuk detail</p>
                        </div>
                    </div>
                </div>
            `).join("");

            // Rebind click listeners for modal lightbox
            attachModalEvents();
        }

        function getCatLabel(cat) {
            switch (cat) {
                case "design": return "Desain Grafis";
                case "photo": return "Fotografi";
                case "video": return "Videografi";
                case "anim3d": return "3D / Animasi";
                default: return "Karya";
            }
        }

        filterBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                filterBtns.forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
                const filter = btn.dataset.filter;
                renderHomepagePortfolios(filter);
            });
        });

        function attachModalEvents() {
            const items = homepageGrid.querySelectorAll(".portfolio-item");
            const modal = document.getElementById("previewModal");
            const modalBox = document.getElementById("modalBox");
            const modalTitle = document.getElementById("modalTitle");
            const modalDesc = document.getElementById("modalDesc");

            items.forEach((item) => {
                item.addEventListener("click", () => {
                    if (!modal) return;
                    const title = item.dataset.title;
                    const desc = item.dataset.desc;
                    const bgImg = item.querySelector(".portfolio-thumb").style.backgroundImage;

                    modalTitle.textContent = title;
                    modalDesc.textContent = desc;

                    modalBox.style.backgroundImage = bgImg;
                    modalBox.style.backgroundSize = "cover";
                    modalBox.style.backgroundPosition = "center";
                    modal.classList.add("active");
                });
            });
        }

        renderHomepagePortfolios("all");
    }

    // Modal Lightbox Close Handlers
    const modal = document.getElementById("previewModal");
    const modalClose = document.getElementById("modalClose");
    if (modal && modalClose) {
        modalClose.addEventListener("click", () => modal.classList.remove("active"));
        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.classList.remove("active");
        });
    }
});