const getters = {
    //购物车列表
    getItemList(state){
        return state.itemList
    },
    //总数量
    getCount(state){
        // return state.itemList.length  
        let lens = 0
        for (let index = 0; index < state.itemList.length; index++) {
            const element = state.itemList[index]
            if (element.checked) {
                lens = lens + element.count
            }   
        }
        return lens
    },
    //总价格
    getTotalPrice(state){
        //简单计算
        // let totalPrice = 0
        // for (let index = 0; index < getters.getCount; index++) {
        //     const element = state.itemList[index];
        //     totalPrice += (element.price * element.count)
            
        // }
        // return totalPrice.toFixed(2)

        const cartList = state.itemList;
        return cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count * item.price
        }, 0).toFixed(2)
    },
    //全选
    isSelectAll(state){
        let length = 0

        for (let index = 0; index < state.itemList.length; index++) {
            const element = state.itemList[index]
            if (element.checked) {
                length++
            }
        }

        if (state.itemList.length > 0 && length === state.itemList.length) {
            return true
        }
        
        if (length >= 0 && length <  state.itemList.length) {
            return false
        }

    }

}

export default getters