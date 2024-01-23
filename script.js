//Menu Button
document.querySelector('.menubtn').onclick = () => {
    document.querySelector('.menubtn').classList.toggle("change");
    if(document.querySelector('.topphone').style.display == 'block'){
        document.querySelector('.topphone').style.display = 'none';
    }
    else {
        document.querySelector('.topphone').style.display = 'block';
    }
    
}

//Scroll to Top button
let mybutton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Pop up Image
document.querySelectorAll('.column2 img').forEach(sampleshot => {
    sampleshot.onclick = () => {
        document.querySelector('.popupImg').style.display = 'block';
        document.querySelector('.popupImg img').src = sampleshot.getAttribute('src');
    }
});

document.querySelector('.popupImg span').onclick = () => {
    document.querySelector('.popupImg').style.display = 'none';
}