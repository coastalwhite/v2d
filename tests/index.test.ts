import { assert } from 'chai'
import { vec2 } from '../src'

describe('Basis tests', function () {
    it('Should return the same values as it is initiated with', function () {
        assert.equal(vec2(3, 5).x, 3)
        assert.equal(vec2(3, 5).y, 5)
        assert.equal(vec2(-1, 5).x, -1)
        assert.equal(vec2(3, -2).y, -2)
        assert.equal(vec2(-20, -23).x, -20)
        assert.equal(vec2(-20, -23).y, -23)
    })

    it('Should be able to tell if vectors are equal or not', function () {
        assert.isTrue(vec2(3, 5).equals(vec2(3, 5)))
        assert.isTrue(vec2(-3, 5).equals(vec2(-3, 5)))
        assert.isTrue(vec2(3, -5).equals(vec2(3, -5)))
        assert.isTrue(vec2(-3, -5).equals(vec2(-3, -5)))

        assert.isFalse(vec2(3, 5).equals(vec2(2, 5)))
        assert.isFalse(vec2(3, 5).equals(vec2(3, 2)))
        assert.isFalse(vec2(3, 5).equals(vec2(3, -5)))
        assert.isFalse(vec2(-3, -5).equals(vec2(3, 5)))
    })
})

describe('Arithmetic tests', function () {
    it('Should add', function () {
        assert.isTrue(vec2(3, 5).add(vec2(1, 3)).equals(vec2(4, 8)))
        assert.isTrue(vec2(3, 5).add(vec2(-1, -3)).equals(vec2(2, 2)))
        assert.isTrue(vec2(1, 1).add(vec2(3, 4)).equals(vec2(4, 5)))
        assert.isTrue(vec2(-3, -5).add(vec2(1, 3)).equals(vec2(-2, -2)))
        assert.isTrue(vec2(3345, 5231).add(vec2(1, 3)).equals(vec2(3346, 5234)))
    })

    it('Should subtract', function () {
        assert.isTrue(vec2(3, 5).sub(vec2(1, 3)).equals(vec2(2, 2)))
        assert.isTrue(vec2(3, 5).sub(vec2(-1, -3)).equals(vec2(4, 8)))
        assert.isTrue(vec2(1, 1).sub(vec2(3, 4)).equals(vec2(-2, -3)))
        assert.isTrue(vec2(-3, -5).sub(vec2(1, 3)).equals(vec2(-4, -8)))
        assert.isTrue(vec2(3345, 5231).sub(vec2(1, 3)).equals(vec2(3344, 5228)))
    })

    it('Should scale', function () {
        assert.isTrue(vec2(3, 5).sca(1).equals(vec2(3, 5)))
        assert.isTrue(vec2(3, 5).sca(2).equals(vec2(6, 10)))
        assert.isTrue(vec2(1, 1).sca(4).equals(vec2(4, 4)))
        assert.isTrue(vec2(-3, -5).sca(-3).equals(vec2(9, 15)))
        assert.isTrue(vec2(1111, 3333).sca(3).equals(vec2(3333, 9999)))
    })

    it('Should dot', function () {
        assert.equal(vec2(3, 5).dot(vec2(5, -3)), 0)
        assert.equal(vec2(3, 5).dot(vec2(5, 3)), 30)
        assert.equal(vec2(1, 2).dot(vec2(1, 2)), 5)
        assert.equal(vec2(2, 1).dot(vec2(1, -2)), 0)
    })

    it('Should abs', function () {
        assert.isTrue(vec2(3, 5).abs().equals(vec2(3, 5)))
        assert.isTrue(vec2(-3, 5).abs().equals(vec2(3, 5)))
        assert.isTrue(vec2(3, -5).abs().equals(vec2(3, 5)))
        assert.isTrue(vec2(-3, -5).abs().equals(vec2(3, 5)))
    })
})

