document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let errorMessage = "";
    let successMessage = "";
    
    const name = document.getElementById("name").value;
    const nameRegex = /^[A-Za-ząčęėįšųūžĄČĘĖĮŠŲŪŽ]+$/;
    if (!name || name.length < 2 || name.length > 30 || !nameRegex.test(name)) {
        errorMessage += "Vardas turi būti sudarytas tik iš raidžių ir turi būti 2-30 simbolių ilgio.<br>";
    }

    const email = document.getElementById("email").value;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMessage += "Įveskite teisingą el. pašto adresą.<br>";
    }

    const age = new Date(document.getElementById("age").value);
    const ageLimit = 18;
    const currentYear = new Date().getFullYear();
    const ageValue = currentYear - age.getFullYear();
    if (ageValue < ageLimit || ageValue > 120) {
        errorMessage += "Amžius turi būti nuo 18 iki 120 metų.<br>";
    }

    const phone = document.getElementById("phone").value;
    const phoneRegex = /^\+?\d{1,3} \d{3} \d{5}$/;
    if (!phone || !phoneRegex.test(phone)) {
        errorMessage += "Telefono numeris turi būti teisingame formate: +xxx xxx xxxxx.<br>";
    }

    const password = document.getElementById("password").value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.!@#$%^&*])[A-Za-z\d.!@#$%^&*]{8,}$/;
    if (!password || !passwordRegex.test(password)) {
        errorMessage += "Slaptažodis turi turėti bent 8 simbolius, vieną didžiąją raidę, mažąją raidę, skaičių ir specialų simbolį (pvz., ., !, @, #).<br>";
    }

    const confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword !== password) {
        errorMessage += "Pakartotinas slaptažodis nesutampa su pirmu.<br>";
    }

    if (!errorMessage) {
        successMessage = "Registracija sėkminga!";
        document.getElementById("errorMessage").innerHTML = "";
    } else {
        document.getElementById("successMessage").innerHTML = "";
    }

    document.getElementById("errorMessage").innerHTML = errorMessage;
    document.getElementById("successMessage").innerHTML = successMessage;
});
