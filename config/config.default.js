'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544789269525_319';

  // add your config here
  config.middleware = [];
  // 绑定模板渲染方式
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  // 新闻信息配置
  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };
  //中间件配置
  config.middleware = [
    'robot'
  ];
  
  //robot校验标准配置
  config.robot = {
    ua: [
      /Baiduspider/i,
    ]
  };
  return config;
};
