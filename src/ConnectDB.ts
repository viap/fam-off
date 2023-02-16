import { MongoClient } from "mongodb"
import * as assert from "assert"
import { DbConfig } from "./config/db"

// Create a new MongoClient
export const client = new MongoClient(DbConfig.url)

// Use connect method to connect to the Server
client.connect(function (error: any) {
  assert.equal(null, error)
  console.log("Connected successfully to server")

  const db = client.db(DbConfig.name)

  client.close()
})
