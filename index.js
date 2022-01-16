function addingEventListener() {
    const input = document.getElementById('input');
input.addEventListener('click', function() {
  alert('I was clicked!');
});
}


const div2 = document.querySelector("div div");
div2.addEventListener('click', function() {
  alert('clicked!');
});