const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcrypt')

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true
		},
		email: {
			type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
		cartProducts: [
			{
				type: Schema.Types.ObjectId,
				ref: 'products'
			}
		],
		cartProductById: {
			type: Schema.Types.Mixed,
			default: {}
		},
		inventoryProducts: [
			{
				type: Schema.Types.ObjectId,
				ref: 'products'
			}
		]
	},
	{ minimize: false }
)

userSchema.set('toObject', { virtuals: true })
userSchema.set('toJSON', { virtuals: true })

userSchema.pre('save', function(next) {
  const user = this
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) return next(err)
    user.password = hash
    next()
  })
})

userSchema.methods.verifyPassword = function(inputPassword, cb) {
  bcrypt.compare(inputPassword, this.password, function(err, isMatch) {
    if (err) return cb(err)
    cb(null, isMatch)
  })
}

module.exports = mongoose.model('users', userSchema)

userSchema.virtual('cartCount').get(function() {
	return Object.values(this.cartProductById).reduce((total, productCount) => {
		return (total += productCount)
	}, 0)
})

userSchema.virtual('cartTotal').get(function() {
	return this.cartProducts.reduce((total, product) => {
		const productCount = this.cartProductById[product._id.toString()]
		return (total += product.price * productCount)
	}, 0)
})
