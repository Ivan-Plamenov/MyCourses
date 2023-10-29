function encodeAndDecodeMessages() {
  var encodeBox = document.querySelectorAll("textarea")[0];
  var encodeBtn = document.querySelectorAll("button")[0];
  var decodeBox = document.querySelectorAll("textarea")[1];
  var decodeBtn = document.querySelectorAll("button")[1];

  encodeBtn.addEventListener("click", encode);
  decodeBtn.addEventListener("click", decode);

  function encode() {
    let message = encodeBox.value;
    let newMsg = "";
    for (let i = 0; i < message.length; i++) {
      newMsg += String.fromCodePoint(message[i].charCodeAt(0) + 1);
    }
    decodeBox.value = newMsg;
    encodeBox.value = "";
  }

  function decode() {
    let message = decodeBox.value;
    let newMsg = "";
    for (let i = 0; i < message.length; i++) {
      newMsg += String.fromCodePoint(message[i].charCodeAt(0) - 1);
    }
    decodeBox.value = newMsg;
  }
}
