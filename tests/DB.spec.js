import { test,expect } from "@playwright/test";
import { afterEach, beforeEach } from "node:test";
// import { mysql } from "mysql2";
const mysql = require('mysql2');

const connection = mysql.createConnection({

    host : 'localhost',
    user : 'scott',
    password : 'tiger',
    database : 'emp'

})

    const connectwithDB = (userID)=>{
        return new Promise((resolve,reject)=>{

            connection.query('select * from emp'),[userID], (err,result)=>{
                if(err) reject(err);
                resolve(result)
            }

        })
    }
    
    beforeEach(async()=>{
        await connectwithDB()
    })

    afterEach(async()=>{
        await connectwithDB()
    })

test('connecting DB',async({page})=>{

    await page.goto("")

})
