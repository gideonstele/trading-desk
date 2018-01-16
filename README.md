## QuickStart

### 交易平台

 >实施广告活动管理的简单应用。


##### 要求
1. 使用任何后端框架
2. twitter bootstrap 和 jquery 前端

##### 领域模型

1. 广告位 adSolt

这是在某个网站上的广告展示位置，用来展示相关的广告属性：名称，价格

2. 广告竞拍 Campagin

广告将显示在网站的广告位里。
属性：名称，开始日期，结束日期，价格，图片网址，点击网址。

3. 报告收集 Report

一段时期的广告系列报告。
属性：日期（不含时间），展示次数，点击次数，花费，广告系列ID，广告位ID

##### 特性

1. 创建/编辑广告位

2. 广告位列表

  -  字段：ID | 名称 | 价格 | 竞价数量 | 印象 | 点击次数 | 花费

3. 创建/编辑广告竞拍：

 - 竞拍价格应该 >= 广告位价格
 - 验证开始日期和结束日期

4. 竞拍列表

 - 表字段：id | 名称 | 开始日期 | 结束日期 | 价格 | 印象 | 点击 | 花费

5. 竞拍报告

 - 按期限过滤：过去7天，过去15天，过去30天，全部
 - 报告应该显示在竞拍页面上。
 - 字段：日期|印象|点击|花费。
 - 报告应该统计行数。


6. 最终API

**GET /api/data** 

```javascript

// Returns all campaigns and adslots
{
  "ad_slots": {
  "1": {
    "id": 1,
    "name": "test name" 
    }
  }, 
  "campaigns": {
    "1": {
      "id": 1,
      "adslot_id": 1,
      "name": "campaign name", 
      "start_at": "0000-00-00 00:00:00", 
      "end_at": "0000-00-00 00:00:00", 
      "price": 0.0
    } 
  }
}

```

 **POST /api/reports**

```javascript
// Allows campaign reports.

[
  {
    "date": "0000-00-00",
    "campaign_id": 1, 
    "adslot_id": 1, 
    "impressions": 1000, 
    "clicks": 100,
    "payouts": 423.22
  } 
]

```

7. 简单的报告生成器

参数: date from, date to

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
