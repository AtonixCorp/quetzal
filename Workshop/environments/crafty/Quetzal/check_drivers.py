try:
    from qiskit_nature.drivers.second_quantization import PySCFDriver
    from qiskit_nature.drivers import Molecule
    print("Qiskit Nature drivers are installed correctly.")
except ImportError as e:
    print(f"Error: {e}")
