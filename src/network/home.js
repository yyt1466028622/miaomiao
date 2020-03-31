import { request, request1, request2 } from "./request";

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
};

export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}

export function getMessage() {
    return request1({
        url: "data/heros_detailsWIthURL.json"
    })
}

export function getMessage1() {
    return request2({
        url: "/sug",
        params: {
            code: "utf-8",
            q: "简爱"
        }
    })
}

// 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
// 函数调用结束 -> 弹出函数栈(释放函数所有的变量)
// function test() {
//   const names = ['why', 'aaa']
// }
//
// test()
//
// test()