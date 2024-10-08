from setuptools import setup, find_packages

setup(
    name='atonixcorp',
    version='0.1.0',
    packages=find_packages(),
    install_requires=[
        "Django>=3.2",
        "djangorestframework>=3.12",
        "djongo>=1.3.6",
        "pymongo>=3.11.0",
        "gunicorn>=20.1.0",
        "python-dotenv>=0.19.0",
        "pandas>=1.3.0",
        "numpy>=1.21.0",
        "scikit-learn>=0.24.2",
        "dask[complete]>=2021.6.0",
        "celery>=5.1.2",
        "redis>=3.5.3",
        "matplotlib>=3.4.2",
        "seaborn>=0.11.1",
        "pyspark>=3.5.1",
        "tensorflow>=2.16.0",
        "torch==1.12.1",
        "Qiskit==0.34.0",
        "bokeh==3.5.1",
        "scipy==1.7.1",
        "cython==0.29.24",
        "requests==2.26.0",
        "flask==2.0.1"
    ],
    entry_points={
        'console_scripts': [
            '',
        ],
    },
)