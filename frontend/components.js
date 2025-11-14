
function createHeader() {
  console.log("kjør")
  header = document.createElement("div");
  title = document.createElement("h1");
  header.setAttribute("id","headerbox");
  title.setAttribute("id","headertitle");
  title.append("Gyt games")
  header.append(title);
  document.body.appendChild(header)
}

createHeader()