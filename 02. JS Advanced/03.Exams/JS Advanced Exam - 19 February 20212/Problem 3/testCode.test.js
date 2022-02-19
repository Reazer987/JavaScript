const flowerShop = require('./flowerShop')
const {expect}= require('chai');

describe("Tests flowershop", ()=> {
    describe("calcPriceOfFlowers tests", ()=> {
        it("if flower is not a string should throw error", ()=> {
            expect(()=>flowerShop.calcPriceOfFlowers(1,23,20)).throw('Invalid input!')
            expect(()=>flowerShop.calcPriceOfFlowers([],23,20)).throw('Invalid input!')
            expect(()=>flowerShop.calcPriceOfFlowers({},23,20)).throw('Invalid input!')
        });
        it("if price is not a number should throw error", ()=> {
            expect(()=>flowerShop.calcPriceOfFlowers('pesho','sd',20)).throw('Invalid input!')
            expect(()=>flowerShop.calcPriceOfFlowers('pesho',{},20)).throw('Invalid input!')
            expect(()=>flowerShop.calcPriceOfFlowers('pesho',[],20)).throw('Invalid input!')
        });
        it("if quantity is not a number should throw error", ()=> {
            expect(()=>flowerShop.calcPriceOfFlowers('pesho',2,"dsa")).throw('Invalid input!')
            expect(()=>flowerShop.calcPriceOfFlowers('pesho',2,false)).throw('Invalid input!')
            expect(()=>flowerShop.calcPriceOfFlowers('pesho',2,{})).throw('Invalid input!')
        });

        it('should work when is correct',()=>{
            expect(flowerShop.calcPriceOfFlowers('pesho',2,2)).to.equal(`You need $4.00 to buy pesho!`)
        })
     });

     describe("checkFlowersAvailable tests",()=>{
        it('should work when is correct',()=>{
            expect(flowerShop.checkFlowersAvailable('pesho',['pesho','dinsko'])).to.equal(`The pesho are available!`)
        }) 
        it('should return sold',()=>{
            expect(flowerShop.checkFlowersAvailable('peshoas',['pesho','dinsko'])).to.equal(`The peshoas are sold! You need to purchase more!`)
        }) 
     })

     describe("flowersSell Tests",()=>{
         it('if the first is not array',()=>{
            expect(()=>flowerShop.sellFlowers("pes",1)).throw('Invalid input!')
            expect(()=>flowerShop.sellFlowers(12,1)).throw('Invalid input!')
            expect(()=>flowerShop.sellFlowers(true,1)).throw('Invalid input!')
            expect(()=>flowerShop.sellFlowers({},1)).throw('Invalid input!')
         })
         it('if the first is not a number',()=>{
            expect(()=>flowerShop.sellFlowers(['pesho','dinko'],"")).throw('Invalid input!')
            expect(()=>flowerShop.sellFlowers(['pesho','dinko'],{})).throw('Invalid input!')
            expect(()=>flowerShop.sellFlowers(['pesho','dinko'],false)).throw('Invalid input!')
         })
         it('if the first is less than 0',()=>{
            expect(()=>flowerShop.sellFlowers(['pesho','dinko'],-3)).throw('Invalid input!')
         })
         it('if the first is more than arrayLenght or equal',()=>{
            expect(()=>flowerShop.sellFlowers(['pesho','dinko'],8)).throw('Invalid input!')
            expect(()=>flowerShop.sellFlowers(['pesho','dinko'],2)).throw('Invalid input!')
         })
         it('should work',()=>{
            expect(flowerShop.sellFlowers(['pesho','dinko'],1)).to.deep.equal('pesho')
         })
         it('should work',()=>{
            expect(flowerShop.sellFlowers(['pesho','dinko'],0)).to.deep.equal('dinko')
         })
     })

});