export default defineEventHandler(async(event)=>{
    
    const body = await readBody(event)
    const res = await usePrisma().user.create({
        data:body
    })
    console.log(res)
    return res
})