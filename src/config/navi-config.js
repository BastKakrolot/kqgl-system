export const GLOBAL_FRAME_CONFIG = {
  systemName: '考勤办公系统', //系统名称
  systemEnglishName: 'Attendance System', //英文名称，可选配置
  //左侧导航菜单配置
  navi: [{
    path: '/home',
    class: 'home',
    name: '首页'
  }, {
    name: '行政管理',
    class: 'file-protect',
    path: '/file-management',
    children: [{
      name: '查看用户',
      class: 'team',
      path: '/management'
    }, {
      name: '查看部门',
      class: 'solution',
      path: '/configuration'
    }]
  }, {
    name: '签到管理',
    class: 'form',
    path: '/sign-management',
    children: [{
      name: '签到查看',
      class: 'edit',
      path: '/qdck'
    }, {
      name: '矫正规则',
      class: 'scissor',
      path: '/jzgz'
    }, {
      name: '签到分析',
      class: 'file-done',
      path: '/qdfx'
    }, {
      name: '日历展示',
      class: 'calendar',
      path: '/rlzs'
    }]
  }, {
    name: '假期管理',
    class: 'smile',
    path: '/holiday-management',
    children: [{
      name: '请假管理',
      class: 'smile',
      path: '/qjgl'
    }, {
      name: '加班管理',
      class: 'smile',
      path: '/jbgl'
    }, {
      name: '年假调休假管理',
      class: 'smile',
      path: '/txgl'
    }, {
      name: '年假调休假统计',
      class: 'smile',
      path: '/txtj'
    }]
  }, {
    name: '汇总统计分析',
    class: 'radar-chart',
    path: '/statics-management',
    children: [{
      name: '统计分析',
      class: 'line-chart',
      path: '/tjfx'
    }, {
      name: '考勤汇总',
      class: 'dot-chart',
      path: '/kqhz'
    }]
  }, {
    name: '个人信息',
    class: 'user',
    path: '/user'
  }]
};
