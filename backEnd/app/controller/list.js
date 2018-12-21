'use strict';

const Controller = require('egg').Controller;

class list extends Controller {
  async getListData() {
    const {ctx} = this;
    let result = await  ctx.service.list.getListData();
    ctx.body = result;
    ctx.status = 200;
  }
}
module.exports = list;
