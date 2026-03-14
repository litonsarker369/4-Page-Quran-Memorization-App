const QuranMemorizationApp = {
    audio: null,
    currentReciter: 'ar.alafasy',
    currentSheet: 1,
    currentMode: 'continuous',
    repeatCount: 5,
    pauseBetweenVerses: 3,
    currentRepeat: 0,
    isPlaying: false,
    isPaused: false,
    verses: [],
    currentVerseIndex: 0,
    stopRequested: false,
    verseTextsCache: {},

    surahNames: {
        1: { en: 'Al-Fatihah', ar: 'الفاتحة' },
        2: { en: 'Al-Baqarah', ar: 'البقرة' },
        3: { en: 'Aal-Imran', ar: 'آل عمران' },
        4: { en: 'An-Nisa', ar: 'النساء' },
        5: { en: "Al-Ma'idah", ar: 'المائدة' },
        6: { en: "Al-An'am", ar: 'الأنعام' },
        7: { en: "Al-A'raf", ar: 'الأعراف' },
        8: { en: 'Al-Anfal', ar: 'الأنفال' },
        9: { en: 'At-Tawbah', ar: 'التوبة' },
        10: { en: 'Yunus', ar: 'يونس' },
        11: { en: 'Hud', ar: 'هود' },
        12: { en: 'Yusuf', ar: 'يوسف' },
        13: { en: "Ar-Ra'd", ar: 'الرعد' },
        14: { en: 'Ibrahim', ar: 'ابراهيم' },
        15: { en: 'Al-Hijr', ar: 'الحجر' },
        16: { en: 'An-Nahl', ar: 'النحل' },
        17: { en: 'Al-Isra', ar: 'الإسراء' },
        18: { en: 'Al-Kahf', ar: 'الكهف' },
        19: { en: 'Maryam', ar: 'مريم' },
        20: { en: 'Ta-Ha', ar: 'طه' },
        21: { en: 'Al-Anbiya', ar: 'الأنبياء' },
        22: { en: 'Al-Hajj', ar: 'الحج' },
        23: { en: "Al-Mu'minun", ar: 'المؤمنون' },
        24: { en: 'An-Nur', ar: 'النور' },
        25: { en: 'Al-Furqan', ar: 'الفرقان' },
        26: { en: "Ash-Shu'ara", ar: 'الشعراء' },
        27: { en: 'An-Naml', ar: 'النمل' },
        28: { en: 'Al-Qasas', ar: 'القصص' },
        29: { en: "Al-'Ankabut", ar: 'العنكبوت' },
        30: { en: 'Ar-Rum', ar: 'الروم' },
        31: { en: 'Luqman', ar: 'لقمان' },
        32: { en: 'As-Sajdah', ar: 'السجدة' },
        33: { en: 'Al-Ahzab', ar: 'الأحزاب' },
        34: { en: 'Saba', ar: 'سبأ' },
        35: { en: 'Fatir', ar: 'فاطر' },
        36: { en: 'Ya-Sin', ar: 'يس' },
        37: { en: 'As-Saffat', ar: 'الصافات' },
        38: { en: 'Sad', ar: 'ص' },
        39: { en: 'Az-Zumar', ar: 'الزمر' },
        40: { en: 'Ghafir', ar: 'غافر' },
        41: { en: 'Fussilat', ar: 'فصلت' },
        42: { en: 'Ash-Shura', ar: 'الشورى' },
        43: { en: 'Az-Zukhruf', ar: 'الزخرف' },
        44: { en: 'Ad-Dukhan', ar: 'الدخان' },
        45: { en: 'Al-Jathiyah', ar: 'الجاثية' },
        46: { en: 'Al-Ahqaf', ar: 'الأحقاف' },
        47: { en: 'Muhammad', ar: 'محمد' },
        48: { en: 'Al-Fath', ar: 'الفتح' },
        49: { en: 'Al-Hujurat', ar: 'الحجرات' },
        50: { en: 'Qaf', ar: 'ق' },
        51: { en: 'Ad-Dariyat', ar: 'الذاريات' },
        52: { en: 'At-Tur', ar: 'الطور' },
        53: { en: 'An-Najm', ar: 'النجم' },
        54: { en: 'Al-Qamar', ar: 'القمر' },
        55: { en: 'Ar-Rahman', ar: 'الرحمن' },
        56: { en: "Al-Waqi'ah", ar: 'الواقعة' },
        57: { en: 'Al-Hadid', ar: 'الحديد' },
        58: { en: 'Al-Mujadilah', ar: 'المجادلة' },
        59: { en: 'Al-Hashr', ar: 'الحشر' },
        60: { en: 'Al-Mumtahanah', ar: 'الممتحنة' },
        61: { en: 'As-Saff', ar: 'الصف' },
        62: { en: "Al-Jumu'ah", ar: 'الجمعة' },
        63: { en: 'Al-Munafiqun', ar: 'المنافقون' },
        64: { en: 'At-Taghabun', ar: 'التغابن' },
        65: { en: 'At-Talaq', ar: 'الطلاق' },
        66: { en: 'At-Tahrim', ar: 'التحريم' },
        67: { en: 'Al-Mulk', ar: 'الملك' },
        68: { en: 'Al-Qalam', ar: 'القلم' },
        69: { en: 'Al-Haqqah', ar: 'الحاقة' },
        70: { en: "Al-Ma'arij", ar: 'المعارج' },
        71: { en: 'Nuh', ar: 'نوح' },
        72: { en: 'Al-Jinn', ar: 'الجن' },
        73: { en: 'Al-Muzammil', ar: 'المزمل' },
        74: { en: 'Al-Muddaththir', ar: 'المدثر' },
        75: { en: 'Al-Qiyamah', ar: 'القيامة' },
        76: { en: 'Al-Insan', ar: 'الانسان' },
        77: { en: 'Al-Mursalat', ar: 'المرسلات' },
        78: { en: 'An-Naba', ar: 'النبأ' },
        79: { en: "An-Nazi'at", ar: 'النازعات' },
        80: { en: "'Abasa", ar: 'عبس' },
        81: { en: 'At-Takwir', ar: 'التكوير' },
        82: { en: 'Al-Infitar', ar: 'الانفطار' },
        83: { en: 'Al-Mutaffifin', ar: 'المطففين' },
        84: { en: 'Al-Inshiqaq', ar: 'الانشقاق' },
        85: { en: 'Al-Buruj', ar: 'البروج' },
        86: { en: 'At-Tariq', ar: 'الطارق' },
        87: { en: "Al-A'la", ar: 'الأعلى' },
        88: { en: 'Al-Ghashiyah', ar: 'الغاشية' },
        89: { en: 'Al-Fajr', ar: 'الفجر' },
        90: { en: 'Al-Balad', ar: 'البلد' },
        91: { en: 'Ash-Shams', ar: 'الشمس' },
        92: { en: 'Al-Layl', ar: 'الليل' },
        93: { en: 'Ad-Duha', ar: 'الضحى' },
        94: { en: 'Ash-Sharh', ar: 'الشرح' },
        95: { en: 'At-Tin', ar: 'التين' },
        96: { en: "Al-'Alaq", ar: 'العلق' },
        97: { en: 'Al-Qadr', ar: 'القدر' },
        98: { en: 'Al-Bayyinah', ar: 'البينة' },
        99: { en: 'Az-Zalzalah', ar: 'الزلزلة' },
        100: { en: "Al-'Adiyat", ar: 'العاديات' },
        101: { en: "Al-Qari'ah", ar: 'القارعة' },
        102: { en: 'At-Takathur', ar: 'التكاثر' },
        103: { en: "Al-'Asr", ar: 'العصر' },
        104: { en: 'Al-Humazah', ar: 'الهمزة' },
        105: { en: 'Al-Fil', ar: 'الفيل' },
        106: { en: 'Quraysh', ar: 'قريش' },
        107: { en: "Al-Ma'un", ar: 'الماعون' },
        108: { en: 'Al-Kawthar', ar: 'الكوثر' },
        109: { en: 'Al-Kafirun', ar: 'الكافرون' },
        110: { en: 'An-Nasr', ar: 'النصر' },
        111: { en: 'Al-Masad', ar: 'المسد' },
        112: { en: 'Al-Ikhlas', ar: 'الإخلاص' },
        113: { en: 'Al-Falaq', ar: 'الفلق' },
        114: { en: 'An-Nas', ar: 'الناس' }
    },

    surahVerseCounts: {
        1: 7, 2: 286, 3: 200, 4: 176, 5: 120, 6: 165, 7: 206, 8: 75,
        9: 129, 10: 109, 11: 123, 12: 111, 13: 43, 14: 52, 15: 99,
        16: 128, 17: 111, 18: 110, 19: 98, 20: 135, 21: 112, 22: 78,
        23: 118, 24: 64, 25: 77, 26: 227, 27: 93, 28: 88, 29: 69,
        30: 60, 31: 34, 32: 30, 33: 73, 34: 54, 35: 45, 36: 83,
        37: 182, 38: 88, 39: 75, 40: 85, 41: 54, 42: 53, 43: 89,
        44: 59, 45: 37, 46: 35, 47: 38, 48: 29, 49: 18, 50: 45,
        51: 60, 52: 49, 53: 62, 54: 55, 55: 78, 56: 96, 57: 29,
        58: 22, 59: 24, 60: 13, 61: 14, 62: 11, 63: 11, 64: 18,
        65: 12, 66: 12, 67: 30, 68: 52, 69: 52, 70: 44, 71: 28,
        72: 28, 73: 20, 74: 56, 75: 40, 76: 31, 77: 50, 78: 40,
        79: 46, 80: 42, 81: 29, 82: 19, 83: 36, 84: 25, 85: 22,
        86: 17, 87: 19, 88: 26, 89: 30, 90: 20, 91: 15, 92: 21,
        93: 11, 94: 8, 95: 8, 96: 19, 97: 5, 98: 8, 99: 8,
        100: 11, 101: 11, 102: 8, 103: 3, 104: 9, 105: 5, 106: 4,
        107: 7, 108: 3, 109: 6, 110: 3, 111: 5, 112: 4, 113: 5, 114: 6
    },

    sheets: [],
    pageToSurahAyah: [],
    totalQuranVerses: 6236,

    async init() {
        this.generateSheets();
        this.generatePageMapping();
        this.populateSheetDropdown();
        this.bindEvents();
        await this.loadVerseData();
        this.updateSheetInfo();
        this.updateAudioStatus('ready');
    },

    generateSheets() {
        this.sheets = [];
        let currentSurah = 1;
        let currentAyah = 1;
        
        for (let sheetNum = 1; sheetNum <= 151; sheetNum++) {
            const pageStart = (sheetNum - 1) * 4 + 1;
            const pageEnd = Math.min(sheetNum * 4, 604);
            
            const versesOnPages = this.getVersesForPages(pageStart, pageEnd);
            
            const sheet = {
                sheet: sheetNum,
                pageStart: pageStart,
                pageEnd: pageEnd,
                startSurah: currentSurah,
                startAyah: currentAyah
            };
            
            if (versesOnPages.length > 0) {
                const lastVerse = versesOnPages[versesOnPages.length - 1];
                sheet.endSurah = lastVerse.surah;
                sheet.endAyah = lastVerse.ayah;
                
                if (lastVerse.ayah < this.surahVerseCounts[lastVerse.surah]) {
                    currentAyah = lastVerse.ayah + 1;
                    currentSurah = lastVerse.surah;
                } else if (lastVerse.surah < 114) {
                    currentSurah = lastVerse.surah + 1;
                    currentAyah = 1;
                } else {
                    currentSurah = 114;
                    currentAyah = this.surahVerseCounts[114];
                }
            } else {
                sheet.endSurah = currentSurah;
                sheet.endAyah = currentAyah;
            }
            
            this.sheets.push(sheet);
        }
    },

    generatePageMapping() {
        this.pageToSurahAyah = [];
        let currentSurah = 1;
        let currentAyah = 1;
        
        for (let page = 1; page <= 604; page++) {
            this.pageToSurahAyah[page] = {
                surah: currentSurah,
                ayah: currentAyah
            };
            
            currentAyah++;
            if (currentAyah > this.surahVerseCounts[currentSurah]) {
                currentSurah++;
                currentAyah = 1;
                if (currentSurah > 114) break;
            }
        }
    },

    getVersesForPages(pageStart, pageEnd) {
        const verses = [];
        const uniqueVerses = new Set();
        
        for (let page = pageStart; page <= pageEnd; page++) {
            if (this.pageToSurahAyah[page]) {
                const key = `${this.pageToSurahAyah[page].surah}-${this.pageToSurahAyah[page].ayah}`;
                if (!uniqueVerses.has(key)) {
                    uniqueVerses.add(key);
                    verses.push({...this.pageToSurahAyah[page]});
                }
            }
        }
        return verses;
    },

    populateSheetDropdown() {
        const select = document.getElementById('sheetSelect');
        select.innerHTML = '';
        
        this.sheets.forEach(sheet => {
            const option = document.createElement('option');
            option.value = sheet.sheet;
            option.textContent = `الورقة ${sheet.sheet} · صفحة ${sheet.pageStart}-${sheet.pageEnd}`;
            select.appendChild(option);
        });
    },

    bindEvents() {
        document.getElementById('reciterSelect').addEventListener('change', (e) => {
            this.currentReciter = e.target.value;
        });

        document.getElementById('sheetSelect').addEventListener('change', async (e) => {
            this.currentSheet = parseInt(e.target.value);
            this.currentVerseIndex = 0;
            this.loadSheetImages();
            await this.loadVerseData();
            this.updateSheetInfo();
            this.renderVersesList();
        });

        document.getElementById('prevSheet').addEventListener('click', () => {
            if (this.currentSheet > 1) {
                this.currentSheet--;
                document.getElementById('sheetSelect').value = this.currentSheet;
                this.currentVerseIndex = 0;
                this.loadSheetImages();
                this.loadVerseData().then(() => {
                    this.updateSheetInfo();
                    this.renderVersesList();
                });
            }
        });

        document.getElementById('nextSheet').addEventListener('click', () => {
            if (this.currentSheet < this.sheets.length) {
                this.currentSheet++;
                document.getElementById('sheetSelect').value = this.currentSheet;
                this.currentVerseIndex = 0;
                this.loadSheetImages();
                this.loadVerseData().then(() => {
                    this.updateSheetInfo();
                    this.renderVersesList();
                });
            }
        });

        document.getElementById('repeatSelect').addEventListener('change', (e) => {
            const value = e.target.value;
            if (value === 'continuous') {
                this.repeatCount = -1;
            } else {
                this.repeatCount = parseInt(value);
            }
            this.updateProgressDisplay();
        });

        document.getElementById('modeSelect').addEventListener('change', (e) => {
            this.currentMode = e.target.value;
        });

        document.getElementById('pauseSelect').addEventListener('change', (e) => {
            this.pauseBetweenVerses = parseInt(e.target.value);
        });

        document.getElementById('playBtn').addEventListener('click', () => this.togglePlay());
        document.getElementById('prevVerse').addEventListener('click', () => this.prevVerse());
        document.getElementById('nextVerse').addEventListener('click', () => this.nextVerse());
        
        document.getElementById('settingsBtn').addEventListener('click', () => {
            document.getElementById('settingsPanel').classList.toggle('open');
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                this.togglePlay();
            } else if (e.code === 'ArrowLeft') {
                this.prevVerse();
            } else if (e.code === 'ArrowRight') {
                this.nextVerse();
            }
        });
    },

    loadSheetImages() {
        const sheet = this.sheets.find(s => s.sheet === this.currentSheet);
        if (!sheet) return;
        
        const pages = ['page1Img', 'page2Img', 'page3Img', 'page4Img'];
        
        // Get base path
        const basePath = window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/';
        const localPath = basePath + 'mushaf-images/page_';
        
        const onlineSources = [
            'https://quran.islam-db.com/data/pages/quranpages_1024/images/page',
            'https://server11.mp3quran.net/mushaf/'
        ];
        
        pages.forEach((id, index) => {
            const img = document.getElementById(id);
            const pageNum = sheet.pageStart + index;
            const paddedPage = String(pageNum).padStart(3, '0');
            
            img.style.opacity = '0.5';
            
            // Try local image first with absolute path
            const src = `${localPath}${paddedPage}.png`;
            img.src = src;
            console.log('Trying:', src);
            
            img.onload = function() {
                this.style.opacity = '1';
                console.log('OK:', src);
            };
            
            img.onerror = function() {
                this.onerror = null;
                // Try first online source
                this.src = `${onlineSources[0]}${paddedPage}.png`;
            };
            
            img.onerror = function() {
                this.onerror = null;
                this.src = `${onlineSources[1]}${paddedPage}.png`;
            };
            
            img.onerror = function() {
                this.onerror = null;
                this.style.opacity = '1';
                this.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='560'%3E%3Crect fill='%23fff' width='400' height='560'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23333' font-size='20'%3Eصفحة ${pageNum}%3C/text%3E%3C/svg%3E`;
            };
        });
    },

    async loadVerseData() {
        const sheet = this.sheets.find(s => s.sheet === this.currentSheet);
        if (!sheet) return;

        this.verses = [];
        
        for (let surah = sheet.startSurah; surah <= sheet.endSurah; surah++) {
            const startAyah = surah === sheet.startSurah ? sheet.startAyah : 1;
            const endAyah = surah === sheet.endSurah ? sheet.endAyah : this.surahVerseCounts[surah];

            for (let ayah = startAyah; ayah <= endAyah; ayah++) {
                this.verses.push({
                    surah: surah,
                    ayah: ayah,
                    surahEn: this.surahNames[surah].en,
                    surahAr: this.surahNames[surah].ar,
                    text: await this.getVerseText(surah, ayah)
                });
            }
        }

        this.updateProgressDisplay();
        this.renderVersesList();
        this.updateCurrentVerseDisplay();
    },

    async getVerseText(surah, ayah) {
        const cacheKey = `${surah}-${ayah}`;
        if (this.verseTextsCache[cacheKey]) {
            return this.verseTextsCache[cacheKey];
        }

        try {
            const response = await fetch(`https://api.quran.com/api/v4/verses/by_chapter/${surah}?words=false`);
            const data = await response.json();
            const text = data.verses[ayah - 1]?.text_imlaei || '';
            this.verseTextsCache[cacheKey] = text;
            return text;
        } catch (error) {
            console.error('Error loading verse text:', error);
            return '';
        }
    },

    updateSheetInfo() {
        const sheet = this.sheets.find(s => s.sheet === this.currentSheet);
        if (!sheet) return;

        document.getElementById('sheetTitle').textContent = `صفحات ${sheet.pageStart}-${sheet.pageEnd}`;
        
        const startSurah = this.surahNames[sheet.startSurah];
        const endSurah = this.surahNames[sheet.endSurah];
        
        let rangeText = '';
        if (sheet.startSurah === sheet.endSurah) {
            rangeText = `${startSurah.en} • ${startSurah.ar}`;
        } else {
            rangeText = `${startSurah.en} • ${startSurah.ar} → ${endSurah.en} • ${endSurah.ar}`;
        }
        document.getElementById('sheetRange').textContent = rangeText;
    },

    renderVersesList() {
        const container = document.getElementById('versesList');
        container.innerHTML = '';

        this.verses.forEach((verse, index) => {
            const item = document.createElement('div');
            item.className = 'verse-item' + (index === this.currentVerseIndex ? ' active' : '');
            item.dataset.index = index;
            item.innerHTML = `
                <div class="verse-ref">${verse.surahEn} · الآية ${verse.ayah}</div>
                <div class="verse-text">${verse.text || '...'}</div>
            `;
            item.addEventListener('click', () => this.goToVerse(index));
            container.appendChild(item);
        });

        this.scrollToCurrentVerse();
    },

    scrollToCurrentVerse() {
        const activeItem = document.querySelector('.verse-item.active');
        if (activeItem) {
            activeItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    },

    updateProgressDisplay() {
        const totalVerses = this.verses.length;
        document.getElementById('verseProgress').textContent = 
            `الآية ${this.currentVerseIndex + 1} من ${totalVerses}`;
        
        const loopText = this.repeatCount === -1 
            ? '∞' 
            : this.currentRepeat;
        const totalLoops = this.repeatCount === -1 ? '∞' : this.repeatCount;
        document.getElementById('loopProgress').textContent = 
            `التكرار ${loopText} من ${totalLoops}`;
    },

    updateCurrentVerseDisplay() {
        const verse = this.verses[this.currentVerseIndex];
        if (!verse) return;

        document.getElementById('currentVerseInfo').textContent = 
            `${verse.surahEn} • ${verse.surahAr} · الآية ${verse.ayah}`;
        document.getElementById('currentVerseText').textContent = verse.text || '...';

        document.querySelectorAll('.verse-item').forEach((item, index) => {
            item.classList.toggle('active', index === this.currentVerseIndex);
        });
        
        this.scrollToCurrentVerse();
        this.updateProgressDisplay();
    },

    updateAudioStatus(status) {
        const statusEl = document.getElementById('audioStatus');
        if (status === 'ready') {
            statusEl.innerHTML = '<span class="status-dot"></span><span>الصوت جاهز</span>';
        } else if (status === 'loading') {
            statusEl.innerHTML = '<span class="status-dot" style="background: #eab308"></span><span>جاري التحميل...</span>';
        } else if (status === 'playing') {
            statusEl.innerHTML = '<span class="status-dot" style="background: #22c55e"></span><span>جاري التشغيل</span>';
        }
    },

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    },

    async play() {
        if (this.verses.length === 0) {
            await this.loadVerseData();
        }

        this.isPlaying = true;
        this.isPaused = false;
        this.stopRequested = false;
        
        if (this.currentRepeat === 0) {
            this.currentRepeat = 1;
        }
        
        document.getElementById('playIcon').textContent = '⏸';
        document.getElementById('playBtn').classList.add('playing');
        this.updateAudioStatus('playing');
        
        await this.playVerses();
    },

    async playVerses() {
        while (this.currentRepeat <= this.repeatCount || this.repeatCount === -1) {
            if (this.stopRequested) break;

            for (let i = 0; i < this.verses.length; i++) {
                if (this.stopRequested) break;

                this.currentVerseIndex = i;
                this.updateCurrentVerseDisplay();
                
                await this.playCurrentVerseAudio();

                if (this.stopRequested) break;

                if (this.currentMode === 'pause') {
                    await this.wait(3000);
                }

                if (this.currentMode === 'cutoff') {
                    await this.wait(2500);
                }

                if (this.pauseBetweenVerses > 0 && this.currentMode !== 'pause') {
                    await this.wait(this.pauseBetweenVerses * 1000);
                }
            }

            if (this.stopRequested) break;
            
            if (this.repeatCount === -1 || this.currentRepeat < this.repeatCount) {
                this.currentRepeat++;
                this.updateProgressDisplay();
            } else {
                break;
            }
        }

        this.stop();
    },

    async playCurrentVerseAudio() {
        return new Promise((resolve) => {
            const verse = this.verses[this.currentVerseIndex];
            if (!verse) {
                this.wait(1000).then(resolve);
                return;
            }

            if (this.audio) {
                this.audio.pause();
            }

            const reciterMap = {
                'ar.alafasy': 'Alafasy_128kbps',
                'ar.husary': 'Husary_128kbps',
                'ar.minshawi': 'Minshawi_Murattal_128kbps',
                'ar.sudais': 'As_Sudais_128kbps'
            };
            
            const reciter = reciterMap[this.currentReciter] || 'Alafasy_128kbps';
            const audioUrl = `https://cdn.islamic.network/quran/audio/${reciter}/${verse.surah}/${verse.ayah}.mp3`;

            this.audio = new Audio();
            this.audio.preload = 'auto';
            this.audio.src = audioUrl;

            let resolved = false;
            const doResolve = () => {
                if (!resolved) {
                    resolved = true;
                    resolve();
                }
            };

            this.audio.addEventListener('ended', doResolve, { once: true });
            
            this.audio.addEventListener('error', () => {
                console.log('Trying alternative audio source...');
                this.tryAlternativeAudio(verse, doResolve);
            }, { once: true });

            this.audio.play().catch(() => {
                this.tryAlternativeAudio(verse, doResolve);
            });

            setTimeout(doResolve, 20000);
        });
    },

    tryAlternativeAudio(verse, resolve) {
        const alternatives = [
            `https://verses.quran.com/${verse.surah.toString().padStart(3, '0')}${verse.ayah.toString().padStart(3, '0')}.mp3`,
            `https://server11.mp3quran.net/minshawi/Mp3/${verse.surah}_${verse.ayah}.mp3`,
            `https://cdn.alc.co.jp/app-manager/audio/recitation/${verse.surah}/${verse.ayah}.mp3`
        ];
        
        let currentAlt = 0;
        
        const tryNext = () => {
            if (currentAlt >= alternatives.length) {
                resolve();
                return;
            }
            
            this.audio.src = alternatives[currentAlt];
            currentAlt++;
            
            this.audio.play().catch(() => {
                tryNext();
            });
            
            this.audio.addEventListener('ended', resolve, { once: true });
            this.audio.addEventListener('error', () => {
                tryNext();
            }, { once: true });
        };
        
        tryNext();
    },

    pause() {
        if (this.audio) {
            this.audio.pause();
        }
        this.isPaused = true;
        this.isPlaying = false;
        document.getElementById('playIcon').textContent = '▶';
        document.getElementById('playBtn').classList.remove('playing');
        this.updateAudioStatus('ready');
    },

    resume() {
        if (this.audio) {
            this.audio.play();
        }
        this.isPaused = false;
        this.isPlaying = true;
        document.getElementById('playIcon').textContent = '⏸';
        document.getElementById('playBtn').classList.add('playing');
        this.updateAudioStatus('playing');
        this.playVerses();
    },

    stop() {
        this.stopRequested = true;
        
        if (this.audio) {
            this.audio.pause();
            this.audio = null;
        }
        
        this.isPlaying = false;
        this.isPaused = false;
        this.currentRepeat = 0;
        
        document.getElementById('playIcon').textContent = '▶';
        document.getElementById('playBtn').classList.remove('playing');
        this.updateProgressDisplay();
        this.updateAudioStatus('ready');
    },

    prevVerse() {
        if (this.currentVerseIndex > 0) {
            this.currentVerseIndex--;
            this.updateCurrentVerseDisplay();
            if (this.isPlaying) {
                this.playCurrentVerseAudio();
            }
        }
    },

    nextVerse() {
        if (this.currentVerseIndex < this.verses.length - 1) {
            this.currentVerseIndex++;
            this.updateCurrentVerseDisplay();
            if (this.isPlaying) {
                this.playCurrentVerseAudio();
            }
        }
    },

    goToVerse(index) {
        this.currentVerseIndex = index;
        this.updateCurrentVerseDisplay();
        if (this.isPlaying) {
            this.playCurrentVerseAudio();
        }
    },

    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    getTotalSheets() {
        return this.sheets.length;
    },

    getCurrentSheetInfo() {
        return this.sheets.find(s => s.sheet === this.currentSheet);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    QuranMemorizationApp.init();
});
