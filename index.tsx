import * as React from "react"
import ReactDOM from "react-dom/client";

interface goodsItemsState {
    itemsList: any;
}

class GoodsItems extends React.Component<any, goodsItemsState> {
    state: { itemsList: number[]; };
    constructor(props: any) {
        super(props);
        this.state = {itemsList: [1, 2, 3]}
        console.log(this.state);
    }

    private generateNormal(isNormal: any) {
        if(isNormal) {
            return (<div className="items">
                <p>Football %49.99</p>
                </div>)
        }else {
            return ( <div className="errorItems">
                <p>Football %49.99</p>
                </div>)
        }
    }

    render() {
        return (
            <div>
                {this.generateNormal(false)}
        {this.generateNormal(true)}
        </div>
    )
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GoodsItems />
    </React.StrictMode>
);