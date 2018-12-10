import { KQBG_SERVER, APP_KEY, OTHER_SERVER } from './config';

export const RESTURL = {
    getData: OTHER_SERVER + 'api/estateTask/getPendingPageList',
    //子系统
    user: {
        queryUser: KQBG_SERVER + 'user/page',
        saveUser: KQBG_SERVER + 'user/save',
        delUser: KQBG_SERVER + 'user/del',
        getUser: KQBG_SERVER + 'user/get',
        listUser: KQBG_SERVER + 'user/list',
        judgeUser: KQBG_SERVER + 'user/judge',
        authorization: KQBG_SERVER + 'user/authorization'
    },
    holiday: {
        queryQj: KQBG_SERVER + 'askforLeave/page',
        delQj: KQBG_SERVER + 'askforLeave/del',
        saveQj: KQBG_SERVER + 'askforLeave/save',
        getQj: KQBG_SERVER + 'askforLeave/get',
        exportQj: KQBG_SERVER + 'askforLeave/export',
        getDaysQj: KQBG_SERVER + 'askforLeave/getDays',
        queryOvertime: KQBG_SERVER + 'overtime/page',
        delOvertime: KQBG_SERVER + 'overtime/del',
        saveOvertime: KQBG_SERVER + 'overtime/save',
        getOvertime: KQBG_SERVER + 'overtime/get',
        exportOvertime: KQBG_SERVER + 'overtime/export',
        getDaysOvertime: KQBG_SERVER + 'overtime/getDays',
        queryTx: KQBG_SERVER + 'askForLeaveVacation/page',
        delTx: KQBG_SERVER + 'askForLeaveVacation/del',
        saveTx: KQBG_SERVER + 'askForLeaveVacation/save',
        getTx: KQBG_SERVER + 'askForLeaveVacation/get',
        exportTx: KQBG_SERVER + 'askForLeaveVacation/export',
        txStaticQuery: KQBG_SERVER + 'askForLeaveVacation/statisticsPage'
    },
    department: {
        queryDepartment: KQBG_SERVER + 'department/page',
        saveDepartment: KQBG_SERVER + 'department/save',
        delDepartment: KQBG_SERVER + 'department/del',
        listDepartment: KQBG_SERVER + 'department/list',
        judgeDepartment: KQBG_SERVER + 'department/judge'
    },
    signIn: {
        querySignIn: KQBG_SERVER + 'signIn/page',
        getAllUser: KQBG_SERVER + 'user/list',
        signInSave: KQBG_SERVER + 'signIn/save',
        signInMultiSave: KQBG_SERVER + 'signIn/batchSave',
        signInDel: KQBG_SERVER + 'signIn/del',
        signInGet: KQBG_SERVER + 'signIn/get',
        signExport: KQBG_SERVER + 'signIn/export',
        conditionalQuery: KQBG_SERVER + 'signIn/findUser'
    },
    correctRule: {
        queryCorrectRule: KQBG_SERVER + 'signInCorrectRule/page',
        correctRuleSave: KQBG_SERVER + 'signInCorrectRule/save',
        correctRuleDel: KQBG_SERVER + 'signInCorrectRule/del',
        correctRuleGet: KQBG_SERVER + 'signInCorrectRule/get'
    },
    file: {
        fileUpload: KQBG_SERVER + 'fileInfo/upload',
        fileList: KQBG_SERVER + 'fileInfo/list'
    },
    signStatic: {
        querySignStatic: KQBG_SERVER + 'signInDays/page',
        signStaticExport: KQBG_SERVER + 'signInDays/export',
        getSignStatic: KQBG_SERVER + 'signInDays/get'

    },
    statistics: {
        signInExcp: KQBG_SERVER + 'statistics/selectExceptionByDate',
        leaveType: KQBG_SERVER + 'statistics/selectTypeByDate',
        attendanceSummaryQuery: KQBG_SERVER + 'AttendanceSummary/page',
        attendanceSummaryGet: KQBG_SERVER + 'AttendanceSummary/get',
        attendanceSummaryDel: KQBG_SERVER + 'AttendanceSummary/del',
        attendanceSummaryAllFlush: KQBG_SERVER + 'AttendanceSummary/allFlush',
        attendanceSummaryExport: KQBG_SERVER + 'AttendanceSummary/export',
        singleUserGet: KQBG_SERVER + 'statistics/userDaysStatistics'
    }
};
