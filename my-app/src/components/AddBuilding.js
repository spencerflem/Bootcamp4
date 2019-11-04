import React from 'react';

class AddBuilding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: "",
            name: "",
            long: "",
            lat: "",
            addr: ""
        };
        this.handleChangeCode = this.handleChangeCode.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLat = this.handleChangeLat.bind(this);
        this.handleChangeLong = this.handleChangeLong.bind(this);
        this.handleChangeAddr = this.handleChangeAddr.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }

    handleChangeCode(event) {
        this.setState({ code: event.target.value });
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }

    handleChangeLong(event) {
        this.setState({ long: event.target.value });
    }

    handleChangeLat(event) {
        this.setState({ lat: event.target.value });
    }

    handleChangeAddr(event) {
        this.setState({ addr: event.target.value });
    }

    clearInputs() {
        this.setState({
            code: "",
            name: "",
            long: "",
            lat: "",
            addr: ""
        });
    }

    render() {
        return (
            <div>
                <p>Add New Building:</p>
                <p>
                    Code: <input type="text" value={this.state.code} onChange={this.handleChangeCode} />
                    Name: <input type="text" value={this.state.name} onChange={this.handleChangeName} />
                </p>
                <p>
                    Latitude: <input type="number" value={this.state.lat} onChange={this.handleChangeLat} />
                    Longitude: <input type="number" value={this.state.long} onChange={this.handleChangeLong} />
                </p>
                <p>
                    Address: <input type="text" value={this.state.addr} onChange={this.handleChangeAddr} />
                </p>
                <p>
                    <button onClick={() => { this.clearInputs(); this.props.addBuilding(this.state.code, this.state.name, this.state.long, this.state.lat, this.state.addr); }}>+</button>
                </p>
            </div>
        );
    }
}

export default AddBuilding;