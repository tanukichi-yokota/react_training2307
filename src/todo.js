import "./styles.css";

/**
 * function
 */
// TODOレコードを作成
const onClickAdd = () => {
  //テキストボックスの値を取得して初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li
  const li = document.createElement("li");

  // dev
  const div = document.createElement("div");
  div.className = "list-row";

  // p
  const p = document.createElement("p");
  p.innerText = inputText;

  // compButton
  const compButton = document.createElement("button");
  compButton.innerText = "完了";
  compButton.addEventListener("click", () => {
    //  ボタンの親divを削除
    delFromIncompList(compButton.parentNode.parentNode);

    const li = compButton.parentNode.parentNode;
    createText(li);

    // 戻るボタン作る
    li.firstElementChild.append(retButton);
    document.getElementById("comp-list").appendChild(li);
  });

  // delButton
  const delButton = document.createElement("button");
  delButton.innerText = "削除";
  delButton.addEventListener("click", () => {
    // ボタンの親divを削除
    delFromIncompList(delButton.parentNode.parentNode);
  });

  // retButton
  const retButton = document.createElement("button");
  retButton.innerText = "戻す";
  retButton.addEventListener("click", () => {
    // ボタンのliを削除
    delFromCompList(retButton.parentNode.parentNode);

    // 完了ボタン作る
    const li = retButton.parentNode.parentNode;
    createText(li);

    // 削除と完了ボタン作る
    li.firstElementChild.append(compButton);
    li.firstElementChild.append(delButton);
    document.getElementById("incomp-list").appendChild(li);
  });

  // html要素の構造を指定
  li.appendChild(div);
  document.getElementById("incomp-list").appendChild(li);
  div.appendChild(p);
  div.appendChild(compButton);
  div.appendChild(delButton);
};

// 未完了リストから指定の要素を削除
const delFromIncompList = (target) => {
  document.getElementById("incomp-list").removeChild(target);
};

// 完了リストから指定の要素を削除
const delFromCompList = (target) => {
  document.getElementById("comp-list").removeChild(target);
};

// pタグ生成
const createText = (li) => {
  // TODOの中身
  const text = li.firstElementChild.firstElementChild.innerText;
  // div以下を初期化
  li.firstElementChild.textContent = null;
  // pタグ作成
  const p_ = document.createElement("p");
  li.firstElementChild.append(p_);
  p_.innerText = text;
};

/**
 * call function
 */
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
