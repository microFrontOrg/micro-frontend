/*
 * @Description: 微前端配置与相关函数
 * @Author: 郭军伟
 * @Date: 2020-05-12 09:28:31
 * @lastEditTime: Do not edit
 */
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';
import apps from './appConfig';

function register() {
  registerMicroApps(apps, {
    beforeLoad: app => { },
    beforeMount: app => { },
    afterMount: app => { },
    beforeUnmount: app => { },
    afterUnmount: app => { },
  });
}
export function microInit() {
  register();

  setDefaultMountApp(apps[0].activeRule);

  start();
}