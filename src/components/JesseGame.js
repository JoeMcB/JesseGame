import React from "react";

class JesseGame extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            portfolio: 1000,
            transactionType: 'Buy',
            stockPrice: Math.floor((Math.random() * 80) * 100) / 100,
            lastPurchasePrice: null
        }

        setInterval(this.tick.bind(this), 1500);
    }

    tick(){
        let newPrice = this.state.stockPrice + ( Math.floor(((0.5 - Math.random()) * 10) * 100) / 100)

        this.setState( { stockPrice: newPrice} )
    }

    executeTrade(){
        let portfolioChange = -1 * this.state.stockPrice;
        let nextTransaction = 'Sell'

        if(this.state.transactionType == 'Sell'){
            portfolioChange *= -1
            nextTransaction = 'Buy'
        }

        this.setState({
            portfolio: this.state.portfolio + portfolioChange,
            transactionType: nextTransaction,
            lastPurchasePrice: this.state.stockPrice
        })
    }

    render(){
        return (
            <div className="game">
                <div>
                    Portfolio Value: <span className="portfolio">{this.state.portfolio}</span>
                </div>
                <div>
                    Current Price: <span className="price">{this.state.stockPrice}</span>
                </div>
                <div>
                { this.state.lastPurchasePrice && "Last Purchase Price: " + this.state.lastPurchasePrice }
                </div>
                <button onClick={this.executeTrade.bind(this)}>{this.state.transactionType}</button>
            </div>
        )
    }
}

export default JesseGame;