document.getElementById("signup").onclick = function() {
    var email = document.getElementById("email").value;
    window.location.href = "signup.html?email=" + email;
  };
  