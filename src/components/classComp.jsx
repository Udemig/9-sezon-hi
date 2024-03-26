import { Component } from "react";
class Sayac extends Component {
  // kurucu method
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  //! bileşenin ekrana basılma anını izler
  componentDidMount() {
    console.log("componentDidMount çalıştı");
  }
  //! bileşenin güncellenme olayını izler
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log("componentDidUpdate çalıştı");
  }
  //! bileşenin ekrandan ayrılma olayını izler
  componentWillUnmount() {
    console.log("componentWillUnmount çalıştı");
  }
  // statei güncelleme
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  // arayüzü ekrana basar
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center gap-4 mt-5">
        <button className=" btn btn-warning">Azalt</button>
        {/* <span>{this.state.count}</span> */}
        <button className="btn btn-success" onClick={this.handleClick}>
          Arttır
        </button>
      </div>
    );
  }
}
export default Sayac;
