from pinecone import Pinecone, ServerlessSpec

pc = Pinecone(api_key="********-****-****-****-************")

pc.create_index(
    name="quickstart",
    dimension=2, 
    metric="cosine", 
    spec=ServerlessSpec(
        cloud="aws",
        region="us-east-1"
    ) 
)