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

    def insert(self, database, collection, documents: list):
        returnID = self.client.database.collection.insertMany(documents)
