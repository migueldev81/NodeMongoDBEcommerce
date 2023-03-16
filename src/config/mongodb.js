import mongoose from 'mongoose'

export const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err) {
            console.log('DB is conect!')
        } else {
            console.log('Error')
        }
    })
}
