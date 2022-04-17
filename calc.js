const main = document.getElementById("main");
const ing = document.createElement("h5");
ing.className = "temp";

const h2 = document.createElement("h2");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");

main.appendChild(ing);
main.appendChild(h2);
main.appendChild(div1);
main.appendChild(div2);
main.appendChild(div3);
main.appendChild(div4);

h2.innerHTML = "0";
h2.className = "result";

const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
const btn_add = document.createElement("button");
btn1.innerHTML = "1";
btn2.innerHTML = "2";
btn3.innerHTML = "3";
btn_add.innerHTML = "+";

const btn4 = document.createElement("button");
const btn5 = document.createElement("button");
const btn6 = document.createElement("button");
const btn_diff = document.createElement("button");
btn4.innerHTML = "4";
btn5.innerHTML = "5";
btn6.innerHTML = "6";
btn_diff.innerHTML = "-";

const btn7 = document.createElement("button");
const btn8 = document.createElement("button");
const btn9 = document.createElement("button");
const btn_mul = document.createElement("button");
btn7.innerHTML = "7";
btn8.innerHTML = "8";
btn9.innerHTML = "9";
btn_mul.innerHTML = "×";

const btn_init = document.createElement("button");
const btn0 = document.createElement("button");
const btn_equal = document.createElement("button");
const btn_div = document.createElement("button");
btn_init.innerHTML = "C";
btn0.innerHTML = "0";
btn_equal.innerHTML = "=";
btn_div.innerHTML = "÷";

div1.appendChild(btn1);
div1.appendChild(btn2);
div1.appendChild(btn3);
div1.appendChild(btn_add);

div2.appendChild(btn4);
div2.appendChild(btn5);
div2.appendChild(btn6);
div2.appendChild(btn_diff);

div3.appendChild(btn7);
div3.appendChild(btn8);
div3.appendChild(btn9);
div3.appendChild(btn_mul);

div4.appendChild(btn_init);
div4.appendChild(btn0);
div4.appendChild(btn_equal);
div4.appendChild(btn_div);

const btnClick = (e) => e.preventDefault;
const numClick = (e) => {
    btnClick(e);
    const val = Number(e.target.innerHTML);
    if (h2.innerHTML === "0") h2.innerHTML = "";
    h2.innerHTML += val;
};

const temp = [];
const initClick = (e) => {
    btnClick(e);
    temp.length = 0;
    h2.innerHTML = "0";
    ing.innerHTML = "";
    console.log(temp);
};

const addClick = (e) => {
    btnClick(e);
    temp.push(Number(h2.innerHTML));
    ing.innerHTML = temp[0];
    if (temp.length > 2) {
        const val = calculating(temp);
        temp.length = 0;
        temp.push(val);
        h2.innerHTML = val;
        ing.innerHTML = val;
    }
    temp.push("+");
    h2.innerHTML = "";
    console.log(temp);
};

const diffClick = (e) => {
    btnClick(e);
    temp.push(Number(h2.innerHTML));
    ing.innerHTML = temp[0];
    if (temp.length > 2) {
        const val = calculating(temp);
        h2.innerHTML = val;
        ing.innerHTML = val;
        temp.length = 0;
        temp.push(val);
    }
    temp.push("-");
    h2.innerHTML = "";
    console.log(temp);
};

const mulClick = (e) => {
    btnClick(e);
    temp.push(Number(h2.innerHTML));
    ing.innerHTML = temp[0];
    if (temp.length > 2) {
        const val = calculating(temp);
        h2.innerHTML = val;
        ing.innerHTML = val;
        temp.length = 0;
        temp.push(val);
    }
    temp.push("*");
    h2.innerHTML = "";
    console.log(temp);
};

const divClick = (e) => {
    btnClick(e);
    temp.push(Number(h2.innerHTML));
    ing.innerHTML = temp[0];
    if (temp.length > 2) {
        const val = calculating(temp);
        h2.innerHTML = val;
        ing.innerHTML = val;
        temp.length = 0;
        temp.push(val);
    }
    temp.push("/");
    h2.innerHTML = "";
    console.log(temp);
};

const equalClick = (e) => {
    btnClick(e);
    temp.push(Number(h2.innerHTML));
    const val = calculating(temp);
    h2.innerHTML = val;
    ing.innerHTML = "";
    temp.length = 0;
    console.log(temp);
};

const calculating = (arr) => {
    let val = arr[0];
    if (typeof arr[1] === "number") return val;
    else if (arr[1] === "+") val += arr[2];
    else if (arr[1] === "-") val -= arr[2];
    else if (arr[1] === "*") val *= arr[2];
    else if (arr[1] === "/") val /= arr[2];
    return val;
};

btn1.addEventListener("click", numClick);
btn2.addEventListener("click", numClick);
btn3.addEventListener("click", numClick);
btn4.addEventListener("click", numClick);
btn5.addEventListener("click", numClick);
btn6.addEventListener("click", numClick);
btn7.addEventListener("click", numClick);
btn8.addEventListener("click", numClick);
btn9.addEventListener("click", numClick);
btn0.addEventListener("click", numClick);
btn_init.addEventListener("click", initClick);
btn_add.addEventListener("click", addClick);
btn_diff.addEventListener("click", diffClick);
btn_mul.addEventListener("click", mulClick);
btn_div.addEventListener("click", divClick);
btn_equal.addEventListener("click", equalClick);
