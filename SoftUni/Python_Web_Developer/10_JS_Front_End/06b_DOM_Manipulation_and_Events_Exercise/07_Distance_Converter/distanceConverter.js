function attachEventsListeners() {
  var button = document.getElementById("convert");
  var input = document.getElementById("inputDistance");
  var output = document.getElementById("outputDistance");

  button.addEventListener("click", convert);

  function convert() {
    let selected = input.parentNode.children[2].value;
    let targeted = output.parentNode.children[2].value;
    let initial = 0;
    let final = 0;
    var measures = [
      ["km", 1000],
      ["m", 1],
      ["cm", 0.01],
      ["mm", 0.001],
      ["mi", 1609.34],
      ["yrd", 0.9144],
      ["ft", 0.3048],
      ["in", 0.0254],
    ];
    for (let measure of measures) {
      if (measure[0] === selected) {
        initial = input.value * measure[1];
      }
    }
    for (let measure of measures) {
      if (measure[0] === targeted) {
        final = initial / measure[1];
      }
    }
    output.value = final;
  }
}
