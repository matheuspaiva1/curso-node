const mongoose = require('mongoose')

const connectToDatabase = async () => {
  await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@matheus0.w6q72.mongodb.net/?retryWrites=true&w=majority&appName=Matheus0`, function(error) {
      if (error) {
        return console.log('erro no banco: ', error);
      }
      return console.log("Conexão realizada com sucesso!")
    }
  )
}

module.exports = connectToDatabase;