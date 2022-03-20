module.exports = {
    base: '/vue2-ui/',
    title: 'vue2-ui',
    description: 'Just playing around',
    themeConfig: {
        displayAllHeaders: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/install/get-started/' },
            { text: 'Github', link: 'https://github.com/jsliweijun/learn-vue-ui' }
        ],
        sidebar: [
            {
                title: '入门', // 必要的
                children: [
                    {
                        title: '介绍',
                        path: '/install/introduce'
                    },
                    {
                        title: '快速上手',
                        path: '/install/get-started'
                    }
                ]
            },
            {
                title: '组件',
                children: [
                    {
                        title: 'Button 按钮',
                        path: '/components/button'
                    }
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ]
    }
};
