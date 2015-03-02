from math import sqrt
from itertools import product


def dodecahedron():

    phi = (1 + sqrt(5)) / 2

    bits = [0, 1 / phi, phi]

    skeleton = [
        [1, 1, 1],
        # bits,
        # bits[1:] + [bits[0]],
        # [bits[2]] + bits[:2]
    ]

    pm = product([1, -1], repeat=3)

    return {
        tuple([
            a * b
            for a, b in zip(skel_element, pm_element)
        ])
        for pm_element in pm
        for skel_element in skeleton
    }

if __name__ == '__main__':
    print(dodecahedron())
