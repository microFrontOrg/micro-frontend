<!--
 * @Description: RadioForm组件说明文档
 * @Author: 郭军伟
 * @Date: 2020-04-02 11:54:39
 * @lastEditTime: Do not edit
 -->
### 组件名称 

``` 
RadioForm
``` 

### 组件说明

> 基于antd二次封装的Radio输入组件，该组件支持antd支持的Form.Item和RadioGroup组件支持的属性

### 使用方法

``` 
import { RadioForm } from '@/components

<RadioForm 
  ...{props}
/>
```

### 参数说明

组件支持antd中Form.Item和RadioGroup组件支持的属性，此处参数说明仅列出额外新增的属性

| 参数 | 说明 | 类型 | 默认值 | 是否必需 |
| ----------| ------------- | ------------- | ------------- | ------------- |
| id  | 该字段的唯一标识，用于getFieldDecorator()的第一个参数，在当前表单对象中必需唯一  | string  | -  |  必需  |
| form | 全局表单对象，通过该对象可以进行表单值得校验，设置和获取等操作 | object | - | 必需 |
| decorator | 当前input表单输入框装饰器，用于getFieldDecorator()的第二个参数 | object | - | 非必需 |
| status | 当前表单的状态，目前支持edit/disabled | string | edit | 非必需 |
| value | 当前表单的值 | any | - | 非必需 |
| defaultValue | 当前表单的默认值 | any | - | 非必需 |
| options | Radio组件数据，用于渲染每一个Radio标签 | array | [] | 必需 |
| valueField | 渲染options中数据时，默认使用value来作为radio的实际值，如需修改，可以通过valueField字段指定 | string | value | 非必需 |
| labelField | 渲染options中数据时，默认使用label来作为radio的展示值，如需修改，可以通过labelField字段指定 | string | label | 非必需 |
