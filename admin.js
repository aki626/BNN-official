/* ロード画面 */
setTimeout(() => {
    document.getElementById("loader").style.opacity = "0";
}, 2000);

/* パスワード（BNN-Team を暗号化） */
const ADMIN_PASSWORD = btoa("BNN-Team");

/* ポップアップ表示 */
function openAdminLogin() {
    document.getElementById("admin-popup-bg").style.display = "block";
    document.getElementById("admin-popup").style.display = "block";
}

/* ログインチェック */
function checkAdminPass() {
    const pass = document.getElementById("admin-pass").value;

    if (btoa(pass) === ADMIN_PASSWORD) {
        document.getElementById("admin-popup-bg").style.display = "none";
        document.getElementById("admin-popup").style.display = "none";
        document.getElementById("admin-panel").style.display = "block";
    } else {
        document.getElementById("admin-error").innerText = "パスワードが違います";
    }
}

/* 役割変更 */
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

/* メンバー追加 */
function addMember() {
    const name = document.getElementById("add-name").value;
    const role = document.getElementById("add-role").value;
    const game = document.getElementById("add-game").value;

    if (!name || !role || !game) return alert("全部入力してください");

    const membersSection = document.getElementById("members");

    const card = document.createElement("div");
    card.className = "member-card";
    card.innerHTML = `
        <h3>${name}</h3>
        <p>${role}</p>
        <p>やっているゲーム：${game}</p>
    `;

    membersSection.appendChild(card);

    alert("メンバーを追加しました！");
}

/* やったこと一覧削除 */
function deleteUpdate() {
    const index = Number(document.getElementById("delete-index").value);

    const updates = document.querySelectorAll("#updates .update-card");

    if (index < 1 || index > updates.length) {
        alert("番号が正しくありません");
        return;
    }

    updates[index - 1].remove();
    alert("削除しました！");
}

/* やったこと一覧追加 */
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
