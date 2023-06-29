import { executeQuery } from '../Database/connectDatabase'

export const userRegistration = async (req: any, res: any) => {
    return new Promise(async (resolve, reject) => {
        try {
             const sqlQuery = `insert into users_table (email, password) values ("shubham@gmail.com","shubham123")`;
            //  const sqlQuery = `select * from users_table`;
            let response = await executeQuery(sqlQuery)
 
            console.log("return newPromise response:", response)

            return resolve(response) } 
            
            catch (error) {
                console.log("return newPromise error:", error)
                return reject(error)
            }
        })
    }
