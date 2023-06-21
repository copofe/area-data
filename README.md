# 省市区数据

**updated at: 2023-6-16**

数据来源：[Administrative-divisions-of-China](https://github.com/modood/Administrative-divisions-of-China)，同时添加了港澳台数据（非官方数据）

## 数据包

- @copofe/vant-area-data

  适用于 vant addressEdit 和 Area 组件，但不推荐

  建议使用 `@copofe/area-data` 配合 vant 的 cascader 组件来实现省市区选择，需要修改 field-names(字段名)属性

  ```js
  import areaData from '@copofe/area-data'

  <van-cascader
    :options="areaData"
    :field-names="{ text: 'label' }"
  />
  ```

- @copofe/antdv-area-data

  弃用，请使用@copofe/area-data

- @copofe/area-data

  推荐
