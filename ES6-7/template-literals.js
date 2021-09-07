// Template Literals

const name = "Masha";
const age = 17;
const text = "My name is "+name+", i am " + age +  " years old";

// console.log(text);

const text2 = `My name is ${name}, i am ${age} years old`;

const date = `${Date.now()}`;

// console.log(text2);
// console.log(date);

const html =
    '<ul>' +
        '<li>Item one</li>' +
        '<li>Item two</li>' +
    '</ul>';

const names = ['Sasha', 'Masha'];

const templateHtml =
    `
    <ul>
        <li>${names[0]}</li>
        <li>${names[1]}</li>
    </ul>
    `;

// console.log(templateHtml);

