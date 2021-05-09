import {request} from './request'

export function getDetail(iid) {
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export function getRecommend(){
    return request({
        url:'/recommend'
    })
}

//当某个组件需要的数据从多个对象中得到时 可以通过创建类来管理数据
export class detailItem{
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title
        this.price = itemInfo.price
        this.lowNowPrice = itemInfo.lowNowPrice
        this.discountBgColor = itemInfo.discountBgColor
        this.discountDesc = itemInfo.discountDesc
        this.columns = columns
        this.services = services
    }
}

export class detailComment{
    constructor(comments,user){
        this.content = comments.content
        this.created = comments.created
        this.style = comments.style
        this.images = comments.images? comments.images : ''
        this.avatar = user.avatar
        this.username = user.uname
    }
}

