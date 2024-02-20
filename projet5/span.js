var formContainer = document.getElementById('formContainer');



var title = document.querySelector(".titre");





var form = document.createElement('form');
    form.id = 'myForm';

var Signin = document.createElement('p');


Signin.innerHTML = "Sign in to your account"
formContainer.append(Signin)




    var emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email:';

    emailLabel.style.fontSize = "13px"

    var emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';




    var passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password');
    passwordLabel.textContent = 'Password:';


    var passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = 'password';
    passwordInput.name = 'password';



    var radioInput = document.createElement('input');
    radioInput.type = 'checkbox';


    var radiolabel = document.createElement('label');
    radiolabel.innerHTML = "Stay signed in for a week"




    var submitInput = document.createElement('input');
    submitInput.type = 'submit';
    submitInput.value = 'Submit';


    var afficherInput = document.createElement('button')

    form.appendChild(emailLabel);
    form.appendChild(document.createElement('br'));
    form.appendChild(emailInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));
    form.appendChild(passwordLabel);
    form.appendChild(document.createElement('br'));
    form.appendChild(passwordInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));
    form.appendChild(radioInput)
    form.append(radiolabel)
    form.appendChild(document.createElement('br'));

    form.appendChild(submitInput);

    formContainer.appendChild(form);

    function handleSubmit(event) {
      event.preventDefault(); // Prevent form from refreshing the page

      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;

      console.log('Email:', email);
      console.log('Password:', password);



      document.getElementById('myForm').reset();
    }

    document.getElementById('myForm').addEventListener('submit', handleSubmit);