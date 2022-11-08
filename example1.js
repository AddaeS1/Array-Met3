let users = ['Addae', 'addae', 'Bruna', 'xuxa','Diego', 'lays'];


users.sort((a, b) => {
    if(a < b){
        return -1;
    }
    if(a > b){
        return 1;
    }
    return 0;
})
console.log(users);