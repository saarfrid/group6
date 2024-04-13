from pymongo import MongoClient


class MongoDBConnector:
    def __init__(self, connection_string, db_name):
        self.connection_string = connection_string
        self.db_name = db_name
        self.client = None
        self.db = None

    def connect(self):
        try:
            self.client = MongoClient(self.connection_string)
            self.db = self.client[self.db_name]
            print("Connected to MongoDB Atlas successfully!")
        except Exception as e:
            print("Failed to connect to MongoDB Atlas:", str(e))

    def insert_user(self, user_data):
        try:
            users_collection = self.db.Users  # Use 'Users' as the collection name
            users_collection.insert_one(user_data)
            print("User data inserted successfully!")
        except Exception as e:
            print("Failed to insert user data:", str(e))


# Connection string and database name
connection_string = "mongodb+srv://saar:Saar@cluster0.vr05xgj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
db_name = "Users"

# Connect to MongoDB Atlas
connector = MongoDBConnector(connection_string, db_name)
connector.connect()

# Insert sample user data
connector.insert_user(sample_user_data)
