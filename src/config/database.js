require('dotenv').config()

module.exports = {
    dialect: 'postgres',
    HOST: process.env.DATABASE_HOST,
    USER: process.env.DATABASE_USERNAME,
    PASSWORD: process.env.DATABASE_PASSWORD,
    DB: process.env.DATABE_NAME,
    define: {
        timestamps: true,
        underscored: true
    }
}