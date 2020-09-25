function atskirtiSkaitmenys() {
  let string = document.getElementById('myNumber').value;
  let result = string.split('').map(Number);
  result.sort(function(a, b){return b-a});
  document.getElementById('final').innerHTML = result.join('');
}