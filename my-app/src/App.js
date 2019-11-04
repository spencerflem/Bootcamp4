import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      updatedData: props.data
    };
    this.filterUpdate = this.filterUpdate.bind(this);
    this.selectedUpdate = this.selectedUpdate.bind(this);
    this.removeBuilding = this.removeBuilding.bind(this);
    this.addBuilding = this.addBuilding.bind(this);
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({ filterText: value });
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({ selectedBuilding: id });
  }

  removeBuilding(id) {
    this.setState({ updatedData: this.state.updatedData.filter(x => x.id !== id) });
  }

  addBuilding(code, name, latitude, longitude, address) {
    const newObj = {
      id: Math.max(...this.state.updatedData.map(x => x.id)) + 1,
      code: code,
      name: name
    };
    if (latitude !== "" && longitude !== "") {
      newObj.coordinates = { latitude: latitude, longitude: longitude };
    }
    if (address !== "") {
      newObj.address = address;
    }
    this.setState({
      updatedData:
        this.state.updatedData.concat([newObj]).sort(this.alphabeticalSort)
    });
  }

  alphabeticalSort(a, b) {
    var codeA = a.code.toUpperCase();
    var codeB = b.code.toUpperCase();
    if (codeA < codeB) {
      return -1;
    }
    if (codeA > codeB) {
      return 1;
    }

    return 0;
  }

  render() {

    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search filterUpdate={this.filterUpdate} />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>
                        <b>Code</b>
                      </th>
                      <th>
                        <b>Building</b>
                      </th>
                      <th>
                        <b>Remove</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <BuildingList
                      data={this.state.updatedData}
                      filterText={this.state.filterText}
                      selectedUpdate={this.selectedUpdate}
                      removeBuilding={this.removeBuilding}
                    />
                  </tbody>
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                building={this.state.updatedData.filter(x => x.id === this.state.selectedBuilding)[0]}
              />
              <div>
                ----------------------------------------------------------------
              </div>
              <AddBuilding addBuilding={this.addBuilding} />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
