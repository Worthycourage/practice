

function togglealltodos() {
const todos = document.querySelectorAll(‘li’)

        for(let li of todos) {
            li.classlist.toggle('completed');
        }
}
}
