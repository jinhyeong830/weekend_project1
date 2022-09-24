// @ts-check

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 'mpngpddga"http://localhost';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// 여기서의 client란 회원을 의미하는 게 아니고 mongoclient?
module.exports = client;
