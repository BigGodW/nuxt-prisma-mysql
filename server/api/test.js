export default defineEventHandler(async (event) => {
    // 通过 useNuxtApp() 获取 Prisma 实例
    const { prisma } = useNuxtApp()
  
    // 查询所有用户
    const users = await prisma.user.findMany()
    return users
  })