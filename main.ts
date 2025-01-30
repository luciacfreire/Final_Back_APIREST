import {MongoClient} from "mongodb"

const MONGO_URL = Deno.env.get("MONGO_URL");
if(!MONGO_URL){
  throw new Error("You need a mongo url");
}

const mongoClient = new MongoClient(MONGO_URL);
await mongoClient.connect();

console.info("Connected to MongoDB");

const db = mongoClient.db("");

// collections
// const collection = db.collection<model>("");

const handler = async (req: Request) : Promise<Response> => {
  const method = req.method;
  const url = new URL(req.url);
  const path = url.pathname;

  if(method === "GET"){

  }else if(method === "POST"){

  }else if(method === "PUT"){

  }else if(method === "DELETE"){

  }

  return new Response("endpoint not found");

};


Deno.serve({port:3000}, handler);