describe('Vector functions', function () {
    it('Should fetch length', function () {
        assert.equal(vec2(3, 4).length(), 5)
        assert.equal(vec2(1, 2).length(), Math.sqrt(5))
        assert.equal(vec2(5, -12).length(), 13)
        assert.equal(vec2(-5, 12).length(), 13)
        assert.equal(vec2(-5, -12).length(), 13)
    })

    it('Should invert the vector', function () {
        assert.isTrue(vec2(3, 5).invert().equals(vec2(5, 3)))
        assert.isTrue(vec2(1, 2).invert().equals(vec2(2, 1)))
        assert.isTrue(vec2(-3, 5).invert().equals(vec2(5, -3)))
        assert.isTrue(vec2(3, -5).invert().equals(vec2(-5, 3)))
    })

    it('Should round', function () {
        assert.isTrue(vec2(3, 5).round(2).equals(vec2(4, 6)))
        assert.isTrue(vec2(3, 5).round(3).equals(vec2(3, 6)))
        assert.isTrue(vec2(3, 5).round(5).equals(vec2(5, 5)))
        assert.isTrue(vec2(3, 5).round(10).equals(vec2(0, 10)))
    })

    it('Should get middle', function () {
        assert.isTrue(vec2(3, 5).middle(vec2(5, 3)).equals(vec2(4, 4)))
        assert.isTrue(vec2(1, 5).middle(vec2(5, 1)).equals(vec2(3, 3)))
        assert.isTrue(vec2(3, 5).middle(vec2(3, 7)).equals(vec2(3, 6)))
        assert.isTrue(vec2(1, 5).middle(vec2(2, 5)).equals(vec2(1.5, 5)))
    })

    it('Should get angle', function () {
        assert.equal(vec2(1, 2).angle(vec2(-2, 1)), Math.PI / 2)
        assert.equal(vec2(1, 2).angle(vec2(1, 2)), 0)
    })

    it('Should times', function () {
        assert.isTrue(vec2(3, 5).times(vec2(1, 3)).equals(vec2(3, 15)))
        assert.isTrue(vec2(3, 5).times(vec2(-1, -3)).equals(vec2(-3, -15)))
        assert.isTrue(vec2(1, 1).times(vec2(3, 4)).equals(vec2(3, 4)))
        assert.isTrue(vec2(-3, -5).times(vec2(1, 3)).equals(vec2(-3, -15)))
        assert.isTrue(
            vec2(3345, 5231).times(vec2(1, 2)).equals(vec2(3345, 10462)),
        )
    })

    it('Should scale', function () {
        assert.isTrue(
            vec2(3, 5)
                .apply((a) => a)
                .equals(vec2(3, 5)),
        )
        assert.isTrue(
            vec2(3, 5)
                .apply((a) => a * 2)
                .equals(vec2(6, 10)),
        )
        assert.isTrue(
            vec2(1, 1)
                .apply((a) => a * 4)
                .equals(vec2(4, 4)),
        )
        assert.isTrue(
            vec2(-3, -5)
                .apply((a) => -a * 3)
                .equals(vec2(9, 15)),
        )
        assert.isTrue(
            vec2(1111, 3333)
                .apply((a) => a * 3)
                .equals(vec2(3333, 9999)),
        )
    })

    it('Should get tangent', function () {
        assert.equal(vec2(1, 2).dydx(), 2)
        assert.equal(vec2(2, 6).dydx(), 3)
        assert.equal(vec2(2, 1).dydx(), 0.5)
        assert.equal(vec2(2, 10).dydx(), 5)
        assert.equal(vec2(8, 2).dydx(), 0.25)
        assert.equal(vec2(-2, 10).dydx(), -5)
        assert.equal(vec2(8, -2).dydx(), -0.25)
        assert.equal(vec2(0, 1).dydx(), Infinity)
    })

    it('Should get x sign', function () {
        assert.equal(vec2(1, 2).xSign(), 1)
        assert.equal(vec2(0, -1).xSign(), 0)
        assert.equal(vec2(-1, -123214).xSign(), -1)

        assert.equal(vec2(102, 23123).xSign(), 1)
        assert.equal(vec2(-1213123, 0).xSign(), -1)
    })

    it('Should get y sign', function () {
        assert.equal(vec2(1, 2).ySign(), 1)
        assert.equal(vec2(0, -1).ySign(), -1)
        assert.equal(vec2(-1, -123214).ySign(), -1)

        assert.equal(vec2(102, 23123).ySign(), 1)
        assert.equal(vec2(-1213123, 0).ySign(), 0)
    })
})
