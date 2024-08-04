import { application } from "../.."; // Ensure this path is correct
import P from "../../components/p";
import {Button} from "../../components/button";

const selectionData = [
    { title: "Applicant", description: "A job seeker that looking for job", action: '/jobseeker-register',selection:'Select Applicant' },
    { title: "Agency", description: "A Company that looking for job seekers", action: '/agency-register',selection:'I want to Agency' }
];

async function RenderSelection() {
    console.log('RenderSelection called'); // Debugging log

    const selection = document.createElement("div") as HTMLDivElement;
    const element = document.createElement('div') as HTMLDivElement
    element.style.display = 'grid';
    element.style.gridTemplateColumns = 'repeat(2, 1fr)'; // Updated to ensure 2 equal columns
    element.style.gap = '10px';
    element.style.padding = '10px'; // Add padding for better visual presentation
    element.style.width = '900px'
    element.style.height = '300px'
    selection.style.display = 'flex'
    selection.style.alignItems = 'center'
    selection.style.height = '100vh'
    selection.style.justifyContent = 'center'
    selection.style.padding = '0px'
    if (selection) {
        selectionData.forEach((item) => {
            console.log('Processing item:', item); // Debugging log

            const div1 = document.createElement('div') as HTMLDivElement;
            div1.style.border = '1px solid #ccc'; // Add some border for visual separation
            div1.style.padding = '10px';
            div1.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)'; // Add box shadow for better visual appearance
            div1.style.backgroundColor = '#fff'; // Ensure background color is white
            div1.style.display = 'flex'; // Flexbox for internal alignment
            div1.style.flexDirection = 'column';
            div1.style.alignItems = 'center';
            const title = document.createElement('p') as HTMLParagraphElement
            const description = document.createElement('p') as HTMLParagraphElement
        
            title.textContent = item.title
            description.textContent = item.description

const Submit = Button({
    textContent: item.selection,
    style: 'padding: 10px 14px; border-radius: 6px; background: black; color: white;' // Example style
});

Submit.addEventListener('click', () => {
    console.log('Button clicked, redirecting to:', item.action); // Debugging log
    window.location.href = item.action;
});

div1.appendChild(title);
div1.appendChild(description);
div1.appendChild(Submit);
element.appendChild(div1)
selection.appendChild(element);
});

console.log('Appending selection to application'); // Debugging log
application.appendChild(selection);
} else {
console.error('Failed to create selection element'); // Error log
}
}

export default RenderSelection;