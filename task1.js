const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`; 

const data = new DOMParser().parseFromString(xmlString, "text/xml");
const listNode = data.querySelector('list');
const studentsNode = listNode.querySelectorAll('student');

let list = [];

for (let student of studentsNode) {
    const nameNode = student.querySelector('name');
    const name = nameNode.querySelector('first').textContent + ' ' + nameNode.querySelector('second').textContent;
    const age = student.querySelector('age').textContent;
    const prof = student.querySelector('prof').textContent;
    const lang = nameNode.getAttribute('lang');

    list.push({
        'name': name,
        'age': age,
        'prof': prof,
        'lang': lang
    });
}

const result = {'list': list}

console.log(result);