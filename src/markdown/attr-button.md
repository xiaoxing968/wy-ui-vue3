### Attribute

|    参数    | 说明 |  类型  |             可选值              | 默认值 |
|:--------:|:-------------:| :-----:|:----------------------------:|:-----:|
|   type   | 按钮类型 |    String |      text/default/link       | default
|  level   | 按钮等级 |    String |  normal/main/danger/warning  | --
|   size   | 按钮大小 |    String |      mini/small/normal       | normal
| disabled |是否为禁用状态|Boolean|              --              |false
| loading  | 是否为加载状态      |  Boolean |              --              | false


### Events
|事件名称| 说明 |  |  回调参数  | |
| :-------------: |:----:| :---------------------:| :---------------------:| :--:|
| click | 点击按钮，且按钮状态不为禁用时触发 |  | event: MouseEvent |
