import Button from "../../components/button";
import Input from "../../components/input";

// Create and append elements to the DOM
const ValueEmail = Input({
    placeholder: 'Email',
    type: 'email',
    class: 'ValueEmail',
    style: 'padding:9px 10px; border-radius:5px; border:1px solid black;',
    name: 'email',
    id: 'email'
});

const ValuePassword = Input({
    placeholder: 'Password',
    type: 'password',
    class: 'ValuePassword',
    style: 'padding:9px 10px; border-radius:5px; border:1px solid black;',
    name: 'password',
    id: 'password'
});

const buttonSubmit = Button({
    textContent: 'Submit',
    style: 'padding:10px 14px; border-radius:6px; background:black; color:white;'
});

// Append elements to the body (or your desired container)
document.body.append(ValueEmail, ValuePassword, buttonSubmit);

async function SubmitData() {
    const email = ValueEmail.value;
    const password = ValuePassword.value;

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    console.log('Data saved to localStorage');
}

function GetData() {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    return { email, password };
}

async function SendData() {
    const data = GetData();

    try {
        const response = await fetch('https://your-server-endpoint.com/save-data', { // Replace with your actual URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Data saved to database:', result);
    } catch (error) {
        console.error('Error saving data:', error);
    }
}

buttonSubmit.addEventListener('click', async () => {
    await SubmitData(); // Ensure this completes before sending data
     // Send data to the server
});
console.log(localStorage)
export { ValueEmail, ValuePassword, buttonSubmit };
