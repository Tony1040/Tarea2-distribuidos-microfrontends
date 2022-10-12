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
    });
}

function init() {
  router = new Navigo(null, false, "#!");
  router.on({
    "/get": function (query) {
      getById(query);
    },
  });
  router.on(() => getAll());
  router.resolve();
}
