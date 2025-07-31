export class Counter {
  private static instance: Counter
  private count = 0

  private constructor() {
    console.log('Singleton created')
  }

  static getInstance(): Counter {
    if (!Counter.instance) {
      Counter.instance = new Counter()
    }
    return Counter.instance
  }

  increment(): void {
    this.count++
  }

  getCount(): number {
    return this.count
  }
}