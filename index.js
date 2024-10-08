// require("./modules/path")

// require("./modules/fs")
//  require("./modules/http")

const dotenv = require("dotenv")

const connectToDatabase = require("./src/database/connect")

dotenv.config()

require("./modules/express")

connectToDatabase()