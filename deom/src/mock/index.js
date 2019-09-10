import Mock from "mockjs"
Mock.mock("/list","get",{
    "list|10":[
        {
            "id|+1":1,
            "text":"@cparagraph(1)",
            "view":"@integer(200,1500)"
        }
    ]
})
