const getters = {
    getItemList(state){
        return state.itemList
    },
    getCount(state){
        return state.itemList.length
    },
    getTotalPrice(state,getters){
        // let totalPrice = 0
        // for (let index = 0; index < getters.getCount; index++) {
        //     const element = state.itemList[index];
        //     totalPrice += (element.price * element.count)
            
        // }
        // return totalPrice
        const cartList = state.itemList;
        return cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count * item.newPrice
        }, 0).toFixed(2)
    }
}

export default getters