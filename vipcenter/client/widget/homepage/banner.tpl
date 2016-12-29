<div className="banner">
    <a href="javascript:;" className="howImprove" ref="tisheng">
        如何提升<span className="right-icon"></span>
    </a>
    <div className="headImg">
        <img src={{data.headerImgUrl}} />
        <div className={"icon" + (this.props.data.isOpen?" active":"")} ref="plus">惠Plus&gt;</div>
    </div>
    <p className="nickName">{{data.nickName}}</p>
    <p className="dueIn">近30天日均待收：{{data.waitingMoney}}元</p>
</div>