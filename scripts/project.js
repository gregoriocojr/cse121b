// Load authorized employees from employeeName.json
async function getAuthorizedEmployees() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/gregoriocojr/cse121b/main/employeeNames.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading authorized employees:', error);
        return [];
    }
}

let authorizedEmployees;

// Initialize authorized employees on page load
getAuthorizedEmployees().then(data => {
    authorizedEmployees = data;
});

const logList = document.getElementById('logList');
const feedbackMessage = document.getElementById('feedbackMessage');
const employeeDetails = document.getElementById('employeeDetails');

async function login() {
    const employeeNumberInput = document.getElementById('employeeNumber');
    const enteredEmployeeNumber = parseInt(employeeNumberInput.value.trim(), 10);

    // Check if the entered employee number is authorized
    const employee = authorizedEmployees.find(emp => emp.employeeNumber === enteredEmployeeNumber);

    if (employee) {
        const currentTime = new Date().toLocaleString('en-PH', { timeZone: 'Asia/Manila' });
        const logEntry = `${currentTime} - ${enteredEmployeeNumber} logged in`;

        // Update UI and log data
        logList.innerHTML += `<li>${logEntry}</li>`;
        feedbackMessage.textContent = 'Login successful';

        // Display employee details
        displayEmployeeDetails(employee);

        // Clear the entered employee number
        employeeNumberInput.value = '';
    } else {
        feedbackMessage.textContent = 'Invalid employee number';
        clearEmployeeDetails();
    }
}

async function logout() {
    const employeeNumberInput = document.getElementById('employeeNumber');
    const enteredEmployeeNumber = parseInt(employeeNumberInput.value.trim(), 10);

    // Check if the entered employee number is authorized
    const employee = authorizedEmployees.find(emp => emp.employeeNumber === enteredEmployeeNumber);

    if (employee) {
        const currentTime = new Date().toLocaleString('en-PH', { timeZone: 'Asia/Manila' });
        const logEntry = `${currentTime} - ${enteredEmployeeNumber} logged out`;

        // Update UI and log data
        logList.innerHTML += `<li>${logEntry}</li>`;
        feedbackMessage.textContent = 'Logout successful';

        // Clear employee details on logout
        clearEmployeeDetails();

        // Clear the entered employee number
        employeeNumberInput.value = '';
    } else {
        feedbackMessage.textContent = 'Invalid employee number';
        clearEmployeeDetails();
    }
}

function displayEmployeeDetails(employee) {
    // Display employee details in the employeeDetails div
    employeeDetails.innerHTML = `
        <p>Name: ${employee.name}</p>
        <p>Employee Number: ${employee.employeeNumber}</p>
        <p>Position: ${employee.position}</p>
        <p>Date Hired: ${employee.dateHired}</p>
    `;
}

function clearEmployeeDetails() {
    // Clear employee details in the employeeDetails div
    employeeDetails.innerHTML = '';
}