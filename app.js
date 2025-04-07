import { db } from "./config/db.js";
import { usersTable } from "./drizzle/schema.js";

const main = async () => {
  //insert
  const insertUser = await db.insert(usersTable).values({
    name: "Rohan",
    age: "31",
    email: "test1@yadav@gmail.com",
  });
  console.log(insertUser);
  //read
  const users = await db.select().from(usersTable);
  console.log(users);
};
main().catch((error) => {
  console.log(error);
});
