function extract(content) {
  content = document.getElementById("content").innerHTML;
  let list = [];
  var textSplit = content.split("(");
  for (let i = 1; i < textSplit.length; i++) {
    list.push(textSplit[i].split(")")[0]);
  }

  return list.join(", ");
}
