module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-mongodb`,
      options: { dbName: `db_bodyweight`, collection: `users` },
    }, 
  ],
}