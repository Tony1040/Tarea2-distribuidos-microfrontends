function getAll() {
  fetch("/templates/list.html")
    .then((response) => response.text())
    .then((template) => {
      var rendered = Mustache.render(template, data);
      document.getElementById("content").innerHTML = rendered;
    });
}

function checkId(item) {
  return item._id == this;
}

function getById(query) {
  console.log("called");
  fetch("/templates/detail.html")
    .then((response) => response.text())
    .then((template) => {
      var elem = data.find(checkId, query.params.id);
      var rendered = Mustache.render(template, elem);
      document.getElementById("content").innerHTML = rendered;

      //Reference to artists 
      document.getElementById("id_artista").onclick = () => {
        window.open("http://127.0.0.1:3005/get/?id=" + elem.id_artista)
      }

      //Reference to publishers
      document.getElementById("id_discografica").onclick = () => {
        window.open("http://127.0.0.1:3006/get/?id=" + elem.id_artista)
      }
    });
}

function init() {
  const router = new Navigo(null, false, "#!");
  console.log("called init");
  router.on({
    "/get": function (query) {
      getById(query);
    },
  });
  router.on(() => getAll());
  router.resolve();
}
