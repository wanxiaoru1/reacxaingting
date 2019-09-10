import Mock from "mockjs"

Mock.mock("/book", "get", {
    "state": 200,
    "list|5": [{
        "navtitle|+1": ["全部", "儿童故事", "启蒙课堂", "其他", "国学经典"],
        "id|+1": 1,
        "content|+1": [{

            "title": "@ctitle",
            "nei": "@cparagraph(1)",
            "view|1000-99999": 0
        }]
    }]
})
var data = [{
        "id": 1,
        "name": 'xxx',
        "price": 20,
        "pic": 'https://dummyimage.com/200x100'
    },
    {
        "id": 2,
        "name": 'xxx',
        "price": 20,
        "pic": 'https://dummyimage.com/200x100'
    },
    {
        "id": 3,
        "name": 'xxx',
        "price": 20,
        "pic": 'https://dummyimage.com/200x100'
    },
    {
        "id": 4,
        "name": 'xxx',
        "price": 20,
        "pic": 'https://dummyimage.com/200x100'
    },
    {
        "id": 5,
        "name": 'xxx',
        "price": 20,
        "pic": 'http://xxx.jpg'
    },
    {
        "id": 6,
        "name": 'xxx',
        "price": 20,
        "pic": 'http://xxx.jpg'
    },
    {
        "id": 7,
        "name": 'xxx',
        "price": 20,
        "pic": 'http://xxx.jpg'
    },
    {
        "id": 8,
        "name": 'xxx',
        "price": 20,
        "pic": 'http://xxx.jpg'
    },
    {
        "id": 9,
        "name": 'xxx',
        "price": 20,
        "pic": 'http://xxx.jpg'
    },
    {
        "id": 10,
        "name": 'xxx',
        "price": 20,
        "pic": 'http://xxx.jpg'
    },
    {
        "id": 11,
        "name": 'xxx',
        "price": 20,
        "pic": 'http://xxx.jpg'
    },
    {
        "id": 12,
        "name": 'xxx',
        "price": 20,
        "pic": 'http://xxx.jpg'
    },
    {
        "id": 13,
        "name": 'xxx',
        "price": 20,
        "pic": 'http://xxx.jpg'
    },
    {
        "id": 14,
        "name": 'xxx',
        "price": 20,
        "pic": 'http://xxx.jpg'
    }
]
Mock.mock("/goodList", "post", function (options) {
    var {
        page,
        pageSize
    } = JSON.parse(options.body)
    var arr = data.slice((page - 1) * pageSize, page * pageSize)
    return {
        "staus": 200,
        "state": 200,
        "page": page,
        "pageSize": pageSize,
        "list": arr,
        "total": data.length,
    }
})
var arr = [{
        "id": 1,
        "desc": 'xxx',
        "link": 'http://baidu.com',
        "pic": 'http://xxx.jpg'
    },
    {
        "id": 2,
        "desc": 'xxx',
        "link": 'http://baidu.com',
        "pic": 'http://xxx.jpg'
    },
    {
        "id": 3,
        "desc": 'xxx',
        "link": 'http://baidu.com',
        "pic": 'http://xxx.jpg'
    },
    {
        "id": 4,
        "desc": 'xxx',
        "link": 'http://baidu.com',
        "pic": 'http://xxx.jpg'
    },
    {
        "id": 5,
        "desc": 'xxx',
        "link": 'http://baidu.com',
        "pic": 'http://xxx.jpg'
    },
    {
        "id": 6,
        "desc": 'xxx',
        "link": 'http://baidu.com',
        "pic": 'http://xxx.jpg'
    },
    {
        "id": 7,
        "desc": 'xxx',
        "link": 'http://baidu.com',
        "pic": 'http://xxx.jpg'
    },
    {
        "id": 8,
        "desc": 'xxx',
        "link": 'http://baidu.com',
        "pic": 'http://xxx.jpg'
    },
    {
        "id": 9,
        "desc": 'xxx',
        "link": 'http://baidu.com',
        "pic": 'http://xxx.jpg'
    },
    {
        "id": 10,
        "desc": 'xxx',
        "link": 'http://baidu.com',
        "pic": 'http://xxx.jpg'
    },
]
Mock.mock("/lun","post",function(options))