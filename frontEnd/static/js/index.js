/**
 * 功能描述：
 * 使用方法：
 * 注意事项：
 * 引入来源：
 * 作用：
 * Create by  on  2018/8/
 */


window.onload=function () {
  axios({
    method: 'post',
    url: "/api/list",
    data: []
  }).then((res) => {
    console.log(res);
    var result='';
    for(var i =0;i<res.data.listData.length;i++){
      result+=res.data.listData[i].id+':'+res.data.listData[i].title+res.data.listData[i].des+'<br>';
    }

    document.querySelector("#index").innerHTML=result;

  }).catch((err) => {
    console.log(err)
  });

}
