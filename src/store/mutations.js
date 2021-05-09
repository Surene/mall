const mutations = {
    addToCart(state,product){
        //查看是否添加到购物车
        // console.log(product)

        const existProduct = state.itemList.find(item => item.iid === product.iid)
        if (existProduct) {
            existProduct.count += 1
        }else{
            //加入购物车 预选中
            product.count = 1
            product.checked = true

            state.itemList.push(product)
        }
    },
    //购物车数量减一
    lessCount(state,item){
        // console.log(item.count);
        const product = state.itemList.find(cartItem => cartItem.iid === item.iid)
        if (product.count > 1) {
            product.count--    
        }
        

    },
    //购物车数量加一
    moreCount(state,item){
        const product = state.itemList.find(cartItem => cartItem.iid === item.iid)
        //可限制最大值也可以不限制
        product.count++
    },
    //全选和不权限逻辑
    selectAllClick(state){
        let length = 0

        for (let index = 0; index < state.itemList.length; index++) {
            const element = state.itemList[index]
            if (element.checked) {
                length++
            }
        }

        if (length === state.itemList.length) {
            for (let index = 0; index < state.itemList.length; index++) {
                const element = state.itemList[index]
                element.checked = false
            }
        }
        
        if (length >= 0 && length <  state.itemList.length) {
            for (let index = 0; index < state.itemList.length; index++) {
                const element = state.itemList[index]
                element.checked = true
            }
        }

        

    }
}

export default mutations