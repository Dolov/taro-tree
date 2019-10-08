# taro-tree
基于 taro 的 Tree 组件，可用于小程序、h5


## 🍭 API
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSource | 数据源 | array （必填） | [ ] |
| value | 选中值 | 多选情况下为数组 （必填） |  |
| onChange | 选中的回调 | function （必填） |  |
| multiple | 多选 | boolean | false |
| multiple | 多选 | boolean | false |
| loadData | 异步加载数据 | function，返回值需要为 promise 对象 |  |



#### dataSource

```js
  [{
    label: '水果',
    value: 'fruit',
    isLeaf: true,    // 是否有子节点
    disabled: true,   // 是否禁用
  }]
```


