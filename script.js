document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("loginForm");

    if (!form) {
        console.error("Form not found! Check your index.html.");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission

        const email = document.querySelector("input[type='email']").value;

        if (email.includes("student")) {
            window.location.href = "student.html";
        } else if (email.includes("teacher")) {
            window.location.href = "teacher.html";
        } else {
            alert("Invalid login! Use an email containing 'student' or 'teacher'.");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quizForm");
    const quizList = document.getElementById("quizList");
    let quizQuestions = [];

    if (quizForm) {
        quizForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get values from input fields
            let question = document.getElementById("question").value;
            let option1 = document.getElementById("option1").value;
            let option2 = document.getElementById("option2").value;
            let option3 = document.getElementById("option3").value;
            let option4 = document.getElementById("option4").value;
            let correctAnswer = document.getElementById("correctAnswer").value;

            // Create a question object
            let questionData = {
                question,
                options: [option1, option2, option3, option4],
                correctAnswer
            };

            // Store the question
            quizQuestions.push(questionData);
            localStorage.setItem("quizData", JSON.stringify(quizQuestions));

            // Update UI
            displayQuestions();

            // Clear form
            quizForm.reset();
        });
    }

    // Function to display questions in the list
    function displayQuestions() {
        quizList.innerHTML = "";
        quizQuestions.forEach((q, index) => {
            let li = document.createElement("li");
            li.textContent ='${index + 1}. ${q.question} (Answer: ${q.correctAnswer})';
            quizList.appendChild(li);
        });
    }

    // Load existing questions if any
    let storedQuiz = localStorage.getItem("quizData");
    if (storedQuiz) {
        quizQuestions = JSON.parse(storedQuiz);
        displayQuestions();
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quizForm");
    const quizList = document.getElementById("quizList");
    let quizQuestions = [];

    if (quizForm) {
        quizForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get values from input fields
            let question = document.getElementById("question").value;
            let option1 = document.getElementById("option1").value;
            let option2 = document.getElementById("option2").value;
            let option3 = document.getElementById("option3").value;
            let option4 = document.getElementById("option4").value;
            let correctAnswer = document.getElementById("correctAnswer").value;

            // Create a question object
            let questionData = {
                question,
                options: [option1, option2, option3, option4],
                correctAnswer
            };

            // Store the question
            quizQuestions.push(questionData);
            localStorage.setItem("quizData", JSON.stringify(quizQuestions));

            // Update UI
            displayQuestions();

            // Clear form
            quizForm.reset();
        });
    }

    // Function to display questions in the list
    function displayQuestions() {
        quizList.innerHTML = "";
        quizQuestions.forEach((q, index) => {
            let li = document.createElement("li");
            li.textContent = '${index + 1}. ${q.question} (Answer: ${q.correctAnswer});
            quizList.appendChild(li);
        });
    }

    // Load existing questions if any
    let storedQuiz = localStorage.getItem("quizData");
    if (storedQuiz) {
        quizQuestions = JSON.parse(storedQuiz);
        displayQuestions();
    }
});
