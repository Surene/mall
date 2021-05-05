const mutations = {
    addToCart(state,product){
        //查看是否添加到购物车
        console.log(product)

        const existProduct = state.itemList.find(item => item.iid === product.iid)
        if (existProduct) {
            existProduct.count += 1
        }else{
            //加入购物车 预选中
            product.count = 1
            product.checked = true

            state.itemList.push(product)
        }
    }
}

export default mutations