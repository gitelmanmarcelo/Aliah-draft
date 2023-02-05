let school_children;
let army_children;
let alone_or_family;
let FullName;
let age;
let question = document.querySelector('#question');
let titleMargin = 50;

setInterval(moveTitle,300);
removeForm();
createForm();
question.textContent = 'How are you making aliah ?'
CreateRadioBtnStep([{label: 'alone', id : 'alone', value : 'alone'},{label: 'family', id:'family', value:'family'}]);

document.querySelector('#next').addEventListener('click',step2);

function removeForm() {
    document.querySelector('main').removeChild(document.querySelector('#form_div'));
}

function createForm() {
    let div =  document.createElement('div');
    div.id = "form_div";
    let form = document.createElement('form');
    div.appendChild(form);
    document.querySelector('main').appendChild(div);
}

function nextButton(){
    let btn = document.createElement('button');
    btn.id = 'next';
    let icon = document.createElement('i');
    icon.classList.add("fa-solid");
    icon.classList.add("fa-circle-arrow-right");
    btn.appendChild(icon);

    return btn;
}

function CreateCheckboxStep(options) {
    let form = document.querySelector('form');
    for (let i=0; i<options.length; i++) {
        let cb = document.createElement('input');
        cb.id = options[i].id;
        cb.setAttribute('type','checkbox');
        cb.setAttribute('name','cb'+i.toString());
        cb.value = options[i].value;
        let label = document.createElement('label');
        label.setAttribute('for','cb'+i.toString());
        label.textContent = options[i].label;
        form.appendChild(cb);
        form.appendChild(label);
    }
    document.querySelector('#form_div').appendChild(nextButton());
}

function CreateRadioBtnStep(options) {
    let form = document.querySelector('form');
    for (let i=0; i<options.length; i++) {
        let radio = document.createElement('input');
        radio.id = options[i].id;
        radio.setAttribute('type','radio');
        radio.setAttribute('name','radio');
        radio.value = options[i].value;
        let label = document.createElement('label');
        label.setAttribute('for','cb'+i.toString());
        label.textContent = options[i].label;
        form.appendChild(radio);
        form.appendChild(label);
    }
    document.querySelector('#form_div').appendChild(nextButton());
}


function CreateTextStep(options) {
    let form = document.querySelector('form');
    for (let i=0; i<options.length; i++) {
        let txt = document.createElement('input');
        txt.type='text';
        txt.id = options[i].id;
        txt.setAttribute('name','txt'+i.toString());
        txt.value = options[i].value;
        form.appendChild(txt);
    }
    document.querySelector('#form_div').appendChild(nextButton());

}

function step2(e) {
    e.preventDefault();
    if (document.querySelector('#alone').checked)
        alone_or_family = 'alone';
    else if (document.querySelector('#family').checked)
        alone_or_family = 'family';
    else
        return;
    removeForm();
    createForm();
    question.textContent = 'What is your Full Name (optional) ?'
    CreateTextStep([{label: '', id : 'fullName', value : ''}]);
    document.querySelector('#next').addEventListener('click',step3);

}

function step3(e) {
    e.preventDefault();
    FullName = document.querySelector('#fullName').value;
    removeForm();
    createForm();
    question.textContent = 'What is your age ?'
    CreateTextStep([{label: '', id : 'age', value : ''}]);
    document.querySelector('#next').addEventListener('click',step4);
}

function step4(e) {

    e.preventDefault();
    age = Number(document.querySelector('#age').value);

    if (isNaN(age) || age == 0)
        return;

    if (alone_or_family == 'alone') {
        if (age > 17 && age < 25)
             window.open("young.html?name=" + FullName,"_self")  // army
        else if (age > 65)
            window.open("elder.html?name=" + FullName,"_self")     // elderly
        else
            {}
    }
    else {   // family
        removeForm();
        createForm();
        question.textContent = 'Tell about your children:'
        CreateCheckboxStep([{label: 'school age children', id : 'school', value : 'school'},{label: 'army age children', id:'army', value:'army'}]);
    } 
    document.querySelector('#next').addEventListener('click',step5);
}

function step5(e) {
    e.preventDefault();
    if (document.querySelector('#army').checked)
        army_children = true;
    else
        army_children = false;
    if (document.querySelector('#school').checked)
        school_children = true;
    else    
        school_children = false;
    if (army_children && school_children)
        window.open("family_both_children.html?name=" + FullName,"_self");
    else if (army_children)
        window.open("family_army_children.html?name=" + FullName,"_self");
    else if (school_children)
        window.open("family_school_children.html?name=" + FullName,"_self");
    else
        window.open("family_no_children.html?name=" + FullName,"_self");
}

function moveTitle() {
    titleMargin += 10;
    if (titleMargin == 1300)
        titleMargin = 50;
    document.querySelector('#title').style.marginRight = titleMargin.toString() + 'px';
}
