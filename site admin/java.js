const ONESIGNAL_APP_ID = "2282f493-01c5-4d23-9cd6-d551b43692d0";
const ONESIGNAL_REST_KEY = "os_v2_app_ekbpjeybyvgshhgw2vi3inus2cuw5zc3yzxekj5lphrndxbilw5twttpblbkcxrh3ji634q6i2meyen7dnqeeuewdavpoh4cngipbyq";

async function envoyerNotificationCiblee(ville, mosquee) {
    await fetch('https://onesignal.com/api/v1/notifications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${ONESIGNAL_REST_KEY}`
        },
        body: JSON.stringify({
            app_id: ONESIGNAL_APP_ID,
            filters: [{ "field": "tag", "key": "user_city", "relation": "=", "value": ville.toLowerCase() }],
            headings: { "fr": "Janazah à " + ville, "ar": "جنازة في " + ville },
            contents: { "fr": `Prière à la mosquée ${mosquee}.` },
            url: "https://ton-site.vercel.app"
        })
    });
}

document.getElementById('admin-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const ville = document.getElementById('ville').value;
    const mosquee = document.getElementById('mosquee').value;

    const { error } = await _supabase.from('janazahs').insert([{
        mosque_name: mosquee, city: ville, prayer_time: document.getElementById('date').value
    }]);

    if (!error) {
        await envoyerNotificationCiblee(ville, mosquee);
        alert("Envoyé aux habitants de " + ville);
    }
});