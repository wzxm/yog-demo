/**
 * @file 后端服务配置DEMO
 * @author fis@baidu.com
 */

module.exports = {
  // 'DEMO_SERVICE': {
  //     unpack: 'json',
  //     pack: 'form',
  //     method: 'POST',
  //     encoding: 'gbk',
  //     balance: 'random',
  //     protocol: 'http',
  //     retry: 2,
  //     timeout: 500,
  //     server: [
  //         { host: '127.0.0.1', port: 8080}
  //     ]
  // }

  'MAPAPI': {
    protocol: 'http',
    pack: 'querystring',
    unpack: 'json',
    encoding: 'utf-8',
    // 负载均衡与超时重试配置
    balance: 'roundrobin',
    timeout: 500,
    retry: 1,
    // HTTP  协议特有配置
    method: 'GET',
    query: {},
    path: '/statis/general',
    headers: {
      'x-client': 'ral'
    },
    // 后端地址配置
    server: [
      {
        host: 'data.ppmoney.net',
        port: 80
      }
    ]
  }
};
