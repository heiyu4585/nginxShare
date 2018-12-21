
'use strict';

const Service = require('egg').Service;

class list extends Service {
    //存储异常日志
    async getListData() {
        const {ctx, app} = this;
        //默认为post请求，获取数据
        let params = ctx.request.body;
        //兼容get请求处理，获取数据
        if(Object.keys(params).length ===0) params = ctx.request.query;
        console.log(params)
        try {
            return {
                status: 200,
                params:params,
                listData:[
                    {
                        title:'第一篇文章',
                        id:'1',
                        des:'这是描述1',
                    },
                    {
                        title:'第二篇',
                        id:'2',
                        des:'这是描述2',
                    },
                    {
                        title:'第三篇',
                        id:'3',
                        des:'这是描述3',
                    },
                    {
                        title:'第四篇',
                        id:'4',
                        des:'这是描述4',
                    }
                ],
                msg: "ok",
            };
        } catch (err) {
            ctx.logger.error('异常日志存储失败：', err)
            console.log(err)
            return {
                status: -1,
                msg: "error"
            }
        }
    }
}

module.exports = list;