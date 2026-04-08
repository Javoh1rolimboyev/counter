document.getElementById("plus").addEventListener("click", increaseCount)
document.getElementById("minus").addEventListener("click", decreaseCount)
document.getElementById("reset").addEventListener("click", resetCount)
let count = 0;


function updateCount() {
  document.getElementById("count").innerHTML = count;
}

function increaseCount() {
  count++;
  localStorage.setItem("count", count);
  updateCount();
}

function decreaseCount() {
if (count > 0)

  count--;
  localStorage.setItem("count", count);
  updateCount();

}

function resetCount() {
  count = 0;
  localStorage.setItem("count", count);
  
  updateCount();
}

window.onload = function(){ 
    let saved = localStorage.getItem("count")
    if (saved !== null){
        count = Number(saved)
    }
      updateCount();
};
 const plus = document.getElementById("plus");

  plus.addEventListener("mouseover", function() {
    plus.style.backgroundColor = "red";
  });

  plus.addEventListener("mouseout", function() {
    plus.style.backgroundColor = "white";
  });

  const minus = document.getElementById("minus");

  minus.addEventListener("mouseover", function() {
    minus.style.backgroundColor = "red";
  });

  minus.addEventListener("mouseout", function() {
    minus.style.backgroundColor = "white";
  });
  const reset = document.getElementById("reset");

  reset.addEventListener("mouseover", function() {
    reset.style.backgroundColor = "green";
  });

  reset.addEventListener("mouseout", function() {
    reset.style.backgroundColor = "red";
  });
  const countainer = document.getElementById("countainer");

  countainer.addEventListener("mouseover", function() {
    countainer.style.backgroundColor = "rgb(46, 47, 48)";
  });

  countainer.addEventListener("mouseout", function() {
    countainer.style.backgroundColor = "rgb(75, 77, 70)";
  });