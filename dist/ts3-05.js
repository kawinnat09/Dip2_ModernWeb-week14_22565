"use strict";
function showDetail(id, name, email, staff, greeting = "Hello") {
    console.log(`ID: ${id},Name:${name},Email:${email},Staff:${staff}`);
    if (staff != undefined) {
        console.log(`${greeting},ID: ${id},Name:${name},Email:${email}`);
    }
}
showDetail(101, "Mark Zuckerberg", "mark@gmail.com");
showDetail(102, "Elon Mark", "elon@gmail.com");
showDetail(103, "Jeff", "jeff@gmail.com", "AWS CEO");
