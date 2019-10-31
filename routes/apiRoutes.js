const express = require('express')
const router = express.Router()

const Users = require('../controller/usersController')
const Store = require('../controller/storeController')
const Cart = require('../controller/cartController')
const Inventory = require('../controller/inventoryController')

router.get('/users/test', Users.test)
router.post('/users', Users.createUser)
router.get('/users/:userId', Users.fetchUser)
router.put('/users/:userId', Users.updateUser)
router.delete('/users/:userId', Users.deleteUser)

router.get('/store/test', Store.test)
router.get('/store/products', Store.fetchAllProducts)
router.get('/store/products/:productId', Store.fetchProduct)
router.post('/store/users/:userId/products/:productId', Store.addToCart)

router.get('/cart/test', Cart.test)
router.get('/cart/users/:userId', Cart.fetchCart)
router.put(
	'/cart/users/:userId/products/:productId/increment',
	Cart.incrementQuantity
)
router.put(
	'/cart/users/:userId/products/:productId/decrement',
	Cart.decrementQuantity
)
router.delete('/cart/users/:userId/products/:productId', Cart.removeFromCart)

router.get('/inventory/test', Inventory.test)
router.get('/inventory/users/:userId', Inventory.fetchInventory)
router.post('/inventory/users/:userId/products', Inventory.createProduct)
router.put('/inventory/products/:productId', Inventory.updateProduct)
router.delete('/inventory/products/:productId', Inventory.deleteProduct)

module.exports = router
