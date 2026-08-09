/* ロード画面 */
setTimeout(() => {
    document.getElementById("loader").style.opacity = "0";
}, 2000);

/* 管理者機能 */
const ADMIN_PASSWORD = "bnnadmin"; // ←好きに変更OK

function openAdminLogin() {
    document.getElementById("admin-login").style.display = "block";
}

function checkAdminPass() {
    const pass = document.getElementById("admin-pass").value;
    if (pass === ADMIN_PASSWORD) {
        document.getElementById("admin-login").style.display = "none";
        document.getElementById("admin-panel").style.display = "block";
    } else {
        document.getElementById("admin-error").innerText = "パスワードが違います";
    }
}

function changeRole() {
    const member = document.getElementById("member-select").value;
    const newRole = document.getElementById("new-role").value;

    if (!newRole) return alert("役割を入力してください");

    const cards = document.querySelectorAll(".member-card");

    cards.forEach(card => {
        if (card.querySelector("h3").innerText === member) {
            card.querySelectorAll("p")[0].innerText = newRole;
        }
    });

    alert("役割を変更しました！");
}

function addUpdate() {
    const text = document.getElementById("update-text").value;
    if (!text) return alert("内容を入力してください");

    const updatesSection = document.getElementById("updates");

    const newCard = document.createElement("div");
    newCard.className = "update-card";
    newCard.innerHTML = `
        <h4>${new Date().toLocaleDateString()}</h4>
        <p>${text}</p>
    `;

    updatesSection.appendChild(newCard);

    alert("追加しました！");
}
