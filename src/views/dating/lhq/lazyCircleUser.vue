<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryRef" v-show="showSearch" :inline="true">
      <el-form-item label="昵称" prop="name">
        <el-input
            v-model="queryParams.name"
            placeholder="请输入角色名称"
            clearable
            style="width: 240px"
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="城市" prop="city">
        <el-input
            v-model="queryParams.city"
            placeholder="请输入权限字符"
            clearable
            style="width: 240px"
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <!--<el-form-item label="创建时间" style="width: 308px">
        <el-date-picker
            v-model="dateRange"
            value-format="YYYY-MM-DD"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
        <el-button icon="Refresh" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>
    <el-row :gutter="10" class="mb8">
      <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <!-- 表格数据 -->
    <el-table v-loading="loading" :data="lazyCircleUserList">
      <el-table-column label="昵称" prop="name" width="120"/>
      <el-table-column label="年龄" prop="age" :show-overflow-tooltip="true" width="150"/>
      <el-table-column label="婚姻状态" prop="marriage" :show-overflow-tooltip="true" width="150"/>
      <!--<el-table-column label="显示顺序" prop="roleSort" width="100"/>
      <el-table-column label="状态" align="center" width="100">
        <template #default="scope">
          <el-switch
              v-model="scope.row.status"
              active-value="0"
              inactive-value="1"
              @change="handleStatusChange(scope.row)"
          ></el-switch>
        </template>
      </el-table-column>-->
      <el-table-column label="更新时间" align="center" prop="updateTime">
        <template #default="scope">
          <span>{{ parseTime(scope.row.updateTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="最后更新时间" align="center" prop="sysUpdateTime">
        <template #default="scope">
          <span>{{ parseTime(scope.row.sysUpdateTime) }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination
        v-show="total > 0"
        :total="total"
        v-model:page="queryParams.pageIndex"
        v-model:limit="queryParams.pageSize"
        @pagination="getList"
    />
  </div>
</template>

<script setup name="Lhq">
import {getListLazyCircleUser} from '@/api/lhq';

const lazyCircleUserList = ref([]);
const {proxy} = getCurrentInstance();
const loading = ref(true);
const showSearch = ref(true);
const total = ref(0);
const dateRange = ref([]);
const data = reactive({
  form: {},
  queryParams: {
    pageIndex: 1,
    pageSize: 10,
    name: '',
    city: '重庆',
    gender: 2,
    endAge: 27
  }
});

const {queryParams, form, rules} = toRefs(data);

function getList() {
  console.log("加载懒汉圈界面.......");
  loading.value = true;
  getListLazyCircleUser(proxy.addDateRange(queryParams.value)).then(response => {
    console.log("getListLazyCircleUser---response", response);
    lazyCircleUserList.value = response.data.data;
    total.value = response.data.totalPage;
    loading.value = false;
  });
}

/** 搜索按钮操作 */
function handleQuery() {
  queryParams.value.pageNum = 1;
  getList();
}

/** 重置按钮操作 */
function resetQuery() {
  dateRange.value = [];
  proxy.resetForm("queryRef");
  handleQuery();
}

getList();
</script>
