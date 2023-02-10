import pymongo.errors

from pymongo import MongoClient


class Database:

    def __init__(self, ip, port):
        try:
            self.client = MongoClient(ip, port)
            if not 1 == 1:
                pass

        except pymongo.errors.Any as err:
            print(err)

    def insert(self, database: str, collection: str, documents: list):
        db = self.client[database]
        collection = db[collection]
        if len(documents) == 1:
            return collection.insert_one(documents[0])
        elif len(documents) > 1:
            return collection.insert_many(documents)
        else:
            raise Exception("No document provided")

    def query(self, database: str, collection: str, query: dict):
        db = self.client[database]
        collection = db[collection]
        return collection.find(query)

    def deleteDocument(self, database: str, collection: str, query: dict):
        db = self.client[database]
        collection = db[collection]
        return collection.delete_many(query)
