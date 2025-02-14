export default defineEventHandler(async()=>{
    const user = await usePrisma().user.findMany()
    return user
})