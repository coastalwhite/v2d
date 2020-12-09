/**
 * Shorthand way of creating a Vector2D
 * @param x The x value
 * @param y The y value
 */
export function vec2(x: number, y: number): Vector2D {
	return new Vector2D(x, y)
}

/**
 * A two dimensional vector
 *
 * ```typescript
 * import vec2 from 'v2d'
 *
 * let v = vec2(2,3);
 *
 * v.add(vec2(2,3)); // Will equal Vector2D(4,6)!
 * v.sub(vec2(-1,-2)); // Will equal Vector2D(3,5)!
 * ```
 */
export class Vector2D {
	private readonly _x
	private readonly _y

	constructor(x: number, y: number) {
		this._x = x
		this._y = y
	}

	/**
	 * Gets the x value
	 */
	public get x(): number {
		return this._x
	}

	/**
	 * Gets the y value
	 */
	public get y(): number {
		return this._y
	}

	/**
	 * Checks whether a vector is equal to this vector
	 * ```typescript
	 * import vec2 from 'v2d'
	 *
	 * let v = vec2(2,3);
	 *
	 * v.equals(vec2(2,3)); // Will equal true!
	 * v.equals(vec2(1,2)); // Will equal false!
	 * ```
	 */
	public equals(v: Vector2D): boolean {
		return this.x === v.x && this.y === v.y
	}

	/**
	 * Returns a vector is the vector *v* added from current vector\
	 * Vector2D(x,y).add(Vector2D(p,q)) maps to Vector2D(x+p,y+q)
	 *
	 * # Note
	 * Does not mutate *this* vector
	 *
	 * ```typescript
	 * import vec2 from 'v2d'
	 *
	 * let v = vec2(2,3);
	 *
	 * v.add(vec2(2,3)); // Will equal Vector2D(4,6)!
	 * v.add(vec2(-1,-2)); // Will equal Vector2D(1,1)!
	 * ```
	 */
	public add(v: Vector2D): Vector2D {
		return vec2(this.x + v.x, this.y + v.y)
	}

	/**
	 * Returns a vector is the vector *v* subtracted from current vector\
	 * Vector2D(x,y).sub(Vector2D(p,q)) maps to Vector2D(x-p,y-q)
	 *
	 * # Note
	 * Does not mutate *this* vector
	 *
	 * ```typescript
	 * import vec2 from 'v2d'
	 *
	 * let v = vec2(2,3);
	 *
	 * v.sub(vec2(2,3)); // Will equal Vector2D(0,0)!
	 * v.sub(vec2(-1,-2)); // Will equal Vector2D(3,5)!
	 * ```
	 */
	public sub(v: Vector2D): Vector2D {
		return vec2(this.x - v.x, this.y - v.y)
	}

	/**
	 * Returns a scaled current vector with factor *s*\
	 * Vector2D(x,y).sca(s) maps to Vector2D(s*x,s*y)
	 *
	 * # Note
	 * Does not mutate *this* vector
	 *
	 * ```typescript
	 * import vec2 from 'v2d'
	 *
	 * let v = vec2(2,3);
	 *
	 * v.sca(2); // Will equal Vector2D(4,6)!
	 * v.sca(0.5); // Will equal Vector2D(1,1.5)!
	 * ```
	 */
	public sca(s: number): Vector2D {
		return vec2(this.x * s, this.y * s)
	}

	/**
	 * Calculates the point wise multiplication of with `v`
	 * Vector2D(x,y).times(Vector2D(p,q)) maps to Vector2D(x*p,y*q)
	 *
	 * # Note
	 * Does not mutate *this* vector
	 *
	 * ```typescript
	 * import vec2 from 'v2d'
	 *
	 * let v = vec2(3,4);
	 *
	 * v.times(vec2(3,4)); // Will equal Vector2D(9,16)!
	 * v.times(vec2(4,-3)); // Will equal Vector2D(12,-12)!
	 * ```
	 */
	public times(v: Vector2D): Vector2D {
		return vec2(this.x * v.x, this.y * v.y)
	}

	/**
	 * Applies function f to coordinates of *this*.
	 * Vector2D(x,y).apply(f) maps to Vector2D(f(x),f(y))
	 *
	 * # Note
	 * Does not mutate *this* vector
	 *
	 * ```typescript
	 * import vec2 from 'v2d'
	 *
	 * let v = vec2(3,4);
	 *
	 * v.apply(a => Math.cos(a)); // Will equal Vector2D(cos(3),cos(4))!
	 * v.apply(a => a % 3); // Will equal Vector2D(0,1)!
	 * ```
	 */
	public apply(f: (a: number) => number): Vector2D {
		return vec2(f(this.x), f(this.y))
	}

	/**
	 * Calculates the dot-product between current vector and vector *v* and returns the result\
	 * Vector2D(x,y).dot(Vector2D(p,q)) maps to x*p+y*q
	 *
	 * # Note
	 * Does not mutate *this* vector
	 *
	 * ```typescript
	 * import vec2 from 'v2d'
	 *
	 * let v = vec2(3,4);
	 *
	 * v.dot(vec2(3,4)); // Will equal 25!
	 * v.dot(vec2(4,-3)); // Will equal 0!
	 * ```
	 */
	public dot(v: Vector2D): number {
		return this.x * v.x + this.y * v.y
	}

	/**
	 * Returns a invert version of current vector\
	 * Vector2D(x,y).invert() maps to Vector2D(y,x)
	 *
	 * # Note
	 * Does not mutate *this* vector
	 *
	 * ```typescript
	 * import vec2 from 'v2d'
	 *
	 * let v = vec2(2,3);
	 *
	 * v.invert(); // Will equal Vector2D(3,2)!
	 * ```
	 */
	public invert(): Vector2D {
		return vec2(this.y, this.x)
	}

