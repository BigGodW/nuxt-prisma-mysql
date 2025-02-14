// server/api/users.js


export default defineEventHandler(async (event) => {
  
  const users = await usePrisma().user.findMany()
  
  return users
})