<!--
 * @Description: SwitchForm组件
 * @Author: 郭军伟
 * @Date: 2020-04-02 16:03:41
 * @lastEditTime: Do not edit
 -->
### 组件名称 

``` 
SwitchForm
``` 

### 组件说明

> 基于antd的Switch组件二次封装的组件，该组件支持antd的Form.Item和Switch组件支持的所有属性

### 使用方法

``` 
import { SwitchForm } from '@/components

<SwitchForm
  ...{props}
/>
```

### 参数说明

组件支持antd中Form.Item和Switch组件支持的属性，此处参数说明仅列出额外新增的属性

| 参数 | 说明 | 类型 | 默认值 | 是否必需 |
| ----------| ------------- | ------------- | ------------- | ------------- |
| id  | 该字段的唯一标识，用于getFieldDecorator()的第一个参数，在当前表单对象中必需唯一  | string  | -  |  必需  |
| form | 全局表单对象，通过该对象可以进行表单值得校验，设置和获取等操作 | object | - | 必需 |
| decorator | 当前input表单输入框装饰器，用于getFieldDecorator()的第二个参数 | object | - | 非必需 |
| status | 当前表单的状态，目前支持edit/disabled | string | edit | 非必需 |
| value | 当前表单的值 | any | - | 非必需 |
| defaultValue | 当前表单的默认值 | any | - | 非必需 |