const SUPABASE_URL = "https://TON_ID.supabase.co";
const SUPABASE_KEY = "TON_API_KEY_ANON";
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const i18n = {
    fr: { title: "Annonces de Janazah", desc: "Alertes par ville.", setup: "Configurez votre ville", save: "S'abonner", p_pays: "Pays", p_reg: "Région", p_ville: "Ville" },
    ar: { title: "إعلانات الجنازة", desc: "تنبيهات حسب المدينة", setup: "إعدادات مدينتك", save: "اشتراك", p_pays: "البلد", p_reg: "المنطقة", p_ville: "المدينة" },
    en: { title: "Janazah Alerts", desc: "Alerts by city.", setup: "Set your city", save: "Subscribe", p_pays: "Country", p_reg: "Region", p_ville: "City" },
    tr: { title: "Cenaze İlanları", desc: "Şehir bazlı uyarılar.", setup: "Şehri ayarla", save: "Abone Ol", p_pays: "Ülke", p_reg: "Bölge", p_ville: "Şehir" }
};

window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
    OneSignal.init({ appId: "2282f493-01c5-4d23-9cd6-d551b43692d0" });
});

function changerLangue(lang) {
    const t = i18n[lang]; if(!t) return;
    document.getElementById('txt-title').innerText = t.title;
    document.getElementById('txt-desc').innerText = t.desc;
    document.getElementById('txt-setup').innerText = t.setup;
    document.getElementById('btn-save').innerText = t.save;
    document.getElementById('user-country').placeholder = t.p_pays;
    document.getElementById('user-region').placeholder = t.p_reg;
    document.getElementById('user-city').placeholder = t.p_ville;
}

async function enregistrerPreferences() {
    const city = document.getElementById('user-city').value.trim().toLowerCase();
    if(!city) return alert("Ville requise");
    
    OneSignal.push(function() {
        OneSignal.sendTags({ "user_city": city }).then(() => {
            alert("Inscrit pour : " + city);
            OneSignal.showNativePrompt();
        });
    });
}