	/**
	 * Returns a absoluted version of current vector\
	 * Vector2D(x,y).abs() maps to Vector2D(|x|,|y|)
	 *
	 * # Note
	 * Does not mutate *this* vector
	 *
	 * ```typescript
	 * import vec2 from 'v2d'
	 *
	 * let v = vec2(-2,3);
	 *
	 * v.abs(); // Will equal Vector2D(2,3)!
	 * ```
	 */
	public abs(): Vector2D {
		return vec2(
			this.x < 0 ? -this.x : this.x,
			this.y < 0 ? -this.y : this.y,
		)
	}

	/**
	 * Returns a rounded version of current vector to the closest *sk*\
	 * Vector2D(x,y).round(sk) maps to Vector2D(round(x, sk),round(y, sk))
	 *
	 * # Note
	 * Does not mutate *this* vector
	 *
	 * ```typescript
	 * import vec2 from 'v2d'
	 *
	 * let v = vec2(3,6);
	 *
	 * v.round(10); // Will equal Vector2D(0,10)!
	 * ```
	 */
	public round(sk: number): Vector2D {
		const lowX = this.x - (this.x % sk),
			lowY = this.y - (this.y % sk),
			highX = lowX + sk,
			highY = lowY + sk

		const iX = this.x - lowX < highX - this.x ? lowX : highX,
			iY = this.y - lowY < highY - this.y ? lowY : highY

		return vec2(iX, iY)
	}

	/**
	 * Returns the length of the vector\
	 * Vector2D(x,y).length() maps to |Vector2D(x,y)|
	 *
	 * # Note
	 * Does not mutate *this* vector
	 *
	 * ```typescript
	 * import vec2 from 'v2d'
	 *
	 * let v = vec2(3,4);
	 *
	 * v.length(); // Will equal 5!
	 * ```
	 */
	public length(): number {
		return Math.sqrt(this.dot(this))
	}

	/**
	 * Returns the angle between vector *v* and current vector\
	 * Vector2D(x,y).angle(Vector2D(p,q)) maps to angle(Vector2D(x,y),Vector2D(p,q))
	 *
	 * # Note
	 * Does not mutate *this* vector
	 *
	 * ```typescript
	 * import vec2 from 'v2d'
	 *
	 * let v = vec2(3,4);
	 *
	 * v.angle(v); // Will equal 0!
	 * ```
	 */
	public angle(v: Vector2D): number {
		if (this.equals(v)) return 0

		return Math.acos(this.dot(v) / (v.length() * this.length()))
	}

	/**
	 * Returns the middle between vector *v* and current vector\
	 * Vector2D(x,y).middle(Vector2D(p,q)) maps to Vector2D(x,y).add(Vector2D(p,q)).sca(0.5)
	 *
	 * # Note
	 * Does not mutate *this* vector
	 *
	 * ```typescript
	 * import vec2 from 'v2d'
	 *
	 * let v = vec2(3,4);
	 *
	 * v.middle(vec2(5,8)); // Will equal Vector2D(4,6)!
	 * ```
	 */
	public middle(v: Vector2D): Vector2D {
		return this.add(v).sca(0.5)
	}

	/**
	 * Returns the tangent of current vector\
	 * Vector2D(x,y).dydx() maps to y/x
	 *
	 * # Note
	 * Does not mutate *this* vector
	 *
	 * ```typescript
	 * import vec2 from 'v2d'
	 *
	 * let v = vec2(2,4);
	 *
	 * v.dydx(); // Will equal 2!
	 * ```
	 */
	public dydx(): number {
		return this.y / this.x
	}

	/**
	 * Returns the sign of current vector's x
	 *
	 * # Note
	 * Does not mutate *this* vector
	 *
	 * ```typescript
	 * import vec2 from 'v2d'
	 *
	 * vec2(-13,0).xSign(); // Will equal -1!
	 * vec2(-5,2).xSign(); // Will equal -1!
	 * vec2(-5,0).xSign(); // Will equal -1!
	 * vec2(0,2).xSign(); // Will equal 0!
	 * vec2(3,0).xSign(); // Will equal 1!
	 * vec2(33,0).xSign(); // Will equal 1!
	 * ```
	 */
	public xSign(): number {
		return this.x < 0 ? -1 : this.x > 0 ? 1 : 0
	}

	/**
	 * Returns the sign of current vector's y
	 *
	 * # Note
	 * Does not mutate *this* vector
	 *
	 * ```typescript
	 * import vec2 from 'v2d'
	 *
	 * vec2(0,-13).ySign(); // Will equal -1!
	 * vec2(2,-5).ySign(); // Will equal -1!
	 * vec2(0,-5).ySign(); // Will equal -1!
	 * vec2(2,0).ySign(); // Will equal 0!
	 * vec2(0,3).ySign(); // Will equal 1!
	 * vec2(0,33).ySign(); // Will equal 1!
	 * ```
	 */
	public ySign(): number {
		return this.y < 0 ? -1 : this.y > 0 ? 1 : 0
	}

	/**
	 * Return a parameterized version of vector
	 *
	 * ``` typescript
	 * import vec2 from `v2d`
	 *
	 * function foreignFunc(x: number, y:numbers): void {
	 * 		...
	 * }
	 *
	 * const v = vec2(1, 2);
	 * foreignFunc(...v.params());
	 * ```
	 */
	public params(): [number, number] {
		return [this.x, this.y]
	}
}
