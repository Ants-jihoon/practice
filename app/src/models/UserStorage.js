"use strict"

class UserStorage{
    static #users = {
        id:["wlgnstls0413" , "aabb", "abcd"],
        psword:["0413", "0219", "1234"],
        name:["신지훈", "서민지","우리밋"],
    };
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers= fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports=UserStorage;