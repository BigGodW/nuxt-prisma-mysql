<template>
    <div class="common-layout">
      <el-container class="h-screen">
        <el-header>
            <AdminNav></AdminNav>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <AdminLeftNav></AdminLeftNav>
          </el-aside>
          <el-container class="">
            <el-main>
                <slot></slot>
            </el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
  </template>
  <style>

</style>