// create a function, that pull the input value from the input field, and then package the text in a textNode, to send the text that is wrapped with TextNode to an empty JS created ListItem, so then the ListItem with its TextNode child, can be sent as a whole package to the UL.
let todoListUl = document.querySelector(".myUl");
let todoListWrapper = document.getElementById("TodoListWrapper");
let ContactFormWrapper = document.getElementById("contact_form");

let ServiceId = "service_kcgd7yr";
let TemplateId = "template_ef4bxwe";
let formSubmitButton = document.querySelector(".sbmtButton");
let theForm = document.getElementById("contact_form");

let currentComponent = "TodoList";

// This Algorithm is used in the TodoList
function AddTodo() {
    let inputField = document.getElementById("TodoInput").value;
    if (inputField === "") {
        alert("Cant Add Empty Field!");
    } else {
        let TextNode = document.createTextNode(inputField);
        let listItem = document.createElement("li");
        listItem.appendChild(TextNode);
        listItem.classList.add("TodosStyle");
        todoListUl.appendChild(listItem);
        document.getElementById("TodoInput").value = "";
    }
}

// Algorithm for the Contact Form
theForm.addEventListener("submit", (e) => {
    e.preventDefault();
    emailjs.sendForm(ServiceId, TemplateId, e.target)
        .then(function () {
            console.log("Message Sent Successfully");
            alert("Message Sent Successfully");
        }, function (error) {
            console.log(error);
        })
});

// Show and Hide todolist
// function ShowTodos() {
//     if (todoListWrapper.style.display === "none") {
//         todoListWrapper.style.display = "block";
//     } else {
//         todoListWrapper.style.display = "none";
//     }
// }
//
// function ShowForm() {
//     if (ContactFormWrapper.style.display === "none") {
//        ContactFormWrapper.style.display = "block";
//     } else {
//         ContactFormWrapper.style.display = "none";
//     }
// }

function ShowTodos() {
    if (currentComponent !== "TodoList") {
        todoListWrapper.style.display = "block";
        ContactFormWrapper.style.display = "none";
        currentComponent = "TodoList";
    }
}

function ShowForm() {
    if (currentComponent !== "contactForm") {
        ContactFormWrapper.style.display = "block";
        todoListWrapper.style.display = "none";
        currentComponent = "contactForm";
    }
}