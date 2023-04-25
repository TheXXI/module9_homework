const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
}
`;

const listNode = JSON.parse(jsonString).list;
const list = [];

listNode.forEach(element => {
    list.push({
        "name": element.name,
        "age": element.age,
        "prof": element.prof
    });
});

const result = {'list': list}

console.log(result);