const SUPABASE_URL = "https://phirqisfutnwqhhswjxh.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoaXJxaXNmdXRud3FoaHN3anhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzNDk0NTMsImV4cCI6MjA5NTkyNTQ1M30.cMAmQiU5rk2-sc6K-KR0-is_ov855BnnA7a4ioCNKcY";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    
    const btn = document.getElementById("btnEntrar");
    const username = document.getElementById("usernameInput").value.trim().toLowerCase();
    const password = document.getElementById("passwordInput").value;

    btn.disabled = true;
    btn.innerText = "Verificando...";

    try {
        const { data, error } = await supabase
            .from('palpiteiro')
            .select('usuario')
            .eq('usuario', username)
            .eq('senha', password);

        if (error) {
            alert("❌ Erro ao conectar ao banco: " + error.message);
            return;
        }

        if (data && data.length > 0) {
            localStorage.setItem("bolao_user", username);
            alert("✅ Login realizado com sucesso!");
            window.location.href = "./palpites.html"; 
        } else {
            alert("❌ Usuário ou senha incorretos!");
        }

    } catch (err) {
        alert("❌ Erro de rede ao tentar fazer login.");
        console.error(err);
    } finally {
        btn.disabled = false;
        btn.innerText = "Entrar no Sistema";
    }
});