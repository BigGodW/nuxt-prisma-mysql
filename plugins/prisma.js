import { PrismaClient } from '@prisma/client'

// 创建 Prisma 客户端实例
const prisma = new PrismaClient()

// 将 Prisma 客户端实例注入到 Nuxt 应用中
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      prisma,
    },
  }
})