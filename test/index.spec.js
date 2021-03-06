/* eslint-env mocha */
'use strict'

const expect = require('chai').expect
const multihashing = require('../src')

describe('multihashing', () => {
  it('sha1', () => {
    const buf = new Buffer('beep boop')

    expect(
      multihashing(buf, 'sha1')
    ).to.be.eql(
      new Buffer('11147c8357577f51d4f0a8d393aa1aaafb28863d9421', 'hex')
    )
  })

  it('sha2-256', () => {
    const buf = new Buffer('beep boop')

    expect(
      multihashing(buf, 'sha2-256')
    ).to.be.eql(
      new Buffer('122090ea688e275d580567325032492b597bc77221c62493e76330b85ddda191ef7c', 'hex')
    )
  })

  it('sha2-512', () => {
    const buf = new Buffer('beep boop')

    expect(
      multihashing(buf, 'sha2-512')
    ).to.be.eql(
      new Buffer('134014f301f31be243f34c5668937883771fa381002f1aaa5f31b3f78e500b66ff2f4f8ea5e3c9f5a61bd073e2452c480484b02e030fb239315a2577f7ae156af177', 'hex')
    )
  })

  it('cuts the length', () => {
    const buf = new Buffer('beep boop')

    expect(
      multihashing(buf, 'sha2-256', 10)
    ).to.be.eql(
      new Buffer('120a90ea688e275d58056732', 'hex')
    )
  })

  it('throws on non implemented func', () => {
    expect(
      () => multihashing(new Buffer('beep boop'), 'blake2b')
    ).to.throw(
      /not yet supported/
    )
  })
})
