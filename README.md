# 省市区数据

## 数据包

- @copofe/vant-area-data

  适用于 vant addressEdit 和 Area 组件，但不推荐

  建议使用 `@copofe/area-data` 配合 vant 的 cascader 组件来实现省市区选择，需要修改field-names(字段名)属性
  ```javascript
  const fieldNames = {
    text: 'label',
  };
  ```
- @copofe/antdv-area-data

  弃用，请使用@copofe/area-data

- @copofe/area-data

  新版数据包，数据来源[Administrative-divisions-of-China](https://github.com/modood/Administrative-divisions-of-China)
