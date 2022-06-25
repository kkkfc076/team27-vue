const sideData = {
  title: '侧边栏',
  categoryList: [
    {
      id: '001',
      icon: 'icon-shouye',
      title: '首页   --1级',
      children: [
        {
          id: '005',
          icon: 'icon-wuliu-',
          title: '物流   --2级',
          children: [
            {
              id: '007',
              icon: 'icon-wuliupeisong-',
              title: '物流配送   --3级',
              url: '/home/first/'
            },
            {
              id: '007',
              title: '物流运输   --3级',
              icon: 'icon-wuliupeisong-',
              url: '/home/first/'
            }
          ]
        },
        {
          id: '006',
          icon: 'icon-zhinenghuagongcheng',
          title: '智能化工程  --2级',
          url: '/home/first/'
        }
      ]
    },
    {
      id: '002',
      icon: 'icon-kehuzhongxin01',
      title: '客户中心   --1级',
      url: '/home/first/'
    },
    {
      id: '003',
      icon: 'icon-dingdanzhongxin',
      title: '订单中心   --1级',
      url: '/home/first/'
    },
    {
      id: '004',
      icon: 'icon-xitongguanli',
      title: '系统管理   --1级',
      url: '/home/first/'
    }
  ]
}

export default {
  sideData
}
