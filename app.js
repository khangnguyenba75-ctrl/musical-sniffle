// Saved Script: LIVE CHAT v1.5 BOOST JS

let watching = 250;
let like = 180;
let visit = 600;

// BOOST MODE
let boost = 1;

const users = [
  {name:"Thịnh", country:"🇻🇳 VN"},
  {name:"Alex", country:"🇺🇸 US"},
  {name:"Ken", country:"🇯🇵 JP"},
  {name:"Min", country:"🇰🇷 KR"}
];

const msgByCountry = {
  "🇻🇳 VN": ["Hay quá 🔥", "Đỉnh thật", "Like 👍"],
  "🇺🇸 US": ["Nice stream 🔥", "Amazing!", "Wow cool"],
  "🇯🇵 JP": ["すごい 🔥", "いいね 👍"],
  "🇰🇷 KR": ["대박 🔥", "좋아요 👍"]
};

function random(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

// random interval list (ms)
const intervals = [100,1,501,245,237,915,135,5];

function randInterval(){
  return intervals[Math.floor(Math.random()*intervals.length)];
}

// stats update
setInterval(() => {
  watching += Math.floor(Math.random()*6);
  like += Math.floor(Math.random()*4);
  visit += Math.floor(Math.random()*8);

  document.getElementById("watching").innerHTML = watching;
  document.getElementById("like").innerHTML = like;
  document.getElementById("visit").innerHTML = visit;
}, 2000);

// AUTO CHAT
function autoChat(){
  const box = document.getElementById("chatBox");

  const user = random(users);
  const msg = random(msgByCountry[user.country]);

  const div = document.createElement("div");
  div.innerHTML = `${user.country} ${user.name}: ${msg}`;

  box.appendChild(div);
  box.scrollTop = box.scrollHeight;

  if(box.children.length > 70){
    box.removeChild(box.firstChild);
  }

  setTimeout(autoChat, randInterval() / boost);
}

// BOOST x5
function toggleBoost(){
  boost = boost === 1 ? 5 : 1;
  alert(boost === 5 ? "BOOST ON x5 🔥" : "BOOST OFF");
}

// screen share
async function startShare(){
  try{
    const stream = await navigator.mediaDevices.getDisplayMedia({video:true});
    document.getElementById("screenVideo").srcObject = stream;
  }catch(e){
    alert("Không share được màn hình");
  }
}

// start
autoChat();
