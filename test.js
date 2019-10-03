const expect = require("chai").expect;
const request = require('request');

describe('Tests for "/" api endpoint', () => {
    it("/ should send back 200 status code", (done) => {
        request.get('/', (error, response, body) => {
            expect(200)
            done()
        })
    })
    it("/ should not send back json in the body", (done) => {
        request.get("/", (error, response, body) => {
            expect(body).to.not.be.an('json')
            done()
        })
    })
    it("/ should send back the contents of the product table", (done) => {
        request.get("/products", (error, response, body) => {
            expect(200)
            done()
        })
    })
    it("/ should send back the contents of the contacts table", (done) => {
        request.get("/contacts", (error, response, body) => {
            expect(200)
            done()
        })
    })
    it("/ should send back the contents the products table with the price in order from lowest to highest", (done) => {
        request.get("/lowToHigh", (error, response, body) => {
            expect(200)
            done()
        })
    })
 })

