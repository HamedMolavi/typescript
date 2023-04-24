// Commented due to avoid coflict with app project.

// type uid = string | number;
// class User {
//     #id: uid;
//     username: string;
//     static #index: number = 0;
//     constructor(username: string) {
//         User.#index += 1;
//         this.#id = User.#index;
//         this.username = username;
//     };
//     get id() { return this.#id }
//     set id(_id) {
//         throw new Error("Can not set id manually.");
//     }

// };

// let u: User = new User("hamed");

// // u.id = 2;
// console.log(u.id);

