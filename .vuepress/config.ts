import {defineUserConfig} from "vuepress";
import type {DefaultThemeOptions} from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig(
    {
        title: "山河大学",
        description: "山河大学官方网站",
        theme: recoTheme(
            {
                primaryColor: '#3DE1AD',
                style: "@vuepress-reco/style-default",
                logo: "/logo.png",
                author: "墨虞",
                authorAvatar: "/myr.jpg",
                docsRepo: "https://github.com/ShanHeUniversityOfficial/ShanHeUniversityOfficial.github.io",
                docsBranch: "master",
                docsDir: ".",
                lastUpdatedText: "",
                // series 为原 sidebar
                series: {
                    // "/docs/theme-reco/": [
                    //     {
                    //         text: "module one",
                    //         children: ["home", "theme"],
                    //     },
                    //     {
                    //         text: "module two",
                    //         children: ["api", "plugin"],
                    //     },
                    // ],
                },
                navbar: [
                    {
                        text: "主页",
                        icon: "Home",
                        link: "/"
                    },
                    {
                        text: "类别",
                        icon: "CollapseCategories",
                        link: "/categories/reco/1/"
                    },
                    {
                        text: "标签",
                        icon: "Tag",
                        link: "/tags/tag1/1/"
                    },
                    {
                        text: "文档",
                        icon: "Document",
                        children: [
                            {
                                text: "sth",
                                link: "/"
                            },
                        ],
                    },
                    {
                        text: "知识库",
                        icon: "Book",
                        children: [
                            {
                                text: "数学",
                                link: "/"
                            },
                            {
                                text: "哲学",
                                link: "/"
                            },
                            {
                                text: "社会学",
                                link: "/"
                            },
                            {
                                text: "物理学",
                                link: "/"
                            },
                            {
                                text: "化学",
                                link: "/"
                            },
                            {
                                text: "生物学",
                                link: "/"
                            },
                            {
                                text: "地理学",
                                link: "/"
                            },
                            {
                                text: "政治学",
                                link: "/"
                            },
                            {
                                text: "史学",
                                link: "/"
                            },
                            {
                                text: "宇宙学",
                                link: "/"
                            },
                            {
                                text: "美学",
                                link: "/"
                            },
                            {
                                text: "文学",
                                link: "/"
                            },
                        ],
                    }
                ],
                bulletin: {
                    title: "山河公告",
                    body: [
                        {
                            type: "text",
                            content: `🎉🎉🎉 山河大学官网重整后再次上线啦！！！皆大欢喜！皆大欢喜`,
                            style: "font-size: 16px;",
                        },
                        {
                            type: "hr",
                        },
                        {
                            type: "title",
                            content: "官方Q群",
                        },
                        {
                            type: "text",
                            content: `
                    <ul>
                        <li>山河合唱1：873999134</li>
                        <li>山河合唱2：870267424</li>
                        <li>山河校委（主席团）：854624192</li>
                    </ul>`,
                            style: "font-size: 12px;",
                        },
                        {
                            type: "hr",
                        },
                        {
                            type: "title",
                            content: "社交链接",
                        },
                        {
                            type: "text",
                            content: `
                    <ul>
                        <li>
                            <a href="https://github.com/ShanHeUniversityOfficial">
                                GitHub
                            <a/>
                        </li>
                        <li>
                            <a href="https://v.kuaishou.com/kiwmeo">
                                快手
                            <a/>
                        </li>
                        <li>
                            <a href="https://b23.tv/qf3V8Z2">
                                B站
                            <a/>
                        </li>
                    </ul>`,
                            style: "font-size: 12px;",
                        },
                        {
                            type: "hr",
                        },
                        {
                            type: "buttongroup",
                            children: [
                                {
                                    text: "赞",
                                    link: "",
                                    style: "font-size: 16px",
                                },
                            ],
                        },
                    ],
                },
                commentConfig: {
                    type: 'valine',
                    options: {
                        appId: 'S4fpkb89hT4My5qbJqq7H6xU-MdYXbMMI',
                        appKey: 'LBxPaeS8pGjjWFamfGVpMqFQ',
                        placeholder: '填写邮箱或许可以收到回复提醒哦！',
                        verify: true, // 验证码服务
                        notify: true,
                        recordIP: true,
                        hideComments: false // 隐藏评论
                    },
                },
            }
        ),
        // debug: true,
    }
);
