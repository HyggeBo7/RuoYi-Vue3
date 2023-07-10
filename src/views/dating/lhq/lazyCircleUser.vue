<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryRef" v-show="showSearch" :inline="true">
      <el-collapse accordion>
        <el-collapse-item name="1">
          <template #title>
            <div style="padding-top: 20px;">
              <el-form-item label="年龄" prop="endAge">
                <el-input v-model="queryParams.endAge" placeholder="请输入年龄(小于)" clearable style="width: 240px" @keyup.enter="handleQuery"/>
              </el-form-item>
              <el-form-item label="昵称" prop="name">
                <el-input v-model="queryParams.name" placeholder="请输入昵称" clearable style="width: 240px" @keyup.enter="handleQuery"/>
              </el-form-item>
              <el-form-item label="城市" prop="city">
                <el-select v-model="queryParams.city" placeholder="请选择城市" clearable style="width: 240px" @change="handleQuery">
                  <el-option v-for="dict in [{'value':'重庆','label':'重庆'},{'value':'成都','label':'成都'},{'value':'深圳','label':'深圳'}]" :key="dict.value" :label="dict.label" :value="dict.value"/>
                </el-select>
              </el-form-item>
              <el-form-item label="星座" prop="constellation">
                <el-select v-model="queryParams.constellation" placeholder="请选择星座" clearable style="width: 240px" @change="handleQuery">
                  <el-option
                    v-for="dict in [{'value':'白羊座','label':'白羊座(0321-0419)'},{'value':'金牛座','label':'金牛座(0420-0520)'},{'value':'双子座','label':'双子座(0521-0621)'},{'value':'巨蟹座','label':'巨蟹座(0622-0722)'},{'value':'狮子座','label':'狮子座(0723-0822)'},{'value':'处女座','label':'处女座(0823-0922)'},{'value':'天枰座','label':'天枰座(0923-1023)'},{'value':'天蝎座','label':'天蝎座(1024-1122)'},{'value':'射手座','label':'射手座(1123-1221)'},{'value':'摩羯座','label':'摩羯座(1222-0119)'},{'value':'水瓶座','label':'水瓶座(0120-0218)'},{'value':'双鱼座','label':'双鱼座(0219-0320)'}]"
                    :key="dict.value" :label="dict.label" :value="dict.value"/>
                </el-select>
              </el-form-item>
              <el-form-item label="性别" prop="gender">
                <el-select v-model="queryParams.gender" placeholder="请选择性别" clearable style="width: 240px" @change="handleQuery">
                  <el-option v-for="dict in [{'value':2,'label':'女'},{'value':1,'label':'男'},{'value':0,'label':'未知'}]" :key="dict.value" :label="dict.label" :value="dict.value"/>
                </el-select>
              </el-form-item>
            </div>
          </template>
          <el-form-item label="编码" prop="userId">
            <el-input v-model="queryParams.userId" placeholder="请输入编码(数字)" clearable style="width: 240px" @keyup.enter="handleQuery"/>
          </el-form-item>
          <el-form-item label="微信" prop="wechat">
            <el-input v-model="queryParams.wechat" placeholder="请输入微信(模糊)" clearable style="width: 240px" @keyup.enter="handleQuery"/>
          </el-form-item>
          <el-form-item label="职业" prop="profession">
            <el-input v-model="queryParams.profession" placeholder="请输入职业(模糊)" clearable style="width: 240px" @keyup.enter="handleQuery"/>
          </el-form-item>
          <el-form-item label="电话" prop="phone">
            <el-input v-model="queryParams.phone" placeholder="请输入电话(模糊)" clearable style="width: 240px" @keyup.enter="handleQuery"/>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="queryParams.email" placeholder="请输入邮箱(模糊)" clearable style="width: 240px" @keyup.enter="handleQuery"/>
          </el-form-item>
          <el-form-item label="籍贯" prop="hometown">
            <el-input v-model="queryParams.hometown" placeholder="请输入籍贯(模糊)" clearable style="width: 240px" @keyup.enter="handleQuery"/>
          </el-form-item>
          <el-form-item label="更新时间" style="width: 318px">
            <el-date-picker
              v-model="dateRange.updateTime"
              value-format="YYYY-MM-DD HH:mm:ss"
              type="datetimerange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="生日" style="width: 308px">
            <el-date-picker
              v-model="dateRange.birthday"
              value-format="YYYY-MM-DD HH:mm:ss"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="年龄" prop="startAge">
            <el-input v-model="queryParams.startAge" placeholder="请输入年龄(大于)" clearable style="width: 240px" @keyup.enter="handleQuery"/>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input v-model="queryParams.age" placeholder="请输入年龄(等于)" clearable style="width: 240px" @keyup.enter="handleQuery"/>
          </el-form-item>
          <el-form-item label="过滤照片" prop="photoValueFlag">
            <el-select v-model="queryParams.photoValueFlag" placeholder="是否过滤照片" clearable style="width: 240px" @change="handleQuery">
              <el-option v-for="dict in [{'value':true,'label':'过滤空照片'},{'value':false,'label':'不过滤空照片'}]" :key="dict.value" :label="dict.label" :value="dict.value"/>
            </el-select>
          </el-form-item>
          <el-form-item label="过滤修改时间" prop="filterUpdateTime">
            <el-select v-model="queryParams.filterUpdateTime" placeholder="请选择过滤时间" clearable style="width: 240px" @change="handleQuery">
              <el-option v-for="dict in [{'value':0,'label':'过滤空'},{'value':1,'label':'一年内'},{'value':2,'label':'两年内'},{'value':3,'label':'三年内'}]" :key="dict.value" :label="dict.label" :value="dict.value"/>
            </el-select>
          </el-form-item>
          <el-form-item label="排序" prop="orderBy">
            <el-input v-model="queryParams.orderBy" placeholder="自定义排序" clearable style="width: 240px" @keyup.enter="handleQuery"/>
          </el-form-item>
        </el-collapse-item>
      </el-collapse>
      <el-form-item>
        <div style="margin-top: 20px">
          <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
          <el-button icon="Refresh" @click="resetQuery">重置</el-button>
          <el-button type="warning" icon="Edit" @click="handleUpdateSpecifyUser">更新指定信息</el-button>
          <el-button type="primary" @click="handleUserFollowList">关注列表</el-button>
          <el-button type="primary" @click="handleUserCoverList">上墙信息</el-button>
        </div>
      </el-form-item>
    </el-form>
    <el-row :gutter="10" class="mb8">
      <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <!-- 表格数据 -->
    <el-table v-loading="loading.loadTable" :data="lazyCircleUserList">
      <el-table-column type="expand">
        <template #default="props">
          <div style="padding: 10px 20px;">{{ props.row }}</div>
        </template>
      </el-table-column>
      <el-table-column align="left" header-align="center" type="index" width="56" label="序号">
        <template #default="scope">
          <div style="cursor:pointer" :title="scope.row.userId" v-copyText="scope.row.userId" v-copyText:callback="copyTextSuccess">{{ (queryParams.pageIndex - 1) * queryParams.pageSize + scope.$index + 1 }}</div>
        </template>
      </el-table-column>
      <el-table-column label="头像" align="center" idth="30">
        <template #default="scope">
          <div :title="scope.row.gender === 2 ? '女' : scope.row.gender === 1 ? '男' : '未知-' + scope.row.gender" @click="handlePhoto(scope.row)" style="cursor: pointer">
            <el-avatar :src="scope.row.avatar"/>
          </div>
        </template>
      </el-table-column>
      <!--<el-table-column label="编码" prop="userId"/>-->
      <el-table-column label="昵称" prop="name" width="120" :show-overflow-tooltip="true"/>
      <!--<el-table-column label="性别" prop="gender" width="60">
        <template #default="scope">
          <span>{{ scope.row.gender === 2 ? '女' : scope.row.gender === 1 ? '男' : '未知-' + scope.row.gender }}</span>
        </template>
      </el-table-column>-->
      <el-table-column label="年龄" prop="age" width="60"/>
      <el-table-column label="职业" prop="profession" width="100" :show-overflow-tooltip="true"/>
      <el-table-column label="婚姻状态" prop="marriage"/>
      <el-table-column label="身高" prop="height">
        <template #default="scope">
          <span>{{ scope.row.height }}cm</span>
        </template>
      </el-table-column>
      <el-table-column label="体重" prop="weight"/>
      <el-table-column label="星座" prop="constellation"/>
      <el-table-column label="学历" prop="education" width="90"/>
      <el-table-column label="收入范围" prop="income" width="100" :show-overflow-tooltip="true"/>
      <el-table-column label="车/房" prop="house" width="80" :show-overflow-tooltip="true">
        <template #default="scope">
          <span>{{ scope.row.car }}/{{ scope.row.house }}</span>
        </template>
      </el-table-column>
      <el-table-column label="籍贯" prop="hometown" :show-overflow-tooltip="true"/>
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
      <el-table-column label="更新日期" align="center" prop="updateTime">
        <template #default="scope">
          <span>{{ parseTime(scope.row.updateTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="同步日期" align="center" prop="sysUpdateTime" :show-overflow-tooltip="true">
        <template #default="scope">
          <span>{{ parseTime(scope.row.sysUpdateTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="80" class-name="small-padding fixed-width">
        <template #default="scope">
          <el-button type="warning" link icon="Edit" title="更新" @click="handleUpdate(scope.row)"></el-button>
          <el-button type="success" link icon="View" title="详情" @click="handleDetail(scope.row)"></el-button>
          <!--<el-button link icon="Picture" title="照片" @click="handlePhoto(scope.row)"></el-button>-->
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

    <el-dialog title="上墙列表" v-model="dialog.userCover" append-to-body width="80%">
      <div>
        <div>
          <el-form :model="queryParamCover" :inline="true">
            <!--<el-form-item label="编码" prop="userId">
              <el-input v-model="queryParamCover.userId" placeholder="请输入编码(数字)" clearable style="width: 240px" @keyup.enter="handleUserCoverList"/>
            </el-form-item>-->
            <el-form-item label="城市" prop="city">
              <el-select v-model="queryParamCover.city" placeholder="请选择城市" style="width: 240px" @change="handleUserCoverList">
                <el-option v-for="dict in [{'value':'重庆','label':'重庆'},{'value':'成都','label':'成都'},{'value':'深圳','label':'深圳'}]" :key="dict.value" :label="dict.label" :value="dict.value"/>
              </el-select>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
              <el-select v-model="queryParamCover.gender" placeholder="请选择性别" style="width: 240px" @change="handleUserCoverList">
                <el-option v-for="dict in [{'value':2,'label':'女'},{'value':1,'label':'男'}]" :key="dict.value" :label="dict.label" :value="dict.value"/>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div class="dr-page_scroll">
          <div class="dr-page_wrap">
            <el-row>
              <el-col :span="8" v-for="(itemCover,index) in userCoverList" style="padding: 5px">
                <el-card>
                  <el-image :key="itemCover.id" :src="itemCover.image"/>
                  <div style="padding: 14px">
                    <div>
                      <label>{{ index + 1 }}：</label>
                      <span v-if="itemCover.url">
                        <el-link :href="itemCover.url" target="_blank" type="primary"> {{ itemCover.name }}</el-link>
                      </span>
                      <span v-else :title="itemCover.url">
                        {{ itemCover.name }}
                      </span>
                    </div>
                    <div style="padding: 5px">
                      <el-row gutter="1">
                        <el-col :span="12"><label>邮箱：</label><span>{{ itemCover.email }}</span></el-col>
                        <el-col :span="12"><label>日期：</label><span>{{ itemCover.create_time_text }}</span></el-col>
                        <el-col :span="12"><label>城市：</label><span>{{ itemCover.city }}</span></el-col>
                        <el-col :span="12"><label>性别：</label><span>{{ itemCover.gender === 2 ? "女" : itemCover.gender === 1 ? "男" : "未知-" + itemCover.gender }}</span></el-col>
                        <el-col :span="24" v-if="itemCover.email">
                          <label>操作：</label>
                          <el-button type="success" link icon="Picture" title="照片详情" @click="handleUserCoverInfoOrPhoto(itemCover.email,true)"></el-button>
                          <el-button type="success" link icon="View" title="详情" @click="handleUserCoverInfoOrPhoto(itemCover.email)"></el-button>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
            <div style="text-align: center;margin: 10px;padding: 10px 0">
              <div v-if="noMore.userCoverNoMore"><p style="color: crimson;">没有更多了...<label v-if="userCoverList.length > 0">当前共<label style="font-weight: bold;color: red;">{{ userCoverList.length }}</label>条</label></p></div>
              <el-button v-else type="primary" link :loading="loading.loadUserCover" @click="getUserCoverList()">
                {{ loading.loadUserCover ? "加载中..." : "点击查询更多..." }}
                <label v-if="userCoverList.length > 0">当前共<label style="font-weight: bold;color: red;">{{ userCoverList.length }}</label>条</label>
              </el-button>
            </div>
          </div>
        </div>
        <el-backtop target=".dr-page_scroll .dr-page_wrap" :right="100" :bottom="100"/>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialog.userCover=false">关闭</el-button>
        </div>
      </template>
    </el-dialog>

    <el-dialog title="我的关注列表" v-model="dialog.userFollow" append-to-body>
      <div>
        <el-table v-loading="loading.loadUserFollowTable" :data="userFollowList">
          <el-table-column label="序号" type="index" width="50"/>
          <!--<el-table-column label="关注者编号" prop="followId"/>-->
          <el-table-column label="关注编号" align="center" prop="toFollowId"/>
          <el-table-column label="关注时间" align="center">
            <template #default="scope">
              <span>{{ parseTime(scope.row.updateDate ? scope.row.updateDate : scope.row.createDate) }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center" width="120" class-name="small-padding fixed-width">
            <template #default="scope">
              <el-button type="warning" link icon="Edit" title="取消关注" @click="handleInsertUserFollow(scope.row.toFollowId,true)"></el-button>
              <el-button type="success" link icon="Picture" title="照片详情" @click="handleUserFollowPhoto(scope.row.toFollowId)"></el-button>
              <el-button type="success" link icon="View" title="详情" @click="handleUserFollow(scope.row.toFollowId)"></el-button>
            </template>
          </el-table-column>
        </el-table>

        <pagination
          v-show="totalUserFollow > 0"
          :total="totalUserFollow"
          v-model:page="queryParamUserFollow.pageIndex"
          v-model:limit="queryParamUserFollow.pageSize"
          @pagination="getUserFollowList"
        />
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialog.userFollow=false">关闭</el-button>
        </div>
      </template>
    </el-dialog>

    <el-dialog title="更新用户信息" v-model="dialog.updateToUser" append-to-body>
      <div style="margin-bottom: 10px">
        <el-input v-model="specifyUserData.toUserId" placeholder="请输入更新用户编码">
          <template #prepend><label style="color: red">*</label> toUserId</template>
        </el-input>
      </div>
      <div style="margin: 10px 0">
        <el-input v-model="specifyUserData.userId" placeholder="请输入指定更新人编码(可不传)">
          <template #prepend> userId</template>
        </el-input>
      </div>
      <div style="margin: 10px 0">
        更新人和查询人是否指定同一个：
        <el-radio-group v-model="specifyUserData.sameUserFlag">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </div>
      <div>
        {{ specifyUserData.userData }}
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="submitUpdateSpecifyUser">提交</el-button>
          <el-button @click="dialog.updateToUser=false">关闭</el-button>
        </div>
      </template>
    </el-dialog>

    <el-dialog title="照片信息" v-model="dialog.photo" append-to-body>
      <div style="text-align: center;font-weight: bold;">
        <span style="margin: 0 10px;">{{ lazyCircleUserData.name }}</span>
        <el-image
          style="width: 66px; height: 56px;"
          :src="lazyCircleUserData.avatar"
          alt="预览照片"
          title="预览照片"
          :preview-src-list="photoList.map(d=>d.url)"
          fit="cover"/>
        <span style="margin: 0 10px;">{{ lazyCircleUserData.userId }}</span>
        <span style="margin: 0 10px;"><label style="color: #F56C6C">{{ lazyCircleUserList.indexOf(lazyCircleUserData) + 1 }}</label> / {{ lazyCircleUserList.length }}</span>
        <el-button v-if="userShareUrl" type="primary" icon="Share" size="small" circle v-copyText="userShareUrl" v-copyText:callback="copyTextSuccess" title="分享链接"/>
      </div>
      <div class="demo-image__lazy">
        <div v-for="item in photoList">
          <div style="margin: 10px auto;text-align: center;font-weight: bold;">
            {{ item.user_id }}---{{ item.create_date }}
          </div>
          <el-image :key="item.url" :src="item.url" lazy/>
        </div>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" :loading="loading.loadUserFollow" @click="handleInsertUserFollow(lazyCircleUserData.userId)">{{ userFollowData && userFollowData.status === 1 ? "取消关注" : "关注" }}</el-button>
          <el-button type="warning" @click="handleLastNext(true)">上一个</el-button>
          <el-button type="danger" @click="handleLastNext(false)">下一个</el-button>
          <el-button v-if="!dialog.userDetail" type="primary" @click="handleDetail(lazyCircleUserData)">查看详情</el-button>
          <el-button @click="dialog.photo=false">关闭</el-button>
        </div>
      </template>
    </el-dialog>

    <el-dialog title="详细信息" v-model="dialog.userDetail" append-to-body>
      <div>
        <div style="padding: 10px 20px;">
          <!--:size="size"-->
          <el-descriptions class="margin-top" title="个人信息" :column="3" border>
            <el-descriptions-item label="名称"> {{ lazyCircleUserData.name }}</el-descriptions-item>
            <el-descriptions-item label="生日"> {{ parseTime(lazyCircleUserData.birthday, '{y}-{m}-{d}') }}</el-descriptions-item>
            <el-descriptions-item label="年龄">{{ lazyCircleUserData.age }}</el-descriptions-item>
            <el-descriptions-item label="身高">{{ lazyCircleUserData.height }}</el-descriptions-item>
            <el-descriptions-item label="体重">{{ lazyCircleUserData.weight }}</el-descriptions-item>
            <el-descriptions-item label="星座">{{ lazyCircleUserData.constellation }}</el-descriptions-item>
            <el-descriptions-item label="职业">{{ lazyCircleUserData.profession }}</el-descriptions-item>
            <el-descriptions-item label="学历">{{ lazyCircleUserData.education }}</el-descriptions-item>
            <el-descriptions-item label="婚姻状态">{{ lazyCircleUserData.marriage }}</el-descriptions-item>
            <el-descriptions-item label="车">{{ lazyCircleUserData.car }}</el-descriptions-item>
            <el-descriptions-item label="房">{{ lazyCircleUserData.house }}</el-descriptions-item>
            <el-descriptions-item label="收入范围">{{ lazyCircleUserData.income }}</el-descriptions-item>
            <el-descriptions-item label="城市">{{ lazyCircleUserData.city }}</el-descriptions-item>
            <el-descriptions-item label="籍贯">{{ lazyCircleUserData.hometown }}</el-descriptions-item>
            <el-descriptions-item label="居住地">{{ lazyCircleUserData.address }}</el-descriptions-item>
            <el-descriptions-item label="微信">{{ lazyCircleUserData.wechat }}</el-descriptions-item>
            <el-descriptions-item label="电话">{{ lazyCircleUserData.phone }}</el-descriptions-item>
            <el-descriptions-item label="邮箱">{{ lazyCircleUserData.email }}</el-descriptions-item>
            <el-descriptions-item label="民族">{{ lazyCircleUserData.nation }}</el-descriptions-item>
            <el-descriptions-item label="何时结婚">{{ lazyCircleUserData.timeMarriage }}</el-descriptions-item>
            <el-descriptions-item label="是否要孩子">{{ lazyCircleUserData.wannaChildren }}</el-descriptions-item>
            <el-descriptions-item label="家庭情况">{{ lazyCircleUserData.family }}</el-descriptions-item>
            <el-descriptions-item label="形状">{{ lazyCircleUserData.shape }}</el-descriptions-item>
            <el-descriptions-item label="是否吸烟">{{ lazyCircleUserData.smoking }}</el-descriptions-item>
            <el-descriptions-item label="是否喝酒">{{ lazyCircleUserData.drinking }}</el-descriptions-item>
            <el-descriptions-item :span="2" label="其他成员">{{ lazyCircleUserData.brotherSister }}</el-descriptions-item>
            <el-descriptions-item :span="3" label="兴趣爱好">{{ lazyCircleUserData.hobby }}</el-descriptions-item>
            <el-descriptions-item :span="3" label="自我介绍">{{ lazyCircleUserData.describe }}</el-descriptions-item>
          </el-descriptions>
          <el-descriptions class="margin-top" title="择偶标准" :column="4" border>
            <el-descriptions-item label="年龄">{{ lazyCircleUserData.rAge }}</el-descriptions-item>
            <el-descriptions-item label="身高">{{ lazyCircleUserData.rHeight }}</el-descriptions-item>
            <el-descriptions-item label="学历">{{ lazyCircleUserData.rEducation }}</el-descriptions-item>
            <el-descriptions-item label="职业">{{ lazyCircleUserData.rProfession }}</el-descriptions-item>
            <el-descriptions-item label="收入范围">{{ lazyCircleUserData.rIncome }}</el-descriptions-item>
            <el-descriptions-item label="车/房">{{ lazyCircleUserData.rCar }}/{{ lazyCircleUserData.rHouse }}</el-descriptions-item>
            <el-descriptions-item label="工作地区">{{ lazyCircleUserData.rAddress }}</el-descriptions-item>
            <el-descriptions-item label="婚姻情况">{{ lazyCircleUserData.rMarriage }}</el-descriptions-item>
            <el-descriptions-item label="形状">{{ lazyCircleUserData.rShape }}</el-descriptions-item>
            <el-descriptions-item label="是否想要孩子">{{ lazyCircleUserData.rWannaChildren }}</el-descriptions-item>
            <el-descriptions-item label="是否吸烟">{{ lazyCircleUserData.rSmoking }}</el-descriptions-item>
            <el-descriptions-item label="是否喝酒">{{ lazyCircleUserData.rDrinking }}</el-descriptions-item>
            <el-descriptions-item :span="4" label="其他要求">{{ lazyCircleUserData.rOthers }}</el-descriptions-item>
          </el-descriptions>
          <el-descriptions class="margin-top" title="其他" :column="3" border>
            <el-descriptions-item label="同步日期">{{ lazyCircleUserData.sysUpdateTime }}</el-descriptions-item>
            <el-descriptions-item label="修改时间">{{ lazyCircleUserData.updateTime }}</el-descriptions-item>
            <el-descriptions-item label="创建时间">{{ lazyCircleUserData.createTime }}</el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">喜欢人数</div>
              </template>
              {{ lazyCircleUserData.likes }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">预览数</div>
              </template>
              {{ lazyCircleUserData.views }}
            </el-descriptions-item>
            <el-descriptions-item label="unlockScore">{{ lazyCircleUserData.unlockScore }}</el-descriptions-item>
            <el-descriptions-item label="recNum">{{ lazyCircleUserData.recNum }}</el-descriptions-item>
            <el-descriptions-item label="编码">{{ lazyCircleUserData.userId }}</el-descriptions-item>
            <el-descriptions-item label="状态">{{ lazyCircleUserData.status }}</el-descriptions-item>
            <el-descriptions-item label="是否关注">
              <label v-show="!loading.loadUserFollow">{{ !userFollowData ? "从未关注" : userFollowData.status === 1 ? "已关注" : "未关注" }}</label>
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" :loading="loading.loadUserFollow" @click="handleInsertUserFollow(lazyCircleUserData.userId)">{{ userFollowData && userFollowData.status === 1 ? "取消关注" : "关注" }}</el-button>
          <el-button type="warning" @click="handleLastNext(true)">上一个</el-button>
          <el-button type="danger" @click="handleLastNext(false)">下一个</el-button>
          <el-button v-if="!dialog.photo" type="success" @click="handlePhoto(lazyCircleUserData)">查看照片</el-button>
          <el-button @click="dialog.userDetail=false">关闭</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup name="Lhq">
import {getLazyCircleUserByUserId, getListCoverUser, getListLazyCircleUser, getListUserFollow, getUserFollow, insertUserFollow, updateLhqUser} from '@/api/lhq';
import {getQueryObject, param} from "@/utils";

const lazyCircleUserList = ref([]);
const lazyCircleUserData = ref({});
const userFollowList = ref([]);
const userFollowData = ref({});
const userCoverList = ref([]);
const {proxy} = getCurrentInstance();
const loading = ref({loadTable: true, loadUserFollow: true, loadUserFollowTable: true, loadUserCover: true});
const dialog = ref({photo: false, userDetail: false, updateToUser: false, userFollow: false, userCover: false});
const noMore = ref({userCoverNoMore: false});
const photoList = ref([]);
const showSearch = ref(true);
const userShareUrl = ref('');
const total = ref(0);
const totalUserFollow = ref(0);
const dateRange = ref({updateTime: [], birthday: []});
const data = reactive({
  form: {},
  queryParams: {
    pageIndex: 1,
    pageSize: 50,
    photoValueFlag: true,
    constellation: null,
    wechat: null,
    phone: null,
    email: null,
    hometown: null,
    city: "重庆",
    gender: 2,
    userId: null,
    orderBy: null,
    name: null,
    age: null,
    startAge: null,
    endAge: 27,
    profession: null,
    startUpdateTime: null,
    endUpdateTime: null,
    startBirthday: null,
    endBirthday: null,
    filterUpdateTime: 0
  }
});
const specifyUserData = ref({toUserId: null, userId: null, sameUserFlag: true, userData: null});

const {queryParams, form, rules} = toRefs(data);
const queryParamUserFollow = ref({
  pageIndex: 1,
  pageSize: 20,
  followType: 1,
  status: 1,
  toFollowId: ''
});
const queryParamCover = ref({
  pageIndex: 1,
  pageSize: 10,
  gender: 2,
  city: "重庆",
  userId: null
});

function getList() {
  loading.value.loadTable = true;
  const dateRangeValue = dateRange.value;
  getListLazyCircleUser({
    ...queryParams.value,
    startUpdateTime: dateRangeValue.updateTime[0],
    endUpdateTime: dateRangeValue.updateTime[1],
    startBirthday: dateRangeValue.birthday[0],
    endBirthday: dateRangeValue.birthday[1]
  }).then(response => {
    //console.log("getListLazyCircleUser---response", response);
    lazyCircleUserList.value = response.data.data;
    total.value = response.data.count;
    loading.value.loadTable = false;
  });
}

//复制
function copyTextSuccess(value) {
  proxy.$modal.msgSuccess("复制【" + value + "】成功");
}

//查看上墙列表-用户详情、照片信息
function handleUserCoverInfoOrPhoto(email, photoFlag = false) {
  getListLazyCircleUser({eqEmail: email}).then(response => {
    if (response.data && response.data.count && response.data.count > 0) {
      let firstData = response.data.data[0];
      if (photoFlag) {
        handlePhoto(firstData);
      } else {
        handleDetail(firstData);
      }
    } else {
      proxy.$modal.msgWarning("邮箱【" + email + "】信息不存在");
    }
  });
}

//加载上墙列表
function getUserCoverList() {
  loading.value.loadUserCover = true;
  queryParamCover.value.pageIndex = ++queryParamCover.value.pageIndex;
  getListCoverUser(queryParamCover.value).then(response => {
    if (response.data) {
      userCoverList.value = userCoverList.value.concat(response.data);
      noMore.value.userCoverNoMore = response.data.length < queryParamCover.value.pageSize;
    } else {
      noMore.value.userCoverNoMore = true;
    }
    loading.value.loadUserCover = false;
  });
}

//上墙列表
function handleUserCoverList() {
  if (!dialog.value.userCover) {
    dialog.value.userCover = true;
    noMore.value.userCoverNoMore = false;
  }
  userCoverList.value = [];
  queryParamCover.value.pageIndex = 0;
  getUserCoverList();
}

//获取关注列表数据
function getUserFollowList() {
  loading.value.loadUserFollowTable = true;
  getListUserFollow({
    ...queryParamUserFollow.value
  }).then(response => {
    userFollowList.value = response.data.data;
    totalUserFollow.value = response.data.count;
    loading.value.loadUserFollowTable = false;
  });
}

//查看我的关注列表
function handleUserFollowList() {
  dialog.value.userFollow = true;
  getUserFollowList();
}

//查看关注列表-照片信息
function handleUserFollowPhoto(toUserId) {
  getLazyCircleUserByUserId({userId: toUserId}).then(response => {
    if (response.data) {
      handlePhoto(response.data);
    } else {
      proxy.$modal.msgWarning("编号【" + toUserId + "】信息不存在");
    }
  });
}

//查看关注列表-用户详情
function handleUserFollow(toUserId) {
  getLazyCircleUserByUserId({userId: toUserId}).then(response => {
    if (response.data) {
      handleDetail(response.data);
    } else {
      proxy.$modal.msgWarning("编号【" + toUserId + "】信息不存在");
    }
  });
}

/** 搜索按钮操作 */
function handleQuery() {
  queryParams.value.pageIndex = 1;
  getList();
}

//更新指定用户
function handleUpdateSpecifyUser() {
  specifyUserData.value.userId = null;
  specifyUserData.value.sameUserFlag = true;
  specifyUserData.value.toUserId = null;
  dialog.value.updateToUser = true;
}

//提交更新指定用户信息
function submitUpdateSpecifyUser() {
  if (specifyUserData.value.toUserId) {
    proxy.$modal.confirm('确认要更新编码[' + specifyUserData.value.toUserId + ']信息么?').then(function () {
      return updateLhqUser({toUserId: specifyUserData.value.toUserId, userId: specifyUserData.value.sameUserFlag ? specifyUserData.value.toUserId : specifyUserData.value.userId});
    }).then(response => {
      specifyUserData.value.userData = response.data ? JSON.stringify(response.data) : response.data;
      proxy.$modal.msgSuccess(response.msg);
      getList();
    }).catch(function () {
    });
  } else {
    proxy.$modal.msgWarning("toUserId 必须指定");
  }
}

//获取关注信息
function getUserFollowInfo(toUserId) {
  loading.value.loadUserFollow = true;
  userFollowData.value = null;
  getUserFollow(toUserId).then(response => {
    userFollowData.value = response.data;
    //console.log("getUserFollowInfo---response", response, ",userFollowStatusName:", userFollowData.value);
    loading.value.loadUserFollow = false;
  }).catch(function () {
    loading.value.loadUserFollow = false;
  });
}

//关注用户
function handleInsertUserFollow(toUserId, loadFlag = false) {
  proxy.$modal.confirm('确定要操作[' + toUserId + ']信息么?').then(function () {
    loading.value.loadUserFollow = true;
    userFollowData.value = null;
    return insertUserFollow({followType: 1, toFollowId: toUserId});
  }).then(response => {
    userFollowData.value = response.data;
    proxy.$modal.msgSuccess(response.msg);
    loading.value.loadUserFollow = false;
    if (loadFlag) {
      getUserFollowList();
    }
  }).catch(function () {
    loading.value.loadUserFollow = false;
  });
}

function handleUpdate(row) {
  proxy.$modal.confirm('确认要更新编码[' + row.userId + ']信息么?').then(function () {
    return updateLhqUser({toUserId: row.userId});
  }).then(response => {
    //console.log("getListLazyCircleUser---updateLhqUser", response);
    proxy.$modal.msgSuccess(response.msg);
    getList();
  }).catch(function () {
  });
}

function handleDetail(row) {
  getUserFollowInfo(row.userId);
  lazyCircleUserData.value = row;
  dialog.value.userDetail = true;
}

function handlePhoto(row) {
  if (row.photos && row.photos !== '[]') {
    photoList.value = JSON.parse(row.photos);
    if (!dialog.value.userDetail) {
      lazyCircleUserData.value = row;
    }
    getUserFollowInfo(row.userId);
    dialog.value.photo = true;
  } else {
    proxy.$modal.msgWarning("暂无相关照片");
  }
  let url = window.location.href;
  if (url.indexOf("userId=") > 0) {
    let queryObject = getQueryObject(url);
    queryObject['userId'] = row.userId;
    url = url.substring(0, url.indexOf("?")) + '?' + param(queryObject)
  } else {
    url = window.location.href + '?userId=' + row.userId;
  }
  userShareUrl.value = url;
}

//上/下一个用户信息
function handleLastNext(lastFlag = false) {
  let totalSize = lazyCircleUserList.value.length - 1;
  let dataIndex = lazyCircleUserList.value.indexOf(lazyCircleUserData.value);
  let lastNextFlag = lastFlag ? totalSize > 0 && dataIndex > 0 : dataIndex < totalSize;
  if (lastNextFlag) {
    let currentLazyCircleUserData = lazyCircleUserList.value[lastFlag ? --dataIndex : ++dataIndex];
    if (dialog.value.photo) {
      if (currentLazyCircleUserData.photos && currentLazyCircleUserData.photos !== '[]') {
        photoList.value = JSON.parse(currentLazyCircleUserData.photos);
      } else {
        photoList.value = [];
      }
    }
    getUserFollowInfo(currentLazyCircleUserData.userId);
    lazyCircleUserData.value = currentLazyCircleUserData;
  } else {
    proxy.$modal.msgWarning(lastFlag ? "当前没有上一个用户信息" : "当前没有下一个用户信息");
  }
}

/** 重置按钮操作 */
function resetQuery() {
  dateRange.value.updateTime = [];
  dateRange.value.birthday = [];
  proxy.resetForm("queryRef");
  handleQuery();
}

//初始化加载界面
function initView() {
  let queryObject = getQueryObject();
  if (queryObject && queryObject.userId) {
    queryParams.value.userId = queryObject.userId;
  }
  getList();
}

initView();
</script>
<style scoped>
.demo-image__lazy {
    height: 600px;
    overflow-y: auto;
}

.demo-image__lazy .el-image {
    display: block;
    min-height: 280px;
    margin-bottom: 20px;
}

.demo-image__lazy .el-image:last-child {
    margin-bottom: 0;
}

.dr-page_scroll {
    height: 600px;
}

.dr-page_wrap {
    overflow-y: scroll;
    height: 100%;
}
</style>
